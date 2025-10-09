import React, { useState } from "react";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [logueado, setLogueado] = useState(false);
  const [carrito, setCarrito] = useState([]);

  const productos = [
    { id: 1, nombre: "Audífonos Bluetooth", precio: 120000 },
    { id: 2, nombre: "Mouse Gamer RGB", precio: 85000 },
    { id: 3, nombre: "Teclado Mecánico", precio: 150000 },
    { id: 4, nombre: "Monitor 24''", precio: 600000 },
    { id: 5, nombre: "Cámara Web HD", precio: 90000 },
    { id: 6, nombre: "Disco SSD 480GB", precio: 200000 },
  ];

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (usuario.trim() === "" || contraseña.trim() === "") {
      alert("Por favor complete todos los campos.");
      return;
    }
    setLogueado(true);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  if (!logueado) {
    return (
      <div className="pagina-login">
        <div className="formulario-login">
          <h1>Mallplaza</h1>
          <p>Inicia sesión para acceder a la tienda</p>

          <form onSubmit={manejarEnvio}>
            <label>Usuario</label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />

            <button type="submit" className="btn-login">
              Iniciar Sesión
            </button>

            <div className="acciones-login">
              <button type="button">Olvidé mi contraseña</button>
              <button type="button">Registrar nuevo usuario</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pagina-web">
      <header className="header">
        <h2>Bienvenido a Mallplaza, {usuario} 🎉</h2>
        <div className="acciones-header">
          <span>🛒 {carrito.length} productos</span>
          <button
            onClick={() => {
              setLogueado(false);
              setUsuario("");
              setContraseña("");
              setCarrito([]);
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="contenido-web">
        <section className="productos">
          <h3>Catálogo de Productos</h3>
          <div className="grid-productos">
            {productos.map((prod) => (
              <div key={prod.id} className="card-producto">
                <h4>{prod.nombre}</h4>
                <p>${prod.precio.toLocaleString()}</p>
                <button onClick={() => agregarAlCarrito(prod)}>
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </section>

        <aside className="carrito">
          <h3>🛍️ Carrito de Compras</h3>
          {carrito.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <ul>
              {carrito.map((item, index) => (
                <li key={index}>
                  {item.nombre} — ${item.precio.toLocaleString()}
                </li>
              ))}
            </ul>
          )}
          <h4>Total: ${total.toLocaleString()}</h4>
        </aside>
      </main>

      <footer className="footer">
        <p>© 2025 Mallplaza - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
