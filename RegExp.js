function addThousandSeparator(number) {
    const str = number.toString();
  
    const parts = str.split('.');
    let integerPart = parts[0];
    const decimalPart = parts.length > 1 ? `.${parts[1]}`  : '';
  
    const pattern = /(\d)(?=(\d{3})+$)/g;
    integerPart = integerPart.replace(pattern, '$1,');
  
    const result = integerPart + decimalPart;
  
    return result;
  }
  
  const input = -7855948.9527;
  const output = addThousandSeparator(input);
  
  console.log(output);// -7,855,948.9527