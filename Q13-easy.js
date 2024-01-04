var romanToInt = function (s) {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      };
    
      const exceptions = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
      };
    
      let total = 0;
      let i = 0;
    
      while (i < s.length) {
        if (i < s.length - 1) {
          const twoChars = s.slice(i, i + 2);
          if (exceptions.hasOwnProperty(twoChars)) {
            total += exceptions[twoChars];
            i += 2;
            continue;
          }
        }
    
        total += romanValues[s[i]];
        i++;
      }
    
      return total;
};

console.log(romanToInt("MCMXCIV"))