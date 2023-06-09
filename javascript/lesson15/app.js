// ATM Uygulamasi
/*
Bakiye goruntuleme
Para cekme
Para yatirma
Cikis
*/
let bakiye = 1000;
let newLine = "\r\n";

let textEkran = "1-Bakiye Goruntuleme" + newLine + "2-Para Cekme" +
        newLine + "3-Para Yatirma" + newLine + "4-Cikis" + newLine + "Lutfen 1 ile 4 ar" +
        "asinda bir deger giriniz."
//alert(textEkran);
let selection = Number(prompt(textEkran));
switch (selection) {
    case 1:
        alert("Bakiyeniz : " + bakiye)
        break;
    case 2:
        let cekilecekTutar = Number(prompt("Cekilecek tutari giriniz."));
        if (cekilecekTutar < bakiye) {
            // basarili
            bakiye = bakiye - cekilecekTutar;
        } else {
            alert(
                "Bakiyenizden fazla para cekemezsiniz." + newLine + "Bakiyeniz : " + bakiye+" "+ "Cekilecek tutar : " +
                cekilecekTutar
            );
        }
        break;
    case 3:
        let yatirilacakTutar = Number(prompt("Yatirilacak tutari giriniz."));
        bakiye=bakiye+yatirilacakTutar;
        alert("Paraniz basari ile yatirilmistir."+newLine+
        "Yeni Bakiyeniz : " + bakiye)
        break;
    case 4:
        alert("Basari ile cikis yaptiniz."+newLine+
        "Tekrar bekleriz.")
        break;

    default:
        alert("Lutfen 1 ile 4 arasinda gecerli bir deger giriniz.")
        break;
}
