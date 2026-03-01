# Punts Clau per a l'Examen: Disseny Responsive i Frameworks Actuals

Aquest examen avalua la teva capacitat d'analitzar la usabilitat d'una web i de refactoritzar codi CSS antic utilitzant preetiquetes modernes (Sass) i estratègies Mobile First.

## Part 1: Usabilitat Web i Testeig

### 1. Principis Heurístics de Nielsen
Són 10 regles generals d'usabilitat. A l'examen hauràs de trobar errors basats en aquests principis tant en una web externa com en la teva. Els més fàcils d'identificar quan una web està "mal feta" són:
* **Visibilitat de l'estat del sistema:** Quan fas clic a un botó de "Comprar" o "Enviar" i no surt cap *loader* ni missatge d'èxit.
* **Control i llibertat de l'usuari:** No hi ha botons fàcils per "Tornar enrere" o cancel·lar una acció (ex: un *popup* que no té una 'X' clara).
* **Consistència i estàndards:** El menú de navegació canvia de lloc segons la pàgina, o els enllaços no semblen enllaços (no estan subratllats ni tenen un color diferent).
* **Prevenció d'errors:** Formularis que et deixen enviar dades buides i després et criden l'atenció, en lloc de desactivar el botó fins que tot estigui ple.


### 2. Test A/B i Hotjar
* **Test A/B:** Consisteix a mostrar dues versions diferents d'una mateixa pàgina a diferents usuaris de forma aleatòria per veure quina converteix millor.
    * *3 ítems per testejar:* 1) El color del botó principal (ex: Vermell vs. Verd). 2) El text del botó (ex: "Compra ara" vs. "Afegeix al carret"). 3) La posició del formulari de contacte (a dalt de tot vs. al final de la pàgina).
* **Hotjar:** És una eina d'analítica de comportament. Has de mencionar que serveix per crear **Mapes de Calor (Heatmaps)** (veure on fa clic la gent o fins on fan scroll) i **Gravacions de sessions** (veure com es mou el ratolí d'un usuari real per detectar frustracions).

---

## Part 2: Disseny Responsive amb Sass i Mobile First

Aquí hauràs de triar una sola secció (et recomano el *Header/Navegació* o una *Graella de Productes* perquè donen molt de joc) i aplicar-hi tecnologia moderna.

### 1. Configuració de Sass i Variables
* **Instal·lació:** Executar `npm add -D sass`.
* **Canvi de fitxer:** Passar de `style.css` a `style.scss`.
* **Fitxer `_variables.scss`:** Has de treure tots els colors i mides fixos i posar-los aquí.
    ```scss
    // _variables.scss
    $color-principal: #e3350d;
    $color-fons: #ffffff;
    $font-base: 1rem;
    $espaiat-gran: 2rem;
    ```

### 2. Estructura, Bucles i Condicionals en SCSS
L'enunciat et demana coses molt específiques per demostrar que saps fer servir Sass.
* **Neteja i Agrupació (Nesting):** L'estructura de Sass ha de calcar l'HTML.
* **Condicional (`@if`):** Pots usar-lo per aplicar un color de text clar o fosc depenent del fons.
* **Bucle (`@for` o `@each`):** Molt útil per generar classes de marges, botons socials o columnes de graelles ràpidament.
* **Nitidesa:** Segurament es refereix a aplicar propietats per a que el text o les imatges es vegin nítides en pantalles d'alta resolució.

**Exemple que compleix tot això:**
```scss
@import 'variables';

// Nitidesa per al text
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Bucle (@each) per generar icones socials o botons ràpidament
$xarxes: ("facebook", "twitter", "instagram");
@each $xarxa in $xarxes {
  .icona-#{$xarxa} {
    background-image: url('/img/#{$xarxa}.png');
  }
}

// Mixin amb Condicional (@if)
@mixin tema-boto($fons) {
  background-color: $fons;
  @if $fons == #000000 {
    color: #ffffff; // Si el fons és negre, text blanc
  } @else {
    color: #333333; // Si no, text fosc
  }
}

.boto-principal {
  @include tema-boto($color-principal);
}