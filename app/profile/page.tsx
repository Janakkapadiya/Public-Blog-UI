"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
//@ts-ignore
import Cookies from "js-cookie";
function Profile() {
  const [name, setName] = useState("unknown");
  useEffect(() => {
    const cookie: any = Cookies.get("username");
    setName(cookie);
  }, []);
  return (
    <section className="pt-16 bg-blueGray-50 ">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <Image
                    width={80}
                    height={80}
                    alt=""
                    src="/user_318-159711.avif"
                    className="p-2 rounded-full py-2 text-black bg-gray-400 flex justify-center items-center mr-1"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"></h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <text className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400">
                  Hello {name}
                </text>
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Welcome to my sweet corner of the internet! Here, I share my
                    thoughts, experiences, and moments of joy. Life is a
                    beautiful journey, and through this blog, I hope to spread
                    positivity, inspire others, and create a community of
                    like-minded individuals. Join me as we explore the wonders
                    of life, celebrate the little things that make us smile, and
                    embrace the sweetness in every moment. Together, let us
                    create a world filled with love, laughter, and endless
                    sweetness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
