let startTime = new Date();
let sum = 0;
let soni = 0;
let about = alert(
  "Salom siz bizni botda test topshirmoqchisiz \n 4 ta asosiy savol 3.1 ball \n 4 ta ikkinchi blok savoli 2.1 ball \n 4 ta majburiy blok savoli 1.1balldan "
);
let start = alert(
  "Asosiy blok savollarini boshlang (!!Eslatma har bir savol 3.1 balldan)"
);
let yosh = prompt(
  "1- Alisher Navoiy qachon tug'ilgan \n A) 1441-yil \n B) 1440-yil \n C) 1439-yil \n D) 1500-yil"
);
if (yosh[0] == "a" || yosh[0] == "A" || yosh[3] == "1") {
  sum += 3.1;
  soni += 1;
}
let yil = prompt(
  "2- 2011-yil qanday yil edi? \n A) Barkamol avlod \n B) Kichik biznes va xususiy tadbirkorlik \n C)Sog'lom ona va bola  \n D) Yoshlar"
);
if (yil[0] == "b" || yil[0] == "B" || yil[0] == "K") {
  sum += 3.1;
  soni += 1;
}
let chempion = prompt(
  "3- YeCHL tarixida eng ko'p chempion bo'lgan klub qaysi? \n A) Barcelona \n B) Juventus \n C) Liverpool  \n D) Real Madrid"
);
if (chempion[0] == "d" || chempion[0] == "D" || chempion[0] == "R") {
  sum += 3.1;
  soni += 1;
}
let goldMan = prompt(
  "4- Futbol tarixida eng ko'p oltin to'p olgan futbolchi? \n A) L. Messi \n B) C. Ronaldo \n C) Pele  \n D) Maradona"
);
if (goldMan[0] == "a" || goldMan[0] == "A" || goldMan[0] == "L") {
  sum += 3.1;
  soni += 1;
}

let soni1 = 0;
let start1 = alert(
  "Ikkinchi blok savollarini boshlang (!!Eslatma har bir savol 2.1 balldan)"
);
let yosh1 = prompt(
  "1- Amir Temur qachon tug'ilgan \n A) 1441-yil \n B) 1336-yil \n C) 1501-yil \n D) 1405-yil"
);
if (yosh1[0] == "b" || yosh1[0] == "B" || yosh1[3] == "6") {
  sum += 2.1;
  soni1 += 1;
}
let yil1 = prompt(
  "2- 1999-yil qanday yil edi? \n A) Barkamol avlod \n B) Kichik biznes va xususiy tadbirkorlik \n C)Sog'lom ona va bola  \n D) Yoshlar"
);
if (yil1[0] == "d" || yil1[0] == "D" || yil1[0] == "Y") {
  sum += 2.1;
  soni1 += 1;
}
let chempion1 = prompt(
  "3- Misr davlati qaysi qit'ada  joylashgan? \n A) Afrika \n B) Yevropa \n C) Osiyo  \n D) J. Amerika"
);
if (chempion1[0] == "a" || chempion[0] == "A") {
  sum += 2.1;
  soni1 += 1;
}
let goldMan1 = prompt(
  "4- Eng sovuq harorat qayerda kuzatilgan? \n A) Antarktika \n B) Sibir \n C) Arktika  \n D) SH. qutub"
);
if (goldMan1[0] == "a" || goldMan1[0] == "A") {
  sum += 2.1;
  soni1 += 1;
}

let soni2 = 0;
let start2 = alert(
  "Majburiy blok savollarini boshlang (!!Eslatma har bir savol 1.1 balldan)"
);
let yosh2 = prompt(
  "1- Loy jangi qachon bo'lgan \n A) 1451-yil \n B) 1436-yil \n C) 1501-yil \n D) 1365-yil"
);
if (yosh2[0] == "d" || yosh2[0] == "D" || yosh2[3] == "5") {
  sum += 1.1;
  soni2 += 1;
}
let yil2 = prompt(
  "2- 2010-yil qanday yil edi? \n A) Barkamol avlod \n B) Kichik biznes va xususiy tadbirkorlik \n C)Sog'lom ona va bola  \n D) Yoshlar"
);
if (yil2[0] == "a" || yil2[0] == "A" || yil2[0] == "B") {
  sum += 1.1;
  soni2 += 1;
}
let chempion2 = prompt(
  "3- Kuba davlati qaysi qit'ada  joylashgan? \n A) Afrika \n B) Yevropa \n C) Osiyo  \n D) J. Amerika"
);
if (chempion2[0] == "d" || chempion2[0] == "D") {
  sum += 1.1;
  soni2 += 1;
}
let goldMan2 = prompt(
  "4- Eng chuqur botiq qaysi? \n A) Mariana  \n B) Baykal \n C) Amazonka  \n D) Nil"
);
if (goldMan2[0] == "a" || goldMan2[0] == "A" || goldMan2[0] == "M") {
  sum += 1.1;
  soni2 += 1;
}
let endTime = new Date();
let timeElasped = (endTime - startTime) / 1000;
let natija = alert(
  `Siz 4 ta asosiy blokdan ${soni} ta \n4ta ikkinchi blokdan ${soni1} ta \n4ta majburiy blokdan ${soni2} ta to'g'ri javob topdingiz \nUmumiy to'plagan balingiz ${sum}\n\n Siz test uchun ${timeElasped}s vaqt sarfladingiz `
);

let imtiyoz = prompt(
  "!!Sizda qanday imtiyoz bor? \n1- Til sertifikatiga ega (50%) \n2- Harbiy xizmat o'tagan shaxs (30%) \n3- Nogironligi bor shaxs (20%\n4-Imtiyoz mavjud emas"
);
if (imtiyoz[0] == "1" || imtiyoz[3] == "T" || imtiyoz[3] == "t") {
  sum = sum + sum * 0.5;
}
if (imtiyoz[0] == "2" || imtiyoz[3] == "H" || imtiyoz[3] == "h") {
  sum = sum + sum * 0.3;
}
if (imtiyoz[0] == "3" || imtiyoz[3] == "N" || imtiyoz[3] == "n") {
  sum = sum + sum * 0.2;
}
if (imtiyoz[0] == "4" || imtiyoz[3] == "I" || imtiyoz[3] == "i") {
  sum = sum;
}

let natija1 = alert(
  `Tabriklaymiz!! Sizni imtiyozingizni hisobga olingan holda umumiy balingiz ${sum} `
);
