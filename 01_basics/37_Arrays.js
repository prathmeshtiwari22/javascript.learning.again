const arrTwo = [1,2,3,4,5] // PACKED_SMI_ELEMENTS (all small integers, no holes)
arrTwo.push(6.0)           // PACKED_DOUBLE_ELEMENTS (now includes a float)
arrTwo.push('7')           // PACKED_ELEMENTS (now includes a string)
arrTwo[10]=11              // HOLEY_ELEMENTS (indices 8 and 9 are missing)

// BOUND CHECK
// hasOwnproperty
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
////hasOwnProperty(Object.prototype,10)
//holes are very expensive in js

// SMI>DOUBLE>NORMAL PACKED
// H_SMI>H_DOUBLE>H_PACKED
// JUST 3 HOLES. HOLEY_SMI_ELEMENTS
const arrFour = new Array(3)
arrFour[0]='1'   // HOLEY_ELEMENTS
arrFour[1]='1'  // HOLEY_ELEMENTS
arrFour[2]='1' //HOLEY_ELEMENTS

const arrFive=[]
arrFive.push('1') // PACKED_ELEMENTS

const arrSix= [1,2,3,4,5,6]
arrSix.push(Infinity)
//for,for-of,forEach

