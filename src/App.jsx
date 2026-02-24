import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  /* ================= ESTADOS ================= */

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [nuevaContraseña, setNuevaContraseña] = useState("");
  const [logueado, setLogueado] = useState(false);
  const [vistaAuth, setVistaAuth] = useState("login");
  const [carrito, setCarrito] = useState([]);
  const [paginaActiva, setPaginaActiva] = useState("inicio");
  const [categoriaActiva, setCategoriaActiva] = useState(null);

  /* ================= PRODUCTOS REALISTAS ================= */

  const categorias = {

    tecnologia: [
      {
        id: 1,
        nombre: "Smartwatch Hingso ID208Plus",
        precio: 384990,
        imagen: "https://m.media-amazon.com/images/I/71paj09M93L.jpg"
      },
      {
        id: 2,
        nombre: "Kensington K33271WW Mouse",
        precio: 191630,
        imagen: "https://source.unsplash.com/300x200/?mouse,computer"
      },
      {
        id: 3,
        nombre: "WCZ Mini Impresora M02X",
        precio: 123990,
        imagen: "https://source.unsplash.com/300x200/?mini,printer"
      },
      {
        id: 4,
        nombre: "Xiaomi Redmi 9",
        precio: 250000,
        imagen: "https://source.unsplash.com/300x200/?smartphone"
      },
      {
        id: 5,
        nombre: "Teclado Mecánico RGB",
        precio: 79990,
        imagen: "https://source.unsplash.com/300x200/?keyboard"
      },
      {
        id: 6,
        nombre: "Auriculares Gaming",
        precio: 149990,
        imagen: "https://source.unsplash.com/300x200/?gaming,headphones"
      },
      {
        id: 7,
        nombre: "Laptop Notebook 15''",
        precio: 1599000,
        imagen: "https://source.unsplash.com/300x200/?laptop"
      },
      {
        id: 8,
        nombre: "Monitor 24'' FHD",
        precio: 499900,
        imagen: "https://source.unsplash.com/300x200/?monitor"
      },
      {
        id: 9,
        nombre: "Teclado + Mouse Combo",
        precio: 104230,
        imagen: "https://source.unsplash.com/300x200/?keyboard,mouse"
      },
      {
        id: 10,
        nombre: "Webcam HD 1080p",
        precio: 89990,
        imagen: "https://source.unsplash.com/300x200/?webcam"
      },
    ],

    ropa: [
      {
        id: 1,
        nombre: "Jean Clásico Azul",
        precio: 89990,
        imagen: "https://source.unsplash.com/300x200/?jeans"
      },
      {
        id: 2,
        nombre: "Camiseta Casual Hombre",
        precio: 39990,
        imagen: "https://source.unsplash.com/300x200/?tshirt"
      },
      {
        id: 3,
        nombre: "Sudadera con Capucha",
        precio: 109990,
        imagen: "https://source.unsplash.com/300x200/?hoodie"
      },
      {
        id: 4,
        nombre: "Vestido Elegante Mujer",
        precio: 129990,
        imagen: "https://source.unsplash.com/300x200/?dress"
      },
      {
        id: 5,
        nombre: "Tenis Deportivo",
        precio: 149990,
        imagen: "https://source.unsplash.com/300x200/?sneakers"
      },
      {
        id: 6,
        nombre: "Chaqueta Impermeable",
        precio: 179990,
        imagen: "https://source.unsplash.com/300x200/?jacket"
      },
      {
        id: 7,
        nombre: "Sombrero de Moda",
        precio: 39990,
        imagen: "https://source.unsplash.com/300x200/?hat"
      },
      {
        id: 8,
        nombre: "Pantalón Chino",
        precio: 109990,
        imagen: "https://source.unsplash.com/300x200/?pants"
      },
      {
        id: 9,
        nombre: "Blusa Verano Mujer",
        precio: 49990,
        imagen: "https://source.unsplash.com/300x200/?blouse"
      },
      {
        id: 10,
        nombre: "Correa Cuero Hombre",
        precio: 39990,
        imagen: "https://source.unsplash.com/300x200/?belt"
      },
    ],

    cine: [
      {
        id: 1,
        nombre: "Boleta Cine Adulto",
        precio: 15000,
        imagen: "https://source.unsplash.com/300x200/?cinema,ticket"
      },
      {
        id: 2,
        nombre: "Boleta Cine Niño",
        precio: 12000,
        imagen: "https://source.unsplash.com/300x200/?movie,kids"
      },
      {
        id: 3,
        nombre: "Combo Palomitas + Gaseosa",
        precio: 10000,
        imagen: "https://source.unsplash.com/300x200/?popcorn,soda"
      },
      {
        id: 4,
        nombre: "Combo Nachos + Queso",
        precio: 12000,
        imagen: "https://source.unsplash.com/300x200/?nachos"
      },
      {
        id: 5,
        nombre: "Boleta VIP",
        precio: 25000,
        imagen: "https://source.unsplash.com/300x200/?vip,cinema"
      },
      {
        id: 6,
        nombre: "Galletas Cine",
        precio: 5000,
        imagen: "https://source.unsplash.com/300x200/?cookies,movie"
      },
      {
        id: 7,
        nombre: "Refresco Personal",
        precio: 4000,
        imagen: "https://source.unsplash.com/300x200/?drink"
      },
      {
        id: 8,
        nombre: "Helado Cine",
        precio: 7000,
        imagen: "https://source.unsplash.com/300x200/?icecream"
      },
      {
        id: 9,
        nombre: "Combo Familiar",
        precio: 45000,
        imagen: "https://source.unsplash.com/300x200/?family,movie"
      },
      {
        id: 10,
        nombre: "Entrada 3D",
        precio: 20000,
        imagen: "https://source.unsplash.com/300x200/?3d,movie"
      },
    ],

    muebles: [
      {
        id: 1,
        nombre: "Silla Oficina Ergonomica",
        precio: 249990,
        imagen: "https://source.unsplash.com/300x200/?office,chair"
      },
      {
        id: 2,
        nombre: "Mesa Comedor Madera",
        precio: 399990,
        imagen: "https://source.unsplash.com/300x200/?dining,table"
      },
      {
        id: 3,
        nombre: "Sofá 3 Plazas",
        precio: 799990,
        imagen: "https://source.unsplash.com/300x200/?sofa"
      },
      {
        id: 4,
        nombre: "Estantería Moderna",
        precio: 199990,
        imagen: "https://source.unsplash.com/300x200/?shelf"
      },
      {
        id: 5,
        nombre: "Cama Queen",
        precio: 599990,
        imagen: "https://source.unsplash.com/300x200/?bed"
      },
      {
        id: 6,
        nombre: "Lámpara de Mesa",
        precio: 49990,
        imagen: "https://source.unsplash.com/300x200/?lamp"
      },
      {
        id: 7,
        nombre: "Silla Comedor",
        precio: 149990,
        imagen: "https://source.unsplash.com/300x200/?dining,chair"
      },
      {
        id: 8,
        nombre: "Escritorio Oficina",
        precio: 299990,
        imagen: "https://source.unsplash.com/300x200/?desk"
      },
      {
        id: 9,
        nombre: "Mueble TV",
        precio: 219990,
        imagen: "https://source.unsplash.com/300x200/?tv,stand"
      },
      {
        id: 10,
        nombre: "Silla Gamer",
        precio: 349990,
        imagen: "https://source.unsplash.com/300x200/?gaming,chair"
      },
    ],

    viajes: [
      {
        id: 1,
        nombre: "Vuelo Bogotá-Medellín",
        precio: 250000,
        imagen: "https://source.unsplash.com/300x200/?airplane"
      },
      {
        id: 2,
        nombre: "Paquete Hotel 3 Noches",
        precio: 450000,
        imagen: "https://source.unsplash.com/300x200/?hotel"
      },
      {
        id: 3,
        nombre: "Tour Cultural Ciudad",
        precio: 120000,
        imagen: "https://source.unsplash.com/300x200/?tour"
      },
      {
        id: 4,
        nombre: "Vuelo Internacional",
        precio: 1200000,
        imagen: "https://source.unsplash.com/300x200/?international,flight"
      },
      {
        id: 5,
        nombre: "Crucero Familiar",
        precio: 3500000,
        imagen: "https://source.unsplash.com/300x200/?cruise"
      },
      {
        id: 6,
        nombre: "Paquete Spa",
        precio: 250000,
        imagen: "https://source.unsplash.com/300x200/?spa"
      },
      {
        id: 7,
        nombre: "Tour Aventura",
        precio: 200000,
        imagen: "https://source.unsplash.com/300x200/?adventure"
      },
      {
        id: 8,
        nombre: "Viaje Romántico",
        precio: 300000,
        imagen: "https://source.unsplash.com/300x200/?romantic,travel"
      },
      {
        id: 9,
        nombre: "Vuelo Interno",
        precio: 180000,
        imagen: "https://source.unsplash.com/300x200/?plane"
      },
      {
        id: 10,
        nombre: "Tour Gastronómico",
        precio: 150000,
        imagen: "https://source.unsplash.com/300x200/?food,tour"
      },
    ],

    mascotas: [
      {
        id: 1,
        nombre: "Cama para Mascotas",
        precio: 79990,
        imagen: "https://source.unsplash.com/300x200/?pet,bed"
      },
      {
        id: 2,
        nombre: "Comida para Perros 5kg",
        precio: 109990,
        imagen: "https://source.unsplash.com/300x200/?dog,food"
      },
      {
        id: 3,
        nombre: "Juguete Peluche Gato",
        precio: 29990,
        imagen: "https://source.unsplash.com/300x200/?cat,toy"
      },
      {
        id: 4,
        nombre: "Correa Ajustable",
        precio: 39990,
        imagen: "https://source.unsplash.com/300x200/?leash"
      },
      {
        id: 5,
        nombre: "Plato de Agua",
        precio: 19990,
        imagen: "https://source.unsplash.com/300x200/?pet,bowl"
      },
      {
        id: 6,
        nombre: "Rascador para Gatos",
        precio: 59990,
        imagen: "https://source.unsplash.com/300x200/?cat,scratcher"
      },
      {
        id: 7,
        nombre: "Transportín Mascotas",
        precio: 129990,
        imagen: "https://source.unsplash.com/300x200/?pet,carrier"
      },
      {
        id: 8,
        nombre: "Cama Sofá Perro",
        precio: 109990,
        imagen: "https://source.unsplash.com/300x200/?dog,bed"
      },
      {
        id: 9,
        nombre: "Hueso de Juguete",
        precio: 19990,
        imagen: "https://source.unsplash.com/300x200/?dog,bone"
      },
      {
        id: 10,
        nombre: "Cepillo Mascotas",
        precio: 29990,
        imagen: "https://source.unsplash.com/300x200/?pet,brush"
      },
    ],

    cosmeticos: [
      {
        id: 1,
        nombre: "Labial Rojo",
        precio: 39990,
        imagen: "https://source.unsplash.com/300x200/?lipstick"
      },
      {
        id: 2,
        nombre: "Perfume Floral",
        precio: 129990,
        imagen: "https://source.unsplash.com/300x200/?perfume"
      },
      {
        id: 3,
        nombre: "Crema Facial",
        precio: 59990,
        imagen: "https://source.unsplash.com/300x200/?face,cream"
      },
      {
        id: 4,
        nombre: "Sombras Ojos",
        precio: 49990,
        imagen: "https://source.unsplash.com/300x200/?eyeshadow"
      },
      {
        id: 5,
        nombre: "Esmalte Uñas",
        precio: 19990,
        imagen: "https://source.unsplash.com/300x200/?nailpolish"
      },
      {
        id: 6,
        nombre: "Mascarilla Facial",
        precio: 39990,
        imagen: "https://source.unsplash.com/300x200/?mask,face"
      },
      {
        id: 7,
        nombre: "Crema Manos",
        precio: 29990,
        imagen: "https://source.unsplash.com/300x200/?hand,cream"
      },
      {
        id: 8,
        nombre: "Aceite Corporal",
        precio: 59990,
        imagen: "https://source.unsplash.com/300x200/?body,oil"
      },
      {
        id: 9,
        nombre: "Desodorante Mujer",
        precio: 19990,
        imagen: "https://source.unsplash.com/300x200/?deodorant"
      },
      {
        id: 10,
        nombre: "Polvo Compacto",
        precio: 49990,
        imagen: "https://source.unsplash.com/300x200/?powder,face"
      },
    ],

    juguetes: [
      {
        id: 1,
        nombre: "Muñeca Barbie",
        precio: 79990,
        imagen: "https://source.unsplash.com/300x200/?barbie"
      },
      {
        id: 2,
        nombre: "Carrito de Juguete",
        precio: 49990,
        imagen: "https://source.unsplash.com/300x200/?toy,car"
      },
      {
        id: 3,
        nombre: "Puzzle 500 Piezas",
        precio: 39990,
        imagen: "https://source.unsplash.com/300x200/?puzzle"
      },
      {
        id: 4,
        nombre: "Pelota Saltarina",
        precio: 19990,
        imagen: "https://source.unsplash.com/300x200/?ball,toy"
      },
      {
        id: 5,
        nombre: "Lego Set",
        precio: 149990,
        imagen: "https://source.unsplash.com/300x200/?lego"
      },
      {
        id: 6,
        nombre: "Avión de Juguete",
        precio: 69990,
        imagen: "https://source.unsplash.com/300x200/?toy,plane"
      },
      {
        id: 7,
        nombre: "Muñeco Superhéroe",
        precio: 89990,
        imagen: "https://source.unsplash.com/300x200/?action,figure"
      },
      {
        id: 8,
        nombre: "Rompecabezas 3D",
        precio: 119990,
        imagen: "https://source.unsplash.com/300x200/?3d,puzzle"
      },
      {
        id: 9,
        nombre: "Juguete Educativo",
        precio: 69990,
        imagen: "https://source.unsplash.com/300x200/?educational,toy"
      },
      {
        id: 10,
        nombre: "Peluche Gigante",
        precio: 159990,
        imagen: "https://source.unsplash.com/300x200/?giant,plush"
      },
    ],
  };

  /* ================= LOGIN ================= */

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuario(usuarioGuardado);
      setLogueado(true);
    }
  }, []);

  const manejarLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, clave: contraseña }),
    });
    const data = await res.json();
    if (data.success) {
      setLogueado(true);
      localStorage.setItem("usuario", data.usuario);
      setContraseña("");
    } else {
      alert(data.message);
    }
  };

  const manejarRegistro = async () => {
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, clave: contraseña }),
    });
    const data = await res.json();
    alert(data.message);
    setVistaAuth("login");
  };

  const manejarRecuperar = async () => {
    const res = await fetch("http://localhost:3000/recuperar", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, nuevaClave: nuevaContraseña }),
    });
    const data = await res.json();
    alert(data.message);
    setVistaAuth("login");
  };

  const cerrarSesion = () => {
    setLogueado(false);
    setUsuario("");
    setContraseña("");
    setNuevaContraseña("");
    setCarrito([]);
    localStorage.removeItem("usuario");
  };

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  /* ================= AUTH ================= */

  if (!logueado) {
    return (
      <div className="pagina-login">
        <div className="formulario-login">
          <h1>Mallplaza</h1>
          {vistaAuth === "login" && (
            <>
              <h2>Iniciar Sesión</h2>
              <form onSubmit={manejarLogin}>
                <input
                  type="text"
                  placeholder="Usuario"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
                <button type="submit">Ingresar</button>
              </form>
              <button className="btn-secundario" onClick={() => setVistaAuth("registro")}>
                Crear cuenta
              </button>
              <button className="btn-secundario" onClick={() => setVistaAuth("recuperar")}>
                Recuperar contraseña
              </button>
            </>
          )}
          {vistaAuth === "registro" && (
            <>
              <h2>Registro</h2>
              <input
                type="text"
                placeholder="Nuevo usuario"
                onChange={(e) => setUsuario(e.target.value)}
              />
              <input
                type="password"
                placeholder="Nueva contraseña"
                onChange={(e) => setContraseña(e.target.value)}
              />
              <button onClick={manejarRegistro}>Registrar</button>
              <button className="volver-btn" onClick={() => setVistaAuth("login")}>
                Volver
              </button>
            </>
          )}
          {vistaAuth === "recuperar" && (
            <>
              <h2>Recuperar contraseña</h2>
              <input
                type="text"
                placeholder="Usuario"
                onChange={(e) => setUsuario(e.target.value)}
              />
              <input
                type="password"
                placeholder="Nueva contraseña"
                onChange={(e) => setNuevaContraseña(e.target.value)}
              />
              <button onClick={manejarRecuperar}>Actualizar</button>
              <button className="volver-btn" onClick={() => setVistaAuth("login")}>
                Volver
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  /* ================= WEB ================= */

  return (
    <div className="pagina-web">

      <header className="header">
        <h2>Bienvenido {usuario}</h2>
        <div>
          🛒 {carrito.length}
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
      </header>

      <nav className="navbar">
        <button onClick={() => setPaginaActiva("inicio")}>Inicio</button>
        <button onClick={() => setPaginaActiva("categorias")}>Tiendas</button>
        <button onClick={() => setPaginaActiva("ofertas")}>Ofertas</button>
        <button onClick={() => setPaginaActiva("reservas")}>Reservas</button>
      </nav>

      <main className="contenido-web">

        {paginaActiva === "inicio" && (
          <div className="inicio-expandido">
            <h1>Centro Comercial Virtual Mallplaza</h1>
            <p>
              Somos una plataforma digital que conecta a miles de clientes
              con las mejores marcas del país.
              Ofrecemos tecnología, moda, entretenimiento,
              viajes y mucho más en un solo lugar.
            </p>
            <img
              src="https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP4344786A-h-o.jpg"
              alt="Mall"
            />
          </div>
        )}

        {paginaActiva === "categorias" && (
          <>
            <div className="categorias">
              {Object.keys(categorias).map((cat) => (
                <button key={cat} onClick={() => setCategoriaActiva(cat)}>
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {categoriaActiva && (
              <div className="grid-productos">
                {categorias[categoriaActiva].map((prod) => (
                  <div key={prod.id} className="card-producto">
                    <img src={prod.imagen} alt={prod.nombre} />
                    <h4>{prod.nombre}</h4>
                    <p>${prod.precio.toLocaleString()}</p>
                    <button onClick={() => agregarAlCarrito(prod)}>
                      Agregar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {paginaActiva === "ofertas" && (
          <h2>🔥 Ofertas especiales del mes - 20% en todas las categorías</h2>
        )}

        {paginaActiva === "reservas" && (
          <h2>🎬 Reserva tu cine, restaurante o cita en tienda</h2>
        )}

      </main>

      <footer className="footer">
        © 2025 Mallplaza - Proyecto Final
      </footer>

    </div>
  );
}

export default App;
