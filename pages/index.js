import Image from 'next/image'
import Sidebar from '@/components/sidebar'
import Schoolcomponent from '@/components/schoolcomponent'
import Main from '@/components/main'
export default function Home() {
  return (
    <div className='h-[1500px] md:h-screen w-screen bg-[#0D0B21]'>
      <Sidebar/>
      <Schoolcomponent/>
      <Main/>
    </div>
  )
}
