// Part 1: Coin flip
const flipCoin = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    let result = Math.random();

    if (result > 0.5) {
      resolve("You win! It was heads.");
    } else {
      reject("You lose! It was tails.");
    }
  });
};

// Part 2: Get advice
function getAdvice(): Promise<string> {
  return fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch advice");
      }
      return response.json();
    })
    .then((data) => {
      return data.slip.advice;
    });
}

// Test Part 1
flipCoin()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Test Part 2
getAdvice()
  .then((advice) => console.log("Advice:", advice))
  .catch((error) => console.error(error));

// Part 3: Combine both
flipCoin()
  .then((result) => {
    console.log(result);
    return getAdvice();
  })
  .then((advice) => {
    console.log("Your reward advice:", advice);
  })
  .catch((error) => {
    console.log(error);
  });
