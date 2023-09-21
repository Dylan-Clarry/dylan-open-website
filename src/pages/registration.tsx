import { useState } from "react";
import Navbar from "~/components/Navbar";

const pages = [<CreateAccount />, <AddPlayers />];

export default function Registration() {
    const [currPage, setCurrPage] = useState<number>(0);

    const handleNextPage = () => {
        if (currPage < pages.length - 1) {
            setCurrPage(currPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currPage > 0) {
            setCurrPage(currPage - 1);
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center">
                <div className="flex w-full md:w-1/2 gap-4">
                    <div className="md:w-1/3 border border-black">
                        <h1>The Dylan Open</h1>
                        <p>20 days left</p>
                        <p>Rolling Hills</p>
                        <p>July 21st 2024</p>
                    </div>
                    <div className="md:w-2/3 border border-black">
                        <button onClick={handlePrevPage}>back</button>
                        <h1>Register</h1>
                        {pages[currPage]}
                        <button onClick={handleNextPage}>Next</button>
                    </div>
                </div>
            </div>
        </>
    );
}

function CreateAccount() {
    return (
        <form>
            <div className="w-full">
                <input
                    className="border rounded-sm border-gray-500 text-blue-900"
                    placeholder="First Name"
                />
                <input
                    className="border rounded-sm border-gray-500 text-blue-900"
                    placeholder="Last Name"
                />
            </div>
            <div className="flex flex-col">
                <input
                    className="border rounded-sm border-gray-500 text-blue-900"
                    placeholder="Password"
                />
                <input
                    className="border rounded-sm border-gray-500 text-blue-900"
                    placeholder="Confirm Password"
                />
            </div>
        </form>
    );
}

function AddPlayers() {
    return (
        <form>
            <div className="w-full">
                <input
                    className="border rounded-sm border-gray-500 text-blue-900"
                    placeholder="First Name"
                />
                <input
                    className="border rounded-sm border-gray-500 text-blue-900"
                    placeholder="Last Name"
                />
            </div>
        </form>
    );
}
