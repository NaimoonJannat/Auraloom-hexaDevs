/* eslint-disable no-unused-vars */
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
const Register = () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <div>
            <div className=' my-20 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url('https://i.postimg.cc/cH15hgM4/vinyl-3557749-1280.jpg')`,
                    }}
                >
                </div>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>

                    <p className='mt-3 lg:text-2xl font-medium text-[16px] text-center text-[#161D6F] '>
                        Welcome to Auraloom!
                    </p>
                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b border-[#161D6F] lg:w-1/4'></span>
                        <div className='text-xs text-center text-[#161D6F] uppercase  hover:underline'>
                            Sign Up  with email
                        </div>
                        <span className='w-1/5 border-b border-[#161D6F]  lg:w-1/4'></span>
                    </div>
                    <form className="card-body">
                        <div className="form-control">
                            <label htmlFor='name' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Your Image:
                            </label>
                            <input
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Birth Date</span>
                            </label>
                            <DatePicker
                                className='border focus:outline-[#98DED9] p-2 rounded-md w-full'
                                name='birthdate'
                                id='birthdate'
                                required
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor='password' className='text-sm mb-2'>
                                Password
                            </label>
                            <input
                                type='password'
                                name='password'
                                autoComplete='new-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900'
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#161D6F]  text-white">Register</button>
                        </div>
                    </form>
                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b border-[#161D6F]  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or ,Log In
                        </Link>
                        <span className='w-1/5 border-b border-[#161D6F]  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;