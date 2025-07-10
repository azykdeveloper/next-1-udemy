'use server'

import Course from "@/database/course.model";
import { connectToDatabase } from "@/lib/mongoose";
import { ICreateCourse } from "./types";

export const createCourse = async (data: ICreateCourse, clerkId: string) => {
  try {
    await connectToDatabase();
    // const user = await User.findOne({ clerkId });
    // await Course.create({ ...data, instructor: user._id });
    // revalidatePath("/en/instructor/my-courses");
  } catch (error) {
    throw new Error("Soething went wrong while creating course!");
  }
};