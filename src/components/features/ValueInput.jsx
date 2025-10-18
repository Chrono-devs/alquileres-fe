import CustomSpan from "../ui/CustomSpan";

const ValueInput = ({type, label, value, onChange }) => {
    return (
        <label className="flex flex-col gap-1">
            <CustomSpan>{label}</CustomSpan>
            <input type={type} value={value} onChange={onChange} className="border border-gray-400 rounded-xl px-3 py-2" placeholder="100000" />
        </label>
    )
}
export default ValueInput;