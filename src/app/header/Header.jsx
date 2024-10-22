import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import Account from "./Account";

function Header() {
  return (
    <div className="flex p-3 h-[4rem] justify-between items-center w-full mr-7">
      <div></div>
      <form action="" className="flex h-[3rem] relative ">
        <input
          type="search"
          placeholder="Search"
          className="border rounded-[3rem] px-4 py-2 text-2xl w-[40rem] relative"
        />
        <Image
          src="/icons/search.svg"
          width={40}
          height={40}
          alt="search"
          className="absolute right-[4rem]  bg-gray-300 rounded-tr-[3rem] rounded-br-[3rem] p-2 w-[3rem]"
        />
        <Image
          src="/icons/mic.svg"
          width={50}
          height={50}
          alt="search"
          className=" rounded-full  p-2  bg-gray-300 ml-8 "
        />
      </form>
      <div className="flex w-[10rem] justify-between">
        <Image src="/icons/add.svg" width={40} height={40} alt="add" />
        <Image src="/icons/bell.svg" width={40} height={40} alt="add" />
        <details className="relative">
          <summary className="list-none">
            <p className="text-2xl bg-red-500 text-white w-[2.5rem] h-[2.5rem] flex justify-center items-center font-bold p-2 rounded-full cursor-pointer">
              A
            </p>
          </summary>
          <Account />
        </details>
      </div>
    </div>
  );
}

export default Header;
