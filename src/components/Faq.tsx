'use client'

import { faqQuestions } from '@/lib/lists'
import {useState} from 'react'



export default function Faq() {

  const [questions, setQuestions] = useState("General Info")

  const filteredQuestions = faqQuestions.filter(question => question.category === questions)

  return ( 
    <div className="max-w-[900px] mx-auto mb-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <button 
        className={`px-8 py-4 text-off-white text-lg font-bold hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm ${questions === "General Info" ? "bg-grassroots" : "bg-pitch-light"}`}
        onClick={() => setQuestions("General Info")}
        >General Info</button>
        <button className={`px-8 py-4 text-off-white text-lg font-bold hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm ${questions === "Coaching & Sessions" ? "bg-grassroots" : "bg-pitch-light"}`}
        onClick={() => setQuestions("Coaching & Sessions")}
        >Coaching & Sessions</button>
        <button className={`px-8 py-4 text-off-white text-lg font-bold hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm ${questions === "Safety & Qualifications" ? "bg-grassroots" : "bg-pitch-light"}`}
        onClick={() => setQuestions("Safety & Qualifications")}
        >Safety & Qualifications</button>
        <button className={`px-8 py-4 text-off-white text-lg font-bold hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm ${questions === "Pricing & Payments" ? "bg-grassroots" : "bg-pitch-light"}`}
        onClick={() => setQuestions("Pricing & Payments")}
        >Pricing & Payments</button>
        <button className={`px-8 py-4 text-off-white text-lg font-bold hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm ${questions === "Preperation" ? "bg-grassroots" : "bg-pitch-light"}`}
        onClick={() => setQuestions("Preperation")}
        >What to Bring & Prepare</button>
        <button className={`px-8 py-4 text-off-white text-lg font-bold hover:bg-grassroots transition-colors duration-300 cursor-pointer rounded-sm ${questions === "Troubleshooting" ? "bg-grassroots" : "bg-pitch-light"}`}
        onClick={() => setQuestions("Troubleshooting")}
        >Troubleshooting & Support</button>
        </div>
        <div className="mt-8">
          {filteredQuestions.map(question => {
            return (
              <details key={question.id} className="py-4 border-b-1 border-pitch-mid cursor-pointer">
                <summary className="font-bold text-pitch-mid text-lg mb-2">{question.question}</summary>
                <p className="font-light text-pitch-mid">{question.answer}</p>
              </details>
            )
          })}
        </div>
    </div>
  )
}
