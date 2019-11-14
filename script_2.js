// Calculs rapides

let nb = prompt("De quel nombre veut tu calculer la factorielle ?");
nb = Number(nb);

function factorial(nb) {
    if (nb == 1 || nb == 0)
        return 1;
    else
        return (factorial(nb - 1) * nb);
}

let res = "Le résultat est : " + factorial(nb);
console.log(res);



// Par convention la factorielle de zéro est égale à 1 ( 0! = 1 )



/*
 function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
factorialize(5);
/*
function fact(n){
	if(Math.round(n)==n){
		var i=1
		var entree=n;
		
		while(i<entree-1){
			n= n+n*i;
			i=i+1;
		}
		console.log(n);
	}
	else{
		return undefined;
    }

   

/* // La fonction Factorielle (version récursive)
function factorielle(n)
{
if (n<0) {
prompt ("Veuillez Saisir Un Entier Positif ou null");
return "### Erreur ###";
}
else {
if (n == 0) {
return 1;
}
else {
return n * factorielle (n-1);
}
}
} 

/*




factorielle(n) = (n-) * 

fact = (fact)-1 * 


// Un prompt s'affiche avec la question suivante
"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
"Le résultat est : 24" 
*/