// A function that iterated over the names list and outputs an array of thank you messages
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(array) {
  let msgs = [];
  for (let i = 0; i < array.length; i++) {
    let msg = `Thank you, ${array[i]}, for the wonderful surprise gift!`;
    msgs.push(msg);
  }
  return msgs;
}

writeCards(names);

// A function that counts down the numbers upto the number provided
function countDown(num) {
  for (let i = 0; i < num+1; i++) {
    console.log(i);
  }
}

countDown(10)

