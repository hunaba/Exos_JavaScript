const entrepreneurs = [
{ first: 'Steve', last: 'Jobs', year: 1955 },
{ first: 'Oprah', last: 'Winfrey', year: 1954 },
{ first: 'Bill', last: 'Gates', year: 1955 },
{ first: 'Sheryl', last: 'Sandberg', year: 1969 },
{ first: 'Mark', last: 'Zuckerberg', year: 1984 },
{ first: 'Beyonce', last: 'Knowles', year: 1981 },
{ first: 'Jeff', last: 'Bezos', year: 1964 },
{ first: 'Diane', last: 'Hendricks', year: 1947 },
{ first: 'Elon', last: 'Musk', year: 1971 },
{ first: 'Marissa', last: 'Mayer', year: 1975 },
{ first: 'Walt', last: 'Disney', year: 1901 },
{ first: 'Larry', last: 'Page', year: 1973 },
{ first: 'Jack', last: 'Dorsey', year: 1976 },
{ first: 'Evan', last: 'Spiegel', year: 1990 },
{ first: 'Brian', last: 'Chesky', year: 1981 },
{ first: 'Travis', last: 'Kalanick', year: 1976 },
{ first: 'Marc', last: 'Andreessen', year: 1971 },
{ first: 'Peter', last: 'Thiel', year: 1967 }
];

//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
//Sors une array qui contient le prénom et le nom des entrepreneurs
//Quel âge aurait chaque inventeur aujourd'hui ?
//Trie les entrepreneurs par ordre alphabétique du nom de famille

liste_entrepreneurs = [];
liste_age = [];

// ==> This code will set the variable entrepreneurs&age to 2 new empty arrays. 


console.log("les entrepreneurs qui sont nés dans les années 70 sont: ");
console.log("");

//on a besoin de for plusieurs fois donc on peut tout mettre dedans et appelé à la fin==>

for (var x = 0; x < entrepreneurs.length; x++){
  // ==>length = property of arrays in JavaScript that returns or sets the number of elements in a given array. 

  if (entrepreneurs[x].year >= 1970 && entrepreneurs[x].year <= 1979){
    console.log(entrepreneurs[x].first + " " + entrepreneurs[x].last + " " + " né en " + entrepreneurs[x].year)
  }

  // ==> créer une boucle de 1970 INCLU jusquà 1979 INCLU

  liste_entrepreneurs.push (entrepreneurs[x].first + " " + entrepreneurs[x].last); /*Z*/
  //==>la méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
  liste_age.push (entrepreneurs[x].first + " " + entrepreneurs[x].last + " " + String(2019 - entrepreneurs[x].year) + " Ans"); /*Y*/
}
//==>convertir un number string   
  console.log("");
  console.log("Les entrepreneurs sont (prénom+nom):"); /*Z rappelé ici*/
  console.log(liste_entrepreneurs);

  console.log("");
  console.log("Ages des entrepreneurs en 2019") /*Y rappelé ici*/
  console.log(liste_age)

  console.log("")
  console.log("classement par ordre Alphabetique")
  entrepreneurs.sort(function(a, b){
    if(a.last < b.last) { return -1; }
    if(a.last > b.last) { return 1; }
      return 0;
    })
  console.log(entrepreneurs)

/*
JavaScript dispose même d'un .forEach() qui ne fonctionne que sur les array. 
Il permet d'obtenir directement la valeur stockée à chaque index du array. 
Illustration en reprenant le array weeksOfTHPArray ci-dessus :

console.log("**********Parcourons le array en forEach :")
weeksOfTHPArray.forEach(weekContent => {
  console.log(weekContent)
});
*/