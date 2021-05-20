
//first task:

function convertFahrToCelsius (temperature){
  if (temperature == 0 ){
    return (temperature - 32) * (5/9).toFixed(4) + " degree celsius";
  }
  if (temperature =="0" ){
    return (temperature - 32) * (5/9).toFixed(4) + " degree celsius";
  }
  if (temperature == 32){
    return (temperature - 32) * (5/9) + " degree celsius" 
  }

  if(temperature === numArr){
    return (`${numArr} is not a valid number but a/an array`)
  }
  
  if (temperature === numObj){
    return (`${numObj} is not a valid number but a/an object `)
  } 
}
const numArr = [1,2,3];
const numObj = {"temp" : 0 }
console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("0"))
console.log(convertFahrToCelsius(32))
console.log(convertFahrToCelsius(numObj))
console.log(convertFahrToCelsius(numArr))




//second task answer: 

function checkYuGiOh (n){
  const arrValues = [];
  if(n == invalid){
    return `INVALID PARAMTER: "${invalid}" `
  }

  for (i = 1 ; i <= n; i+=1){
    let outputVal = "";
    if(i % 2 == 0){
      outputVal += 'yu';
      if(outputVal.length >= 2){
        outputVal += "-"
      }
    }
    if(i % 3 == 0){
      outputVal += "gi";
      if(outputVal.length >= 2){
        outputVal += "-"
      }
    }
   if(i % 5 == 0){
     outputVal += "oh";
     if(outputVal.length >= 2){
        outputVal += "-"
     }

    }
    if(outputVal.charAt(outputVal.length-1) == "-"){
      outputVal = outputVal.slice(0, outputVal.length-1);
    }
    arrValues.push(outputVal || i);
  }
  return arrValues;

}
const invalid = "Fuzz is meh";
console.log(checkYuGiOh(invalid));
console.log(checkYuGiOh(10));
console.log(checkYuGiOh(5));


