import { BookingButton } from "@/components/BookingButton";
import Faq from "@/components/Faq";
import ReviewSlider from "@/components/ReviewSlider";
// import { hookList } from "@/lib/lists";
import Image from "next/image";

import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaUsers } from 'react-icons/fa';
import CtaSection from "@/components/CtaSection";



export default function Home() {

const hookList = [
    {
      title: "Real Growth",
      content: "Football sessions focused on building self belief through positive coaching.",
      icon: FaStar
    },
    {
      title: "Football For All",
      content: "Tailored football coaching at all levels designed to bring out your best.",
      icon: FaUsers
    },
    {
      title: "True Support",
      content: "Making sure every player feels seen, supported and set up for success.",
      icon: FaHeart
    },
  ]

  return (
    <main className="">
      <div className="bg-primary">
          <div className="min-h-[80vh] max-w-[1200px] mx-auto pt-16 lg:pt-8 pb-16 md:pb-8 lg:pb-16 lg:max-h-[632px]">
            <div className="mb-8 md:mb-0 px-8 relative lg:top-24">
              <h1 className="w-fit text-off-white mb-2">
                <span className="block font-black text-5xl">JOIN THE SQUAD </span>
                <span className="block font-black text-xl tracking-[-0.005em]">Football Coaching for Children in Norwich</span>
              </h1>
              <p className="max-w-[38ch] text-lg font-light text-off-white mb-4">Whether you&#39;re new to football or ready to level up, we provide professional football coaching in a safe, supportive environment for all abilities.</p>
              <BookingButton className="bg-electric-orange text-off-white font-bold hover:bg-primary-accent hover:text-primary px-8 py-4 transition-colors duration-300" />
            </div>
              <Image 
                src={`/images/heropic.jpg`}
                alt={"hero image"}
                width={400}
                height={400}
                className="shape ml-auto relative md:-top-12 lg:-top-48 w-[70%] md:w-[60%] max-w-[800px]"
                priority
              /> 
          </div>
          </div>
      {/*  Scroll Hook */}
      <div>
        <div className="bg-grassroots w-[90%] max-w-[1000px] mx-auto relative -top-8 pt-8 px-8 pb-24 overflow-clip">
          {/* <Image 
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
          /> */}
          <h2 className="font-bold italic text-3xl text-primary text-center mb-8">More Than Just Football</h2>
          <div className="flex flex-col gap-4 md:flex-row">
          {hookList.map(item => {
            const Icon = item.icon
            return (
              <div key={item.title} className="bg-primary text-center text-off-white p-4 flex-1 border-b-4 border-primary-accent z-10">
                <div className="min-h-[70px] grid place-content-center">
                {/* <Image 
                  src={item.graphic}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="mx-auto"
                /> */}
                <Icon  className="text-4xl text-primary-accent" />
                </div>
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="font-light">{item.content}</p>
              </div>
            )
          })}
          </div>
          <div className="w-full h-2 bg-grassroots-mid absolute left-0 bottom-4" />
          <div className="w-[120px] h-[120px] border-8 border-grassroots-mid absolute rounded-full -bottom-10 left-1/2 -translate-x-1/2 z-0" />
          <div className="w-4 h-4 bg-grassroots-mid rounded-full absolute left-1/2 bottom-3 -translate-x-1/2" />
        </div>
      </div>
      {/* more info section */}
      <div className="px-8 pb-8 pt-4 max-w-[1200px] mx-auto">
        <h3 className="font-bold italic text-3xl text-primary mb-2">Confidence Starts Here</h3>
        <p className="font-light text-primary max-w-[64ch] text-lg">NH Football Coaching provides small, tailored coaching sessions designed to help young players grow. Every session is built around positive encouragment, structured learning and a whole lot of fun, helping children advance their ability, gain confidence and develop the right mindset.</p>
      </div>
      <div className="px-8 max-w-[1200px] mx-auto pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* one */}
        <div className="bg-primary p-4 min-h-[300px] text-primary-accent order-1 grid place-content-center rounded-sm relative overflow-hidden">
          <h4 className="font-bold text-xl">1 to 1 & 1 to 2 <span className="lg:block">Coaching Sessions</span></h4>
          <p className="font-light max-w-[32ch] text-lg text-off-white">Smaller groups means more attention, faster learning, and a deeper connection with each and every child.</p>
          <div className="absolute bottom-4 w-full h-[4px] bg-pitch-light" />
          <div className="absolute -bottom-3 right-4 w-16 h-16 rounded-full border-[4px] border-pitch-light" />
          <div className="absolute w-3 h-3 rounded-full bg-pitch-light bottom-3 right-[42px]" />
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
        <div className="bg-primary p-4 min-h-[300px] text-primary-accent order-3 sm:order-4 lg:order-3 grid place-content-center rounded-sm relative overflow-hidden">
          <h4 className="font-bold text-xl">Confidence <span className="lg:block">Driven Training</span></h4>
          <p className="font-light max-w-[32ch] text-lg text-off-white">We focus on effort, encouragment, and progress - not perfomamce or pressure.</p>
          <div className="absolute bottom-4 w-full h-[4px] bg-pitch-light" />
          <div className="absolute -bottom-3 right-4 w-16 h-16 rounded-full border-[4px] border-pitch-light" />
          <div className="absolute w-3 h-3 rounded-full bg-pitch-light bottom-3 right-[42px]" />
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
        <div className="bg-primary p-4 min-h-[300px] text-primary-accent order-5 lg:order-6 grid place-content-center rounded-sm relative overflow-hidden">
          <h4 className="font-bold text-xl">Fun, Safe <span className="lg:block">& Structured</span></h4>
          <p className="font-light max-w-[32ch] text-lg text-off-white">Every session is designed to enjoyable, well organised and supportive, from the first whistle to the last.</p>
          <div className="absolute bottom-4 w-full h-[4px] bg-pitch-light" />
          <div className="absolute -bottom-3 right-4 w-16 h-16 rounded-full border-[4px] border-pitch-light" />
          <div className="absolute w-3 h-3 rounded-full bg-pitch-light bottom-3 right-[42px]" />
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
        <div className="bg-primary p-4 min-h-[300px] text-primary-accent order-7 sm:order-8 grid place-content-center rounded-sm relative overflow-hidden">
          <h4 className="font-bold text-xl">FA Certified <span className="lg:block">& DBS Checked</span></h4>
          <p className="font-light max-w-[32ch] text-lg text-off-white">Parents can relax knowing their children are in safe, qualified hands.</p>
          <div className="absolute bottom-4 w-full h-[4px] bg-pitch-light" />
          <div className="absolute -bottom-3 right-4 w-16 h-16 rounded-full border-[4px] border-pitch-light" />
          <div className="absolute w-3 h-3 rounded-full bg-pitch-light bottom-3 right-[42px]" />
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
      <CtaSection />
      {/* FAQ Section */}
      <div className="pt-4">
        <h6 className="font-bold text-3xl text-primary italic text-center">Frequently Asked Questions</h6>
        <p className="mb-8 text-primary text-lg text-center font-light">Here&#39;s everything parents usually want to know before getting started.</p>
        <Faq />
      </div>
    </main>
  );
}
