"use client";

import Image from "next/image";

const MainBanner = () => {
  return (
    <div className="relative aspect-[3/1] mb-12 mt-[72px] mx-auto overflow-hidden ">
      <Image
        src="/featured.png"
        alt="Home Banner"
        className="object-cover"
        width={1180}
        height={640}
        priority
      />
    </div>
  );
};

export default MainBanner;
