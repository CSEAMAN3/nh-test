'use client'
import { BookingButton } from "@/components/BookingButton";
import Image from "next/image";

export default function AboutPage() {

  return (
    <main>
      {/* hero section */}
      <div className="bg-primary min-h-[80vh] mb-32">
        <div className="max-w-[1200px] px-8 pt-8 mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex-col content-center">
            <h1 className="font-black text-4xl lg:text-5xl text-off-white mb-2">BECOME THE BEST 
              <span className="block text-2xl lg:text-xl">Helping Young Players Grow<span className="hidden lg:inline">, succeed & Thrive</span></span>
            </h1>
            <p className="max-w-[40ch] lg:max-w-[48ch] mb-4 font-light text-off-white">NH Football Coaching was founded by Noah Hunt, a lifelong footballer and passionate youth coach, with one clear goal: to help young players unlock their potential while developing a genuine love for the game.</p>
            <BookingButton className="bg-electric-orange py-4 px-8 text-off-white hover:bg-primary-accent hover:text-primary transition-colors duration-300 cursor pointer" />
          </div>
          <div className="fullshape flex-1">
            <Image 
              src={'/images/heropic.jpg'}
              alt={'this is the photo decription'}
              width={400}
              height={400}
              className="w-full max-h-[300px] md:max-h-[150px] object-cover"
              priority
            />
            <Image 
              src={'/images/heropic.jpg'}
              alt={'this is the photo decription'}
              width={400}
              height={400}
              className="w-full max-h-[300px] md:max-h-[300px] object-cover hidden md:block"
              priority
            />
            <Image 
              src={'/images/heropic.jpg'}
              alt={'this is the photo decription'}
              width={400}
              height={400}
              className="w-full max-h-[300px] md:max-h-[150px] object-cover hidden md:block"
              priority
            />
          </div>
        </div>
      </div>
      {/* quote section */}
      <div>
        
      </div>
    </main>
  //   <main className="min-h-screen">
  //   <div className="bg-primary mb-8">
  //     <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
  //       <div className="flex-1 p-8 centering h-fit place-self-center">
  //         <div className="">
  //           <div className="">
  //             <h1 className="w-fit text-off-white mb-2">
  //               <span className="block font-black text-4xl md:text-5xl">BECOME THE BEST</span>
  //               <span className="block font-black text-2xl md:text-xl *:tracking-[-0.005em]">Helping Young Players Grow<span className="hidden md:inline">, Succeed & Thrive</span></span>
  //             </h1>
  //             <p className="max-w-[36ch] md:max-w-[44ch]  md:text-lg font-light text-off-white mb-4">NH Football Coaching was founded by Noah Hunt, a lifelong footballer and passionate youth coach, with one clear goal: to help young players unlock their potential while developing a genuine love for the game.</p>
  //           </div>
  //           <div className="w-[380px]">
  //           <BookingButton className="bg-electric-orange text-off-white font-bold hover:bg-primary-accent hover:text-primary px-8 py-4 transition-colors duration-300" />
  //           </div>
  //         </div>
  //       </div>
  //       <div className="flex-1 flex justify-center">
  //         <div className="w-[80%] md:max-w-[300px] fullshape">
  //           <Image 
  //             src={`/images/heropic.jpg`}
  //             alt={"hero image"}
  //             width={400}
  //             height={400}
  //             className="w-full hidden md:block max-h-[200px] object-cover"
  //             priority
  //           />
  //           <Image 
  //             src={`/images/heropic.jpg`}
  //             alt={"hero image"}
  //             width={400}
  //             height={400}
  //             className="w-full max-h-[300px] md:max-h-[200px] object-cover"
  //             priority
  //           /> 
  //           <Image 
  //             src={`/images/heropic.jpg`}
  //             alt={"hero image"}
  //             width={400}
  //             height={400}
  //             className="w-full hidden md:block max-h-[200px] object-cover"
  //             priority
  //           /> 
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </main>
  )
}
