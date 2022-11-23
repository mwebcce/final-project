//Quote Generator

const generateQuote = function() {
    const quotes = [
    {
        quote: "Technology is anything that wasn’t around when you were born.",
        author: "- Alan Kay"
    },
    {
        quote: "Any sufficiently advanced technology is equivalent to magic.",
        author: "- Arthur C. Clarke"
    },
    {
        quote: "All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.",
        author: "- Mark Kennedy"
    },
    {
        quote: "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.",
        author: "- Thomas Edison"
    },
    {
        quote: "It has become appallingly obvious that our technology has exceeded our humanity.",
        author: "- Albert Einstein"
    },
    {
        quote: "One machine can do the work of fifty ordinary men.  No machine can do the work of one extraordinary man.",
        author: "- Elbert Hubbard"
    },
    {
        quote: "Technology is a word that describes something that doesn’t work yet.",
        author: "- Douglas Adams"
    },
    {
        quote: "Humanity is acquiring all the right technology for all the wrong reasons.",
        author: "- R. Buckminster Fuller"
    },
    {
        quote: "The great myth of our times is that technology is communication.",
        author: "- Libby Larsen"
    },
    {
        quote: "You cannot endow even the best machine with initiative; the jolliest steamroller will not plant flowers.",
        author: "- Walter Lippmann"
    },
    {
        quote: "We are stuck with technology when what we really want is just stuff that works.",
        author: "- Douglas Adams"
    },
    {
        quote: "Technology made large populations possible; large populations now make technology indispensable.",
        author: "- Joseph Krutch"
    },
    {
        quote: "This is the whole point of technology.  It creates an appetite for immortality on the one hand.  It threatens universal extinction on the other. Technology is lust removed from nature.",
        author: "- Don DeLillo"
    },
    {
        quote: "The real danger is not that computers will begin to think like men, but that men will begin to think like computers.",
        author: "- Sydney Harris"
    },
    {
        quote: "If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner.",
        author: "- Omar Bradley"
    },
    {
        quote: "The art challenges the technology, and the technology inspires the art.",
        author: "- John Lasseter"
    },
    {
        quote: "Science and technology revolutionize our lives, but memory, tradition and myth frame our response.",
        author: "- Arthur Schlesinger"
    },
    {
        quote: "The human spirit must prevail over technology.",
        author: "- Albert Einstein"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}



