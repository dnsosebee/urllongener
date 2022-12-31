/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

export const HeadlessMenu = qwikify$(Menu);
export const HeadlessTransition = qwikify$(Transition);

//className="bg-white shadow"

export const HeadlessDisclosure = qwikify$(
  ({
    options,
    imgSrc: logoSrc,
  }: {
    options: { name: string; href: string; current: boolean }[];
    imgSrc: string;
  }) => {
    return (
      <Disclosure as="nav" className="paradise shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center p-4">
                    <img className="block h-12 w-auto" src={logoSrc} alt="Url Longener" />
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {options.map(({ name, href, current }) => (
                      <a
                        href={href}
                        className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                          current
                            ? "border-indigo-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                        }'}`}
                        key={name}
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pt-2 pb-4">
                {options.map(({ name, href, current }) => (
                  <Disclosure.Button
                    as="a"
                    href={href}
                    className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                      current
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                    }`}
                    key={name}
                  >
                    {name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  },
  { eagerness: "hover" }
);
