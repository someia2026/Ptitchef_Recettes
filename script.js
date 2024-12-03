fetch('data.json')
    .then((rep) => {
        return rep.json();
    })
    .then(donnee => {
        console.log(donnee);
        donnee.forEach(recette => {
            afficher(recette);
        });
    });

function afficher(recipe) { // la boucle dans laquelle je suis actuellement
    let nom = recipe.nom;
    let img = recipe.img;
    let difficulte = recipe.difficulte;
    let tempPreparation = recipe.tempPreparation;
    let tempCuisson = recipe.tempCuisson;
    let portions = recipe.portions;
    
    let ingredients= recipe.ingredients
let listeIngredient = ""
    recipe.ingredients.forEach(ing => {

    let IngredQuant = ing.quantite;
       let IngredUni = ing.unite;
       let IngredAlim = ing.aliment;
    listeIngredient+=`<li>${IngredQuant}${IngredUni}${IngredAlim}</li>`
       


    })


    let template =
    `            <div id="card">
                <div>
                    <h3>${nom}</h3>
                    <ul>
                        <li><span>Difficulté:</span>${difficulte}</li> <!-- CREER UNE CLASSE .SPAN -->
                        <li><span>Portions:</span>${portions}</li>
                        <li><span>Temps de préparation:</span>${tempPreparation}</li>
                        <li><span>Temps de cuisson:</span>${tempCuisson}</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h4><span></span>Ingrédients:</h4>
                        <ul>
                            <li>${listeIngredient}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4><span></span>Etapes:</h4>
                </div>
                <ol>
                    <li></li>
                </ol>
                <div>
                    <img src="${img}" alt="image">
                </div>
            </div>

            `
    //rôle: créer une boucle ForEach pour incrémenter le tableau des ingrédients
    //paramèter: les variables des aliments
    //retour: Non


    
let container=document.querySelector(`#containerCard`)

container.innerHTML+=template;

}