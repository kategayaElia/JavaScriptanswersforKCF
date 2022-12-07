

 let arr = ['a', 5, 6];

 let evens = [];
 let odds = [];
 let chars = [];

 for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens += arr[i];
    }

    else if (arr[i] % 2 === 1) {
      odds += arr[i];
    }
    else {
      chars += arr[i];
    }
 }

 console.log("{ evens: [" + evens + "], odds: [" + odds + "], chars: [" + chars + "] }") ;