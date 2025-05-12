import { BookingButton } from "@/components/BookingButton";


export default function Home() {
  return (
    <main className="">
      {/* hero section */}
      <div className="w-full h-[80vh] min-h-[500px] bg-[url('/images/heropic.jpg')] bg-cover bg-center p-8">
        <div>
          <div className="w-[80%] max-w-[600px] sm:w-[60%] bg-bluey-black/90 p-8 rounded-md text-off-white">
            <h1 className="font-bold text-2xl max-w-[20ch] md:max-w-[40ch]">Football Coaching for children in Norwich</h1>
            <p className="mb-4 font-light text-lg">Wheter you&#39;re new to football or ready to level up, we provide professional football coaching in a safe, supportive environment for all abilities.</p>
            <BookingButton className="cursor-pointer" />
          </div>
        </div>
      </div>
      {/*  */}
    </main>
  );
}
