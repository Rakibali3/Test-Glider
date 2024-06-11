

const TofelCard1 = () => {
  return (
    <div className="h-[500px]  flex flex-col items-center justify-center  gap-20 m-40">
      <div className='bg-[rgb(247,249,251)] w-10/12 h-full   p-3 rounded-3xl flex items-center justify-center'>
            <div className="flex flex-col gap-5 p-5 w-6/12">
                <h3 className="text-2xl font-normal">The Shortcut to your Dream Score</h3>
                <h1 className="text-4xl font-semibold">We Take your TOEFL Score <br /> Higher</h1>
                <button className="bg-blue-600 w-56 text-white font-bold p-3 rounded-3xl text-base hover:bg-blue-700">TAKE A FREE MOCK TEST</button>
            </div>
            <div className="w-6/12">
                <img alt="" src="https://www.testglider.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftoefl-sub-kv-banner-m.c7726745.png&w=1920&q=75" className="w-full h-full"/>
            </div>
      </div>
      <div className="w-10/12 flex flex-col gap-8 mb-12">
            <h1 className="text-4xl font-thin">What is <span className="font-semibold">TOEFL?</span></h1>
            <p className="text-lg font-sans font-thin"><span className="font-semibold">TOEFL (Test of English as a Foreign Language) </span>is an internationally recognized English proficiency assessment test used for individuals who do not speak English as their native language, typically for purposes such as university admissions or professional advancement. The TOEFL exam is available in different formats, including PBT (Paper-based test), CBT (Computer-based Test), and IBT (Internet Based Test), with the test format and availability varying depending on the country and testing center. The IBT TOEFL consists of the following four sections, with the entire test lasting approximately 2 hours.</p>
      </div>
    </div>
  )
}

export default TofelCard1;


