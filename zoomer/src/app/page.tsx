'use client';

import Navbar from "@/components/Navbar";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";


export default function Home() {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
  

  return (
    <>
    <Navbar/>
    <div className="h-[20rem] items-center justify-center mt-24">
      <TextHoverEffect text="ZOOMER" />
    </div>
     <section className='flex size-full flex-col gap-10 text-black ml-[20vh] dark:text-white'>
      
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
          Welcome Hello Anubhav! to Zoomer!
          </h2>

          <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-extrabold lg:text-7xl'>
                {time}
                </h1>
                <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
                {date}
                </p>
                </div>
          </div>
         </div>


        {/* <Footer/> */}

    </section>
    </>
  );
}
