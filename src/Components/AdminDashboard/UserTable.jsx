'use client';
/* eslint-disable react/prop-types */
import toast from 'react-hot-toast'
import Image from "next/image";
import { useContext, useState } from "react"
import UpdateUserModal from "../modal/UpdateUserModal"
import { useMutation } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
const UserTable = ({ item }) => {
    console.log(item)
    const [isOpen, setIsOPen] = useState(false)
    const { user: loggedInUser, logout } = useContext(AuthContext);
    const updateUserRole = async (role, email) => {
        try {
            const { data } = await axios.patch(`/users/update/${email}`, role, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            toast.success('User role updated successfully!');
            return data;
        } catch (error) {
            console.error('Error updating user role:', error);
            toast.error('Failed to update user role');
            throw error;
        }
    };
    const modalHandler = async selected => {
        if (loggedInUser.email === item.email) {
            toast.error('Action Not Allowed')
            return setIsOPen(false)
        }
        const userRole = {
            role: selected,
        }

        try {
            await mutateAsync(userRole)
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }

    }
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
                        <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOPen} modalHandler={modalHandler} item={item} />
                      </td>
        </tr>
    )
}



export default UserTable
