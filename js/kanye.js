const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayCode(data));
}
const displayCode = quote => {
    const quoteELement = document.getElementById('quote');
    quoteELement.innerText = quote.quote;

}