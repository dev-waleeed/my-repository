// const gameChanger = "waleed"
// console.log(gameChanger.anchor);

// const newString ="100"
// console.log(Math.sqrt(100));

// const min = 10 
// const max = 20

//console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//console.log(Math.random() * (max - min + 1) + min)

// console.log(Math.random()*10)
// console.log(Math.floor(Math.random()*(max - min + 1) + min))



// console.log(Math.random());
// console.log((Math.random()*10));
// console.log(Math.floor(Math.random()*10) + 1);

//let myDate = new Date()

let newDate = new Date()

//console.log(newDate.getDate());
//console.log(newDate.getMonth() + 1);
//console.log(newDate.getFullYear());

let dateNow = Date.now()
//console.log(Math.ceil(dateNow / 1000))

let myDate = new Date()
 //console.log(myDate.toLocaleString());
 //console.log(myDate.toDateString());
 //console.log(myDate.toISOString());
 //console.log(myDate.toJSON());
 //console.log(myDate.toLocaleDateString());
 //console.log(myDate.toString())


console.log( myDate.toLocaleString("default", {
   // weekday: "short",
    weekday: "long",
    //weekday: "narrow",
 }));