import { Link } from "react-router-dom";

const Cards = () => {
    return (
        <div>
            <div className="flex gap-8 justify-center  m-10 ">
                <div className=" w-3/5 text-white ">
                    <div className="absolute  p-10 flex flex-col gap-3">
                        <h5 className="text-3xl">Your Journey to</h5>
                        <h3 className="text-5xl font-bold">English Test Success <br />Starts Here</h3>
                    </div>
                    <img src="https://www.testglider.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-section.3b229257.webp&w=1920&q=75" alt="" className="rounded-3xl h-full w-full" />
                </div>
                <div className="flex w-52 flex-col justify-between gap-3 ">
                    <Link to={"/tofel"} className="h-3/6 border-gray-200 border-2 rounded-3xl flex flex-col p-4">
                        <p className="text-blue-600 font-bold text-xl ">TOEFL</p>
                        <p>Global No 1. AI TOEFL</p>
                        <img src="https://www.testglider.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgateway-toefl-l.be10fd08.png&w=384&q=75" alt="" className="h-5/6 " />
                    </Link>
                    <Link to={"/Ielts"} className="h-3/6 border-gray-200 border-2 rounded-3xl flex flex-col p-4">
                        <p className="text-red-600 font-bold text-xl ">IELTS</p>
                        <p>Global No 1. AI IELTS</p>
                        <img src="https://www.testglider.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgateway-ielts-l.f1c5e7f4.png&w=384&q=75" alt="" className="h-5/6 " />
                    </Link>
                </div>
            </div>
            <div className="flex gap-44 justify-center">
                <div className="flex flex-col justify-center items-center">
                    <p>Total Users</p>
                    <p className="text-blue-600 text-4xl font-semibold">690,000+</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p>Countries</p>
                    <p className="text-blue-600 text-4xl font-semibold">202</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p>Tests Completed</p>
                    <p className="text-blue-600 text-4xl font-semibold">1,300,000+</p>
                </div>
            </div>
        </div>
    )
}
export default Cards;