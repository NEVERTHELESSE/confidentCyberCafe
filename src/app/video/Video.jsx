"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Homeskeleton from "../loading/Homeskeleton";

function Video({ Videos }) {
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight + 30;
      const documentHeight = document.body.offsetHeight;

      if (scrollTop >= documentHeight) {
        setLoading(true);
        setTimeout(() => {
          setLimit(limit + 10);
          setLoading(false);
        }, 1000);
        console.log(limit);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);
  return (
    <div className="flex flex-wrap ">
      {Videos
        .slice(0, limit)
        .map((video) => {
          return (
            <div key={video.id} className="m-2 w-[400px]">
              <Link href={`/video/${video.id}`}>
                <Image
                  src={video.poster_url}
                  width={500}
                  height={300}
                  alt="img"
                  className=" rounded-2xl bg-gray-400"
                />
              </Link>
              <div className="flex mt-3">
               <Image
                  src={video.user.profile_pics}
                  width={50}
                  height={50}
                  alt={video.user.profile_pics}
                  className="rounded-full bg-gray-400 mr-3 min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px]"
                />
                <div>
                  <p className="font-bold">{video.title}</p>
                  <p>{video.user.full_name}</p>
                </div>
              </div>
            </div>
          );
        })}
      {loading && <Homeskeleton />}
    </div>
  );
}

export default Video;
