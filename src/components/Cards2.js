const Cards2 = () => {
    return (
        <div className="w-full bg-white">
            <div className=" flex flex-col justify-center items-center gap-3 mt-28 mb-16">
                <h3 className="text-3xl">Money worries for English test prep?</h3>
                <h1 className="text-5xl font-semibold">Unlock Core Content at an Affordable Price</h1>
            </div>
            <div className="flex justify-center items-center gap-14">
                <div className="flex flex-col items-center gap-3">
                    <img src="https://www.testglider.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffee-toefl.87bfc9f1.png&w=256&q=75" alt="" className="h-[80px] w-[80px]" />
                    <p><span className="line-through text-gray-500 text-xs">$43.70</span><span className="text-red-600 font-semibold text-sm"> 20% OFF</span></p>
                    <p className="flex items-center justify-center gap-1"><span className="font-bold text-3xl">$34.99</span> <span className="text-xl">/Month</span></p>
                    <div className="bg-[rgb(233,237,238)] w-48 h-56 rounded-xl flex flex-col justify-around items-center">
                        <p className="font-bold"><span className="text-blue-600">12</span> Sets</p>
                        <p className="text-blue-600  font-bold">210</p>
                        <p className="text-blue-600 font-bold">32</p>
                    </div>
                    <button className="bg-blue-600 w-48 text-white font-bold p-3 rounded-xl text-lg hover:bg-blue-700">LEARN MORE</button>
                </div>

                <div className="flex flex-col gap-12 mt-28 justify-center items-center font-bold   ">
                    <p>Full Mock Tests</p>
                    <p>Practice Questions</p>
                    <p>Lecturesi</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <img src="https://www.testglider.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffee-ielts.a056b9e0.png&w=384&q=75" alt="" className="h-[80px] w-[80px]" />
                    <p><span className="line-through text-gray-500 text-xs">$39.99</span><span className="text-red-600 font-semibold text-sm"> 20% OFF</span></p>
                    <p className="flex items-center justify-center gap-1"><span className="font-bold text-3xl">$19.99</span> <span className="text-xl">/Month</span></p>
                    <div className="bg-[rgb(233,237,238)] w-48 h-56 rounded-xl flex flex-col justify-around items-center">
                        <p className="font-bold"><span className="text-red-600">9</span> Sets</p>
                        <p className="text-red-600  font-bold">780</p>
                        <p className="text-red-600 font-bold">34</p>
                    </div>
                    <button className="bg-blue-600 w-48 text-white font-bold p-3 rounded-xl text-lg hover:bg-blue-700">LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}
export default Cards2;