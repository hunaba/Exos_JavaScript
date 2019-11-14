// mario pyramid

let nb = prompt("C'est la pyramid again, combien d'étages tu veux ?");
nb = Number(nb);

function pyramide(nb) {
    let res = "";
    let i = 1;
    let j = 0;

    while (i <= nb) {
        j = 0;
        while (j < nb) {
            if (j < nb - i)
                res += " ";
            else
                res += "#";
            j++;
        }
        res += "\n";
        i++;
    }
    return res;
}

let res = pyramide(nb);

console.log(res);

//"Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  // Utilisateur rentre un nombre (par ex 5)

  // the height of the pyramid is the same as the number of hashtags in the bottom row
  //for each row: run a fonction that prints the pyramid row
