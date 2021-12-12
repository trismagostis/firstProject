let myFish = ["anioł", "klaun", "mandarynka", "chirurg"];

document.writeln("myFish: " + myFish + "<BR>");



removed = myFish.splice(2, 0, "bęben");

document.writeln("Po dodaniu 1: " + myFish + "<BR>");

document.writeln("Usunięty jest: " + removed + "<BR>");



removed = myFish.splice(3, 1)

document.writeln("Po usunięciu 1: " + myFish);

/*document.writeln("Usunięty jest: " + removed + "<BR>");



removed = myFish.splice(2, 1, "trąba")

document.writeln("Po zastąpieniu 1: " + myFish);

document.writeln("Usunięty jest: " + removed + "<BR>");



removed = myFish.splice(0, 2, "papuga", "zawilec", "niebieski")

document.writeln("Po zastąpieniu 2: " + myFish);

document.writeln("Usunięty jest: " + removed);*/