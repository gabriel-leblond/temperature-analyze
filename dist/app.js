console.log("TS connected");
//test ------------------------------------------
var test1 = [1, -2, -8, 4, 5];
// console.log(`test 1 > input ${test1}`)
//input ------------------
// 1 -2 -8 4 5
//output -----------------
// 1
var test2 = [0];
// console.log(`test 2 > input ${test2}`)
//input ------------------
// 0
//output -----------------
// 0
var test3 = [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5];
// console.log(`test 3 > input ${test3}`)
//input ------------------
// -5 -4 -2 12 -40 4 2 18 11 5
//output -----------------
// 2
//code ------------------------------------------
function computeClosestToZero(data) {
    if (data.length === 0) {
        return 0;
    }
    var elementLePlusProche = data[0];
    for (var i = 1; i < data.length; i++) {
        var elementActuel = data[i];
        // Vérifier si la valeur absolue de l'élément actuel est plus proche de zéro que l'élément le plus proche actuel
        if (
        // la valeur abs Actuel est Inf A valeur La + proche
        Math.abs(elementActuel) < Math.abs(elementLePlusProche) ||
            // ou que Actuel est Egale a + proche et sup a 0
            (Math.abs(elementActuel) === Math.abs(elementLePlusProche) && elementActuel > 0)) {
            // update le plus proche avec valeur actuelle
            elementLePlusProche = elementActuel;
        }
    }
    return elementLePlusProche;
}
;
computeClosestToZero(test1);
console.log("test 1 > input ".concat(test1));
console.log('test 1 > execpted : 1');
console.log("test 1 > given : ".concat(computeClosestToZero(test1)));
console.log("test 2 > input ".concat(test2));
console.log('test 2 > execpted : 0');
console.log("test 2 > given : ".concat(computeClosestToZero(test2)));
console.log("test 3 > input ".concat(test3));
console.log('test 3 > execpted : 2');
console.log("test 3 > given : ".concat(computeClosestToZero(test3)));
