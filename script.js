
alert("NEW SCRIPT IS RUNNING");
/* ==========================================
   PERSONAL DETAILS
========================================== */

// YAHAN NAME CHANGE KARNA HAI
const birthdayPersonName = "Maaannnviii jiiiii(Madamjii/Malkiin💗🫅)";


// BIRTHDAY DATE
// 16 September 2026 - 12:00 AM
const birthdayDate = new Date("2026-09-16T00:00:00");


// YAHAN BALLOON KE MESSAGES CHANGE KAR SAKTE HO
const balloonMessages = [

    "You are genuinely one of the most special person in my little life💗",

    "Another year, another beautiful chapter and I wish that may this year brings u everithing u secretely wish for 😊(bas us bkl ko chhod ke)",

    "Keep smiling, because ur smile is honestly beautiful.😊",

    " And yes... there's still a little more waitinng for you ❤️"

];


/* ==========================================
   GET HTML ELEMENTS
========================================== */

const countdownScreen =
    document.getElementById("countdownScreen");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const notesScreen =
    document.getElementById("notesScreen");

const finalScreen =
    document.getElementById("finalScreen");


const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");


const personName =
    document.getElementById("personName");


const balloonMessage =
    document.getElementById("balloonMessage");


const moreButton =
    document.getElementById("moreButton");


const finalButton =
    document.getElementById("finalButton");


const musicButton =
    document.getElementById("musicButton");


const birthdayMusic =
    document.getElementById("birthdayMusic");


const confettiContainer =
    document.getElementById("confetti-container");


/* ==========================================
   SHOW NAME
========================================== */

personName.textContent =
    birthdayPersonName;


/* ==========================================
   SCREEN CHANGE FUNCTION
========================================== */

function showScreen(screen) {

    const allScreens = [
        countdownScreen,
        birthdayScreen,
        notesScreen,
        finalScreen
    ];


    allScreens.forEach(function(item) {

        item.classList.add("hidden");

    });


    screen.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   COUNTDOWN
========================================== */

let birthdayStarted = false;


function updateCountdown() {

    const now = new Date();


    const difference =
        birthdayDate - now;


    // Birthday time reached
    if (difference <= 0) {

        daysElement.textContent = "00";

        hoursElement.textContent = "00";

        minutesElement.textContent = "00";

        secondsElement.textContent = "00";


        if (!birthdayStarted) {

            birthdayStarted = true;

            startBirthday();

        }


        return;
    }


    // Calculate days
    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    // Calculate hours
    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    // Calculate minutes
    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    // Calculate seconds
    const seconds =
        Math.floor(
            (difference /
            1000) % 60
        );


    // Display countdown
    daysElement.textContent =
        String(days).padStart(2, "0");


    hoursElement.textContent =
        String(hours).padStart(2, "0");


    minutesElement.textContent =
        String(minutes).padStart(2, "0");


    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


/* Start countdown */

updateCountdown();


const countdownTimer =
    setInterval(updateCountdown, 1000);


/* ==========================================
   START BIRTHDAY
========================================== */

function startBirthday() {

    showScreen(birthdayScreen);


    // Celebration
    createConfetti();


    // Try to start music
    birthdayMusic.play().catch(function() {

        console.log(
            "Music will start after user interaction."
        );

    });

}


/* ==========================================
   BALLOONS
========================================== */

const balloons =
    document.querySelectorAll(".balloon");


let poppedCount = 0;


balloons.forEach(function(balloon) {

    balloon.addEventListener("click", function() {


        // Don't click same balloon twice
        if (
            balloon.classList.contains("popped")
        ) {

            return;

        }


        const index =
            Number(
                balloon.getAttribute("data-index")
            );


        // Pop balloon
        balloon.classList.add("popped");


        poppedCount++;


        // Show message
        balloonMessage.textContent =
            balloonMessages[index];


        balloonMessage.classList.add("show");


        // Small celebration
        createSmallConfetti();


        // All balloons popped
        if (
            poppedCount === balloons.length
        ) {

            setTimeout(function() {

                moreButton.classList.remove("hidden");

                moreButton.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 700);

        }

    });

});


/* ==========================================
   MORE BUTTON
========================================== */

moreButton.addEventListener(
    "click",
    function() {

        showScreen(notesScreen);

    }
);


/* ==========================================
   FINAL BUTTON
========================================== */

finalButton.addEventListener(
    "click",
    function() {

        showScreen(finalScreen);

        createConfetti();

    }
);


/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    for (let i = 0; i < 100; i++) {


        const piece =
            document.createElement("div");


        piece.classList.add("confetti");


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        piece.style.width =
            5 + Math.random() * 7 + "px";


        piece.style.height =
            8 + Math.random() * 12 + "px";


        piece.style.opacity =
            0.5 + Math.random() * 0.5;


        confettiContainer.appendChild(piece);


        setTimeout(function() {

            piece.remove();

        }, 5000);

    }

}


/* ==========================================
   SMALL CONFETTI
========================================== */

function createSmallConfetti() {

    for (let i = 0; i < 25; i++) {


        const piece =
            document.createElement("div");


        piece.classList.add("confetti");


        piece.style.left =
            (40 + Math.random() * 20) + "vw";


        piece.style.animationDuration =
            (1.5 + Math.random() * 1.5) + "s";


        confettiContainer.appendChild(piece);


        setTimeout(function() {

            piece.remove();

        }, 3500);

    }

}


/* ==========================================
   MUSIC
========================================== */

let musicPlaying = false;


musicButton.addEventListener(
    "click",
    function() {


        if (musicPlaying) {


            birthdayMusic.pause();


            musicPlaying = false;


            musicButton.textContent =
                "🎵";


        } else {


            birthdayMusic.play()
                .then(function() {

                    musicPlaying = true;

                    musicButton.textContent =
                        "🔊";

                })
                .catch(function() {

                    alert(
                        "Music file nahi mili. " +
                        "assets folder mein " +
                        "birthday-song.mp3 add karo."
                    );

                });

        }

    }
);
/* ==========================================
   OPEN EARLY
========================================== */

const earlyButton =
    document.getElementById("earlyButton");

const earlyMessage =
    document.getElementById("earlyMessage");


earlyButton.addEventListener(
    "click",
    function() {

        earlyMessage.textContent =
            "Kuchu Puchu? 👀❤️ " +
            "Surprise hai,thoda intezar to krana padega... " +
            "12 baje milte hain⏳🎂❤️";

        earlyMessage.classList.add("show");

    }
);