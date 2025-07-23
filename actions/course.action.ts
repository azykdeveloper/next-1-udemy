'use server'

import { connectToDatabase } from "@/lib/mongoose"
import { GetCoursesParams, ICreateCourse } from "./types"
import Course from "@/database/course.model"
import { ICourse } from "@/app.types"
import { revalidatePath } from "next/cache"
import User from "@/database/user.model"
import Purchase from "@/database/purchase.model"

export const createCourse = async (data: ICreateCourse, clerkId: string) => {
  try {
    await connectToDatabase();
    const user = await User.findOne({ clerkId });
    await Course.create({...data, instructor: user._id});
    revalidatePath("/en/instructor/my-courses");
  } catch (error) {
    throw new Error("Something went wrong while creating course");
  }
};

export const getCourses = async (params: GetCoursesParams) => {
  try {
    await connectToDatabase();
    const { clerkId, page = 1, pageSize = 3 } = params;

    const skipAmount = (page - 1) * pageSize;

    const user = await User.findOne({ clerkId });
    const { _id } = user;
    const courses = await Course.find({ instructor: _id })
      .skip(skipAmount)
      .limit(pageSize)
      .populate({
        path: "instructor",
        select: "fullName picture clerkId",
        model: User,
      });

    const totalCourses = await Course.find({
      instructor: _id,
    }).countDocuments();
    const isNext = totalCourses > skipAmount + courses.length;

    const allCourses = await Course.find({ instructor: _id })
      .select("purchases currentPrice")
      .populate({
        path: "purchases",
        model: Purchase,
        select: "course",
        populate: {
          path: "course",
          model: Course,
          select: "currentPrice",
        },
      });

    const totalStudents = allCourses
      .map((c) => c.purchases.length)
      .reduce((a, b) => a + b, 0);

    const totalEearnings = allCourses
      .map((c) => c.purchases)
      .flat()
      .map((p) => p.course.currentPrice)
      .reduce((a, b) => a + b, 0);

    return { courses, isNext, totalCourses, totalEearnings, totalStudents };
  } catch (error) {
    throw new Error("Soething went wrong while getting course!");
  }
};


export const getCourseById = async (id: string) => {
  try {
    await connectToDatabase();
    const course = await Course.findById(id);
    return course as ICourse;
  } catch (error) {
    throw new Error("Soething went wrong while getting course!");
  }
};

export const updateCourse = async (
  id: string,
  updateData: Partial<ICourse>,
  path: string
) => {
  try {
    await connectToDatabase();
    await Course.findByIdAndUpdate(id, updateData);
    revalidatePath(path);
  } catch (error) {
    throw new Error("Something went wrong while updating course status!");
  }
};

export const deleteCourse = async (id: string, path: string) => {
  try {
    await connectToDatabase();
    await Course.findByIdAndDelete(id);
    revalidatePath(path);
  } catch (error) {
    throw new Error("Something went wrong while deleting course!");
  }
};