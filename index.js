// function smallestNumber(numbersOfArray){
//     let smallest = numbersOfArray[0];
//     for (let i=0; i<numbersOfArray.length; i++){
//         if(numbersOfArray[i] < smallest){
//             smallest = numbersOfArray[i];
//         }
//     }
//     return smallest
// }
// console.log(smallestNumber([100,28,38,40,70,90,100]));

// const numbers = ["79", "26", "15","29","30","26","15","29","79","15","24"];

 
// function removeDuplicat(array){
//     const unickNumbers = [];
//     for (let i = 0; i < array.length; i++){
//         if(unickNumbers.indexOf(numbers[i]) == -1){
//             unickNumbers.push(numbers[i]);
//         }
//     }
//     return unickNumbers;
// }
// const outPut = removeDuplicat(numbers);
// console.log(outPut);
 


// let playerNames = ("Icon Sabbir")
//     function reversedWords(sentence) {
//         let reversed = "";
//         for(var i = 0; i <sentence.length; i++){
//             let words = sentence[i];
//             reversed = words + reversed;
//         }
//         return reversed;
//     }

//     console.log(reversedWords(playerNames));

// let playerNames = ("Icon Sabbir")
//     function reversedWords(sentence) {
//         let reversed = "";
//         for(var i = 2; i < sentence.length; i++){
//             let words = sentence [i] ;
//             reversed = words + reversed;
//         }
//         return reversed;
//     }

//     console.log(reversedWords(playerNames));

// function add(namber1,namber2){
//     return namber1 * namber2;
// }

// const result = add(30,4);

//     console.log(result);

// function add(mabel1,marbel2){
//     return mabel1 /marbel2;
// }

// const resultOfnambers = add(400,6)

// console.log(resultOfnambers);



// function bikecalculater (r15, gsxr, gpx){

//     let perR15Bike = 15;
//     let pergsxrBike = 12;
//     let perGpxBike = 10;

//     const r15Bike = r15 * perR15Bike;
//     const gsxrBike = gsxr * pergsxrBike;
//     const gpxBike = gpx * perGpxBike;

//     return r15Bike + gsxrBike + gpxBike;

// }
// console.log(bikecalculater (4, 6, 8));



// function bikecalculater (r15, gsxr, gpx){

//     let perR15Bike = 25;
//     let pergsxrBike = 22;
//     let perGpxBike = 16;

//     const r15Bike = r15 * perR15Bike;
//     const gsxrBike = gsxr * pergsxrBike;
//     const gpxBike = gpx * perGpxBike;

//     return r15Bike * gsxrBike * gpxBike;

// }
// console.log(bikecalculater (20, 9, 8));


// for (i = 1; i <= 100; i++){
//     if(i%3==0 && i%5==0){
//         console.log("foobar");
//     }else if(i%3==0){
//         console.log("foo")
//     }else if(i%5==0){
//         console.log("bar")

//     }else{
//         console.log(i)
//     }
    

// }


// for (i = 1; i <=70; i++){
//     if(i%2==0 && i%4==0){
//         console.log("foobar");
//     }else if(i%2==0){
//         console.log("foo")
//     }else if(i%4==0){
//         console.log("bar")

//     }else{
//         console.log(i)
//     }
    

// }


const sneakers = [
    {price: 1200, color:"skyblu", size: 40},
    {price: 2300, color:"red", size: 42},
    {price: 1500, color:"green", size: 38},
    {price: 1855, color:"black", size: 44},
    {price: 800, color:"white", size: 32},



]
let lowPrice = sneakers[0];
for(const sneaker of sneakers){
    // console.log(sneaker);
    if(lowPrice.price > sneaker.price){
        lowPrice = sneaker
    }
}
console.log(lowPrice);