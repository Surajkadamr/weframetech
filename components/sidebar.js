import React from 'react'
import Aside from './aside'
import Navbar from './navbar'
export default function sidebar() {
    return (
        <div>
            <nav class="fixed top-0 z-50 w-full bg-[#15132B]">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <Navbar/>
                </div>
                <Aside/>
            </nav>
        </div>
    )
}
