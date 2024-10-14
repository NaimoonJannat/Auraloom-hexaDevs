"use client";

import Image from "next/image";
import Link from "next/link";
import logo1 from "./../../../public/auraloom-logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline, IoMdSearch } from "react-icons/io";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const signOutUser = () => {
    logout()
      .then(() => {})
      .catch(() => {});
  };

  const [isScrolled, setIsScrolled] = useState(false);

  // States used for searching
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const router = useRouter(); // To handle navigation



  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Function to handle search and navigate to the directory page
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (searchQuery.trim()) {
        router.push(`/podcast?search=${encodeURIComponent(searchQuery)}`); // Redirect to the directory page with the search query
    }
};

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const userLists = (
    <>
      <li>
        <Link href={"/dashboard"}>Dashboard</Link>
      </li>
      <li>
        <Link href={"/profile"}>Profile</Link>
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
    <div
      className={`z-20 sticky top-0  transition-colors duration-50 ${
        isScrolled ? "bg-[#3493f1d7]" : "bg-[#3493f1d7]"
      } ${isScrolled ? "text-white" : "text-white"}  hover:bg-[#3493f1d7]`}
    >
      <div className="navbar h-20 font-montserrat">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image
              src={logo1}
              className="w-40 -my-5"
              alt="Website logo"
              priority
            />
          </Link>
          {/* Search Icon */}
          <div className="relative">
           {/* Search Input with Icon */}
           <form onSubmit={handleSearchSubmit} className="relative">
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden hover:shadow transition-all duration-300 focus-within:w-64">
                {/* Search Icon */}
                <button type="submit" className="p-2">
                      <IoMdSearch className="text-xl" />
                  </button>
                  {/* Search Input */}
                  <input
                      type="text"
                      className="w-0 focus:w-52 px-2 transition-all duration-300 outline-none bg-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search Podcasts..."
                  />
              </div>
            </form>
          </div>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end flex gap-4">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex items-center gap-3 text-[14px] font-medium text-white">
              {/* {userLists.map(({ link, name }) => (
                <Link key={name} className="mx-3" rel="noopener noreferrer" href={link}>
                  {name}
                </Link>
              ))} */}
              <li className="flex">
                <Link rel="noopener noreferrer" href="/">
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link rel="noopener noreferrer" href="/podcast">
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
                  <li className="text-white text-[14px]">
                    <Link href="/log-in">Sign In</Link>
                  </li>
                  <Link
                    href="/sign-up"
                    className="btn bg-white font-bold text-[14px] rounded-full text-[#03045E]"
                  >
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
                <Link rel="noopener noreferrer" href="/podcast">
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
                    <Link rel="noopener noreferrer" href="/podcast">
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
                  <Link href="/sign-up" className="text-[#03045E]">
                    Sign Up
                  </Link>
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
