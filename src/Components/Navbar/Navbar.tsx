import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

//Assets
import Logo from "Assets/Images/Logo/logo_insidemta.png";

import { usePlayer } from "Hooks/usePlayer";

import Button from "Components/Button/Button";

const Navbar = () => {
  const { player } = usePlayer();

  const authView = () => {
    return player && player.personalToken ? (
      <div className="w-40">
        <a
          className="transform rounded-md bg-inside-red-light px-8 py-3 leading-5 text-white transition-colors duration-200 focus:bg-inside-red-dark
    focus:outline-none"
        >
          Moje konto
        </a>
      </div>
    ) : (
      <div className="w-40">
        <a
          className="transform rounded-md bg-inside-red-light px-8 py-3 leading-5 text-white transition-colors duration-200 focus:bg-inside-red-dark
    focus:outline-none"
        >
          Zaloguj się
        </a>
      </div>
    );
  };

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Popover className="relative bg-inside-bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-inside-bg-light py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">InsideMTA</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://forum.inside-mta.pl/uploads/monthly_2022_08/logo_sideways_email.png.71542aea3fe9be49f6a10d4efdfdbd97.png"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="focus:ring-inside-bg-light-500 inline-flex items-center justify-center rounded-md bg-inside-bg-light p-2 text-gray-400 hover:bg-inside-bg-light hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a
              href="#"
              className="text-base font-medium text-inside-text-light hover:text-white"
            >
              Strona główna
            </a>
            <a
              href="#"
              className="text-base font-medium text-inside-text-light hover:text-white"
            >
              Forum
            </a>
            <a
              href="#"
              className="text-base font-medium text-inside-text-light hover:text-white"
            >
              Giełda
            </a>
            <a
              href="#"
              className="text-base font-medium text-inside-text-light hover:text-white"
            >
              Sklep
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-white" : "text-inside-text-light",
                      "focus:ring-white-500 group inline-flex items-center rounded-md text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                    )}
                  >
                    <span>Wyszukaj</span>
                    <ChevronDownIcon
                      className={classNames(
                        open
                          ? "text-inside-text-light"
                          : "text-inside-text-light",
                        "ml-2 h-5 w-5 group-hover:text-inside-text-light"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-inside-bg-dark px-5 py-6 sm:gap-8 sm:p-8">
                          <a
                            href="/search/player"
                            className="-m-3 flex items-start rounded-lg p-3 text-inside-text-light hover:bg-inside-bg-light hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 flex-shrink-0 text-inside-red-light"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium">
                                Wyszukaj gracza
                              </p>
                              <p className="mt-1 text-sm">
                                Szukasz kogoś konkretnego?
                              </p>
                            </div>
                          </a>
                          <a
                            href="/search/vehicle"
                            className="-m-3 flex items-start rounded-lg p-3 text-inside-text-light hover:bg-inside-bg-light hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 flex-shrink-0 text-inside-red-light"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium">
                                Wyszukaj pojazd
                              </p>
                              <p className="mt-1 text-sm">
                                Szukasz kogoś konkretnego?
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {authView()}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-700 rounded-lg bg-inside-bg-light shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://forum.inside-mta.pl/uploads/monthly_2022_08/logo_sideways_email.png.71542aea3fe9be49f6a10d4efdfdbd97.png"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="focus:ring-inside-bg-light-500 inline-flex items-center justify-center rounded-md bg-inside-bg-light p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-inside-text-light hover:text-white"
                >
                  Strona główna
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-inside-text-light hover:text-white"
                >
                  Forum
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-inside-text-light hover:text-white"
                >
                  Giełda
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-inside-text-light hover:text-white"
                >
                  Sklep
                </a>
              </div>
              <div>{authView()}</div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
