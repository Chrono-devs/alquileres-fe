import { CustomButton } from "./CustomButton";

const TargetPricing= ({planName, popular, price, description, buttonText, list = []}) => {
    return(
        <div className="bg-gray-100 w-72 h-96 p-6 rounded-lg text-center space-y-4 shadow-md">
            <div className="inline-flex overflow-hidden ">
                <span className="bg-purple-600 text-white px-5 py-1 text-sm rounded-md relative z-10 -mr-2">{planName}</span>
                <span className="bg-gray-200 text-purple-500 px-5 py-1 text-sm rounded-md">{popular}</span>
            </div>

            <div className="flex items-baseline items-center justify-center space-x-2 mt-5">
                <span className="text-xl font-bold text-black relative -top-4">$</span>
                <span className="text-3xl font-sans text-black relative -top-2 text-">{price}</span>
                <span className="text-gray-500 ml-1">/ month</span>
            </div>

            <p className="text-gray-600 text-sm">{description}</p>

            <hr className="text-gray-200 mx-auto"/>

            <div className="flex flex-col space-y-5 text-gray-700 text-sm leading-none w-full text-left">
                {list.map((item, index)=> (
                    <div key={index}>{item}</div>
                ))}
            </div>

            <hr className="text-gray-200 mx-auto" />

            <CustomButton labelText={buttonText} className="w-full"/>

        </div>
    )
}

export default TargetPricing;