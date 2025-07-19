"use client";

import { updateCourse } from "@/actions/course.action";
import { ICourse } from "@/app.types";
import FillLoading from "@/components/shared/FillLoading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useToggleEdit from "@/hooks/use-toggle-edit";
import { createClient } from "@supabase/supabase-js";
// import { storage } from "@/lib/firebase";
// import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { Edit2, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function PreviewImage(course: ICourse) {
  const { state, onToggle } = useToggleEdit();

  return (
    <Card>
      <CardContent className="relative p-6">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">Replace image</span>
          <div className="">
            <Button size={"icon"} variant={"ghost"} onClick={onToggle}>
              {state ? <X /> : <Edit2 className="size-5" />}
            </Button>
          </div>
        </div>
        <Separator className="my-3" />
        {state ? (
          <Forms course={course} onToggle={onToggle} />
        ) : (
          <div className="relative h-72 w-full">
            <Image
              src={course.previewImage}
              alt={course.title}
              fill
              className="rounded-sm object-cover"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default PreviewImage;

interface FormsProps {
  course: ICourse;
  onToggle: () => void;
}

function Forms({ course, onToggle }: FormsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  async function onUpload(e: ChangeEvent<HTMLInputElement>) {
      const files = e.target.files;
      if (!files || files.length === 0) return;
  
      const file = files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `course-images/${fileName}`;
  
      setIsLoading(true);
  
      const { error: uploadError } = await supabase.storage
        .from("udemy-pics") // bu sizning bucket nomingiz
        .upload(filePath, file);
  
      if (uploadError) {
        toast.error("❌ Rasm yuklanmadi: " + uploadError.message);
        setIsLoading(false);
        return;
      }
  
      const { data: urlData } = supabase.storage
        .from("udemy-pics")
        .getPublicUrl(filePath);
  
      if (!urlData?.publicUrl) {
        toast.error("❌ URL olinmadi");
        setIsLoading(false);
        return;
      }
  
      updateCourse(course._id, { previewImage: urlData.publicUrl }, pathname);
      toast.success("✅ Rasm muvaffaqiyatli yuklandi!");
      onToggle()
      setIsLoading(false);
    }

  return (
    <>
      {isLoading && <FillLoading />}
      <Input
        className="bg-secondary"
        type="file"
        disabled={isLoading}
        onChange={onUpload}
      />
    </>
  );
}
