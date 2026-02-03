/*const myPromise = new Promise((resolve, reject) => {
    // Logic
    let success = truee;

    if(success) {
        resolve("Operation was successful!")
    }
    else {
        reject("Operation failed...")
    }
});

myPromise
.then((message) => {
    // Logic
    console.log(message);
})
.catch((error) => {
    // Logic
    console.log("Error: " + error);
});
*/

type AdviceResponse = {
    slip: {
        id:number;
        advice:string;
    }
}

const fetchAdviceById = (id: number) => {
    // Logic
    const promise: Promise<void> = fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response: Response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok.")
    }
    return response.json() as Promise<AdviceResponse>
    })
    .then((data: AdviceResponse) => {
        const advice: string = data.slip.advice;
        console.log(`Advice: (ID: ${id}): ${advice})`)
    })
    .catch((error: unknown) => {
        console.error("Error fetching advice:", error)
    })
};

fetchAdviceById(1);