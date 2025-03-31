function calculateTimeLeft(lifeExpectancy) {
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) {
        alert("Please enter your birth date.");
        return;
    }
    
    const birthdate = new Date(birthdateInput);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const timeLeft = (lifeExpectancy - age) * 365 * 24 * 60 * 60 * 1000; // in milliseconds

    if (timeLeft < 0) {
        document.getElementById('result').innerText = "You have lived beyond the average life expectancy.";
        return;
    }

    const weeksLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
    const daysLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById('result').innerText = `You have approximately ${lifeExpectancy - age} years, ${weeksLeft} weeks, ${daysLeft} days, and ${hoursLeft} hours left.`;
}
function displayMotivationalQuote(age) {
    let quotes = [];
    if (age < 30) {
        quotes = [
            "Success is not the key to happiness. Happiness is the key to success.",
            "The only way to do great work is to love what you do."
        ];
    } else if (age < 50) {
        quotes = [
            "Your time is limited, so don’t waste it living someone else’s life.",
            "The future belongs to those who believe in the beauty of their dreams."
        ];
    } else {
        quotes = [
            "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            "You are never too old to set another goal or to dream a new dream."
        ];
    }
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('result').innerText += `\n\nMotivational Quote: ${randomQuote}`;
}