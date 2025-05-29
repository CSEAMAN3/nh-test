
import { BookingButton } from "@/components/BookingButton"
import Quote from "@/components/Quote";
import Image from "next/image"

export default function SessionsPage() {
  return (
    <main className="min-h-screen">
      {/* hero */}
      <div className="bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <div className="px-8 pt-16 md:flex justify-center md:gap-[10%]">
          <div className="mb-8 sm:mb-0 lg:self-center">
            <h1 className="text-off-white mb-2">
              <span className="font-black text-4xl lg:text-5xl text-off-white block">REAL COACHING</span>
              <span className="text-lg lg:text-xl font-black"><span className="hidden   lg:inline-block">Guided</span> Training That Makes A Difference</span>
            </h1>
            <p className="font-light text-off-white lg:text-lg max-w-[42ch] mb-4">At NH Football Coaching, our sessions are built around one principle. The more attention a player gets, the more they grow. That&#39;s why we offer focused 1 to 1 and 1 to 2 small group coaching. To give young players the space, support, and coaching they need to  improve.</p>
            <BookingButton className="bg-electric-orange py-4 px-8 text-off-white hover:bg-primary-accent hover:text-primary transition-colors duration-300 cursor pointer" />
          </div>
          <div className="">
            <Image 
              src={`/images/cropped_coach.png`}
              alt={"player"}
              width={400}
              height={400}
              className="w-[60vw] max-w-[400px] md:max-w-[300px] lg:max-w-[400px] ml-auto"
            />
          </div>
        </div>
      </div>
      </div>
      {/* Quote Section */}
      <Quote content="Every session is designed to be fun, energetic, and tailored to the individual. No pressure, no shouting, just positive, professional guidance from a coach who cares." />
      {/* More Info */}
      <div className="max-w-[1200px] mx-auto">
        {/* What we focus on */}
        <div className="md:flex mb-8">
          <div className="text-primary px-8 md:py-8 md:max-w-[50%] md:min-w-[50%] flex flex-col place-content-center">
            <h2 className="font-bold text-2xl lg:text-3xl italic mb-2">What We Focus On</h2>
            <p className="font-light mb-4">We keep things simple, structured, and development-driven. Sessions typically include:</p>
            <ul className="font-light grid grid-cols-1 gap-4 mb-8 md:mb-0">
              <li className="mark">Warm-up & Movement - To prepare the body and mind.</li>
              <li className="mark">Technical Drills - ball mastery, passing, dribbling, finishing.</li>
              <li className="mark">Tactical Awareness - Decision making, movement off the ball, scanning. </li>
              <li className="mark">Player reflection - Encouragment, feedback, next steps.</li>
            </ul>
          </div>
          <div className="flex-1">
            <Image 
              src={"/images/heropic.jpg"}
              alt={"photo"}
              width={"400"}
              height={"400"}
              className="w-full h-[200px] md:h-[100%] object-cover"
            />
          </div>
        </div>
        {/* How we coach */}
        <div className="md:flex mb-8">
          <div className="text-primary px-8 md:py-8 flex flex-col place-content-center md:order-2 md:max-w-[50%] md:min-w-[50%]">
            <h2 className="font-bold text-2xl lg:text-3xl italic mb-2">How We Coach</h2>
            <p className="font-light mb-4">To get the best out of young players our coaching ethos is centered around:</p>
            <ul className="font-light grid grid-cols-1 gap-4 mb-8 md:mb-0">
              <li className="mark">Support - Mistakes are part of learning.</li>
              <li className="mark">Energy - Sessions are high tempo, fun and motivating.</li>
              <li className="mark">Focus - Small groups mean deeper learning and real understanding.</li>
              <li className="mark">Player centered - We coach the person as well as the footballer.</li>
            </ul>
          </div>
          <div className="flex-1 md:order-1">
            <Image 
              src={"/images/heropic.jpg"}
              alt={"photo"}
              width={"400"}
              height={"400"}
              className="w-full h-[200px] md:h-[100%] object-cover"
            />
          </div>
        </div>
        {/* Who's it for */}
        <div className="md:flex mb-8">
          <div className="text-primary px-8 md:py-8 flex flex-col place-content-center md:max-w-[50%] md:min-w-[50%]">
            <h2 className="font-bold text-2xl lg:text-3xl italic mb-2">Who&#39;s it for</h2>
            <p className="font-light mb-4">To get the best out of young players our coaching ethos is centered around:</p>
            <ul className="font-light grid grid-cols-1 gap-4 mb-8 md:mb-0">
              <li className="mark">Support - Mistakes are part of learning.</li>
              <li className="mark">Energy - Sessions are high tempo, fun and motivating.</li>
              <li className="mark">Focus - Small groups mean deeper learning and real understanding.</li>
              <li className="mark">Player centered - We coach the person as well as the footballer.</li>
            </ul>
          </div>
          <div className="flex-1">
            <Image 
              src={"/images/heropic.jpg"}
              alt={"photo"}
              width={"400"}
              height={"400"}
              className="w-full h-[200px] md:h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
