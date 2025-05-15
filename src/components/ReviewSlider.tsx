'use client'

import { reviews } from "@/lib/lists"
import Image from "next/image"

import { useState } from "react"

export default function ReviewSlider() {

  const [visibleReview, setVisibleReview] = useState(0)

  const increaseVisibleReview = () => {
    if(visibleReview === 2){
      setVisibleReview(0)
    } else{
      setVisibleReview(visibleReview + 1)
    }
  }

  const decreaseVisibleReview = () => {
    if(visibleReview === 0){
      setVisibleReview(2)
    } else {
      setVisibleReview(visibleReview - 1)
    }
  }


  return (

    <div className="flex max-w-[600px] mx-auto">
      <button 
        className="text-6xl text-primary cursor-pointer hover:text-electric-orange"
        onClick={decreaseVisibleReview}
        >&#8249;</button>
      <div className="max-w-[300px] text-primary mx-auto">
        <Image 
          src={`/images/${reviews[visibleReview].img}`}
          alt={`profile photo`}
          width={400}
          height={400}
          className="w-16 h-16 object-cover rounded-full mx-auto mb-2"
        />
        <h6 className="font-bold text-lg text-center">{reviews[visibleReview].name}</h6>
        <p className="font-light text-lg text-center">{reviews[visibleReview].review}</p>
        <p className="text-center text-electric-orange-dark">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
      </div>
      <button 
        className="text-6xl text-primary cursor-pointer hover:text-electric-orange"
        onClick={increaseVisibleReview}  
      >&#8250;</button>
    </div>

  //   <div className="flex flex-col md:flex-row gap-8 max-w-[1200px] mx-auto">
  //   {reviews.map(review => {
  //     return (
  //       <div key={review.name} className="flex-1">
  //         <div className="flex flex-col gap-4">
  //           <Image 
  //             src={'/images/tman.webp'}
  //             alt={'profile photo'}
  //             width={400}
  //             height={400}
  //             className="w-16 h-16 object-cover rounded-full row-span-2 mx-auto"
  //           />
  //           <h6 className="font-bold text-center text-lg text-bluey-black">{review.name}</h6>
  //         </div>
  //         <p className="font-light text-primary text-center max-w-[40ch] mx-auto">{review.review}</p>
  //         <p className="text-center text-electric-orange-dark">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
  //       </div>
  //     )
  //   })}
  // </div>
  )
}
