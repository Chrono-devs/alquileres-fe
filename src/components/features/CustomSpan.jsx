

const CustomSpan = ({ children, className }) => {

    return (
        <span className={`text-sm text-gray-600 select-none ${className}`}>{children}</span>
    )
}

export default CustomSpan;