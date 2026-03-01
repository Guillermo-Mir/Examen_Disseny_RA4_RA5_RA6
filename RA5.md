# Puntos Clave para el Examen de Diseño Web: Accesibilidad y SEO

Este es el listado de errores típicos que debes buscar y corregir cuando te pidan auditar y refactorizar una página web mal hecha.

## 1. Accesibilidad y Semántica (El núcleo de WAVE y Lighthouse)

* **La "Sopa de Divs" (Falta de semántica):**
    * **El error:** Usar `<div>` para estructurar toda la página (ej. `<div id="header">`, `<div class="menu">`).
    * **La solución:** Cambiarlos por etiquetas semánticas de HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` y `<footer>`.
* **Imágenes mudas (Falta del atributo `alt`):**
    * **El error:** Etiquetas `<img>` sin texto alternativo.
    * **La solución:** Añadir siempre `alt`. Si la imagen aporta información: `alt="Logo de la empresa"`. Si es puramente decorativa: `alt=""` (vacío, pero presente).
* **Formularios desconectados:**
    * **El error:** Etiquetas `<input>` sueltas sin su `<label>` correspondiente.
    * **La solución:** Vincularlos usando el `id` del input. En HTML normal usa `for`, en React usa `htmlFor` (ej. `<label htmlFor="nom">Nom</label> <input id="nom" />`). Si el diseño no permite texto visible, usa `aria-label` en el input.
* **Botones sin texto (Iconos mudos):**
    * **El error:** Botones que solo contienen un icono (una X para cerrar, la lupa de buscar, el menú hamburguesa).
    * **La solución:** Añadir el atributo `aria-label` para los lectores de pantalla (ej. `<button aria-label="Tancar menú">☰</button>`).
* **Navegación por teclado invisible (Pérdida de foco):**
    * **El error:** Ocultar el contorno del teclado en CSS (ej. `outline: none;`) sin dar una alternativa visual.
    * **La solución:** Asegurarte de que el estado `:focus` o `:focus-visible` tenga estilos en el CSS para que el usuario sepa dónde está al navegar con la tecla *Tab*.

## 2. Color y Ratio de Contraste



* **Regla general (Nivel AA):** El texto normal necesita un contraste mínimo de **4.5:1** respecto a su color de fondo.
* **Excepciones (3:1):** Solo se permite bajar el contraste a 3:1 si el texto es **grande** (más de 18pt, o 14pt si está en negrita) o si se trata de componentes de la interfaz de usuario (como los bordes de un input).

## 3. SEO On-Page y Metadatos (Archivo `index.html`)

* **Idioma de la web:**
    * Asegúrate de que la etiqueta html tenga el idioma correcto: `<html lang="ca">` (o el que corresponda).
* **Título y Descripción (dentro del `<head>`):**
    * Añade un `<title>` descriptivo.
    * Añade la meta descripción (menos de 160 caracteres): `<meta name="description" content="Descripció breu sobre la web.">`.

## 4. Archivos de Indexación (Carpeta `public/`)

### Archivo `robots.txt`
Sirve para decirle a los buscadores (como Google) qué rutas pueden rastrear y cuáles no.

```text
User-agent: *
Allow: /
Disallow: /admin
Disallow: /privat