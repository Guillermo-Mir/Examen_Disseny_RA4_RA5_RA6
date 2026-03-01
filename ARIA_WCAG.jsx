import React from 'react';

const ExemplesAccessibilitat = () => {
    
    // Definimos la función para que el botón no dé error al intentar ejecutarla
    const enviarMensaje = () => {
        console.log("Missatge enviat correctament!");
        alert("Missatge enviat!");
    };

    return (

        <div>
            
            {/* 1. Aria-label */}
            <div>
                <input
                    type="email"
                    id="email"
                    placeholder="el_teu@email.com"
                    aria-label="Introdueix el teu correu electrònic"
                />
            </div>

            {/* 2. Role navigation */}
            <div>
                <nav role="navigation" aria-label="Menú principal">
                    <ul className="ul-principal">
                        <li><a href="/">Inici</a></li>
                        <li><a href="/galeria">Galeria</a></li>
                    </ul>
                </nav>
            </div>

            {/* 3. TabIndex y OnKeyDown */}
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

        </div>
    );
};

export default ExemplesAccessibilitat;