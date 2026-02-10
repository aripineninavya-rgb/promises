// Part 1: Creating Your Own Promise 

const flipCoin =() : Promise<string> => {
  return new Promise((resolve, reject) => {
    let result = Math.random();

    if (result > 0.5) {
      resolve("You win! It was heads.");
    } else {
      reject("You lose! It was tails.");
    }
  });
}

// Test it
flipCoin()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });


// Part 2: Fetching Data from an API 
  function getAdvice(): Promise<void> {
  return fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch advice");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Advice:", data.slip.advice);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Test it
getAdvice();

