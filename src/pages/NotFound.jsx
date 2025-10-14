const NotFound = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-2">404</h1>
      <p className="text-gray-600 mb-4">La página que buscas no existe.</p>
      <a href="/" className="text-sm text-blue-600 hover:underline">Volver al inicio</a>
    </div>
  );
};

export default NotFound;