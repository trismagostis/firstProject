class warzywo
{
    name ='noname';
    prize =0;
    amount = 0;
}
let warzywa=new Array(3);
for(let i=0;i<3;i++)
{
    warzywa[i]=new warzywo;
    warzywa[i].name=prompt('podaj nazwę warzywa');
    warzywa[i].prize=prompt('podaj cenę warzywa');
    warzywa[i].amount=prompt('podaj ilość warzywa');
}
for(let i=0;i<3;i++)
{
    if(warzywa[i].prize<5)
    {
        document.write('nazwa warzywa <br>');
        document.write(warzywa[i].name+'<br>' );
        document.write('cena warzywa <br>');
        document.write(warzywa[i].prize+'<br>' );
        document.write('ilość warzywa <br>');
        document.write(warzywa[i].amount+'<br>' );
    }
}