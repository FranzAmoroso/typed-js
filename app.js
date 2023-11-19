
// Typed Library

let options = {
    strings: ["Un testo.", "Un altro testo.", "Ancora un altro testo."],
    typeSpeed: 50,  // Velocità di digitazione in millisecondi
    backSpeed: 25,  // Velocità di cancellazione in millisecondi
    loop: true,
    /* onComplete: function(self) {
        // Stoppa il loop dopo 3 cicli completati
        if (self.loopCount === 2) {
        self.stop();
        }
    } */
};

let typed = new Typed("#typed-output", options);