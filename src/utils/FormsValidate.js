import { z } from "zod/v4";

export const registerSchema = z.object({
  name: z
    .string("Es necesario proporcionar un nombre valido")
    .min(3, "El nombre debe contener al menos 3 caracteres")
    .max(20, "El nombre no puede contener más de 20 caracteres"),
  lastname: z
    .string("Es necesario proporcionar un apellido de usuario valido")
    .min(3, "El apellido debe contener al menos 3 caracteres")
    .max(20, "El apellido no puede contener más de 20 caracteres"),
  password: z
    .string("Es necesario proporcioanr una contraseña valida")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "La contraseña debe contener al menos 8 caracteres.\nIncluyendo mayúsculas, minúsculas y números"
    ),
  email: z
    .string("Es necesario proporcionar un email valido")
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "El email debe tener un formato valido"
    ),
  phone: z
    .string("Es necesario proporcionar un teléfono válido")
    .min(10, "El número de teléfono debe contener 10 dígitos")
    .max(10, "El número de teléfono debe contener 10 dígitos"),
},"Es necesario proporcionar un body válido");

export const validateRegister = (data) => {
  return registerSchema.safeParse(data);
};
