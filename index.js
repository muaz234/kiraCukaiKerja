//  add your EPF deductions
const percentEPF = 0.13;
const pendapatan = '';
// ex: 1000 + 1000 + 1000 for 12 month salary
const pendapatan_arr = pendapatan.replaceAll('+', ',')
const convertPendapatanToNum = pendapatan_arr.split(',').map(Number)
const sumPendapatan = convertPendapatanToNum.reduce((partialSum, a) => partialSum + a, 0);
const cukaiEPF = percentEPF * sum
console.log('pendapatan adalah sebanyak RM ', convertPendapatanToNum);
console.log('total cukai is RM ', sum);
console.log('epf is sebanyak RM ', cukaiEPF)