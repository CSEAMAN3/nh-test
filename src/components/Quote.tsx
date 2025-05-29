
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

interface QuoteProps {
  content: string;
}

export default function Quote({content} : QuoteProps) {
  return (
    <div className="px-16 py-16 mx-auto w-fit relative md:mb-8">
      <RiDoubleQuotesL className="text-4xl absolute top-12 left-6 text-electric-orange"/>
      <p className="text-center font-bold text-pitch-light text-xl lg:text-2xl max-w-[60ch]">{content}</p>
      <p className="font-light w-fit absolute bottom-8 right-24 text-primary">Head Coach - Noah Hunt</p>
      <RiDoubleQuotesR className="text-4xl absolute bottom-12 right-6 text-electric-orange" />
    </div>
  )
}
