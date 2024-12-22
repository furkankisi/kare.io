function kareAl(dizi) {
    
    return dizi.map(sayi => sayi * sayi);
}


const sayilar = [2, 4, 6, 8];
const kareliSayilar = kareAl(sayilar);


console.log(kareliSayilar);
