function debounce(func, delay) {
    let timer;
  
    return function() {
      const context = this;
      const args = arguments;
  
      clearTimeout(timer);
      timer = setTimeout(function() {
        func.apply(context, args);
      }, delay);
    };
  }

function exampleFunc() {
    console.log('Function executed.');
  }
  
  const debounceFunc = debounce(exampleFunc, 500);

debounceFunc();
debounceFunc();
