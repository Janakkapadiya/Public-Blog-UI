"use client";

import React from "react";
import { TDirection } from "../types/index";
//@ts-ignore
import qs from "qs";
import { usePathname, useRouter } from "next/navigation";

interface IPropType {
  page: number;
  pageCount: number;
  redirectUrl?: string;
  searchParams: any;
}

const Pagination = ({ searchParams, page, pageCount }: IPropType) => {
  const path = usePathname();
  const router = useRouter();

  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };

  const handlePagination = (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return;
    }

    if (direction === -1 && isPrevDisabled()) {
      return;
    }

    const queryString = qs.stringify({
      ...searchParams,
      page: page + direction,
    });

    router.push(`${path}?${queryString}`);
  };

  return (
    <div className="flex justify-center text-center mt-12 mx-4 md:mx-auto mr-10 md:mr-auto">
      <button
        onClick={() => handlePagination(-1)}
        className={`${"bg-primary py-2 px-4 text-white w-24 rounded"} ${
          isPrevDisabled() === true ? "disabled" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePagination(1)}
        className={`${"bg-primary ml-7 py-2 px-4 text-white w-24 rounded"} ${
          isNextDisabled() === true ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
