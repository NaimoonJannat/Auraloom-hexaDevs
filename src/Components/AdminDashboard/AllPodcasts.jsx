'use client';
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from "sweetalert2";
const UserTable = () => {
    const { user, logout } = useContext(AuthContext);
    const [items, setItem] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`https://auraloom-backend.vercel.app/podcasts`)
            setItem(data)
        }
        getData()
    }, [])
    console.log(items)
    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://auraloom-backend.vercel.app/podcasts/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  setItem(items.filter((i) => i._id !== id));
                }
              });
          }
        });
      };

    return (

        <div className="overflow-x-auto">
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="px-2 sm:px-4 py-2">Title</th>
                        <th className="px-2 sm:px-4 py-2">Creator Name</th>
                        <th className="px-2 sm:px-4 py-2">Category</th>
                        <th className="px-2 sm:px-4 py-2">Likes</th>
                        <th className="px-2 sm:px-4 py-2">Comments</th>
                        <th className="px-2 sm:px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                {items.map((podcast) => (
                        <tr key={podcast._id} className="light:text-gray-800 dark:text-white">
                            <td className="px-2 sm:px-4 py-2">{podcast.title}</td>
                            <td className="px-2 sm:px-4 py-2">{podcast.creator}</td>
                            <td className="px-2 sm:px-4 py-2">{podcast.category}</td>
                            <td className="px-2 sm:px-4 py-2">{podcast.likes.length}</td>
                            <td className="px-2 sm:px-4 py-2">{podcast.comments.length}</td>
                            <td className="px-2 sm:px-4 py-2">
                                <button
                                    onClick={() => handleDelete(podcast._id)}
                                    className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable
