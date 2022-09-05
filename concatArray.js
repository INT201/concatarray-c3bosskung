const { template } = require('@babel/core')

function concatArray(array1, array2) {
    let resultArr = [];
    let checkL = 0;
    if((array1 === null || array1 === undefined) && (array2 === null || array2 === undefined)) {
      return undefined;
    } else if (array1 === null || array1 === undefined || array1.length === 0) {
      return array2;
    } else if (array2 === null || array2 === undefined || array2.length === 0) {
      return array1;
    } else if (array1.length === 0 && array2.length === 0) {
      return [];
    } else {
        for (let i = 0; i < array1.length; i++) {
          resultArr[i] = array1[i]
          checkL++;
        }
        for (let i = 0; i < array2.length; i++) {
          resultArr[i+checkL] = array2[i]
        }
        return resultArr
    }
}

module.exports = concatArray
