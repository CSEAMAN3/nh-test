import { BookingButton } from "@/components/BookingButton";
import Faq from "@/components/Faq";
import ReviewSlider from "@/components/ReviewSlider";
import { hookList } from "@/lib/lists";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      {/* hero section */}
      <div className="w-full h-[80vh] min-h-[500px] bg-[url('/images/heropic.jpg')] bg-cover bg-center p-8">
        <div className="max-w-[1200px] mx-auto h-full grid content-center">
          <div className="w-[80%] max-w-[500px] sm:w-[55%] bg-bluey-black/90 p-8 rounded-md text-off-white">
            <h1 className="font-bold text-2xl md:text-4xl max-w-[20ch] lg:max-w-[32ch]">Football Coaching for children in Norwich</h1>
            <p className="mb-4 font-light text-lg">Whether you&#39;re new to football or ready to level up, we provide professional football coaching in a safe, supportive environment for all abilities.</p>
            <BookingButton className="cursor-pointer bg-primary-accent text-primary hover:bg-electric-orange hover:text-off-white px-8 py-4" />
          </div>
        </div>
      </div>
      {/*  Scroll Hook */}
      <div className="">
        <div className="bg-pitch-light w-[90%] max-w-[1000px] mx-auto relative -top-8 rounded-lg pt-8 px-8 pb-24 overflow-clip">
          <Image 
            src={`/images/naughtsVScrosses.svg`}
            alt={`player tacticts graphic`}
            width={100}
            height={100}
            className="hidden sm:block absolute top-0 right-2 rotate-240"
          />
          <Image 
            src={`/images/naughtsVScrosses.svg`}
            alt={`player tacticts graphic`}
            width={100}
            height={100}
            className="hidden sm:block absolute bottom-2 left-0 rotate-90"
          />
          <h2 className="font-bold italic text-3xl text-off-white text-center mb-8">More Than Just Football</h2>
          <div className="flex flex-col gap-4 md:flex-row">
          {hookList.map(item => {
            return (
              <div key={item.title} className="bg-primary-accent text-center text-primary rounded-lg p-4 flex-1">
                <div className="min-h-[70px]">
                <Image 
                  src={item.graphic}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                </div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="font-light">{item.content}</p>
              </div>
            )
          })}
          </div>
        </div>
      </div>
      {/* more info section */}
      <div className="px-8 pb-8 pt-4 max-w-[1200px] mx-auto">
        <h3 className="font-bold italic text-3xl text-primary">Confidence Starts Here</h3>
        <p className="font-light text-primary max-w-[70ch]">NH Football Coaching provides small, tailored coaching sessions designed to help young players grow. Every session is built around positive encouragment, structured learning and a whole lot of fun, helping children advance their ability, gain confidence and develop the right mindset.</p>
      </div>
      <div className="px-8 max-w-[1200px] mx-auto pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* one */}
        <div className="bg-primary p-4 min-h-[300px] text-primary-accent order-1 grid place-content-center rounded-sm">
          <h4 className="font-bold text-xl">1 to 1 / 1 to 2 Coaching</h4>
          <p className="font-light max-w-[32ch] text-lg">Smaller groups means more attention, faster learning, and a deeper connection with each and every child.</p>
        </div>
        {/* two */}
        <div className="bg-primary order-2 rounded-sm overflow-clip">
          <Image
            src={`/images/heropic.jpg`}
            alt={`image description here`}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        {/* three */}
        <div className="bg-primary p-4 min-h-[300px] text-primary-accent order-3 sm:order-4 lg:order-3 grid place-content-center rounded-sm">
          <h4 className="font-bold text-xl">Confidence Driven Sessions</h4>
          <p className="font-light max-w-[32ch] text-lg">We focus on effort, encouragment, and progress - not perfomamce or pressure.</p>
        </div>
        {/* four */}
        <div className="bg-primary order-4 sm:order-3 lg:order-4 rounded-sm overflow-clip">
          <Image
            src={`/images/heropic.jpg`}
            alt={`image description here`}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        {/* five */}
        <div className="bg-primary p-4 min-h-[300px] text-primary-accent order-5 lg:order-6 grid place-content-center rounded-sm">
          <h4 className="font-bold text-xl">Fun, Safe and Structured</h4>
          <p className="font-light max-w-[32ch] text-lg">Every session is designed to enjoyable, well organised and supportive, from the first whistle to the last.</p>
        </div>
        {/* six */}
        <div className="bg-primary order-6 lg:order-5 rounded-sm overflow-clip">
          <Image 
            src={`/images/heropic.jpg`}
            alt={`image description here`}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        {/* seven */}
        <div className="bg-primary p-4 min-h-[300px] text-primary-accent order-7 sm:order-8 grid place-content-center rounded-sm">
          <h4 className="font-bold text-xl">FA Certified and DBS Checked</h4>
          <p className="font-light max-w-[32ch] text-lg">Parents can relax knowing their children are in safe, qualified hands.</p>
        </div>
        {/* eight */}
        <div className="bg-primary order-8 sm:order-7 rounded-sm overflow-clip">
          <Image 
            src={`/images/heropic.jpg`}
            alt={`image description here`}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* reviews */}
      <div className="bg-grassroots px-8 pt-16 pb-16">
        <div className="mx-auto max-w-1200 mb-8">
        <h3 className="font-bold italic text-3xl text-primary text-center mb-2">Trusted by parents <span className="block md:inline">throughout Norfolk</span></h3>
        <p className="font-light text-primary text-center text-lg max-w-[60ch] mx-auto">We&#39;re proud to be rated 5 stars on google by local parents who&#39;ve seen their children grow in confidence, skill and love for the game.</p>
        </div>
        <ReviewSlider />
      </div>
      {/* CTA */}
      <div className="py-32 text-primary text-center px-8 relative">
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
      {/* FAQ Section */}
      <div className="p-8">
        <h3 className="text-primary font-bold text-3xl italic text-center mb-2">Frequently Asked Questions</h3>
        <p className="text-primary font-light text-lg text-center mb-8">Here&#39;s everything parents usually want to know before getting started.</p>
        <Faq />
      </div>
    </main>
  );
}
