const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's your name? Nicknames are also acceptable ", (answer) => {
    console.log(`Thank you for your answer: ${answer}`);

    rl.question("What's an activity you like doing? ", (answer) => {
      console.log(`Thank you for your answer: ${answer}`);

      rl.question("what do you listen to while doing that?", (answer) => {
        console.log(`Thank you for your answer: ${answer}`);

        rl.question("what meal is your favourite?", (answer) => {
          console.log(`Thank you for your answer: ${answer}`);

          rl.question("what is your favourite thing to eat for that meal?", (answer) => {
            console.log(`Thank you for your answer: ${answer}`);

            rl.question("what sport is your absolute favourite?", (answer) => {
              console.log(`Thank you for your answer: ${answer}`);

              rl.question("what is your super power?", (answer) => {
                console.log(`Thank you for your answer: ${answer}`);

              

            


          

        

      

    
  


                rl.close();
              });
            });
          });
        });
      });
    });
  });
});