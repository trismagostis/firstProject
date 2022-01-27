/*class warzywo {
    name = 'noname';
    price = 0;
    amount = 0;

    constructor(name, price, amount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }

    display = function () {
        document.write("Name: " + this.name + "<br>");
        document.write("Price: " + this.price + "<br>");
        document.write("Amount: " + this.amount + "<br>");
    }
}


//let zgniłek=new warzywo('banan',1,2);
//zgniłek.display();
//let raw = new warzywo();*/
let clothes = new Set();//new ponieważ powstaje nowy obiekt klasy Set
clothes.add ('cweter');
clothes.add ('kalesony');
for (let cos of clothes)
{
    document.write(cos+'<BR>');
}
clothes.delete('cweter')
for (let cos of clothes)
{
    document.write(cos+'<BR>');
}
alert(clothes.has('kalesony'))
alert(clothes.size);
clothes.add('kalesony'); //robi nic */
//clothes.add(5);
/*let magazyn = new Set();
let IleWarzyw =prompt('ile różnych warzyw przyjechało');
for(let i=0; i<IleWarzyw; i++)
{
    magazyn.add(new warzywo(prompt('podaj nazwę'), prompt('podaj cenę'), prompt('podaj ilość')));
}
let wybor = prompt('jeżeli szukasz po nazwie wpisz 1, jeżeli szukasz po cenie wpisz 2, jeżeli szukasz po ilości wpisz 3');
if(wybor==1)
{
    let Nazwa = prompt('jaka nazwa Cię interesuje')
    for(let item of magazyn)
        if(item.name==Nazwa)
         item.display();*/
}

/*const name = prompt('jaka nazwa Cię interesuje');
magazyn.filter(item => item.name === name )
       .forEach(item => item.display());*/



/*por.name='por';
por.amount=50;
por.prize=2;*/
//clothes.add(new warzywo);
//clothes.add(new warzywo);
/*clothes.add(por);
for (let item of clothes)
{
    if (item.amount < 40)
    {
        document.writeln(item.name);
        document.writeln(item.amount);
        document.writeln(item.prize);
    }

}*/
/*let vegetables =  new Set();

const pomidor = {
    name: "Pomidor",
    price: 5,
    amount: 10
}

const por = {
    name: "Por",
    price: 6,
    amount: 2
}

const marchew = {
    name: "Marchew",
    price: 2,
    amount: 40
}
vegetables.add(pomidor);
vegetables.add(por);
vegetables.add(marchew);
debugger;
let answer = prompt("Czy chcesz wyszukać po cenie, ilosci czy wyświetlić listę warzyw?");

if (answer === "cena") {
    let prc_answer = +prompt("Ile maksymalnie możesz zapłacic za kilogram warzyw?");
    vegetables.forEach(function (vegetable) {
        if (prc_answer < vegetable.price) {
            vegetables.delete(vegetable);
        }
    });
}
else if (answer ==="ilosc") {
    let amo_answer = prompt("Jaka minimalna ilość warzyw cię interesuje?");

    vegetables.forEach(function (vegetable) {
        if (amo_answer > vegetable.amount) {
            vegetables.delete(vegetable);
        }
    });
} else if (answer != "lista") {
    throw new Error('Wybrałeś złą opcję')
}

vegetables.forEach(function(vegetable) {
    console.log(vegetable);
})*/
/*class FoodClass
{
    Name = "Name";
    Price = 0.00;
    Amount = 0;
}
let FoodSet = new Set();

let Fruit1 = new FoodClass;
Fruit1.Name = "Orange";
Fruit1.Amount = 12;
Fruit1.Price = 3.4;
FoodSet.add(Fruit1);

let Fruit2 = new FoodClass;
Fruit2.Name = "Apple";
Fruit2.Amount = 3;
Fruit2.Price = 9.4;
FoodSet.add(Fruit2);

let Fruit3 = new FoodClass;
Fruit3.Name = "Pear";
Fruit3.Price = 2.1;
Fruit3.Amount = 12;
FoodSet.add(Fruit3);

for (let item of FoodSet )
{
    document.write("Name: "+item.Name+"<br>");
    document.write("Price: "+item.Price+"<br>");
    document.write("Amount: "+item.Amount+"<br>");
}
document.write("<br><br><br>");
choice = prompt("find by (==) name / (<) price / (>) amount");
target = prompt("input data");
document.write("You chose to search by "+choice+" with parameter "+target+":<br><br>");
switch (choice)
{
    case "name":
        for (let item of FoodSet )
            if (item.Name !== target)
                FoodSet.delete(item);
        break;
    case "price":
        for (let item of FoodSet )
            if (item.Price > +target)
                FoodSet.delete(item);
        break;
    case "amount":
        for (let item of FoodSet )
            if (item.Amount < +target)
                FoodSet.delete(item);
        break;
}
for (let item of FoodSet )
{
    document.write("Name: "+item.Name+"<br>");
    document.write("Price: "+item.Price+"<br>");
    document.write("Amount: "+item.Amount+"<br>");
} */