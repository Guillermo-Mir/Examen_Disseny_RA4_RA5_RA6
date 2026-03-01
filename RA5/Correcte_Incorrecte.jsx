//Incorrecte
<img src="logo-empresa-v2.png">

<img src="grafic-vendes.png" alt="">

<img src="gos.jpg" alt="Imatge d'un gos">

//Correcte
<img src="grafic-vendes.png" alt="Gràfic de barres mostrant un augment del 20% en vendes el 2023">

<img src="fons-decoratiu.png" alt="">


////////////////////////////////////////////////////////////

//Codi incorrecte
<input type="text" placeholder="Introdueix el teu nom">

<span>Nom:</span>
<input type="text" name="nom">
 
 
//Codi correcte
<label for="username">Nom d'usuari:</label>
<input type="text" id="username" name="username">

<label>
  Nom d'usuari:
  <input type="text" name="username">
</label>


////////////////////////////////////////////////////////////

//Codi incorrecte
<div class="btn-fancy" onclick="submitForm()">
  Enviar
</div>

//Codi correcte
<button class="btn-fancy" type="submit">
  Enviar
</button>

////////////////////////////////////////////////////////////

//Codi incorrecte
<p>Per veure les nostres tarifes, <a href="tarifes.pdf">clica aquí</a>.</p>
<p>Per contactar, <a href="contacte.html">clica aquí</a>.</p>

//Codi correcte
<p>Consulta les nostres <a href="tarifes.pdf">tarifes actualitzades (PDF)</a>.</p>
<p>Pots anar a la nostra <a href="contacte.html">pàgina de contacte</a>.</p>


////////////////////////////////////////////////////////////

 Codi incorrecte
<html>
...

 Codi correcte
<html lang="ca">
...
<p>M'agrada molt el llibre <span lang="en">The Lord of the Rings</span>.</p>

////////////////////////////////////////////////////////////

 Codi incorrecte
<button class="btn-search">
  <i class="fa fa-search"></i>
</button>

 Codi correcte
<button class="btn-search" aria-label="Cercar al lloc web">
  <i class="fa fa-search" aria-hidden="true"></i>
</button>


////////////////////////////////////////////////////////////

 Codi incorrecte
/* Això sol donar una ràtio d'uns 2:1 (insuficient) */
.boto-modern {
    background-color: #55ffff; /* Blau cel clar */
    color: #ffffff;            /* Text blanc */
}

.text-gris {
    background-color: #ffffff;
    color: #999999;            /* Gris massa clar sobre blanc */
}



Codi correcte
/* Ràtio superior a 4.5:1 */
.boto-accessible {
    background-color: #0077aa; /* Blau més fosc */
    color: #ffffff;            /* Text blanc */
}

.text-llegible {
    background-color: #ffffff;
    color: #595959;            /* Gris més fosc */
}
////////////////////////////////////////////////////////////