import React from 'react'
import Cardcomp from './cardcomp'
export default function main() {
    return (
        <div className='absolute top-64 md:absolute xl:top-80 md:top-56 md:left-[320px] text-white rounded-xl'>
            <div className='xl:grid xl:grid-cols-4 xl:gap-10 md:grid md:grid-cols-4 md:gap-10 px-12'>
                <div className='grid-cols-1 grid grid-rows-1 gap-10'>
                    <div className='flex  justify-between '>
                        <p className='mr-20 mt-2'>To-Do List (24)</p>
                        <button className='px-3 py-1 bg-[#6418C3] rounded-xl text-xl'>
                            <p className='mb-1'>+</p>
                        </button>
                    </div>
                    <Cardcomp />
                </div>
                <div className='grid-cols-1 grid grid-rows-1 gap-10'>
                    <div className='flex  justify-between '>
                    <p className='mr-20 mt-2'>In Progress (2)</p>
                        <button className='px-3 py-1 bg-[#211A75] text-[#6418C3] rounded-xl text-xl'>
                            <p className='mb-1'>+</p>
                        </button>
                    </div>
                    <Cardcomp />
                </div>
                <div className='grid-cols-1 grid grid-rows-1 gap-10'>
                    <div className='flex  justify-between '>
                    <p className='mr-20 mt-2'>Done (3)</p>
                        <button className='px-3 py-1 bg-[#211A75] text-[#6418C3] rounded-xl text-xl'>
                            <p className='mb-1'>+</p>
                        </button>
                    </div>
                    <Cardcomp />
                </div>
                <div className='grid-cols-1 grid grid-rows-1 gap-10'>
                    <div className='flex  justify-between '>
                    <p className='mr-20 mt-2'>Revised (0)</p>
                        <button className='px-3 py-1 bg-[#211A75] text-[#6418C3] rounded-xl text-xl'>
                            <p className='mb-1'>+</p>
                        </button>
                    </div>
                    <Cardcomp />
                </div>
            </div>
        </div>
    )
}
