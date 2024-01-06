export default class Formulaire {
    // Constructeur
    constructor(id) {
        this.id = id
        this.formulaireHtml = document.getElementById(this.id);
        this.formdata = new FormData(this.formulaireHtml);
        this.answers = new Array();
    }

    // Méthodes récupération div parent
    getDiv(id) {
        return document.getElementById(id).parentNode;
    }

    // Méthodes récupération élément
    getElement(id) {
        return document.getElementById(id);
    }

    // Méthode pour masqué les éléments
    maskChamp(id) {
        this.getDiv(id).classList.add('masque');
        this.getElement(id).required = false;
    }

    // Méthode pour afficher les éléments
    showChamp(id) {
        this.getDiv(id).classList.remove('disp');
        this.getDiv(id).classList.add('app');
        this.getElement(id).required = true;
    }

    // Masquer le champ avec animation
    hideChamp(id) {
        this.getDiv(id).classList.remove('app');
        this.getDiv(id).classList.add('disp');
        this.getElement(id).required = false;
    }

    // Méthodes récupération valeur d'un input
    getAnswers() {
        this.formdata = new FormData(this.formulaireHtml);
        this.formdata.forEach((value, key) => {
            if (value != "" ){
                console.log(key + " : " + value);
                this.answers.push([key, value]);
            }
        });
        return this.answers;
    }

    // Méthode pour afficher les résultats
    affAnswers() {
        let chaine = "Récapitulatif\n\n";
        for (let ligne of this.getAnswers()) {
            chaine += `${ligne[0]} : ${ligne[1]}\n`;
        }
        alert(chaine);
    }
}