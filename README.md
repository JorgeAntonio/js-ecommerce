# JS E-commerce

Un proyecto de e-commerce básico desarrollado con HTML, CSS y JavaScript vanilla que utiliza la API de Fake Store para mostrar productos.

## 📋 Descripción

Simple E-commerce es una aplicación web que simula una tienda en línea básica. Los usuarios pueden:

- Ver una lista de productos obtenidos de la API de Fake Store
- Ver detalles específicos de cada producto
- Agregar productos al carrito de compras
- Ajustar cantidades de productos en la página de detalles
- Ver el contador de productos en el carrito (persistente en localStorage)

## 🚀 Características

- **Interfaz responsive**: Diseño adaptable a diferentes tamaños de pantalla
- **Carga asíncrona**: Los productos se cargan dinámicamente desde la API
- **Carrito persistente**: Los productos del carrito se guardan en localStorage
- **Navegación fluida**: Navegación entre página de productos y detalles
- **Indicadores visuales**: Loading spinner y notificaciones de productos agregados
- **Sistema de calificaciones**: Visualización de estrellas y puntuaciones de productos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura y contenido
- **CSS3**: Estilos y diseño responsive
- **JavaScript (Vanilla)**: Lógica de la aplicación y manipulación del DOM
- **Fake Store API**: Fuente de datos de productos
- **LocalStorage**: Persistencia del carrito de compras

## 📁 Estructura del Proyecto

```
simple-ecommerce/
├── index.html          # Página principal con lista de productos
├── details.html        # Página de detalles del producto
├── index.js            # Lógica para la página principal
├── details.js          # Lógica para la página de detalles
├── utils.js            # Funciones utilitarias compartidas
├── style.css           # Estilos CSS
├── README.md           # Este archivo
└── assets/             # Recursos estáticos
    ├── loader.svg      # Icono de carga
    ├── shopping-bag.svg # Logo de la tienda
    ├── shopping-cart.svg # Icono del carrito
    ├── star.svg        # Icono de estrella para calificaciones
    └── trash-2.svg     # Icono de eliminación
```

## 🌐 API Utilizada

El proyecto consume la [Fake Store API](https://fakestoreapi.com/) para obtener:

- **GET /products**: Lista de todos los productos
- **GET /products/{id}**: Detalles de un producto específico

## 💻 Cómo Ejecutar el Proyecto

### Opción 1: Servidor Local Simple

1. **Clona o descarga el proyecto**
   ```bash
   git clone [url-del-repositorio]
   cd simple-ecommerce
   ```

2. **Inicia un servidor local**
   
   **Con Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Con Node.js (si tienes http-server instalado):**
   ```bash
   npx http-server
   ```

3. **Abre tu navegador**
   
   Visita `http://localhost:8000` en tu navegador web.

### Opción 2: Extensión Live Server (VS Code)

1. **Instala la extensión Live Server** en VS Code
2. **Abre el proyecto** en VS Code
3. **Haz clic derecho** en `index.html`
4. **Selecciona "Open with Live Server"**

### Opción 3: Abrir Directamente (Limitado)

⚠️ **Nota**: Debido a las políticas CORS, abrir el archivo HTML directamente en el navegador puede causar problemas con las peticiones a la API. Se recomienda usar un servidor local.

## 🎯 Funcionalidades Principales

### Página Principal (`index.html`)
- Muestra todos los productos en una cuadrícula
- Cada producto incluye imagen, título, precio y botón "Agregar al carrito"
- Los productos son clickeables para ver detalles
- Indicador de loading mientras cargan los productos

### Página de Detalles (`details.html`)
- Muestra información completa del producto seleccionado
- Incluye imagen, descripción, categoría, precio y calificaciones
- Control de cantidad con botones + y -
- Botón para agregar al carrito con cantidad personalizada

### Funcionalidades del Carrito
- Contador en el header que muestra total de productos
- Persistencia usando localStorage
- Notificaciones al agregar productos

## 🔧 Funciones Principales

### `index.js`
- `getAllProducts()`: Obtiene y renderiza todos los productos
- `addToCart(productId)`: Agrega un producto al carrito

### `details.js`
- `getSingleProduct()`: Obtiene detalles de un producto específico
- `increaseQuantity()` / `decreaseQuantity()`: Controla la cantidad
- `addToCart()`: Agrega producto con cantidad específica

### `utils.js`
- `showLoading()` / `hideLoading()`: Controla el indicador de carga
- `addProductToCart()`: Lógica principal para agregar al carrito
- `updateCartCount()`: Actualiza el contador del carrito
- `getCart()` / `saveCartToLocalStorage()`: Gestión del localStorage

## 🌟 Próximas Mejoras

- [ ] Página del carrito completa (cart.html)
- [ ] Funcionalidad de eliminar productos del carrito
- [ ] Búsqueda y filtrado de productos
- [ ] Sistema de categorías
- [ ] Proceso de checkout
- [ ] Mejoras en el diseño responsive
- [ ] Animaciones y transiciones

## 🤝 Contribuciones

Este es un proyecto educativo. Las contribuciones son bienvenidas para:

- Mejorar la interfaz de usuario
- Agregar nuevas funcionalidades
- Optimizar el código
- Corregir bugs
- Mejorar la documentación

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ para aprender JavaScript y desarrollo web**