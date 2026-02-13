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

const getAdvice = async (): Promise<string> => {
  const response = await fetch(
    `https://api.adviceslip.com/advice?timestamp=${Date.now()}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch advice");
  }

  const data = await response.json();
  return data.slip.advice;
};

const playGame = async () => {
  try {
    const result = await flipCoin();
    console.log(result);

    const advice = await getAdvice();
    console.log("Your reward advice:", advice);
  } catch (error) {
    console.log(error);
  }
};

playGame();
