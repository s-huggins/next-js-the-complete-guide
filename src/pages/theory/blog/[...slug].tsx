import { useRouter } from "next/router";
import { FC } from "react";

const BlogPostsPage: FC = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
};

export default BlogPostsPage;
