import { CustomButton } from "./CustomButton";
import ArsPrice from '@utils/ArsPrice';

const TargetPricing = ({ planName, popular, price, description, buttonText, list = [] }) => {
    return (
        <figure className="bg-gray-100 rounded-lg text-center flex flex-col justify-between space-y-4 shadow-md">
            <header className="inline-flex overflow-hidden px-6 pt-6 w-full">
                <span className="bg-purple-600 text-white py-2 w-full text-md tracking-widest font-semibold rounded-md z-10 -mr-2">{planName}</span>
                <span className="bg-gray-200 text-purple-600 py-2 w-full text-md tracking-widest font-semibold rounded-md">{popular}</span>
            </header>
            <section className="flex items-baseline justify-center space-x-2 mt-2">
                <span className="text-2xl font-medium text-black">$</span>
                <span className="text-4xl font-sans text-black">{ArsPrice(price)}</span>
                <span className="text-gray-500 text-lg ml-1">/ mes</span>
            </section>
            <aside>
                <p className="text-gray-600 text-md">{description}</p>
            </aside>
            <hr className="text-gray-300 w-full" />
            <ul className="flex flex-col space-y-5  p-6 text-gray-700 text-md w-full text-left">
                {list.map((item, index) => (
                    <li className=" text-md list-inside list-none" key={index}>{item}</li>
                ))}
            </ul>
            <hr className="text-gray-300 w-full" />
            <footer className="px-6 pb-6">
                <CustomButton labelText={buttonText} className="w-full" />
            </footer>
        </figure>
    )
}

export default TargetPricing;