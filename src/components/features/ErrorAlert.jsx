import { useEffect } from "react";

export const ErrorAlert = ({ errorMessage, setErrorMessage }) => {

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                // Aquí puedes agregar la lógica para ocultar el mensaje de error después de un tiempo
                setErrorMessage(null);
            }, 3000); // Ocultar después de 3 segundos

            return () => clearTimeout(timer);
        }
    }, [errorMessage, setErrorMessage]);

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2" role="alert">
      <p className=" whitespace-pre-line">{errorMessage}</p>
    </div>
  );
};
