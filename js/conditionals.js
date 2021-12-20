/*if('7'!=7)
    alert("wartosci sa rowne");
if('7'!==7)
    alert("wartosci sa rowne ale typy nie");*/
/*const dayOfBirth=14;
const guess = prompt('zgadnij dzień moich urodzin');
let correct = false;
if(+guess===dayOfBirth)//if(guess==dayOfBirth)
correct=true;
if(correct===true)
{alert(`zgadza się, dzien moich urodzin to: ${dayOfBirth}`);
document.write('BRAWO!');}
if(correct===false)
{alert("zgaduj dalej"); document.write("Odswież stronę, by sprobować jeszcze raz");}*/
/*const dayOfBirth=14;
const guess = prompt('zgadnij dzień moich urodzin');
if(guess==dayOfBirth)
{alert(`zgadza się, dzien moich urodzin to: ${dayOfBirth}`);
    document.write('BRAWO!');}
else
{alert("zgaduj dalej"); document.write("Odswież stronę, by sprobować jeszcze raz");}*/
/*const shoeSize = 39;
const price = 230;
let answerSize = prompt("jaki mosz szłapy?");
let answerPrice = prompt("Kiela mosz pinindzy?");
if(answerSize == shoeSize && +answerPrice>=price)
{
    let colorBuyer =prompt('jakiego koloru buty chcesz kupić');
    if(colorBuyer==='czarny'||colorBuyer==='biały')
        alert('mamy twoj rozmiar i kolor, a Ty masz kase na te buty')
    else
        alert('nie mamy Twojego koloru')
}
if(answerSize == shoeSize && +answerPrice<=+price)
    alert('jest Twoj rozmiar ale mosz za malo pinindzy');
if(+answerSize !== shoeSize && +answerPrice<=+price)
    alert('nima Twoj rozmiar i mosz za malo pinindzy');
if(+answerSize !== shoeSize && +answerPrice>=+price)
    alert('nima Twoj rozmiar chociaż mosz dosc pinindzy');*/
const score = prompt('ile punktów dostałeś');
let grade;
if(score>90) grade=5;
else if(score>=80) grade=4;
else if(score>=70) grade=3;
else if(score>=60) grade=2;
else grade =1;
alert(`Twoja ocena to ${grade}`);





