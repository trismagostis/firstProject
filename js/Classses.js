class Phone
{
    brand ='Samsung';
    color ='black';
    price = 123.21;
    usbC = false;
    user = 'Marcin';
    sendSms = function(text)
    {
        this.sms = this.user + " wysłał sms: " + text;
    }
}
//let komora = new Phone;
//let text = prompt('podaj treść sms-a');
//komora.sendSms(text);
//document.write(komora.sms);
//alert(komora);
//komora.brand='iphone';
//document.write(komora.brand);
/*telefony = new Array(25);
for(let i=0; i<telefony.length; i++)
{
    telefony[i] = new Phone;
}
telefony[4].user='Tomek';
alert(telefony[4].user);*/
/*let  telefon=new Phone;
telefon.user='Tomek';
let telefony=[komora,telefon];
alert(telefony[1].user);*/
let telefony = new Array(3);
for (let i=0; i<telefony.length; i++)
{
    telefony[i]=new Phone;
    telefony[i].brand=prompt('podaj marke telefonu');
    telefony[i].color=prompt('podaj kolor telefonu');
    telefony[i].price=prompt('podaj cene telefonu');
}

//alert(telefony[0].user);

