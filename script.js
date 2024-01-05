

// Function to display a message after the countdown
function displayMessage(message) {
    document.getElementById("myText").innerHTML = message;
    console.log(message);
}

// Start the countdown
setTimeout(function () {
    displayMessage(10);
    console.log(10);
    setTimeout(function () {
        displayMessage(9);
        console.log(9);
        setTimeout(function () {
            displayMessage(8);
            console.log(8);
            setTimeout(function () {
                displayMessage(7);
                console.log(7);
                setTimeout(function () {
                    displayMessage(6);
                    console.log(6);
                    setTimeout(function () {
                        displayMessage(5);
                        console.log(5);
                        setTimeout(function () {
                            displayMessage(4);
                            console.log(4);
                            setTimeout(function () {
                                displayMessage(3);
                                console.log(3);
                                setTimeout(function () {
                                    displayMessage(2);
                                    console.log(2);
                                    setTimeout(function () {
                                        displayMessage(1);
                                        console.log(1);
                                        displayMessage("Happy Independence Day!");
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
