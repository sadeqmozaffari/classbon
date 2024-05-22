import React from "react";
import { CourseSummary } from "@/types/course-summary.interface";

import { CourseCard, CourseCardProps } from "./course-card";


type CourseCardListProps = {
  courses: CourseSummary[];
};

export const CourseCardList: React.FC<CourseCardListProps> = ({
  courses,
}) => {
  return (
    <div className="grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
      {courses.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};
