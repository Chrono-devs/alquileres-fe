const ArsPrice = (price) => {
    if (price == null || price === '') return '';
    const n = Number(price);
    if (Number.isNaN(n)) return '';
    // Formato argentino: separador de miles con punto, sin decimales ni símbolo
    return n.toLocaleString('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};

export default ArsPrice;