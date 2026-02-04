// Part 1 - Creating your own promise

const passwordCheck = (password: string) => {
    return new Promise((resolve, reject) => {
        if (password==="password") {
            resolve("Your password was correct!");
        } else {
            reject("Invalid password.");
        }
    });
};

const passwordCheckResult = async () => {
    try {
        const result = await passwordCheck("yjhj");
        console.log(result)
    } catch (error) {
        console.log(error)
        
    }
}

//passwordCheckResult()

// Part 2 - Fetching data from an API 

const fetchQuote = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
         }
        const data  = await response.json();
        console.log(data.slip.advice);
    } catch (error) {
        console.log("Error fetching advice:", error)
    }
}

//fetchQuote();

// Mix it up!

const flipCoin = () => {
    return new Promise((resolve, reject) => {
        let result = Math.random();
        if (result > 0.5) {
            resolve("You won! Your price is a free advice...");
        } else {
            reject("You lose!");
        }
    });
};

const flipCoinResult = async () => {
    try {
        const result = await flipCoin();
        console.log(result)
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        console.log("Advice:", data.slip.advice)
    } catch (error) {
        console.log(error)
    }
}

flipCoinResult()





