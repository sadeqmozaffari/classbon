import React from "react";
import { CourseSummary } from "@/types/course-summary.interface";
import { BlogPostCard } from "./blog-post-card";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";

type BlogPostCardListProps = {
  posts: BlogPostSummary[];
};

export const BlogPostCardList: React.FC<BlogPostCardListProps> = async ({
  posts,
}) => {
  return (
    <div className="grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
      {posts?.map((post) => (
        <BlogPostCard key={`course-${post.slug}`} {...post} />
      ))}
    </div>
  );
};
