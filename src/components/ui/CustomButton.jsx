export const CustomButton = ({ labelText, type = "submit" }) => {
  return (
    <button
      type={type}
      className="bg-purple-600 hover:bg-purple-700 transition-colors font-semibold text-white py-3 rounded-md text-md tracking-wider shadow-md cursor-pointer"
    >
      {labelText}
    </button>
  );
};

//debo ir a comer
// si puedes comitea el customButton nomas asi lo arreglo si es q ahi algo mal (me sali de la llamada)