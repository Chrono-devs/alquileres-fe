export const FormInput = ({ label, type = "text", id, placeholder }) => {
  return (
    <label htmlFor={id} className="flex justify-between items-center">
      {label}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="p-2 border-stone-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 "
        autoComplete="off"
      />
    </label>
  );
};
