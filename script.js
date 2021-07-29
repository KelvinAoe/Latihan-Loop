// // tugas nomor 1
// function eventext(text){
// if(typeof text === 'string'){
//     for (let i = 1 ; i <= text.length; i+=2) {
//       console.log(text[i])
//     }
// }else if(text === ""){
//     console.log("null")
// }else{
//     console.log("error input bukan string")
// }
// }
// eventext()

// tugas nomor 2
// function eventext(text){
//     var count = 0;
// if(typeof text === 'string'){
//     for (let i = 0 ; i <= text.length; i++) {
//       var txt = text[i];
//       if (txt == " "){
//           count+=1
//       }
//     }
//     count +=1
//     return count;
// }else if(text === ""){
//     console.log("null")
// }else{
//     console.log("error input bukan string")
// }
// }
// console.log(eventext("pratama afis"))

// tugas no 3
// function hitung(text){
//     var count = 0 ;
//     if (typeof text === 'string'){
//         text = text.split('');
//     for (let i = 0 ; i < text.length; i++){
//         if (text[i] === 'a'|| text[i] === 'e'|| text[i] === 'i'|| text[i] === 'o'|| text[i] === 'u'){
//             count++;
//         }else{
//             count++;
//         }
//     }
//     return count;
// }else{
//     console.log("error input bukan string")
// }
// }
// console.log(hitung(""))

//tugas no 4
// function terbalik(text){
//     var tulisan = " "
//     if (typeof text === 'string'){
//     for( var i = text.length - 1 ; i>= 0 ; i--){
//     tulisan += text[i]
//     }
//     return tulisan ;
//     }else{
//         console.log("error input bukan string")
//     }
// }

// console.log(terbalik("kelvin"))

// tugas no 5
// function palin(text){
//     var tulisan = ""
//     if (typeof text === "string"){
//         for( var i = text.length - 1 ; i>= 0 ; i--){
//             tulisan += text[i]
//         }if (tulisan === text){
//                 return true;
//             }else{
//                 return false 
//             }

//     }else{
//         console.log("error input bukan string")
//     }
// }

// console.log(palin("kasur"))

// tugas no 6

// function coinchange(uang){

//     let coin = [1000,500,200,100,50,20,10,5,1]
//     let hasil = []

//     while(uang > 0 ){
//         for(let i = 0; i < coin.length; i++){
//             if(uang >= coin[i]){
//                 uang -= coin[i]
//                 hasil.push(coin[i])
//                 break
//             }
//         }
        
//     }
//    console.log(hasil)
// }
// coinchange(5000)

//tugas no 7
// function simbol(num){
//     for(let i = 1 ; i <= num ; i++ ){
//         console.log("*".repeat(i))
//     }
// }
// simbol(5);

//tugas no 8
// function simbol(num){
//     for(let i = 1 ; i <= num ; i++ ){
//         let a = " ".repeat(num-i)
//         let b = "*".repeat(i*2 - 1)
//         console.log( a + b)
//     }
// }
// simbol(5);




//tugas no 9
// function balek(text){
//     var i = 0 , j 
//     var tulisan = ""
//     for (let i = 0; i < text.length; i++) {
//         for (let j = i + 1; j < text.length; j++) {
//             if (text[j]>text[i]){
//                 // var temp = text[i]
//                 // text[i]= text[j]
//                 // text[j] = temp
//                 var temp = text[i];
//                 text.set(i, text[j]);
//                 text.set(j, temp);
//             }
            
//         }
//     }
//     return tulisan = temp;
// }

// function balek (text){

//     text.sort((a, b) => {
//         if (a > b)
//             return -1;
//         if (a < b)
//             return 1;
//         return 0;
//     });
    
// }
// console.log(balek('keel'))

// String temp = text[i];
// text.set(i, text[j]);
// text.set(j, temp);