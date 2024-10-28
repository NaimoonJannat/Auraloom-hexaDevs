'use client';
/* eslint-disable react/prop-types */
import toast, { Toaster } from 'react-hot-toast'
import Image from "next/image";
import { useContext, useState } from "react"
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
const UserTable = ({ item ,refetch}) => {
    console.log(item)
    const [isOpen, setIsOPen] = useState(false)
    const { user, logout } = useContext(AuthContext);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`https://auraloom-backend.vercel.app/users`)
      setItem(data)
    }
    getData()
  }, [])
 
   
    return (
        <tr className="">
             <td className="px-2 sm:px-4 py-2">
                        <Image src={item.photoURL} alt={item.photo} width={50} height={50} className="rounded-full object-cover" />
                      </td>
                      <td className="px-2 sm:px-4 py-2">{item.name}</td>
                      <td className="px-2 sm:px-4 py-2">{item.email}</td>
                      <td className="px-2 sm:px-4 py-2">{item.role}</td>
                      <td className=" px-4 py-2 text-center">
                        <button onClick={() => setIsOPen(true)} className="bg-[#0077b6] text-white px-3 py-1 rounded-lg relative cursor-pointer inline-block">
                          <span
                            aria-hidden='true'
                            className='absolute inset-0   rounded-full'
                          ></span>
                          <span className='relative text-white'>Change Role</span>
                        </button>
                        {/* Update User Modal */}

                        <Toaster />
                      </td>
        </tr>
    )
}

export default UserTable
