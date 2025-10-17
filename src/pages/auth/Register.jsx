import { FormInput } from "@/components/ui/FormInput";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateRegister } from "@/utils/FormsValidate";
import { ErrorAlert } from "@/components/features/ErrorAlert";
import { registerUser } from "@/api/authentication";
import loader from "../../assets/loader.svg";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const validation = validateRegister(data);
    if (!validation.success) {
      setErrorMessage(
        validation.error.issues.map((issue) => issue.message).join("\n")
      );
      return;
    }
    setIsLoading(true);
    const response = await registerUser(validation.data);
    setIsLoading(false);
    if (!response.success) {
      setErrorMessage(response.message);
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      nav("/login");
    }, 5000);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Crear cuenta</h1>
      <form className="flex flex-col gap-4 my-6" onSubmit={handleSubmit}>
        <FormInput label="Nombre" id="name" />
        <FormInput label="Apellido" id="lastname" />
        <FormInput label="Número de teléfono" type="tel" id="phone" />
        <FormInput label="Correo electrónico" type="email" id="email" />
        <FormInput label="Contraseña" type="password" id="password" />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md cursor-pointer"
        >
          Registrarse
        </button>
      </form>
      <span>
        ¿Ya tienes una cuenta?{" "}
        <Link
          to="/login"
          className="text-purple-600 hover:underline font-medium ml-2"
        >
          Inicia sesión
        </Link>
      </span>
      {isLoading && (
        <div
          className="backdrop-blur-sm p-6 rounded absolute top-0 left-0 flex justify-center items-center h-screen w-screen"
          role="alert"
        >
          <img src={loader} alt="Cargando..." className="w-12 h-12 mx-auto" />
        </div>
      )}
      {success && (
        <div
          className="backdrop-blur-sm p-6 rounded absolute top-0 left-0 flex justify-center items-center h-screen w-screen"
          role="alert"
        >
          <div className="bg-green-100 border border-green-400 text-green-700 p-6 rounded">
            Registro exitoso. Por favor, verifica tu correo electrónico.
          </div>
        </div>
      )}
      {errorMessage && (
        <ErrorAlert
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      )}
    </div>
  );
};

export default Register;
