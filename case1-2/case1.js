function numberCounter(param){
  const arr = `${param}`.split('')
  
  for (let i = 0; i <= 9; i++){
    let counter = 0
    arr.forEach(val => val === `${i}` ? counter++ : '')
    console.log(
      `The number ${i} appears ${counter} time${counter !== 1 ? 's' : ''}`
      );
    }
}

numberCounter('464654613221689849879851320032032065')