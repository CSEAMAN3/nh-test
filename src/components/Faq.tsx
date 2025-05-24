'use client'

import { faqQuestions } from '@/lib/lists'
import {useState} from 'react'
import FaqAccordion from './FaqAccordion'



export default function Faq() {

  const [selectedCategory, setselectedCategory] = useState("General Info")

  const categories = [...new Set(faqQuestions.map(q => q.category))]

  const filteredFaqs = faqQuestions.filter(q => q.category === selectedCategory)

  return ( 
    <div className="max-w-[900px] mx-auto mb-8">
        <div className="max-w-[1000px] my-8 mx-auto px-8">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setselectedCategory(category)}
                  className={`px-4 py-2 text-off-white text-lg font-bold rounded-sm transition-colors duration-200 cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-pitch-mid'
                        : 'bg-grassroots hover:pitch-mid'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
              <FaqAccordion items={filteredFaqs} />
            </div>
    </div>
  )
}
