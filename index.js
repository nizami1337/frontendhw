// 1
let age = Number(prompt("Yas daxil edin: "))
switch (true) {
    case 0 < age && age < 12:
        console.log("usaq")
        break
    case 12 <= age && age < 18:
        console.log("yeniyetme")
        break
    case 18 <= age && age < 60:
        console.log("boyuk")
        break
    case 60 <= age:
        console.log("pensiyaci")
        break
}

// 2
let num = Number(prompt("Reqem daxil edin: "))
switch (num) {
    case 1:
        console.log("!")
        break
    case 2:
        console.log("@")
        break
    case 3:
        console.log("#")
        break
    case 4:
        console.log("$")
        break
    case 5:
        console.log("%")
        break
    case 6:
        console.log("^")
        break
    case 7:
        console.log("&")
        break
    case 8:
        console.log("*")
        break
    case 9:
        console.log("(")
        break
    case 0:
        console.log(")")
        break
}

// 3
let num3 = Number(prompt("Ucreqemli eded daxil edin: "))
let yuzluk = parseInt(num3 / 100)
let onluq = parseInt(num3 % 100 / 10)
let teklik = num3 % 10
if (yuzluk == onluq && onluq == teklik) {
    console.log('Reqemler beraberdir')
} else {
    console.log("Reqemler beraber deyil")
}

// 4
let year = Number(prompt("Il daxil edin: "))
if (year % 4 == 0) {
    console.log("Sicrayis ilidir")
} else {
    console.log("Sicrayis ili deyil")
}

// 5
let diapazonStart = parseInt(prompt("Diapazon baslangic: "))
let diapazonEnd = parseInt(prompt("Diapazon son: "))
let sum = 0
for (let i = diapazonStart; i<=diapazonEnd; i++) { // diapazonun [a,b] oldugunu ferz etsek
    sum += i
}
console.log(sum)

// 6
let num6 = parseInt(prompt("Eded daxil edin: "))
for (let i=1; i<=num6;i++) {
    if (num6 % i == 0) {
        console.log(i)
    }
}

// 7
let num7 = parseInt(prompt("Eded daxil edin: "))
let reqemSayi = 0
while (num7 > 1) {
    reqemSayi++
    num7 = num7 / 10
}
console.log(reqemSayi)

// 8
let nums = prompt('Bosluqla 10 eded daxil edin: ').split(' ')
console.log(nums)
let tekler = 0
let cutler = 0
let musbetler = 0
let sifirlar = 0
let menfiler = 0
for (let i = 0; i < nums.length; i++) {
    if (Number(nums[i]) % 2 == 0) {
        cutler++
    } else {
        tekler++
    }

    if (Number(nums[i]) > 0) {
        musbetler++
    } else if (Number(nums[i]) < 0) {
        menfiler++
    } else {
        sifirlar++
    }
}

document.getElementById('stats').innerHTML = `Tekler: ${tekler} | Cutler: ${cutler} | Musbetler: ${musbetler} | Menfiler: ${menfiler} | Sifirlar: ${sifirlar}`