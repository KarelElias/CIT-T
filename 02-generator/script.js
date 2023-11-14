    // Příklad několika citátů
const quotes = [
    "Život je jako jízda na kole. Abychom udrželi rovnováhu, musíme se pohybovat.",
    "Štěstí není něco připraveného. Přichází od svých vlastních akcí.",
    "Buďte změnou, kterou chcete vidět ve světě.",
    "Věřím, že každý moment má něco dobrého, i když to není zřejmé okamžitě.",
    "Nejlepší způsob, jak předpovědět budoucnost, je ji vytvořit.",
    "Říkáš: miluji déšť, když však prší, jdeš se schovat, abys nezmokl. Říkáš: miluji slunce, když však svítí, jdeš se schovat do stínu. Mám strach, že mi jednoho dne řekneš: miluji tě.",
    "Když se stane něco špatného, pijete, abyste na to zapomněli; když se přihodí něco dobrého, pijete, abyste to oslavili; a když se nestane nic, pijete, aby se něco stalo.",
    "Skutečná hloupost pokaždé porazí umělou inteligenci.",
    "Mír neohrožují zbraně jako takové, ale lidé, kteří je konstruují, instalují a jsou ochotni je použít.",
    "Přirozenou nevýhodou demokracie je, že těm, kdo to s ní myslí poctivě, nesmírně svazuje ruce, zatím co těm, kteří ji neberou vážně, umožňuje téměř vše.",
];
let lastQuoteIndex;
let secondLastQuoteIndex;

function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    // Ujistit se, že nový citát není stejný jako předposlední nebo poslední citát
    while (randomIndex === lastQuoteIndex || randomIndex === secondLastQuoteIndex) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }

    secondLastQuoteIndex = lastQuoteIndex;
    lastQuoteIndex = randomIndex;

    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
}
// Nová funkce pro zobrazení všech citátů
function showAllQuotes() {
    // Získání kontejneru pro zobrazení všech citátů
    const allQuotesContainer = document.getElementById('allQuotes');

    // Odstranění předchozího obsahu kontejneru
    allQuotesContainer.innerHTML = '';

    // Vytvoření seznamu citátů
    const ul = document.createElement('ul');

    // Přidání každého citátu do seznamu
    quotes.forEach((quote, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${quote}`;
        ul.appendChild(li);
    });

    // Přidání seznamu citátů do kontejneru
    allQuotesContainer.appendChild(ul);

    // Zobrazení kontejneru s všemi citáty
    allQuotesContainer.style.display = 'block';
}

// Funkce pro přidání nového citátu
function addNewQuote() {
    const newQuote = prompt('Zadejte nový citát:');
    
    if (newQuote) {
        quotes.push(newQuote);
        alert('Citát byl úspěšně přidán!');
    } else {
        alert('Nebyl zadán žádný citát.');
    }
}

// Funkce pro odstranění posledního citátu
function removeLastQuote() {
    if (quotes.length === 0) {
        alert('Seznam citátů je prázdný.');
    } else {
        const removedQuote = quotes.pop();
        alert(`Citát "${removedQuote}" byl odstraněn.`);
    }
}