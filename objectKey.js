function flattenObject(obj, prefix = '') {
    const flattenedObj = {};
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const prefixedKey = prefix ? prefix + '.' + key : key;
  
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          const nestedObj = flattenObject(obj[key], prefixedKey);
          Object.assign(flattenedObj, nestedObj);
        } else {
          flattenedObj[prefixedKey] = obj[key];
        }
      }
    }
  
    return flattenedObj;
  }
  
  const input = {a: { b: 5, c: {d: 3} }, e: { f: 'foo' } };
  const output = flattenObject(input);
  
  console.log(output);
  // { 'a.b': 5, 'a.c.d': 3, 'e.f': 'foo' }