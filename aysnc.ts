const flipCoin = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const result = Math.random();
    result
      ? resolve("You win! It was heads.")
      : reject("You lose! It was tails.");

    // if (result > 0.5) {
    //   resolve("You win! It was heads.");
    // } else {
    //   reject("You lose! It was tails.");
    // }
  });
};

const coinFlipResult = async () => {
  try {
    const result = await flipCoin();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

coinFlipResult();

const fetchAdvice = async () => {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${Date.now()}`,
    );
    const data = await response.json();
    console.log(data.slip.advice);
  } catch (error) {
    console.error("Error fetching advice:", error);
  }

  // if (!response.ok) {
  //   throw new Error("Failed to fetch advice");
  // }
};

fetchAdvice();

const getAdviceAfterFlip = async () => {
  try {
    const result = await flipCoin();
    console.log(result);
    const response = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${Date.now()}`,
    );
    const data = await response.json();
    console.log(data.slip.advice);
  } catch (error) {
    console.error("Error:", error);
  }
};

getAdviceAfterFlip();
