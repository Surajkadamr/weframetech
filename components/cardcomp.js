import React from 'react'

export default function cardcomp() {
    return (
        <div class="max-w-sm p-6 bg-[#211A75]  rounded-lg shadow ">
            <div className='flex justify-between'>
                <p className='text-yellow-500 text-xs'>Important</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16"> <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /> </svg>
            </div>
            <a href="#">
                <h5 class="my-3 text-sm tracking-tight text-white">Create sign up sheet for holiday student/parent conferences.</h5>
            </a>
            <div className='w-[100px] xl:w-[200px] rounded-full h-2.5 mt-5 bg-[#1E1C3A]'>
                <div className='bg-yellow-300 h-2.5 rounded-full' style={{ "width": "60%" }}></div>
            </div>
            <div className='flex justify-between'>
                <div class="flex my-5 -space-x-5">
                    <img class="w-5 md:w-10 h-10 bg-gray-300 rounded-full dark:border-gray-800" src="/" alt="" />
                    <img class="w-5 md:w-10 h-10 bg-gray-300 rounded-full dark:border-gray-800" src="/" alt="" />
                    <img class="w-5 md:w-10 h-10 bg-gray-300 rounded-full dark:border-gray-800" src="/" alt="" />
                    <img class="w-5 md:w-10 h-10 bg-gray-300 rounded-full dark:border-gray-800" src="/" alt="" />
                </div>
                <p className='text-xs mt-8 text-[#A5A5A5]'>Due in 4 days</p>
            </div>
        </div>
    )
}
