let clothes = new Set();//new ponieważ powstaje nowy obiekt klasy Set
clothes.add ('cweter');
clothes.add ('kalesony');
clothes.add ('skafander');
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
clothes.add('kalesony'); //robi nic
clothes.forEach(item => document.write(item+'<BR>'))//równoważne powyższej pętli foreach