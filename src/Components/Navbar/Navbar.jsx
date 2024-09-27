"use client";

import Image from "next/image";
import Link from "next/link";
import logo1 from "./../../../public/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const signOutUser = () => {
    logout()
      .then(() => {})
      .catch(() => {});
  };

  const userLists = (
    <>
      <li>
        <Link href={"/dashboard"}>Dashboard</Link>
      </li>
      <li>
        <Link href={"/Creator-Profile"}>Profile</Link>
      </li>
      <li>
        <Link href={"/settings"}>Settings</Link>
      </li>
      <li>
        <Link href={"/pro-mode"}>Be a Pro</Link>
      </li>
      <li>
        <button onClick={signOutUser}>Log Out</button>
      </li>
    </>
  );

  return (
    <div className="text-[#03045E]">
      <div className="navbar bg-[#CAF0F8] font-montserrat">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src={logo1} className="w-40 h-10" alt="Website logo" />
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end flex gap-4">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex items-center gap-3 text-lg font-medium">
              <li className="flex">
                <Link rel="noopener noreferrer" href="/">
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link rel="noopener noreferrer" href="/directory">
                  Directory
                </Link>
              </li>
              <li className="flex">
                <Link rel="noopener noreferrer" href="/add-podcast">
                  Add Podcast
                </Link>
              </li>
              <li className="flex">
                <Link rel="noopener noreferrer" href="/history">
                  History
                </Link>
              </li>
              <li className="flex">
                <Link rel="noopener noreferrer" href="/notifications">
                  <IoMdNotificationsOutline className="text-2xl"/>
                </Link>
              </li>
              {user ? (
                <>
                  <div>
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <Image
                            src={user?.photoURL}
                            width={40}
                            height={40} // Specify image dimensions
                            className="w-full"
                            alt="User avatar"
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                      >
                        {userLists}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
<<<<<<< HEAD
                  {/* <li className="flex">
                    <Link rel="noopener noreferrer" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="flex">
                    <Link rel="noopener noreferrer" href="/directory">
                      Directory
                    </Link>
                  </li>
                  <li className="flex">
                    <Link rel="noopener noreferrer" href="/add-podcast">
                      Add Podcast
                    </Link>
                  </li>
                  <li className="flex">
                    <Link rel="noopener noreferrer" href="/history">
                      History
                    </Link>
                  </li>
                  <li className="flex">
                    <Link rel="noopener noreferrer" href="/notifications">
                    <IoMdNotificationsOutline />
                    </Link>
                  </li> */}
=======
>>>>>>> c6869e040966dc5077ba1257015b923a3f962a91
                  <li>
                    <Link href="/log-in">Sign In</Link>
                  </li>
                  <Link href="/sign-up" className="btn bg-white font-bold">
                    Sign Up
                  </Link>
                </>
              )}
            </ul>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="flex">
                <Link rel="noopener noreferrer" href="/">
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link rel="noopener noreferrer" href="/directory">
                  Directory
                </Link>
              </li>
              <li className="flex">
                <Link rel="noopener noreferrer" href="/add-podcast">
                  Add Podcast
                </Link>
              </li>
              <li className="flex">
                <Link rel="noopener noreferrer" href="/history">
                  History
                </Link>
              </li>
              <li className="flex">
                <Link rel="noopener noreferrer" href="/notifications">
                  <IoMdNotificationsOutline />
                </Link>
              </li>
              {user ? (
                <>
                  <div>
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <Image
                            src={user?.photoURL}
                            width={40}
                            height={40} // Specify image dimensions
                            className="w-full"
                            alt="User avatar"
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                      >
                        {userLists}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li className="flex">
                    <Link rel="noopener noreferrer" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="flex">
                    <Link rel="noopener noreferrer" href="/directory">
                      Directory
                    </Link>
                  </li>
                  <li className="flex">
                    <Link rel="noopener noreferrer" href="/add-podcast">
                      Add Podcast
                    </Link>
                  </li>
                  <li className="flex">
                    <Link rel="noopener noreferrer" href="/history">
                      History
                    </Link>
                  </li>
                  <li className="flex">
                    <Link rel="noopener noreferrer" href="/notifications">
                      <IoMdNotificationsOutline />
                    </Link>
                  </li>
                  <li>
                    <Link href="/log-in">Sign In</Link>
                  </li>
                  <Link href="/sign-up">Sign Up</Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
