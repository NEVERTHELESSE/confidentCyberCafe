'use client'
import Link from "next/link";
import React from "react";
import { accounts } from "./accounts";
import { FaGreaterThan } from "react-icons/fa";

function Account() {
  const apperance = ['use device theme','Dark theme','Ligh theme']
  const theme = 'use device theme'

  function changetheme(){

document.body.classList.add('dark')

}

  return (
    <div className="absolute right-[3rem] w-[27rem] p-3 rounded-lg shadow h-[100vh] bg-primarycolor mt-[-2.5rem] ">
      <div className="flex items-center">
        <p className="text-2xl bg-red-500  w-[2.5rem] h-[2.5rem] flex justify-center items-center font-bold p-2 rounded-full">
          A
        </p>
        <div className="ml-3">
          <p className="font-bold">neverthelesse21@gmail.com</p>
          <Link href="/channel">Create a channel</Link>
        </div>
      </div>
      <hr className="my-3" />
      <div>
        {accounts.map((account) => (
          <div className="flex  my-4 items-center text-[1.5rem]" key={account.id}>
            {account.icon}
          <div className='flex w-full justify-between'>
            <p className="ml-4 capitalize">{account.name}</p>
          {account.more && <details><summary className='list-none'><FaGreaterThan /></summary>
             <div className='absolute right-[3rem] w-[27rem]  rounded-lg shadow top-[2rem] h-[20rem] bg-primarycolor mt-[-2.5rem] '>
          <p className='text-2xl p-2'>Appearance</p>
             <hr />
               <p className='text-[1rem] p-6'>Setting applies to this browser only</p>
                 {
                 apperance.map(r=>(
                   <div className='flex p-2 pl-6 capitalize' onClick={changetheme}>
                   {r == theme && <p>X</p>}
                   <p>{r}</p>
                   </div>
                 ))
               }
          </div>
          </details>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Account;
