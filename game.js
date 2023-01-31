//const { AutoComplete } = require('enquirer');


// node module to read from and write to command line
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const chalk = require("chalk");
function askQuestion(question, answers) {
    const answersArray = Object.keys(answers);
    //  console.log("answers array", answersArray);
    //display question and answers // hier durchiterieren fuer mehr antworten?
    // console.log("log: ", question)
    // const prompt = new AutoComplete (
    //     { 
    //         name: "name",
    //         message: "Testfrage",
    //         limit: answersArray.length,
    //         //inital: 0,
    //         choices: answersArray
    //     }
    // )
    const prompt =
        chalk.yellowBright`${question} \n` +
        chalk.white(
            `${answersArray[0]}` +
                chalk.yellowBright` oder ` +
                `${answersArray[1]} | `
        );
    // question = method
    rl.question(prompt, (answer) => {
        console.log(
            chalk.yellowBright`Deine Antwort ist: ` +
                chalk.greenBright(`${answer}`)
        );
        const data = answers[answer];

        //map to lower case?
        if (!answersArray.includes(answer)) {
            console.log("Quatsch");
            askQuestion(question, answers);
        } else if (typeof data !== "object") {
            console.log(answers[answer]);
            rl.close();
        } else {
            question = data.q;
            answers = data.answers;
            //recursive
            askQuestion(question, answers);
        }
    });
}
askQuestion(story.q, story.answers);

// possibility for ascii-pics

//                           __,--'\\
//                     __,--'    :. \\
//                _,--'              \\`.
//               /|\\       `          \\ `.
//              / | \\        `:        \\  `/
//             / '|  \\        `:.       \\
//            / , |   \\                  \\
//           /    |:   \\              `:. \\
//          /| '  |     \\ :.           _,-'`.
//        \\' |,  / \\   ` \\ `:.     _,-'_|    `/
//           '._;   \\ .   \\   `_,-'_,-'
//         \\'    `- .\\_   |\\,-'_,-'
//  jrei               `--|_,`'
//                             `/

//                           __,--'\
//                     __,--'    :. \.
//                _,--'              \`.
//               /|\       `          \ `.
//              / | \        `:        \  `/
//             / '|  \        `:.       \
//            / , |   \                  \
//           /    |:   \              `:. \
//          /| '  |     \ :.           _,-'`.
//        \' |,  / \   ` \ `:.     _,-'_|    `/
//           '._;   \ .   \   `_,-'_,-'
//         \'    `- .\_   |\,-'_,-'
//  jrei               `--|_,`'
//                             `/

// shortcut answers
