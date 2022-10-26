const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newResult = tutorials.map((value) => {
    let sentence = ""
    let result = []
    
    value.split(' ').map((val) => sentence += val[0].toUpperCase() + val.slice(1)+" ")

   result += sentence.slice(0,-1)
   return result
  })
  return newResult
}
