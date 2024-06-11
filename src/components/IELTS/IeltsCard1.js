

const IeltsCard1 = () => {
    return (
      <div className="h-[500px]  flex flex-col items-center justify-center  gap-20 m-40">
        <div className='bg-[rgb(247,249,251)] w-10/12 h-full   p-3 rounded-3xl flex items-center justify-center'>
              <div className="flex flex-col gap-5 p-5 w-6/12">
                  <h3 className="text-2xl font-normal">The Shortcut to your Dream Score</h3>
                  <h1 className="text-4xl font-semibold">We Take your IELTS Score Higher</h1>
                  <button className="bg-blue-600 w-56 text-white font-bold p-3 rounded-3xl text-base hover:bg-blue-700">TAKE A FREE MOCK TEST</button>
              </div>
              <div className="w-6/12">
                  <img alt="" src="https://www.testglider.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fielts-sub-kv-banner-m.b9846797.png&w=1920&q=75" className="w-full h-full"/>
              </div>
        </div>
        <div className="w-10/12 flex flex-col gap-8 mb-12">
              <h1 className="text-4xl font-thin">What is <span className="font-semibold">IELTS?</span></h1>
              <p className="text-lg font-sans font-thin"><span className="font-semibold">IELTS (International English Language Testing System) </span>is one of the globally recognized English proficiency tests taken by millions worldwide for education and immigration purposes. IELTS offers two modules : IELTS Academic(for undergraduate or postgraduate study) and IELTS General Training(for work or immigration). Additionally, IELTS for UKVI (United Kingdom Visa & Immigration) is specifically for proving English proficiency for UK visa and immigration purposes. The IELTS Academic module consists of four sections and takes approximately 2 hours and 40 minutes to complete..</p>
        </div>
      </div>
    )
  }
  
  export default IeltsCard1;
  
  
  