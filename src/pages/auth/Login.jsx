import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormInput } from "@/components/ui/FormInput";
import { loginUser } from "@/api/authentication";
import loader from "../../assets/loader.svg";
import { CustomButton } from "@/components/ui/CustomButton";
import { toast } from "sonner";
import { validateLogin } from "@/utils/FormsValidate";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const validation = validateLogin(data);
    if (!validation.success) {
      toast.error(
        validation.error.issues.map((issue) => issue.message).join("\n")
      );
      return;
    }

    setIsLoading(true);
    const response = await loginUser(validation.data);
    setIsLoading(false);
    if (!response.success) {
      toast.error(response.message);
      return;
    }
    toast.success("Inicio de sesión exitoso.");
    setUser(response.data);
    nav("/dashboard");

  };

  return (
    <div>
      <h1 className="text-xl font-bold">Iniciar sesión</h1>
      <form className="flex flex-col gap-4 my-6" onSubmit={handleSubmit}>
        <FormInput label="Correo electrónico" type="email" id="email" />
        <FormInput label="Contraseña" type="password" id="password" />
        <CustomButton labelText="Iniciar sesión" />
      </form>
      <span>
        ¿No tienes una cuenta?{" "}
        <Link
          to="/register"
          className="text-purple-600 hover:underline font-medium ml-2"
        >
          Regístrate
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
    </div>
  );
};

export default Login;
