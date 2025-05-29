
import Image from "next/image"
import { BookingButton } from "./BookingButton"

export default function CtaSection() {
  return (
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
  )
}
