const questions = [
    "You still Angry with me ?",
    "Sometime I say dumb things na! ", 
    "Woukd you like me to make it up for you?",
    "Do you love surprises?",     
    "Do you want chocolates when we meet next time",             
    "I dont know about others but i would love to show you everything in this world... Will you hold my hand and be with me to witness everything",     
    "Will you be my forever?"
];


let currentQuestion = 0;

document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    showPopup();
});

function showPopup() {
    if (currentQuestion < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestion];
        document.getElementById('popup').style.display = 'flex';
    } else {
        showFinalMessage();
    }
}

document.getElementById('yesButton').addEventListener('click', function() {
    currentQuestion++;
    document.getElementById('popup').style.display = 'none';
    showPopup();
});

function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const randomX = Math.random() * 350; 
    const randomY = Math.random() * 100;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function showFinalMessage() {
    document.getElementById('finalMessage').style.display = 'block';
    document.getElementById('finalMessage').style.position = 'fixed';
    document.getElementById('finalMessage').style.top = '0';
    document.getElementById('finalMessage').style.left = '0';
    document.getElementById('finalMessage').style.width = '100%';
    document.getElementById('finalMessage').style.height = '100%';
    document.getElementById('finalMessage').style.background = 'rgba(255, 255, 255, 0.9)';
    document.getElementById('finalMessage').style.display = 'flex';
    document.getElementById('finalMessage').style.justifyContent = 'center';
    document.getElementById('finalMessage').style.alignItems = 'center';
}

function showFinalMessage() {
    document.getElementById('finalMessage').style.display = 'block';
    document.getElementById('finalMessage').style.position = 'fixed';
    document.getElementById('finalMessage').style.top = '0';
    document.getElementById('finalMessage').style.left = '0';
    document.getElementById('finalMessage').style.width = '100%';
    document.getElementById('finalMessage').style.height = '100%';
    document.getElementById('finalMessage').style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    document.getElementById('finalMessage').style.display = 'flex';
    document.getElementById('finalMessage').style.justifyContent = 'center';
    document.getElementById('finalMessage').style.alignItems = 'center';

    // Set the source of the final image
    document.getElementById('finalImage').src = "C:\Users\kumar\Desktop\🎀\pics\IMG_20250403_152457542_HDR_AE.jpg"; // Replace with your image path
}