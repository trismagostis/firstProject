class warzywo
{
    name ='noname';
    prize =0;
    amount = 0;
    display=function()
    {
        document.write('nazwa warzywa <br>');
        document.write(this.name+'<br>' );
        document.write('cena warzywa <br>');
        document.write(this.prize+'<br>' );
        document.write('ilość warzywa <br>');
        document.write(this.amount+'<br>' );
    }
}
let warzywa=new Array(3);
for(let i=0;i<3;i++)
{
    warzywa[i]=new warzywo;
    warzywa[i].name=prompt('podaj nazwę warzywa');
    warzywa[i].prize=prompt('podaj cenę warzywa');
    warzywa[i].amount=prompt('podaj ilość warzywa');
}
let choice=prompt('naciś 1 jeżeli chcesz szukać po nazwie naciś 2 jeżeli chcesz szukać po cenie naciś 3 jeżeli chcesz szukać po ilości')
switch(choice) {
    case  '1' :
        let nazwa = prompt('podaj nazwę warzywa którego szukasz');
        for (let item of warzywa) {
            if (item.name == nazwa) {
                item.display();
            }
        }
        break;
    case  '2' :
        let cena = prompt('podaj cenę');
        for (let item of warzywa) {
            if (item.prize <= +cena) {
                item.display();
            }
        }
        break;
    case  '3' :
        let ilosc = prompt('podaj ilość');
        for (let item of warzywa) {
            if (item.amount >= +ilosc) {
                item.display();
            }
        }
        break;
    default:
        alert("Wpisz liczbę od 1 do 3");
}
        for(let item of warzywa)
        {
                item.display();
        }
