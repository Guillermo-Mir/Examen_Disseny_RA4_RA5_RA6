import React, { useRef, useEffect } from "react";

const Contacta = () => {
    //Use ref y use Effect
    const nombreRef = useRef(null);

    useEffect(() => {
        if (nombreRef.current) {
            nombreRef.current.focus();
        }
    }, []);
    //
    // Definimos la función para que el botón no dé error al intentar ejecutarla
      const enviarMensaje = () => {
        console.log("Missatge enviat correctament!");
        alert("Missatge enviat!");
    };
    return (

        <div role="main">
            <header>
                <div>
                    <h1 className="contacta-titulo">Contacta amb Nosaltres</h1>
                </div>
            </header>

            <section role="region" aria-labelledby="form-heading">

                <form>
                    <div>
                        <label htmlFor="nom" > Nom </label><br />
                        <input
                            id="nom"
                            ref={nombreRef} //aqui se implementa el useRef
                            type="text"
                            placeholder="El teu nom"
                            aria-label="Introdueix el teu nom"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" >Email</label><br />
                        <input
                            id="email"
                            type="email"
                            placeholder="el teu@email.com"
                            aria-label="Introdueix el teu correu electronic"

                        />
                    </div>
                    <div>
                        <label htmlFor="mensaje" >Missatge</label><br />
                        <textarea
                            id="mensaje"
                            rows="3"
                            aria-label="Escriu el teu missatge o consulta"
                        />
                    </div>

                    <div
                        role="button"
                        tabIndex="0"
                        id="button"
                        onClick={enviarMensaje}
                        onKeyDown={(e) => {
                            // Simula el clic cuando el usuario pulsa Enter o la barra espaciadora
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault(); // Evita que la página haga scroll con el espacio
                                enviarMensaje();
                            }
                        }}
                    >
                        Enviar Missatge
                    </div>
                </form>
            </section>
        </div>
    );
};


export default Contacta;