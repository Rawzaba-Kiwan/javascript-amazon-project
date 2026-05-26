import { formatCurrency} from '../scripts/utils/money.js';


console.log('test suite: formatCurrency')

console.log('Works with 0')


 if(formatCurrency(0) === '0.00'){
    console.log('passed')

  }
  else {console.log('failed')}
  console.log('rounds up to the cent')
  if (formatCurrency(2000.5)==='20.01') {
    console.log('passed')
  }
  else{console.log('failed')}

 
