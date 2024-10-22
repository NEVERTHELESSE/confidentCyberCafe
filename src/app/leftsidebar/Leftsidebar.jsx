import Image from "next/image";
import { navigates } from "./navigate";
import Link from "next/link";

function Leftsidebar() {
  const selected = "home";

  return (
    <div className="w-[18%]">
      <div className="fixed h-full mt-2 p-2 ml-2 w-[18%]">
        <div className="flex">
          <Image src="/icons/menu.svg" width={50} height={50} alt="menu-icon" />
          <Link href="/" className='flex'>
            <Image
              src="/icons/logo.svg"
              width={50}
              height={50}
              alt="menu-icon"

            />
            <p className='text-3xl font-bold'>YouTube</p>
          </Link>

          <sub>NG</sub>
        </div>
        <div>
          {navigates.map((navigate) => (
            <div key={navigate.id} className="mt-4 border-b pb-2">
              <p className="text-3xl">{navigate.name}</p>
              <div>
                {navigate.components.map((component) => (
                  <div
                    key={component.id}
                    className={`flex mt-1 rounded-lg cursor-pointer hover:bg-[#dfdfdf7a]  p-2 ${
                      component.name == selected && "bg-[#7c7c7c5e]"
                    }`}
                  >
                    <p className="text-3xl">{component.icon}</p>

                    <p className="text-2xl capitalize ml-7">{component.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full mt-2 p-2 ml-2 w-full"></div>
    </div>
  );
}

export default Leftsidebar;
