const API_CARRITOS = "https://pcomponent-backend-sn6t.onrender.com/api/carrito";
const API_PRODUCTOS = "https://pcomponent-backend-sn6t.onrender.com/api/producto";

const CarritoService = {
  obtenerProducto: async (id) => {
    const res = await fetch(`${API_PRODUCTOS}/${id}`);
    if (!res.ok) throw new Error("Error obteniendo producto desde el backend");
    return res.json();
  },

  agregarProducto: async (carritoId, productoId) => {
    const res = await fetch(`${API_CARRITOS}/${carritoId}/agregar/${productoId}`, {
      method: "POST",
    });
    if (!res.ok) throw new Error("Error agregando producto al carrito");
    return res.json();
  },
};

export default CarritoService;
