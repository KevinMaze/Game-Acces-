import Formulaire from "./form.js";

// Créer le formulaire

const formulaire = new Formulaire("formulaire");

formulaire.maskChamp('societe');

// addEventListener changer comportement du formulaire


formulaire.getElement('particulier').addEventListener('change', () => {
    formulaire.hideChamp('societe');
    formulaire.showChamp('nickname');

})

formulaire.getElement('professionnel').addEventListener('change', () => {
    formulaire.showChamp('societe');
    formulaire.hideChamp('nickname');
})

// addEventListener pour récupérer les données du formulaire
formulaire.formulaireHtml.addEventListener('submit', (event) => {
    event.preventDefault();
    formulaire.affAnswers();
    formulaire.formulaireHtml.reset();
})