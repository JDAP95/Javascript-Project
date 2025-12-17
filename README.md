# Javascript-Project
# 🐱 CatGallery con The Cat API

**Descripción**

Proyecto realizado con vite y vanilla javascript que consume **The Cat API** para mostrar una galería interactiva de gatos, permitiendo filtrar resultados, cargar más imágenes y gestionar favoritos mediante `localStorage`.

🔗 API utilizada: https://thecatapi.com/

---

## 🎯 Objetivo del Ejercicio

Este ejercicio tiene como finalidad:

- Practicar peticiones a una **API REST** usando `fetch`.
- Manejar y presentar **datos dinámicos en el DOM**.
- Implementar **persistencia de datos** mediante `localStorage` (favoritos).
- Gestionar **carga incremental** de resultados.
- Mejorar la **experiencia de usuario** mediante filtros y estados visuales.

---

## 🏠 Página Principal

- Muestra un contenedor con múltiples **imágenes de gatos** obtenidas desde The Cat API.
- Cada imagen incluye un **botón o icono** para marcarla como favorita.
- Las imágenes se cargan dinámicamente desde la API.

---

## ⭐ Favoritos

- Al marcar una imagen como favorita:
  - Se guarda su información relevante (ID y URL) en `localStorage`.
- El usuario puede acceder a una **sección de favoritos** desde la interfaz.
- Desde esta sección:
  - Se muestran todas las imágenes guardadas.
  - El usuario puede **eliminar imágenes de favoritos**, actualizando el `localStorage` en tiempo real.

---

## 📄 Carga Incremental

El proyecto implementa carga progresiva de resultados:

- Inicialmente se muestran **10 (o más) imágenes** y mediante **Scroll infinito**, al llegar al final de la página se cargan nuevas imágenes automáticamente.
- Las nuevas imágenes se añaden sin eliminar las ya renderizadas.

---

## ⏳ Manejo de Estados y Errores

- Mientras se realiza una petición a la API:
  - Se muestra un **estado de carga** o **mensaje claro y comprensible** (texto o spinner).
- Se evita renderizar datos inconsistentes o vacíos.

---

## 🔍 Filtrado o Búsqueda Avanzada

La aplicación aprovecha los filtros que ofrece The Cat API:

- Filtrado por:
  - **Raza**
  - **Categoría
  - **Tipo de imagen** (`jpg`, `png`, `gif`)
- Interfaz con listas de opciones para categorías o Checkboxes para extensiones de archivo.
- Los filtros permiten refinar la búsqueda sin recargar la página.

---

## ℹ️ Información Extra de la Raza

Algunas imágenes incluyen metadatos adicionales sobre la raza:

- Nombre de la raza (*breed name*)
- Temperamento (*temperament*)
- Origen (*origin*)
- Descripción general

Estos datos se muestran mediante un **modal emergente**

---

## 🛠️ Tecnologías Utilizadas

- Vite + Vanilla
- HTML5
- CSS3
- JavaScript (ES Modules)
- Fetch API
- LocalStorage
- The Cat API

---

## ✅ Funcionalidades Clave

- Consumo de API REST
- Renderizado dinámico
- Scroll infinito
- Gestión de favoritos
- Filtros avanzados
- Manejo de estados y errores

---

## 🚀 Estado del Proyecto

✔️ Funcional  
📦 Modularizado  
🔧 Escalable  

---

¡Proyecto ideal para practicar consumo de APIs, manipulación del DOM y persistencia de datos en el navegador! 😸
