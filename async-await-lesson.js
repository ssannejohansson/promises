/*const myPromise = new Promise((resolve, reject) => {
    // Logic
    let success = false;

    if(success) {
        resolve("Operation was successful!")
    }
    else {
        reject("Operation failed...")
    }
});

const result = async () => {
    //write trycatch then tab to create it
    try {
        const value = await myPromise;
        console.log(value);
    } catch (error) {
        console.log("Error: ", error);
    }
}

result();*/

// const fetchAdviceByID = async (id) => {
//     try {
//         const response = await fetch(`https://api.adviceslip.com/advice/${id}`)
//         if (!response.ok) {
//             throw new Error("Network response was not ok.");
//         }
//         const data = await response.json();
//         const advice = data.slip.advice;
//         console.log(`Advice: (ID: ${id}): ${advice})`)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchAdviceByID(1);



