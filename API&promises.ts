function flipCoin(): Promise<string> {
  return new Promise((resolve, reject) => {
    const random = Math.random();

    if (random > 0.5) {
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
