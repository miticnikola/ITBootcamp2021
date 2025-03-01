// 
let paragrafi = document.querySelectorAll("p");

paragrafi.forEach(paragraf => {
    paragraf.innerHTML += ` VAZNO!!!`;
});

// 
let errorDiv = document.querySelectorAll("div.error");
errorDiv.forEach(div => {
    div.innerHTML = `<h1>Greska!</h1>` + div.innerHTML; // da bi naslov bio na pocetku
});

//
let n = paragrafi.length;

// for(let i = 0; i < n; i++){
//     paragrafi[i].innerHTML += (i + 1) ** 2;
// }

paragrafi.forEach((parag, i) =>{
    parag.innerHTML += (i+1) ** 2;
});

// svim slikama dodati alternativni text
let slike = document.querySelectorAll("img");
console.log(slike);

slike.forEach((slika, i) => {
    slika.setAttribute('alt', `slika ${i+1}`);
});

// svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom
paragrafi.forEach(paragraf => {
    paragraf.setAttribute('style', "color: purple");
});

// svim parnim paragrafima postaviti pozadinsku zelenu boju a svim neparnim paragrafima postaviti pozadinsku crvenu boju

paragrafi.forEach((paragraf, i) => {
    if(i % 2 == 0){
        paragraf.style.backgroundColor = "green";
    } else {
        paragraf.style.backgroundColor = "red";
    }
});

// svim linkovima postaviti padding 5px fsz 18px i text-dec: none. Parnim linkovima zelena pozadinska boja, i ljub boja texta, a neparnim plava pozadina i beo text

//prepravio sam od 8px na 18 zbog vidljivosti

let linkovi = document.querySelectorAll('a');

linkovi.forEach((link, i) => {
    link.setAttribute('style', 'padding: 5px; font-size: 18px; text-decoration: none;');

    if(i % 2 == 0){
        link.setAttribute('style', 'background-color: green; color: purple');
    } else {
        link.setAttribute('style', 'background-color: blue; color: white');
    }
});

// svim slikama sa extenzijom .png, postaviti okvir debljine 2px crvene boje

//nacin 1
slike.forEach(slika => {
    if(slika.src.includes(".png") || slika.src.includes(".PNG")) {
        slika.style.border = "2px solid red";
    }
});

// nacin2
let slikePng = document.querySelectorAll("img[src*='png']");
slikePng.forEach(slika => {
    slika.style.border = "2px solid green";
});

// Svakom linku na stranici promeniti target svojstvo na sl nacin:
// ako je bilo blank, postaviti top, a ako nije imalo vrednosti ili je bilo razlicito od blank - postaviti _blank 
let linkovi1 = document.querySelectorAll("a[target]");

linkovi.forEach(link => {
    if(link.hasAttribute('target') == true && "_blank"){
        link.setAttribute('target', '_top');
    } else if(link.hasAttribute('target') == false || link.hasAttribute('target') != "_blank"){
        link.setAttribute('target', '_blank');
    }
});

// nacin sa casa
linkovi.forEach(link => {
    if(link.target === "_blank"){
        link.target = "_top";
    } else {
        link.target = "_blank";
    }
});

/*
Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
1. Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
2. U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
3. U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.
*/

let imena = ["pera", "mika", "laza", "Sonja", "persa", "zoki"];

//1.
imena.forEach(ime => {
    if(ime.startsWith("S")){
        document.body.innerHTML += `<a href="#" target="_blank">${ime} </a>`;
    } else {
        document.body.innerHTML += `<a href="#" target="">${ime} </a>`;
    }
});

// nacin sa casa
imena.forEach(ime => {
    if(ime[0] == "S"){
        document.body.innerHTML += `<a href="#" target="_blank">${ime} </a>`;
    } else {
        document.body.innerHTML += `<a href="#">${ime} </a>`;
    }
});

// 2.
let lista = `<ul>`;
imena.forEach((ime, i) => {
    if(i % 2 == 0){
        lista += `<li style="color: red">${ime}</li>`;
    } else {
        lista += `<li style="color: green">${ime}</li>`;
    }
});
lista += `</ul>`;
document.body.innerHTML += lista;

// 3.








