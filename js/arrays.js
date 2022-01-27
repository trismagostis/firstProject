let tablica = [5,23.4,4,'bob'];
alert("drugielement tablicy "+ tablica[1]);
alert(`drugi element tablicy ${tablica[1]}`);
alert(`długość tablicy ${tablica.length}`);
alert("długość tablicy " + tablica.length);
tablica.push(7);
alert("piaty element tablicy "+ tablica[4]);
alert(`długość tablicy ${ tablica.length}`);
tablica[1]=7;
alert(tablica);
/*let labels=['bob','dom','ala'];
labels.push('dog');
alert(labels.length);
alert(labels);*/
/*const titleAndAuthor=[['Gdziekolwiek', 'Edward Stachura'],['Wyspa','Jonasz Kofta'],
    ['Życie','Jan Twardowski']]
alert(titleAndAuthor[2][1]);
alert(titleAndAuthor.length);
alert(titleAndAuthor);
for(let i=0;i<3;i++)
{
    alert(`tytuł wiersza ${titleAndAuthor[i][0]} autor wiersza ${titleAndAuthor[i][1]}`);
}
for(let i=0;i<3;i++)
{
    for(let k=0;k<2;k++)
        alert(titleAndAuthor[i][k]);
}*/
/*let suma=0;
let liczby = [1,2,3,4,5,6,7,8,9];
for(let i=0;i<liczby.length;i++)
{
    suma+=liczby[i];
}
alert(suma);*/
/*let suma=0;
let liczby = [1,2,3,4,5,6,7,8,9];
for(let cyfra of liczby)//zmienna cyfra przyjmuje wszystkie kolejne wartoci tablicy liczby
{
    suma+=cyfra;
}
alert(suma);*/
let zdanie ='bob jest bobem';
//for(let znak of zdanie)
for(let i=0;i<zdanie.length;i++)
    alert(zdanie[i]);

