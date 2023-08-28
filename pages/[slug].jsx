import React from "react";
import { useRouter } from "next/router";

const SlugPage = () => {
  const router = useRouter();
  const slugP = router.query.slug;
  return (
    <div>
      <h1>Slug Page {slugP}</h1>
    </div>
  );
};

export default SlugPage;
