const twoSum = (arr, target) => {
  const numObj = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const complement = target - currentElement;
    // Exemple : Si target = 10 et currentElement = 3, alors complement = 10 - 3 = 7
    // Si 7 existe dans le tableau, nous avons trouvé une paire (3, 7) dont la somme est 10

    console.log(`Itération ${i + 1}:`);
    console.log(`  Élément actuel: ${currentElement}`);
    console.log(`  Complément recherché: ${complement}`);

    if (complement in numObj) {
      // Exemple: Si complement = 7 et numObj = {3: 0}, alors cette condition est vraie

      console.log(
        `  Complément trouvé! Ajoute [${complement}, ${currentElement}] au résultat`
      );
      result.push([complement, currentElement]);
      // Si la condition est vraie, on ajoute le couple à la variable result
      // Par exemple, si complement = 7 et currentElement = 3, result devient [[7, 3]]
    }

    numObj[currentElement] = i;
    // Exemple: Si currentElement = 3 et i = 0, cela devient:
    // numObj[3] = 0;
    // Ce qui signifie que le nombre 3 a été trouvé à l'index 0 du tableau

    console.log(`  Ajout de ${currentElement} à numObj`);
    console.log(`  numObj après ajout: `, numObj);
    console.log("------------------------");
  }

  logResult(result);
  return result;
};

const logResult = (result) => {
  console.log(
    result.length > 0
      ? `${result.length} paire(s) trouvée(s)`
      : "Aucune paire trouvée"
  );
};

const arr = [3, 5, -4, 8, 11, 1, -1, 6, 4];
const target = 10;

console.log("Résultat final:", twoSum(arr, target));
