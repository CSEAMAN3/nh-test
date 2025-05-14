import Link from "next/link";
import Image from "next/image";
import HeaderNav from "./HeaderNav";
import { BookingButton } from "./BookingButton";

export default function Header() {
  return (
    <header className="bg-primary px-8 py-4 relative flex justify-between z-50">
      <Link href={"/"}>
        <Image 
          src={`/images/nhfc_logo_horizontal_wordmark.svg`}
          alt={'header logo link to home page'}
          width={400}
          height={400}
          className="w-[120px] md:w-[160px]"
          priority
        />
      </Link>
      <div className="flex">
      <BookingButton className="cursor-pointer hidden md:block mr-12 bg-primary-accent text-primary hover:bg-electric-orange hover:text-off-white px-4 py-2" />
      <HeaderNav />
      </div>
    </header>
  )
}
