import React from 'react'
import Kanbancomponent from './kanbancomponent'

export default function aside() {
    return (
        <aside id="logo-sidebar" class="fixed top-0 left-0 w-[280px] h-screen pt-5 transition-transform -translate-x-full bg-[#15132B] sm:translate-x-0 shadow-2xl" aria-label="Sidebar">
            <a href="https://weframetech.com" class="flex ml-8 justify-around">
                <span class="self-center text-xs text-white font-normal sm:text-lg whitespace-nowrap">weframetech</span>
                <img src="/menu.png" className='w-7 h-6 mr-5 mt-1' />
            </a>

            <p className='px-8 pt-5 text-[13px] font-semibold text-white '>MAIN MENU</p>
            <div class="h-full px-8 py-4 overflow-y-auto bg-[#15132B] dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#110f22]">
                            <img src="/dashboard.png" className='w-5' />
                            <span class="ml-3 text-[13px] text-[#464366]">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#110f22]">
                            <img src="/email.png" className='w-5' />
                            <span class="ml-3 text-[13px] text-[#464366]">Email</span>
                            <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-20 text-sm font-medium text-white bg-blue-400 rounded-full">17</span>
                            <img src="/down.png" className='w-5 ml-4' />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#110f22]">
                            <img src="/chat.png" className='w-5' />
                            <span class="ml-3 text-[13px] text-[#7879F1]">Chat</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#110f22]">
                            <img src="/kanban.png" className='w-5' />
                            <span class="ml-3 text-[13px] text-[#6418C3]">Kanban</span>
                            <img src="/right.png" className='w-5 ml-[105px]' />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-[#110f22]">
                            <img src="/contact.png" className='w-5' />
                            <span class="ml-3 mt-1.5 text-[13px] text-[#7879F1]">Contact</span>
                            <span class="inline-flex items-center justify-center px-2 py-1 ml-20 text-xs font-medium text-white bg-[#E328AF] rounded-full">NEW</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 jus text-gray-900 rounded-lg  hover:bg-[#110f22]">
                            <img src="/calender.png" className='w-5' />
                            <span class="ml-3 text-[13px] text-[#7879F1]">Calender</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#110f22]">
                            <img src="/course.png" className='w-5' />
                            <span class="ml-3 text-[13px] text-[#464366]">Courses</span>
                            <img src="/right.png" className='w-5 ml-[105px]' />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#110f22]">
                            <img src="/shop.png" className='w-5' />
                            <span class="ml-3 text-[13px] text-[#7879F1]">Shop</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#110f22]">
                            <img src="/invoice.png" className='w-5' />
                            <span class="ml-3 text-[13px] text-[#7879F1]">Invoices</span>
                            <img src="/right.png" className='w-5 ml-[105px]' />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#110f22]">
                            <img src="/settings.png" className='w-5' />
                            <span class="ml-3 text-[13px] text-[#7879F1]">Settings</span>
                        </a>
                    </li>
                </ul>
            <Kanbancomponent/>
            </div>
        </aside>)
}
