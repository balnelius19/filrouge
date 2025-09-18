    const form_inscription = document.getElementById('form_inscription');

    form_inscription.addEventListener('submit', function(event) {
      event.preventDefault();

      const pseudo = document.getElementById('pseudo').value.trim();
      const mot_de_passe = document.getElementById('mot_de_passe').value;

      // Création du JSON initial
      const joueur_data = {
        pseudo: pseudo,
        mot_de_passe: mot_de_passe,
        // Les champs suivants seront ajoutés dans feuille_perso.html
        personnage: {}
      };

      // Stockage temporaire (localStorage ou sessionStorage selon ton besoin)
      localStorage.setItem('joueur_data', JSON.stringify(joueur_data));

      // Redirection vers la feuille de création du personnage
      window.location.href = '../lien_inscrit/feuille_perso.html';
    });