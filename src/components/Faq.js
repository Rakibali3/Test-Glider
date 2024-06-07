import { useState } from "react";
const Faq = () => {
    const [item1, setItem1] = useState(false);
    const [item2, setItem2] = useState(false);
    const [item3, setItem3] = useState(false);
    const [item4, setItem4] = useState(false);
    const item1show = () => {
        setItem1(item1 ? false : true);
    }
    const item2show = () => {
        setItem2(item2 ? false : true);
    }
    const item3show = () => {
        setItem3(item3 ? false : true);
    }
    const item4show = () => {
        setItem4(item4 ? false : true);
    }
    return (
        <div className=" m-14">
            <div><h1 className="text-center text-5xl font-medium m-8">FAQ</h1></div>
            <div className="flex flex-col gap-10">
                <div className="border-b-2 border-gray-200  flex flex-col items-center w-8/12  m-auto">
                    <div className="flex w-full  justify-between  items-center p-2 cursor-pointer font-semibold text-lg" onClick={item1show}>
                        <p>How do I start using TestGlider?</p>
                        <i className={`fa-solid ${item1 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                    </div>
                    {item1 && <div className="m-2">
                        <p>TestGlider can be accessed via PCs (desktops or laptops) and mobile apps.To familiarize yourself with the actual testing environment, we recommend using TestGlider with PC settings using Google Chrome browser.</p>
                    </div>}
                </div>
                <div className="border-b-2 border-gray-200  flex flex-col items-center w-8/12  m-auto">
                    <div className="flex w-full  justify-between  items-center p-2 cursor-pointer font-semibold text-lg" onClick={item2show}>
                        <p>Is TestGlider free?</p>
                        <i className={`fa-solid ${item2 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                    </div>
                    {item2 && <div className="m-2">
                        <p>TestGlider offers one free TOEFL / IELTS mock test and sample study materials (practice questions and lectures) free of charge to all users. Additional content access requires a paid membership at TestGlider. Please visit our 'Pricing' page for more information about TestGlider's product and pricing.</p>
                    </div>}
                </div>
                <div className="border-b-2 border-gray-200  flex flex-col items-center w-8/12  m-auto">
                    <div className="flex w-full  justify-between  items-center p-2 cursor-pointer font-semibold text-lg" onClick={item3show}>
                        <p>Are your mock tests similar to the actual exams?</p>
                        <i className={`fa-solid ${item3 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                    </div>
                    {item3 && <div className="m-2">
                        <p>TestGlider's mock tests are designed by content experts to closely resemble the actual exam. Moreover, TestGlider's content is up-to-date with the latest question types and trends of the TOEFL and IELTS tests.</p>
                    </div>}
                </div>
                <div className="border-b-2 border-gray-200  flex flex-col items-center w-8/12  m-auto">
                    <div className="flex w-full  justify-between  items-center p-2 cursor-pointer font-semibold text-lg" onClick={item4show}>
                        <p>How long does grading take?</p>
                        <i className={`fa-solid ${item4 ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                    </div>
                    {item4 && <div className="m-2">
                        <p>You can expect to see your Speaking score in about 2 minutes, and your Writing score in about 30 seconds. If your scores don't appear within the timeframe, please wait a moment and then refresh the page.</p>
                    </div>}
                </div>
                <button className="bg-black text-white text-lg font-bold rounded-xl w-3/12 m-auto p-3">MORE QUESTIONS?</button>
            </div>
        </div>
    )
}
export default Faq;