import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import { Logo, LogoCut } from "../public/assets";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "#layanan" },
  { name: "Blog", href: "#blog" },
];

export default function Navbar() {
  return (
    <div className="absolute w-full z-50">
      <Popover className="bg-amber-100 ">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative flex justify-between items-center  md:justify-end md:space-x-10 md:font-medium sm:font-semibold font-abel">
            <div className="flex justify-start relative lg:w-0 lg:flex-1">
              <Link href="/">
                <a className="sm:h-20 w-32 md:w-40 md:py-3" aria-current="page">
                  <span className="sr-only">Workflow</span>
                  <Image src={Logo} className="aspect-auto md:w-[200px] sm:max-w-2xl sm:w-[20px]" alt="Infinita Conceling" />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center dark:text-amber-800 border-gray-500 text-primary hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a id={item.name} className={`md:w-auto text-primary font-extralight text-xl tracking-widest top-3 relative group`}>
                    {item.name}
                    <div className="absolute w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition duration-300"></div>
                  </a>
                </Link>
              ))}
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 mt-3">
              <a href="#" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-accent dark:border-0 rounded-full bg-primary shadow-sm text-base font-medium hover:text-primary  hover:bg-accent capitalize mt-3">
                kontak
              </a>
            </div>
          </div>
        </div>

        <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="w-32 sm:h-10">
                    <Image src={Logo} className="aspect-auto md:w-[50px] sm:max-w-2xl sm:w-[20px]" alt="Infinita Conceling" />
                  </div>
                  <div className="right-0">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="block font-viga px-3 py-2 rounded-md text-base text-center font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </a>
                  ))}
                </div>
                <a href="#" className="block w-full px-5 py-2 text-center font-medium bg-accent capitalize bg-gray-50 hover:bg-gray-100">
                  kontak
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="lg:inset-y-0 lg:right-0 top-0 mt-0 right-0 left-0">
        <svg id="visual" viewBox="0 0 900 40" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 24L21.5 26C43 28 86 32 128.8 32C171.7 32 214.3 28 257.2 24.3C300 20.7 343 17.3 385.8 15.5C428.7 13.7 471.3 13.3 514.2 15.2C557 17 600 21 642.8 25.7C685.7 30.3 728.3 35.7 771.2 37.7C814 39.7 857 38.3 878.5 37.7L900 37L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
            fill="#cccccc"
            opacity={"0.7"}
          ></path>
          <path
            d="M0 18L21.5 21C43 24 86 30 128.8 28.8C171.7 27.7 214.3 19.3 257.2 15.5C300 11.7 343 12.3 385.8 13C428.7 13.7 471.3 14.3 514.2 17.7C557 21 600 27 642.8 29.8C685.7 32.7 728.3 32.3 771.2 29.8C814 27.3 857 22.7 878.5 20.3L900 18L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
            fill="#CEDA6C"
          ></path>
          <path
            d="M0 9L21.5 11C43 13 86 17 128.8 18.7C171.7 20.3 214.3 19.7 257.2 19.2C300 18.7 343 18.3 385.8 16.2C428.7 14 471.3 10 514.2 10.7C557 11.3 600 16.7 642.8 17.8C685.7 19 728.3 16 771.2 15.2C814 14.3 857 15.7 878.5 16.3L900 17L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
            fill="#fef3c7"
          ></path>
        </svg>
      </div>
    </div>
  );
}
