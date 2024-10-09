"use client";

import Image from "next/image";
import Link from "next/link";
import logo1 from "./../../../public/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const signOutUser = () => {
    logout()
      .then(() => { })
      .catch(() => { });
  };

  const [isScrolled, setIsScrolled] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    
  useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const userLists = (
    <>
      <li>
        <Link href={"/dashboard"}>Dashboard</Link>
      </li>
      <li>
        <Link href={"/Creator-Profile"}>Profile</Link>
      </li>
      <li>
        <Link href={"/Settings"}>Settings</Link>
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
    <div className={`z-20 sticky top-0  transition-colors duration-50 ${isScrolled ? 'bg-[#CAF0F8]' : 'bg-[#34d1f1]'} ${isScrolled ? 'text-[#03045E]' : 'text-white'}  hover:bg-[#34d1f1]`}>
      <div className="navbar  font-montserrat">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src={logo1} className="w-40 h-10" alt="Website logo" priority/>
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end flex gap-4">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex items-center gap-3 text-lg font-medium text-[#03045E]">
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
                  <IoMdNotificationsOutline className="text-2xl" />
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

                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"

         

                      >
                        {userLists}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li className="text-[#03045E]">
                    <Link href="/log-in">Sign In</Link>
                  </li>
                  <Link href="/sign-up" className="btn bg-white font-bold text-[#03045E]">
                    Sign Up
                  </Link>
                </>
              )}
            </ul>
          </div>

          <div className="dropdown dropdown-left text-[#03045E] bg-base-100">
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
              className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-3 p-2 shadow text-[#03045E]"
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
                  {/* <IoMdNotificationsOutline /> */}
                  Notifications
                </Link>
              </li>
              {user ? (
                <>
                  <div>
                    <div className="dropdown dropdown-end text-[#03045E]">
                    {userLists}
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
                      
                       
                      
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <li className="flex text-[#03045E]">
                    <Link rel="noopener noreferrer" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="flex text-[#03045E]">
                    <Link rel="noopener noreferrer" href="/directory">
                      Directory
                    </Link>
                  </li>
                  <li className="flex text-[#03045E]">
                    <Link rel="noopener noreferrer" href="/add-podcast">
                      Add Podcast
                    </Link>
                  </li>
                  <li className="flex text-[#03045E]">
                    <Link rel="noopener noreferrer" href="/history">
                      History
                    </Link>
                  </li>
                  <li className="flex text-[#03045E]">
                    <Link rel="noopener noreferrer" href="/notifications">
                      <IoMdNotificationsOutline />
                    </Link>
                  </li>
                  <li className="text-[#03045E]">
                    <Link href="/log-in">Sign In</Link>
                  </li>
                  <Link href="/sign-up" className="text-[#03045E]">Sign Up</Link>
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
