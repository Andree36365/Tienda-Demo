const products = [
    {
        id: 1,
        name: "Computadora gamer",
        price: 26880,
        category: "electronica",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_631353-MLA99892724083_112025-F.webp"
    },
    {
        id: 2,
        name: "Play Station 5",
        price: 8000,
        category: "electronica",
        image: "https://m.media-amazon.com/images/I/81Gvp8qA+tL._AC_SX679_.jpg"
    },
    {
        id: 3,
        name: "Control ps5 edicion especial GOW”",
        price: 900,
        category: "electronica",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_744053-MLA99533079980_122025-F.webp"
    },
    {
        id: 4,
        name: "Audífonos Sony inalambrico",
        price: 700,
        category: "electronica",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_963414-MLA99445666920_112025-F.webp"
    },
    {
        id: 5,
        name: "XIAOMI Watch 2 Smartwatch Negro",
        price: 2290,
        category: "electronica",
        image: "https://m.media-amazon.com/images/I/714OEqQRMFL._AC_SY300_SX300_QL70_ML2_.jpg"
    },
    {
        id: 6,
        name: "Camisa polo crema de mangas cortas",
        price: 290,
        category: "ropa",
        image: "https://m.media-amazon.com/images/I/81Ga7uBcoWL._AC_SX385_.jpg"
    },
    {
        id: 7,
        name: "Camisa polo negra de mangas cortas",
        price: 380,
        category: "ropa",
        image: "https://m.media-amazon.com/images/I/61QGdvAhc1L._AC_SX522_.jpg"
    },
    {
        id: 8,
        name: "Pantalones militares",
        price: 350,
        category: "ropa",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JkWx-SVfXxY8odtb_nn-3SugXtYYqYQJww&s"
    },
    {
        id: 9,
        name: "Pantalones Casuales para Hombre Pantalones Cargo",
        price: 390,
        category: "ropa",
        image: "https://m.media-amazon.com/images/I/51hNJFTFLRL._AC_SX679_.jpg"
    },
    {
        id: 10,
        name: "Pantalones caqui para hombre",
        price: 300,
        category: "ropa",
        image: "https://i5.walmartimages.com/asr/a9ff3182-c324-4247-b424-a4cb6c112227.afaf33a21fdce45b71635ea5138bff4a.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
        id: 11,
        name: "El color del expacio exterior",
        price: 280,
        category: "libros",
        image: "https://nordicalibros.com/wp-content/uploads/2020/10/9788418067976-600x860.jpg"
    },
    {
        id: 12,
        name: "El que susurra en la obsucuridad",
        price: 280,
        category: "libros",
        image: "https://www.valdemar.com/wp-content/uploads/CD-316-460x695.jpg"
    },
    {
        id: 13,
        name: "En las montañas de la locura",
        price: 280,
        category: "libros",
        image: "https://www.valdemar.com/wp-content/uploads/CD-216.jpg"
    },
    {
        id: 14,
        name: "No tengo boca y debo gritar",
        price: 280,
        category: "libros",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0D5cp-Y211iiTjSolakpyBajnq0Ly48JAOw&s"
    },
    {
        id: 15,
        name: "Meridiano de sangre",
        price: 280,
        category: "libros",
        image: "https://images.cdn2.buscalibre.com/fit-in/360x360/4c/f6/4cf60415f1ea9b0f2b05c9bf341efade.jpg"
    },
    {
        id: 16,
        name: "Buro de madera",
        price: 800,
        category: "muebles",
        image: "https://m.media-amazon.com/images/I/61v-jd5ixUL._AC_SY300_SX300_QL70_ML2_.jpg"
    },
    {
        id: 17,
        name: "Silla de terceopelo",
        price: 1200,
        category: "muebles",
        image: "https://m.media-amazon.com/images/I/81QraCE1juL._AC_SY300_SX300_QL70_ML2_.jpg"
    },
    {
        id: 18,
        name: "Cama kigzise",
        price: 2000,
        category: "muebles",
        image: "https://m.media-amazon.com/images/I/91yKb5+PMiL._AC_SX679_.jpg"
    },
    {
        id: 19,
        name: "Sofa de tercipelo",
        price: 1800,
        category: "muebles",
        image: "https://m.media-amazon.com/images/I/81nHiopzQUL._AC_SY300_SX300_QL70_ML2_.jpg"
    },
    {
        id: 20,
        name: "Mesa de bar",
        price: 900,
        category: "muebles",
        image: "https://m.media-amazon.com/images/I/61RRlMjYR+L._AC_SY300_SX300_QL70_ML2_.jpg"
    },
    {
        id: 21,
        name: "Carmela MÍA Collar con dije de cruz",
        price: 1290,
        category: "joyeria",
        image: "https://ss571.liverpool.com.mx/xl/1187705181.jpg"
    },
    {
        id: 22,
        name: "Pulsera De Tenis",
        price: 300,
        category: "joyeria",
        image: "https://m.media-amazon.com/images/I/61jQUFKPvCL._AC_SX679_.jpg"
    },
    {
        id: 23,
        name: "Cadena De Plata Para Mujer Collar De Corazon Dijes",
        price: 500,
        category: "joyeria",
        image: "https://m.media-amazon.com/images/I/51CzMAwEiPL._AC_SX679_.jpg"
    },
    {
        id: 24,
        name: "Pulsera De Tenis De Zafiro",
        price: 400,
        category: "joyeria",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_997079-MLM79597700853_092024-F.webp"
    },
    {
        id: 25,
        name: "Pulsera De Plata",
        price: 300,
        category: "joyeria",
        image: "https://m.media-amazon.com/images/I/6146TKgCz6L._AC_SX679_.jpg"
    },
    {
        id: 26,
        name: "Coderas Muay Thai Mma",
        price: 279,
        category: "deportes",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_656731-MLM82553388760_032025-F-coderas-muay-thai-mma-muhai-team-para-entrenamiento.webp"
    },
    {
        id: 27,
        name: "Spinilleras",
        price: 1000,
        category: "deportes",
        image: "https://resources.sanborns.com.mx/medios-plazavip/t1/1738538618147png?scale=500&qlty=75"
    },
    {
        id: 28,
        name: "Guantes RDX de MMA para sparring",
        price: 900,
        category: "deportes",
        image: "https://m.media-amazon.com/images/I/71RWrxJL3rL._AC_SX569_.jpg"
    },
    {
        id: 29,
        name: "Short RDX de MMA",
        price: 600,
        category: "deportes",
        image: "https://rdxsports.mx/cdn/shop/files/blue_01.jpg?v=1756513356&width=600"
    },
    {
        id: 30,
        name: "Mizuno T10 Plus Rodillera",
        price: 400,
        category: "deportes",
        image: "https://m.media-amazon.com/images/I/618yftwszxL._AC_SX300_SY300_QL70_ML2_.jpg"
    },

];
let cart = [];
const productsContainer = document.getElementById("productsContainer");
const cartPanel = document.getElementById("cartPanel");
const cartBtn = document.getElementById("cartBtn");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const subtotal = document.getElementById("subtotal");
const searchInput = document.getElementById("searchInput");
function displayProducts(list) {
    productsContainer.innerHTML = "";
    list.forEach(p => {
        productsContainer.innerHTML += `
            <div class="product-card">
                <img src="${p.image}">
                <h3>${p.name}</h3>
                <p>$${p.price}.00</p>
                <button class="add-btn" onclick="addToCart(${p.id})">Agregar</button>
            </div>
        `;
    });
}
displayProducts(products);
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const exists = cart.find(p => p.id === id);
    if (exists) {
        exists.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}">
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price}.00 c/u</p>

                    <div class="quantity-controls">
                        <button onclick="changeQty(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQty(${item.id}, 1)">+</button>
                    </div>

                    <button onclick="removeItem(${item.id})" style="margin-top:5px;color:red;background:none;border:none;cursor:pointer;">Quitar</button>
                </div>
            </div>
        `;
    });
    cartCount.textContent = cart.length;
    subtotal.textContent = `$${total}.00`;
}
function changeQty(id, change) {
    const item = cart.find(p => p.id === id);
    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    updateCart();
}
function removeItem(id) {
    cart = cart.filter(p => p.id !== id);
    updateCart();
}
cartBtn.addEventListener("click", () => {
    cartPanel.classList.toggle("open");
});

const closeCart = document.getElementById("closeCart");
closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("open");
});
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const category = btn.dataset.category;

        if (category === "all") {
            displayProducts(products);
        } else {
            displayProducts(products.filter(p => p.category === category));
        }
    });
});
searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    displayProducts(products.filter(p => p.name.toLowerCase().includes(text)));
});