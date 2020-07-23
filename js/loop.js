///////////working with all kinds of loops in javascript
//for loop
for(let x=0;x<5;x++){
    console.warn(x)
}

/////while loop
let y=0
while(y<10){
    console.error(y)
    y++
}


////do while loop
let z=0
do{
    console.log(z)
    z++
}
while(z<15)

function calAge(birthyr){
    return new Date().getFullYear()-birthyr
}   
console.warn(calAge(1998))


///switch case
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day)
//   console.warn(typeof(day))