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

const runCoinFlip = async () => {
  try {
    const result = await flipCoin();
    console.log(result);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

runCoinFlip();

function delay(): Promise<string> {
    return fetch("https://api.adviceslip.com/advice")
    
    });
}



