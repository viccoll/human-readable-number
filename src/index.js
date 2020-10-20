module.exports = function toReadable (number) {
    let s='';
  switch( ((number / 100).toString())[0] )
  {
    case '1': s+= "one hundred "; break;
    case '2': s+= "two hundred "; break;
    case '3': s+= "three hundred "; break;
    case '4': s+= "four hundred "; break;
    case '5': s+= "five hundred "; break;
    case '6': s+= "six hundred "; break;
    case '7': s+= "seven hundred "; break;
    case '8': s+= "eight hundred "; break;
    case '9': s+= "nine hundred "; break;
  }
  switch( (((number % 100) / 10).toString())[0])
  {
    case '2': s+= "twenty "; break;
    case '3': s+= "thirty "; break;
    case '4': s+= "forty "; break;
    case '5': s+= "fifty "; break;
    case '6': s+= "sixty "; break;
    case '7': s+= "seventy "; break;
    case '8': s+= "eighty "; break;
    case '9': s+= "ninety "; break;
  }
  if((number % 100) >= 10 & (number % 100) < 20)
  {
    switch((((number % 100)).toString()))
    {
      case '10': s+= "ten "; break;
      case '11': s+= "eleven "; break;
      case '12': s+= "twelve "; break;
      case '13': s+= "thirteen "; break;
      case '14': s+= "fourteen "; break;
      case '15': s+= "fifteen "; break;
      case '16': s+= "sixteen "; break;
      case '17': s+= "seventeen "; break;
      case '18': s+= "eighteen "; break;
      case '19': s+= "nineteen "; break;
    }
  }
  else{
    switch(((number % 10).toString())[0])
    {
      case '1': s+= "one "; break;
      case '2': s+= "two "; break;
      case '3': s+= "three "; break;
      case '4': s+= "four "; break;
      case '5': s+= "five "; break;
      case '6': s+= "six "; break;
      case '7': s+= "seven "; break;
      case '8': s+= "eight "; break;
      case '9': s+= "nine "; break;
    }
  }

  return (number===0) ? 'zero': s.slice(0, -1)
;

}
