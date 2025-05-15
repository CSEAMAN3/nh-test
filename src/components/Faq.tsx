'use client'



export default function Faq() {
  return ( 
    <div className="max-w-[900px] mx-auto">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <button className="px-8 py-4 text-off-white text-lg font-bold bg-pitch-light hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm">General Info</button>
        <button className="px-8 py-4 text-off-white text-lg font-bold bg-pitch-light hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm">Coaching & Sessions</button>
        <button className="px-8 py-4 text-off-white text-lg font-bold bg-pitch-light hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm">Safety & Qualifications</button>
        <button className="px-8 py-4 text-off-white text-lg font-bold bg-pitch-light hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm">Princing & Payments</button>
        <button className="px-8 py-4 text-off-white text-lg font-bold bg-pitch-light hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm">What to bring & Prepare</button>
        <button className="px-8 py-4 text-off-white text-lg font-bold bg-pitch-light hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm">Troubleshooting & Support</button>
        </div>
    </div>
  )
}
