class SquareBasedPyramid // 1/3 x base area x height
{
    constructor(height,radiusorlength)
    {
        this.height=height;
        this.radiusorlength=radiusorlength;
    }
    height;radiusorlength;multiplier = 1/3;
    baseareacalculator()
    {
        return this.radiusorlength*this.radiusorlength;
    }
}
class Cone              // 1/3 x base area x height (base area = pi r r)
{
    constructor(height,radiusorlength)
    {
        this.height=height;
        this.radiusorlength=radiusorlength;
    }
    height;radiusorlength;multiplier = 1/3;
    baseareacalculator()
    {
        return this.radiusorlength*this.radiusorlength*Math.PI;
    }
}
class Cylinder        //base area x height (base area = pi r r)
{
    constructor(height,radiusorlength)
    {
        this.height=height;
        this.radiusorlength=radiusorlength;
    }
    height;radiusorlength;multiplier = 1;
    baseareacalculator()
    {
        return this.radiusorlength*this.radiusorlength*Math.PI;
    }
}
class Cuboid        //base area x height
{
    constructor(height,radiusorlength)
    {
        this.height=height;
        this.radiusorlength=radiusorlength;
    }
    height;radiusorlength;multiplier = 1;
    baseareacalculator()
    {
        return this.radiusorlength*this.radiusorlength;
    }
}
class PriceGameTypeFactory
{
    createGamePriceType(type,height,radiusorlength)
    {
        let priceType;
        if (type === "SBP")
            priceType = new SquareBasedPyramid(height,radiusorlength);
        else if (type === "Cone")
            priceType = new Cone(height,radiusorlength);
        else if (type === "Cylinder")
            priceType = new Cylinder(height,radiusorlength);
        else if (type === "Cuboid")
            priceType = new Cuboid(height,radiusorlength);

        priceType.display = function()
        {
            return this.multiplier*this.baseareacalculator()*this.height;
        }
        return priceType;
    }
}
function GamesFactory()
{
    let games=[];
    let gameFactory = new PriceGameTypeFactory();
    games.push(gameFactory.createGamePriceType("SBP"),1,1);


    for (let i = 0; i < games.length; i++)
    {
        document.write(games[i].display());
        document.write("<br>");
    }
}
GamesFactory();