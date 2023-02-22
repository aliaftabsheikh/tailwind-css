import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Hero from './Hero/page'
import Rockets from './Rocket/page'
import Testimonial from './Testimonials/page'
import Contact from './ContactUs/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    //! Lesson 01

    // <div className="bg-emerald-500 w-52 h-52 rounded-full shadow-lg grid place-content-center drop-shadow-2xl radial-blue">
    //   <div className='w-44 h-44 bg-red-600 rounded-full shadow-lg grid place-content-center'>
    //     <div className='w-32 h-32 bg-blue-800 rounded-full shadow-lg grid place-content-center'>
    //       <div className='w-20 h-20 bg-yellow-400 rounded-full shadow-lg grid place-content-center'>
    //         <div className='w-12 h-12 bg-black rounded-full'></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    //! Lesson 2

    <main className='max-w-6xl mx-auto'>
   <Hero/>
   <Rockets/>
   <Testimonial/>
   <Contact/>
    </main>
      )
}
