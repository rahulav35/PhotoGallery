import React from "react";

import { InstaImg } from "./InstaImg";

const Insta = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24 box-border">
      <p className="text-2xl font-bold">Follow Me On Instagram</p>
      <p className="pb-4 box-border"> @captur</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4 box-border">
        <InstaImg socialImg={"/instaimg1.jpg"} />
        <InstaImg socialImg={"/instaimg2.jpg"} />
        <InstaImg socialImg={"/instaimg3.jpg"} />
        <InstaImg socialImg={"/instaimg4.jpg"} />
        <InstaImg socialImg={"/instaimg5.jpg"} />
        <InstaImg socialImg={"/instaimg6.jpg"} />
      </div>
    </div>
  );
};

export default Insta;
