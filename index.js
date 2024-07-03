function writeCards(names) {
    let messages = [];
    for (let name of names) {
        messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return messages;
}
function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}

