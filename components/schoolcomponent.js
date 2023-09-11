import React from 'react'

export default function schoolcomponent() {
    return (
        <div className='top-20 left-2 absolute xl:top-24 md:top-28 md:left-[320px] text-white bg-[#15132B] rounded-xl'>
            <div className='flex justify-between md:px-10 md:pt-10 pt-5 px-5'>
                <div className='flex xl:mr-60 '>
                    <img src="left.png" className='md:w-8 md:h-8 w-4 h-4 md:mx-5 mx-1' />
                    <div className='text-left font-bold md:text-xl text-[10px]'>
                        <p>School November Tasks</p>
                        <p className='text-[10px] md:text-xs font-thin text-[#A5A5A5] my-2'>Created by Instructor Day on November 31 ,2022</p>
                    </div>
                </div>
                <div className='flex xl:ml-64'>
                    <div className='text-right font-bold md:text-xl text-[10px]'>
                        <p>Centered Martial Arts</p>
                        <p className='md:text-xs text-[10px] font-thin text-[#A5A5A5] my-2'>Sunnyvale, Ca</p>
                    </div>
                    <img src="chart.png" className='md:w-14 md:h-14 w-4 h-4 md:mx-5 mx-1' />
                </div>
            </div>
            <div className='flex justify-between md:justify-normal md:px-24 md:pb-8 py-5 px-5'>
                <img src="/pe.png" className='w-32 md:mx-5' />
                <button type="button" class="px-4 py-1 mx-2 text-xs font-medium text-center inline-flex items-center text-white bg-[#6418C3] rounded-lg">
                    <svg class="w-3 h-3 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    Invite People
                </button>
                <button type="button" class="hidden md:block py-2 mx-2 px-5 text-sm font-medium text-white focus:outline-none bg-transparent rounded-lg border border-purple-700 hover:bg-gray-100 hover:text-blue-700">Private</button>
                <button type="button" class="hidden md:block py-2 mx-2 px-5 text-sm font-medium text-white focus:outline-none bg-[#7879F1] rounded-lg border border-purple-700 hover:bg-gray-100 hover:text-blue-700">Edit</button>
                <button type="button" class=" hidden md:px-4 py-1 mx-2 text-xs font-medium text-center md:inline-flex items-center text-white bg-transparent border border-purple-700 rounded-lg">
                    <svg class="w-3 h-3 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    45 Comments
                </button>
                <div className='xl:flex hidden'>
                    <p className='ml-20 mx-5 mt-2 text-sm'>Total Progress 60%</p>
                    <div className='w-[150px] rounded-full h-2.5 mt-3 bg-[#1E1C3A]'>
                        <div className='bg-[#6418C3] h-2.5 rounded-full' style={{ "width": "60%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
