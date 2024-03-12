const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookie = document.querySelector('#cookieBtn')
const reset = document.querySelector('#resetBtn')

var fortune_cookie_messages = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A feather in the hand is better than a bird in the air.",
    "A golden egg of opportunity falls into your lap this month.",
    "A good friend is a treasure.",
    "A journey of a thousand miles begins with a single step.",
    "A smile is your passport into the hearts of others.",
    "All your hard work will soon pay off.",
    "An inch of time is an inch of gold.",
    "Any decision you have to make tomorrow is a good decision.",
    "Believe in yourself and others will too.",
    "Don’t be discouraged, because every wrong attempt discarded is a step forward.",
    "Don’t just think, act!",
    "Happiness is often a rebound from hard work.",
    "Hard work pays off in the future, laziness pays off now.",
    "If a true sense of value is to be yours it must come through service.",
    "If you have something worth fighting for, then fight for it.",
    "If you want the rainbow, you have to tolerate the rain.",
    "It is much easier to be critical than to be correct.",
    "Keep your eye out for someone special.",
    "Let your heart make your decisions; it does not get as confused as your head.",
    "Never give up. You’re not a failure if you don’t give up.",
    "People who are late are often happier than those who have to wait for them.",
    "Something you lost will soon turn up.",
    "The early bird gets the worm, but the second mouse gets the cheese.",
    "The harder you work, the luckier you get.",
    "The wheel of good fortune is finally turning in your direction.",
    "Your ability for accomplishment will follow with success.",
    "Your present plans are going to succeed.",
    "Your success will astonish everyone.",
    "Your talents will be recognized and suitably rewarded.",
    "You are a lover of words, someday you will write a book.",
    "You are admired by everyone for your talent and ability.",
    "You are almost there.",
    "You are busy, but you are happy.",
    "You are generous to an extreme and always think of the other fellow.",
    "You are going to have some new clothes.",
    "You are in good hands this evening.",
    "You are interested in higher education, whether material or spiritual.",
    "You are modest and courteous.",
    "You are never selfish with your advice or your help.",
    "You are next in line for promotion in your firm.",
    "You are offered the dream of a lifetime. Say yes!",
    "You are open-minded and quick to make new friends.",
    "You are talented in many ways.",
    "You are very expressive and positive in words, act and feeling.",
    "You are very thoughtful and considerate of others.",
    "You are well-organized and reliable.",
    "You will always be surrounded by true friends.",
    "You will always get what you want through your charm and personality.",
]


function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

cookie.addEventListener('click', function(){
    toggleScreen()
    var randomMsg = Math.floor(Math.random()*fortune_cookie_messages.length);
    var fortune_message = fortune_cookie_messages[randomMsg]
    var message = document.querySelector('#message')
    message.innerText = fortune_message
})

reset.addEventListener('click', function(){
    toggleScreen()
})




