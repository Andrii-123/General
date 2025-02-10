function showNextPage() {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
}

function revealPoem() {
    const poemText = "Hey cutie, you know that I love you \n" +
        "And that I’m not well spoken enough \n" +
        "To write you incredible poems that will be cool and tough \n" +
        "So I want to be straight to the point \n" +
        "And tell you my feelings, alright? \n\n" +
        "You’re beautiful, gorgeous and pretty, cause you look like a wonderful kitty 😼 \n" +
        "Yes, I wanted to write something better, but today is a wonderful weather \n" +
        "As you see the rhyme just kicked in, cause I’m using 100 percent of free will \n" +
        "But heading back to the point, today is remarkable day \n" +
        "I want you to be my valentine, cause you’re making my life great again 🦅🦅🦅 \n" +
        "And to be honest, this language is sludge, I didn’t even know this word, so don’t judge \n\n" +
        "Тому перейду на цю потужну мову і продовжу цю нелегку промову \n" +
        "Як я вже писав ти просто найкраща, і я тебе сильно люблю \n" +
        "Кожен раз як бачу цю усмішку, ти наче запалюєш в мені іскру \n" +
        "Вона надає мені спокій і радість, бо розумію, що в мене є ти \n" +
        "Розумна, прекрасна, красива Юля, з якою хочеться бути назавжди 🥰";

    const poemElement = document.getElementById("poem");
    poemElement.style.display = 'block';

    let i = 0;

    function typeWriter() {
        if (i < poemText.length) {
            poemElement.innerHTML += poemText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}

