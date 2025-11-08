# Star Wars Album - Prueba Técnica Turinng

Aplicación web SPA (Single Page Application) para coleccionar láminas digitales del universo Star Wars. Consume la API pública SWAPI para obtener información de películas, personajes y naves espaciales. Implementa un sistema de sobres aleatorios con mecánicas de colección y persistencia de datos mediante LocalStorage, evitando la necesidad de un backend robusto. Desarrollada con React 18 y Vite como tecnologías principales.

## Características

- Álbum digital con 3 secciones: Películas (6), Personajes (82), Naves (36)
- Sistema de sobres con 5 láminas aleatorias
- Timer de 1 minuto que bloquea todos los sobres al abrir uno
- Láminas especiales y regulares visualmente diferenciadas
- Persistencia de datos con LocalStorage
- Animaciones fluidas con Framer Motion
- Diseño responsive

## Tecnologías

- React 18
- Vite
- React Router DOM
- Framer Motion
- Tailwind CSS
- Axios
- SWAPI (Star Wars API)

## Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd PruebaTecnicaTurinng
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:5173
```

## Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## Estructura del Proyecto

```
src/
├── components/      Componentes React reutilizables
├── context/         Context API para manejo de estado global
├── services/        Servicios para consumo de API
├── utils/           Funciones auxiliares
└── assets/          Recursos estáticos (imágenes, fuentes, videos)
```

## Funcionalidades

### Obtener Láminas
- 4 sobres disponibles
- Al abrir un sobre, los 4 se bloquean por 1 minuto
- Cada sobre contiene 5 láminas aleatorias
- Configuración 1: 1 película, 3 personajes, 1 nave
- Configuración 2: 3 personajes, 2 naves

### Mi Álbum
- Visualización de todas las láminas obtenidas
- Organizado por secciones: Películas, Personajes, Naves
- Click en láminas para ver detalles completos
- Indicador visual de láminas especiales

## Autor

Emanuel Gómez Díaz  
emmanuelgodi22@gmail.com  
313 664 0809