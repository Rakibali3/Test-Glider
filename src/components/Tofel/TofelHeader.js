import { Link } from "react-router-dom";

const TofelHeader = () => {
    return (
        <div className="bg-[rgb(247,249,251)] w-full h-12 border-b-2 sticky top-19 p-3 z-10">
            <div className="flex gap-6 text-sm font-semibold mx-44">
                <Link>Home</Link>
                <Link>Mock Tests</Link>
                <Link>Study</Link>
                <Link>Analysis</Link>
                <Link>Pricing</Link>
            </div>
        </div>
    )
}
export default TofelHeader;