import Image from "next/image"
import Link from "next/link"
import { BookingButton } from "./BookingButton"
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";



export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="px-8 pt-8 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-primary-accent auto-rows-auto max-w-[1200px] mx-auto">
      {/* column 1 */}
      <div className="grid grid-cols-1 auto-rows-auto">
        <Image 
          src={`/images/nhfc_logo_horizontal_wordmark.svg`}
          alt={'NHFC logo'}
          width={400}
          height={400}
          className="w-32 mb-12 sm:mb-4 sm:order-1"
        />
        <div className="mb-4 sm:order-3 flex gap-2">
          <FaLocationDot className="mt-1" />
          <p className="font-bold">
            <span className="block">120 Minnow Way</span>
            <span className="block">Mulbarton</span>
            <span className="block">Norwich</span>
            <span className="block">NR14 7GJ</span>
          </p>
        </div>
        <div className="mb-4 sm:order-5 flex gap-2">
          <MdEmail className="mt-1" />
          <p className="font-bold">hello@nhfc.co.uk</p>
        </div>
        <div className="mb-4 h-[24] sm:order-7 flex gap-2">
          <FaPhone className="mt-1" />
          <p className="font-bold">01603 716283</p>
        </div>
        <div className="mb-12 sm:mb-4 sm:order-9 flex gap-4">
          <Link href={"/"} className="hover:text-electric-orange transition-colors duration-300"><FaFacebookSquare className="text-2xl" /></Link>
          <Link href={"/"} className="hover:text-electric-orange transition-colors duration-300"><FaSquareXTwitter className="text-2xl" /></Link>
          <Link href={"/"} className="hover:text-electric-orange transition-colors duration-300"><AiFillTikTok className="text-2xl" /></Link>
          <Link href={"/"} className="hover:text-electric-orange transition-colors duration-300"><FaSquareInstagram className="text-2xl" /></Link>
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:mt-26 lg:mt-18">
        {/* column two */}
        <div className="grid grid-cols-1 auto-rows-auto">
        <Link href={"/"} className="mb-4 hover:text-electric-orange transition-colors duration-300 w-fit">Home</Link>
        <Link href={"/"} className="mb-4 hover:text-electric-orange transition-colors duration-300 w-fit">About NHFC</Link>
        <Link href={"/"} className="mb-4 hover:text-electric-orange transition-colors duration-300 w-fit">Our Sessions</Link>
        <Link href={"/"} className="mb-4 hover:text-electric-orange transition-colors duration-300 w-fit">Blog</Link>
        <Link href={"/"} className="mb-4 hover:text-electric-orange transition-colors duration-300 w-fit">Book a Session</Link>
        <Link href={"/"} className="mb-4 hover:text-electric-orange transition-colors duration-300 w-fit">FAQs</Link>
        <Link href={"/"} className="mb-4 hover:text-electric-orange transition-colors duration-300 w-fit">Contact</Link>
        </div>
        {/* column 3 */}
        <div className="grid grid-cols-1 auto-rows-auto grid-rows-[min-content_min-content] mb-8 sm:mb-0">
        <Link href={"/"} className="mb-4 hover:text-electric-orange transition-colors duration-300">Safe Gaurding Policy</Link>
        <Link href={"/"} className="mb-4 hover:text-electric-orange transition-colors duration-300">Privacy Policy</Link>
        <Link href={"/"} className="mb-4 hover:text-electric-orange transition-colors duration-300">Terms and Conditions</Link>
        </div>
        </div>
        {/* column 4 */}
        <div className="grid grid-cols-1 auto-rows-auto md:mt-25 lg:mt-17">
        <div className="order-last w-fit lg:ml-auto">
        <h6 className="mb-2 font-bold text-xl">Ready to get started?</h6>
        <BookingButton className="bg-primary-accent text-primary max-w-fit px-8 py-4 hover:bg-electric-orange hover:text-off-white" />
        </div>
        </div>
        </div>
    </footer>
  )
}
