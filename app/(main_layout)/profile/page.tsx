"use client"
import React from 'react';
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useCurrentUser } from '@/redux/app/feature/api/auth/authSlice';
import { FcApproval } from "react-icons/fc";
import { useAppSelector } from '@/redux/app/hook';
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';
import { useGetMyPostQuery } from '@/redux/app/feature/api/post/postApi';
import { IPost } from '@/types/types';
import Sidebar from '@/component/Home/Sidebar';
import { useGetSingleUserQuery } from '@/redux/app/feature/api/user/useApi';
import { FaPhone } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import HtmlContent from '@/component/UI/html/htmlContent';
import Swal from 'sweetalert2';


const page = () => {
    const use = useAppSelector(useCurrentUser);
    const id = use?._id;
     const {data: myPostData} = useGetMyPostQuery(undefined);
    const {data: userData } = useGetSingleUserQuery(id);
    const myPost = myPostData?.data;
    const user = userData?.data;
console.log(user)

    // const handleDelete = (_id: string | undefined) => {
    //   Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!"
    //   }).then( async (result) => {
    //     if (result.isConfirmed) {
    //       const res = await deleteCar({ carId }).unwrap();
         
    //        if (res?.success) {
    //         Swal.fire({
    //           title: "Deleted!",
    //           text: "Your file has been deleted.",
    //           icon: "success"
    //         });
    //        } else {
    //         Swal.fire({
    //           icon: "error",
    //           title: "Oops...",
    //           text:  "An Error occured"
    //         });
    //        }
         
    //     }
    //   });
    // };


return (
    <div> 
<div className='lg:flex justify-between'>
    <Sidebar />
    <div>
  <div className="py-2 mt-8">
    <p
      className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
    >
      <img
        className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />
      <p className="mx-2 text-sm text-gray-600 dark:text-white">
        <span className="font-bold" >
          Sara Salah
        </span>{" "}
        replied on the{" "}
       
        artical . 2m
      </p>
    </p>
    <p
      
      className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
    >
      <img
        className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="avatar"
      />
      <p className="mx-2 text-sm text-gray-600 dark:text-white">
        <span className="font-bold" >
          Slick Net
        </span>{" "}
        start following you . 45m
      </p>
    </p>
    <p
      
      className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
    >
      <img
        className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
        src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />
      <p className="mx-2 text-sm text-gray-600 dark:text-white">
        <span className="font-bold" >
          Jane Doe
        </span>{" "}
        Like Your reply on{" "}
        
        artical . 1h
      </p>
    </p>
    <p
      
      className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <img
        className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
        alt="avatar"
      />
      <p className="mx-2 text-sm text-gray-600 dark:text-white">
        <span className="font-bold" >
          Abigail Bennett
        </span>{" "}
        start following you . 3h
      </p>
    </p>
  </div>
  <p
    
    className="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline"
  >
    See all notifications
  </p>
</div>
<div className="max-w-7xl flex mt-10 h-auto flex-wrap ">
  <div
    className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white dark:bg-gray-700 opacity-75 mx-6 lg:mx-0"
  >
    <div className="p-4 md:p-12 text-center lg:text-left">  
     <div className='flex gap-2'>
     <h1 className="text-3xl text-gray-800 dark:text-white font-bold pt-8 lg:pt-0">{user?.name}  </h1>
     {
         user?.premium && <span><FcApproval className='w-8 h-8'/></span>
     }
     </div>
      <div className='flex gap-2 mt-2'>
      <MdEmail className='w-6 h-6'/><p>{user?.email}</p>
      </div>
      <div className='flex gap-2 mt-2'>
            <FaPhone className='w-6 h-6'/>
            <p>{user?.phone}</p>
            </div>
      <div className='flex gap-2 mt-2'>
            <FaHome className='w-6 h-6'/>
            <p>{user?.address}</p>
            </div>
      <div className='mt-5'>
        <div className='flex gap-2'>
            <FaUserCircle className='w-6 h-6'/>
            <p>{user?.role}</p>
            </div>
      <p className='mt-3 text-center'>{user?.bio && <span>" { user?.bio } " </span>}</p>
      </div>
      <div className="pt-12 ">
        <Link href="/update-profile" className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
          Update Profile
        </Link>
      </div>
    </div>
  </div>
  <div className="w-full lg:w-2/5">
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
  <img
    className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
    src={user?.profilePicture || "https://i.ibb.co.com/544PSXp/blank-profile-picture-973460-960-720.webp"}
    
  />

</div>
  </div>
</div>
</div>

<div className='mt-8 md:mt-16 text-center text-3xl'>
{
    myPost ? <span>My Posts</span> : <span>No Post Available</span>
}
</div>
<div>
  {/* post section  */}
  <div className='my-8 md:mt-12 grid gap-5'>
    {
        myPost?.length && myPost?.map((post: IPost) => (
            <div key={post._id} className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img
        className="h-48 w-full object-cover md:h-full md:w-48"
        src={post?.images}
      />
    </div>
    <div className="p-8">
<div className='flex justify-between'>
<div className='mb-2'>
 <div>
 <Link
        href={`post/${post?._id}`}
        className="block mt-1 text-lg dark:text-white leading-tight font-medium text-black hover:underline"
      >
        {post?.title}
      </Link>
 </div>
   </div>
      <div className='flex gap-3'>
     <div><Link href={`edit-post/${post?._id}`}> <AiFillEdit className='w-6 h-6 text-amber-600'/></Link></div>
    {/* <div> <button onClick={() => handleDelete(post._id)}> <RiDeleteBack2Fill className='w-6 h-6 text-red-600'/></button></div> */}
      </div>
</div>
        <HtmlContent content={post?.description.slice(0, 200)}/>
    </div>
  </div>
</div>
        ))
    }
</div>

{/* follower section  */}


</div>
    
    </div>
);
};

export default page;