let resultat = document.getElementById("resultat");

      function ajouter(valeur) {
        resultat.value += valeur;
      }

      function effacer() {
        resultat.value = "";
      }

      function calculer() {
        try {
          resultat.value = eval(resultat.value);
        } catch (e) {
          resultat.value = "Erreur";
        }
      }