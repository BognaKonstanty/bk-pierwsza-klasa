
function Telefon(marka, kolor, waga, cena) {
	this.marka = marka;
	this.kolor = kolor;
	this.waga = waga;
	this.cena = cena;
}

Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", waga to " + this.waga + ", a cena to " + this.cena + ".");
}

var SamsungGalaxyS6 = new Telefon("Samsung","złoty", "138g", 1500);
var iPhone6S = new Telefon("Apple", "srebrny", "143g", 2250);
var OnePlusOne = new Telefon("OnePlus", "czarny", "162g", 1300);

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();
