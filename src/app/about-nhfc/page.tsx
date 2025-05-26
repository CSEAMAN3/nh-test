'use client'
import { BookingButton } from "@/components/BookingButton";
import Image from "next/image";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";


export default function AboutPage() {

  return (
    <main>
      {/* hero section */}
      <div className="bg-primary">
        <div className="max-w-[1200px] px-8 pt-8 mx-auto flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex-col content-center">
            <h1 className="font-black text-4xl lg:text-5xl text-off-white mb-2">BECOME THE BEST 
              <span className="block text-2xl lg:text-xl">Helping Young Players Grow<span className="hidden lg:inline">, succeed & Thrive</span></span>
            </h1>
            <p className="max-w-[40ch] lg:max-w-[48ch] mb-4 font-light text-off-white md:text-lg">NH Football Coaching was founded by Noah Hunt, a lifelong footballer and passionate youth coach, with one clear goal: to help young players unlock their potential while developing a genuine love for the game.</p>
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
      <div className="px-16 py-16 mx-auto w-fit relative md:mb-8">
        <RiDoubleQuotesL className="text-4xl absolute top-12 left-6 text-electric-orange"/>
        <p className="text-center font-bold text-pitch-light text-xl lg:text-2xl max-w-[60ch]">Whether a child is just starting out or looking to sharpen their skills, our sessions are designed to support their journey — through personalised coaching, real encouragement, and a whole lot of energy.</p>
        <p className="font-light w-fit absolute bottom-8 right-24 text-primary">Head Coach - Noah Hunt</p>
        <RiDoubleQuotesR className="text-4xl absolute bottom-12 right-6 text-electric-orange" />
      </div>
      <div className="flex flex-col gap-8 max-w-[1200px] mx-auto lg:mb-8">
      {/* why we started */}
      <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:mt-8 lg:pr-8">
        <div className="text-primary px-8 content-center flex-1">
          <h2 className="font-bold text-2xl lg:text-3xl mb-2 italic">Why We Started</h2>
          <p className="mb-2 max-w-[60ch] font-light md:text-lg">Noah&#39;s passion for football runs deep. As a player for the Mulbarton First Team and head coach of the club&#39;s U18s squad, football has always been more than a game — it&#39;s been a way of life.
          </p>
          <p className="max-w-[60ch] font-light md:text-lg">After finishing his studies, Noah launched NH Football Coaching not to chase a market trend, but to give back to the game and support the next generation. His aim? To offer young players the space, guidance, and belief they need to grow — as athletes and as individuals.</p>
        </div>
        <Image 
          src={'/images/heropic.jpg'}
          alt={"image description here"}
          width={400}
          height={400}
          className="w-full max-h-[200px] sm:max-h-[300px] lg:max-h-full object-cover flex-1"
        />
      </div>
      {/* Our Approach */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 max-w-[1200px] lg:mt-8 lg:pl-8">
        <div className="text-primary px-8 flex-1 content-center lg:order-2">
          <h2 className="font-bold text-2xl lg:text-3xl mb-2 italic">Our Approach</h2>
          <p className="mb-2 max-w-[60ch] font-light md:text-lg">What makes NH Football Coaching different is the focus on small-group sessions, energy-filled training, and coaching that truly connects.
          </p>
          <p className="max-w-[60ch] font-light md:text-lg">We believe that with the right guidance, consistent effort, and a willingness to learn, any player can make real progress. Noah brings not only technical knowledge and engaging drills to each session, but also a mindset that helps players grow in confidence, focus, and ability.</p>
        </div>
        <Image 
          src={'/images/heropic.jpg'}
          alt={"image description here"}
          width={400}
          height={400}
          className="w-full max-h-[200px] sm:max-h-[300px] lg:max-h-full object-cover flex-1 lg:order-1"
        />
      </div>
      </div>
      {/* meet the coach */}
      <div className="bg-grassroots px-8 text-primary min-h-[400px]">
        <div className="max-w-[1200px] mx-auto lg:px-8 flex flex-col md:flex-row justify-center md:items-center">
          <div className="py-8">
            <h3 className="font-bold text-2xl lg:text-3xl mb-2 italic">Meet The Coach</h3>
            <p className="font-light md:text-lg max-w-[42ch] mb-4">With Noah, parents can trust that their child is being coached by someone who&#39;s qualified, experienced, and genuinely committed to their development — not just as footballers, but as young people.</p>
            <ul className="list-disc font-light flex flex-col gap-4 md:text-lg pl-4">
              <li>First Team Player Mulbarton FC</li>
              <li>Head Coach of Mulbarton U18s</li>
              <li>FA Certified & DBS Checked</li>
              <li>Known For High Energy Sessions & <span className="block">positive, clear communication.</span></li>
            </ul>
          </div>
          <Image 
            src={"/images/cropped_coach.png"}
            alt={"coach carter description"}
            width={400}
            height={400}
            className="flex-end place-self-end"
          />
        </div>
      </div>
      {/* CTA */}
      <div className="py-32 text-primary text-center px-8 relative my-24">
                <h3 className="font-bold italic text-3xl mb-2">Ready to get started?</h3>
                <p className="font-light text-lg max-w-[60ch] mx-auto mb-4">Book your child&#39;s first session today and help them build skills, confidence, and a love for the game - one kick at a time.</p>
                <BookingButton className="bg-electric-orange text-off-white hover:bg-primary hover:text-primary-accent px-8 py-4" />
                {/* top left img */}
                <Image 
                  src={`/images/taticarrow.svg`}
                  alt={`tactical arrow icon`}
                  width={400}
                  height={400}
                  className="w-16 md:w-24 absolute top-8 sm:top-16 md:top-12 left-[5vw] sm:left-[10vw] md:left-[10vw] rotate-90"
                />
                {/* top right img */}
                <Image 
                  src={`/images/taticarrow.svg`}
                  alt={`tactical arrow icon`}
                  width={400}
                  height={400}
                  className="w-16 md:w-24 absolute top-8 sm:top-16 md:top-12 right-[5vw] sm:right-[10vw] md:right-[10vw] rotate-160"
                />
                {/* bottom left img */}
                <Image 
                  src={`/images/taticarrow.svg`}
                  alt={`tactical arrow icon`}
                  width={400}
                  height={400}
                  className="w-16 md:w-24 absolute bottom-8 sm:bottom-16 md:bottom-12 left-[5vw] sm:left-[10vw] md:left-[10vw] rotate-340"
                />
                {/* bottom right img */}
                <Image 
                  src={`/images/taticarrow.svg`}
                  alt={`tactical arrow icon`}
                  width={400}
                  height={400}
                  className="w-16 md:w-24 absolute bottom-8 sm:bottom-16 md:bottom-12 right-[5vw] sm:right-[10vw] md:right-[10vw] rotate-260"
                />
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
