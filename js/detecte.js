Format = {
    larg: (document.body.clientWidth),

    Largeur: function () {
        console.log("La largeur de mon ecrant et de " + Format.larg);
        document.getElementById('larg').innerHTML = "La largeur de mon ecrant et de " + Format.larg;
    },

};

Format.Largeur();
