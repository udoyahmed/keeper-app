// const numbers = [1, 2, 3, 4, 5]

// const newNumbers = numbers.map((x) => {
//     return x * 2;
// })

// const newNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
// });

// const newNumbers = numbers.reduce((accumulator, num) => {
//     return accumulator + num;
// })

// const data = [
//     {
//         id: 1,
//         title: "Note 1",
//         content: "Content 1"
//     },
//     {
//         id: 2,
//         title: "Note 2",
//         content: "Content 2"
//     },
//     {
//         id: 3,
//         title: "Note 3",
//         content: "Content 3"
//     }
// ]

// const newData = data.find((data) => data.id === 2);

// console.log(newData.title);

const emojipedia = [
    {
        id: 1,
        emoji: "💪",
        name: "Tense Biceps",
        meaning:
            "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
        id: 2,
        emoji: "🙏",
        name: "Person With Folded Hands",
        meaning:
            "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
        id: 3,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning:
            "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    }
];

const newEmoji = emojipedia.map(emoji => emoji.meaning.slice(0, 100));

console.log(newEmoji);