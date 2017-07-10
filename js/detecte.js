Format = {
    larg: (document.body.clientWidth),

    Largeur: function () {
        console.log("La largeur de mon ecrant et de " + Format.larg);
        document.getElementById('larg').innerHTML = "La largeur de mon ecrant et de " + Format.larg + "<br /> " + "Le modèl de votre navigateur est " + navigator.appVersion + " ";

        if (Format.larg < 700) {
            document.getElementById('larg2').innerHTML = "Vous avez un petit ecrant ";
        }

        if (Format.larg > 700 && Format.larg < 1200) {
            document.getElementById('larg2').innerHTML = "Vous avez un ecran moyen ";
        }

        if (Format.larg > 1200) {
            document.getElementById('larg2').innerHTML = "Vous avez un ecran grand écrant ";
        }

    },



};

Format.Largeur();
