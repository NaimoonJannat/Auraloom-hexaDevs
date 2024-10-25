import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';


const ReviewForm = ({ onSubmit }) => {
    const { user } = useContext(AuthContext);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });
    
   

    return (
        <div className="rounded-lg shadow-lg p-4 w-10/12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                    className="w-full border border-[#CAF0F8] rounded-lg p-3 text-xs md:text-lg"
                    placeholder="Name"
                    type="text"
                    id="name"
                    {...register('name', { required: true })}
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
    
            <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                    className="w-full border border-[#CAF0F8] rounded-lg p-3 text-xs md:text-lg"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    {...register('email', { required: true })}
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
    
            <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                    className="w-full border border-[#CAF0F8] rounded-lg p-3 text-xs md:text-lg"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    {...register('message', { required: true })}
                ></textarea>
                {errors.message && <span className="text-red-500">Message is required</span>}
            </div>
    
            <div className="mt-4 text-center">
                <button
                    type="submit"
                    className="text-xs md:text-base inline-block w-full border-2 text-[#0077B6] hover:text-white border-[#0077B6] rounded-lg bg-[#90E0EF] hover:bg-[#00B4D8] px-3 py-2 md:px-5 md:py-3 font-medium"
                >
                    Submit Review
                </button>
            </div>
        </form>
    </div>
    
    

    );
};

export default ReviewForm;
