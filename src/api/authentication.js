const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Error en el inicio de sesión");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};