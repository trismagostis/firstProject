class MidPrice
{
    Name = "mid";
    Price = 50;
    BrandManager = "Maciej Nowak";
    /*Display()
    {
        return document.write(`${this.BrandManager} is responsible for ${this.Name} (the suggested price is ${this.Price})`);
    }*/
}

class AAAPrice
{
    Name = "aaa";
    Price = 250;
    BrandManager = "Marianna Srebrna";
    Company = ["EA","Microsoft"];
    /*Display()
    {
        return document.write(`${this.BrandManager} is responsible for ${this.Name} (the suggested price is ${this.Price})`);
    }*/
}

class BasePrice
{
    Name = "base";
    Price = 20;
    BrandManager = "Anna Marys";
    /*Display()
    {
        return document.write(`${this.BrandManager} is responsible for ${this.Name} (the suggested price is ${this.Price})`);
    }*/
    GetPrice()
    {

    }
}
/*function Games()
{
    let Gameset=[];
    Gameset.push(new MidPrice()); //wstawiamy do tablicy obiekty różnych klas
    Gameset.push(new AAAPrice());
    Gameset.push(new BasePrice());
    for (let i = 0; i < Gameset.length; i++)
    {
        Gameset[i].Display(); //używamy 3 metod z trzech różnych klas
        document.write("<br>");
    }
}
Games();*/
class PriceGameTypeFactory //chcemy by obiekty różnych klas mogły używać tej samej metody
{
    createGamePriceType(type) {
        let priceType;
        if (type === "baseprice") {
            priceType = new BasePrice();
        } else if (type === "midprice") {
            priceType = new MidPrice();
        } else if (type === "aaaprice") {
            priceType = new AAAPrice();
        }
        priceType.display = function() //nietypowe: deklaracja funkcji wewnątrz funkcji. Nazwa. Tylko taki sposób deklaracji
        {
            return document.write(`${this.BrandManager} is responsible for ${this.Name} (the suggested price is ${this.Price})`);
        }
        return priceType;
    }



}
function GamesFactory()
{
    let games=[];
    let gameFactory = new PriceGameTypeFactory();//tworzymy obiekt klasy bez własności tylko po to by wywołać metodę createGamePriceType
    let aaaPrice = gameFactory.createGamePriceType("aaaprice");

    games.push(aaaPrice);
    games.push(gameFactory.createGamePriceType("baseprice"));
    games.push(gameFactory.createGamePriceType("midprice"));
    games.push(gameFactory.createGamePriceType("baseprice"));

    for (let i = 0; i < games.length; i++)
    {
        games[i].display(); //tu jest pies pogrzebany, używamy tutaj jednej funkcji klasy PriceGameTypeFactory do obiektów różnych klas (polimorfizm)
        document.write("<br>"); // polimorfem jest metoda display
    }
}
GamesFactory();