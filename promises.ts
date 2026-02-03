// Part 1 - Creating your own promise

// const passwordCheck = (password: string) => {
//     return new Promise((resolve, reject) => {
//         if (password==="password") {
//             resolve("Your password was correct!");
//         } else {
//             reject("Invalid password.");
//         }
//     });
// };

// passwordCheck("df")
// .then((message) => {
//     console.log(message);
// })
// .catch((error) => {
//     console.log("Error: " + error);
// });

// Part 2 - Fetching data from an API 

// type QuoteResponse = {
//     quote: string,
//     author: string,
// }

// fetch('https://api.breakingbadquotes.xyz/v1/quotes')
//     .then((response) => response.json())
//     .then((data: QuoteResponse[]) => {
//         console.log("Quote:", data[0].quote);
//         console.log("Author:", data[0].author);
//     })
//     .catch((error) => {
//         console.log("Error fetching quote:", error);
//     })

// Mix it up!

const flipCoin = () => {
    return new Promise((resolve, reject) => {
        let result = Math.random();
        if (result > 0.5) {
            resolve("You won! Your price is a quote from Breaking Bad...");
        } else {
            reject("You lose!");
        }
    });
};

type QuoteResponse = {
    quote: string,
    author: string,
}

flipCoin()
    .then((message) => {
        console.log(message);
        return fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    })

    .then((response) => response.json())
    .then((data: QuoteResponse[]) => {
        console.log("Quote:", data[0].quote)
        console.log("Autor:", data[0].author)
    })
    .catch((error) => {
        console.log("Error fetching quote:", error);
    })




