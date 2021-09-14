// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names) {
    const note = [];
    for (let i = 0; i < names.length; i++) {
        note.push( `Thank you, ${names[i]}, for the wonderful surprise gift!` );
    }

    return note;

}

writeCards(names);

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}

countDown(10);