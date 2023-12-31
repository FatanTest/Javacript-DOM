const quotesEl = document.getElementById('quotes')
const personEl = document.getElementById('person')
const button = document.querySelector('.button')

button.onclick = function(){
    const random1 = Math.floor(Math.random() * 3)
    const random2 = Math.floor(Math.random() * 20)
    
    quotesEl.textContent = theApi[random1][random2].theQuotes
    personEl.textContent = theApi[random1][random2].thePerson
}

const theApi = [[{
    theQuotes: "'The only way to do great work is to love what you do.'",
    thePerson: "Steve Jobs"
}, 
{
    theQuotes: "'In the end, it's not the years in your life that count. It's the life in your years.'",
    thePerson: "Abraham Lincoln"
}, 
{
    theQuotes: "'Success is not final, failure is not fatal: It is the courage to continue that counts.'",
    thePerson: "Winston Churchill"
},
{
    theQuotes: "'The best way to predict the future is to create it.'",
    thePerson: "Peter Drucker"
},
{
    theQuotes: "'Don't watch the clock; do what it does. Keep going.'",
    thePerson: "Sam Levenson"
},
{
    theQuotes: "'The future belongs to those who believe in the beauty of their dreams.'",
    thePerson: "Eleanor Roosevelt"
},
{
    theQuotes: "'The only limit to our realization of tomorrow will be our doubts of today.'",
    thePerson: "Franklin D. Roosevelt"
},
{
    theQuotes: "'Believe you can and you're halfway there.'",
    thePerson: "Theodore Roosevelt"
},
{
    theQuotes: "'The best revenge is massive success.'",
    thePerson: "Frank Sinatra"
},
{
    theQuotes: "'Life is what happens when you're busy making other plans.'",
    thePerson: "John Lennon"
},
{
    theQuotes: "'The harder I work, the luckier I get.'",
    thePerson: "Gary Player"
},
{
    theQuotes: "'Do not wait for leaders; do it alone, person to person.'",
    thePerson: "Mother Teresa"
},
{
    theQuotes: "'The greatest glory in living lies not in never falling, but in rising every time we fall.'",
    thePerson: "Nelson Mandela"
},
{
    theQuotes: "'It does not matter how slowly you go as long as you do not stop.'",
    thePerson: "Confucius"
},
{
    theQuotes: "'The best time to plant a tree was 20 years ago. The second best time is now.'",
    thePerson: "Chinese Proverb"
},
{
    theQuotes: "'Don't be afraid to give up the good to go for the great.'",
    thePerson: "John D. Rockefeller"
},
{
    theQuotes: "'Success is walking from failure to failure with no loss of enthusiasm.'",
    thePerson: "Winston Churchill"
},
{
    theQuotes: "'I find that the harder I work, the more luck I seem to have.'",
    thePerson: "Thomas Jefferson"
},
{
    theQuotes: "'The greatest wealth is to live content with little.'",
    thePerson: "Plato"
},
{
    theQuotes: "'The secret of getting ahead is getting started.'",
    thePerson: "Mark Twain"
}], [
{
    theQuotes: "'The greatest glory in living lies not in never falling, but in rising every time we fall.'",
    thePerson: "Nelson Mandela"
},
{
    theQuotes: "'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.'",
    thePerson: "Albert Schweitzer"
},
{
    theQuotes: "'Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.'",
    thePerson: "Roy T. Bennett"
},
{
    theQuotes: "'The best way to predict your future is to create it.'",
    thePerson: "Peter Drucker"
},
{
    theQuotes: "'Success usually comes to those who are too busy to be looking for it.'",
    thePerson: "Henry David Thoreau"
},
{
    theQuotes: "'The only limit to our realization of tomorrow will be our doubts of today.'",
    thePerson: "Franklin D. Roosevelt"
},
{
    theQuotes: "'Don't watch the clock; do what it does. Keep going.'",
    thePerson: "Sam Levenson"
},
{
    theQuotes: "'Believe you can and you're halfway there.'",
    thePerson: "Theodore Roosevelt"
},
{
    theQuotes: "'The future belongs to those who believe in the beauty of their dreams.'",
    thePerson: "Eleanor Roosevelt"
},
{
    theQuotes: "'The best revenge is massive success.'",
    thePerson: "Frank Sinatra"
},
{
    theQuotes: "'Life is what happens when you're busy making other plans.'",
    thePerson: "John Lennon"
},
{
    theQuotes: "'The harder I work, the luckier I get.'",
    thePerson: "Gary Player"
},
{
    theQuotes: "'Do not wait for leaders; do it alone, person to person.'",
    thePerson: "Mother Teresa"
},
{
    theQuotes: "'It does not matter how slowly you go as long as you do not stop.'",
    thePerson: "Confucius"
},
{
    theQuotes: "'The best time to plant a tree was 20 years ago. The second best time is now.'",
    thePerson: "Chinese Proverb"
},
{
    theQuotes: "'Don't be afraid to give up the good to go for the great.'",
    thePerson: "John D. Rockefeller"
},
{
    theQuotes: "'Success is walking from failure to failure with no loss of enthusiasm.'",
    thePerson: "Winston Churchill"
},
{
    theQuotes: "'I find that the harder I work, the more luck I seem to have.'",
    thePerson: "Thomas Jefferson"
},
{
    theQuotes: "'The greatest wealth is to live content with little.'",
    thePerson: "Plato"
},
{
    theQuotes: "'The only way to do great work is to love what you do.'",
    thePerson: "Steve Jobs"
}
], [{
    theQuotes: "'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.'",
    thePerson: "Albert Schweitzer"
},
{
    theQuotes: "'The only way to do great work is to love what you do.'",
    thePerson: "Steve Jobs"
},
{
    theQuotes: "'Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.'",
    thePerson: "Roy T. Bennett"
},
{
    theQuotes: "'The greatest glory in living lies not in never falling, but in rising every time we fall.'",
    thePerson: "Nelson Mandela"
},
{
    theQuotes: "'The best way to predict the future is to create it.'",
    thePerson: "Peter Drucker"
},
{
    theQuotes: "'Success usually comes to those who are too busy to be looking for it.'",
    thePerson: "Henry David Thoreau"
},
{
    theQuotes: "'The only limit to our realization of tomorrow will be our doubts of today.'",
    thePerson: "Franklin D. Roosevelt"
},
{
    theQuotes: "'Don't watch the clock; do what it does. Keep going.'",
    thePerson: "Sam Levenson"
},
{
    theQuotes: "'Believe you can and you're halfway there.'",
    thePerson: "Theodore Roosevelt"
},
{
    theQuotes: "'The future belongs to those who believe in the beauty of their dreams.'",
    thePerson: "Eleanor Roosevelt"
},
{
    theQuotes: "'The best revenge is massive success.'",
    thePerson: "Frank Sinatra"
},
{
    theQuotes: "'Life is what happens when you're busy making other plans.'",
    thePerson: "John Lennon"
},
{
    theQuotes: "'The harder I work, the luckier I get.'",
    thePerson: "Gary Player"
},
{
    theQuotes: "'Do not wait for leaders; do it alone, person to person.'",
    thePerson: "Mother Teresa"
},
{
    theQuotes: "'It does not matter how slowly you go as long as you do not stop.'",
    thePerson: "Confucius"
},
{
    theQuotes: "'The best time to plant a tree was 20 years ago. The second best time is now.'",
    thePerson: "Chinese Proverb"
},
{
    theQuotes: "'Don't be afraid to give up the good to go for the great.'",
    thePerson: "John D. Rockefeller"
},
{
    theQuotes: "'Success is walking from failure to failure with no loss of enthusiasm.'",
    thePerson: "Winston Churchill"
},
{
    theQuotes: "'I find that the harder I work, the more luck I seem to have.'",
    thePerson: "Thomas Jefferson"
},
{
    theQuotes: "'The greatest wealth is to live content with little.'",
    thePerson: "Plato"
}
]]


