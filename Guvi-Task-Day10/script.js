console.log("TaskDay - 10-Call Back Hell Task");

const formTimerMessage = document.createElement("form");
document.body.append(formTimerMessage);

const btnCountDown = document.createElement("button");
btnCountDown.innerText = "Click This Button to Display CountDown Timer and Show Message";
btnCountDown.style.padding = "10px";
btnCountDown.style.width = "100%";
formTimerMessage.append(btnCountDown);


const divContainer = document.createElement("div");
divContainer.setAttribute("class", "container")
divContainer.style.display = "grid";
divContainer.style.gridTemplateColumns = "auto"
divContainer.style.placeContent = "center"  
divContainer.style.fontSize = "50px"
divContainer.style.backgroundColor = "aliceblue"
document.body.append(divContainer);

const divResultMessage = document.createElement("div");
divResultMessage.setAttribute("id", "resultMessage");
divContainer.append(divResultMessage);

const countDownTimer = document.querySelector("#resultMessage");


// CallBack Hell

formTimerMessage.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        countDownTimer.innerHTML = "10";
        setTimeout(() => {
            countDownTimer.innerHTML = "9";
            setTimeout(() => {
                countDownTimer.innerHTML = "8";
                setTimeout(() => {
                    countDownTimer.innerHTML = "7";
                    setTimeout(() => {
                        countDownTimer.innerHTML = "6";
                        setTimeout(() => {
                            countDownTimer.innerHTML = "5";
                            setTimeout(() => {
                                countDownTimer.innerHTML = "4";
                                setTimeout(() => {
                                    countDownTimer.innerHTML = "3";
                                    setTimeout(() => {
                                        countDownTimer.innerHTML = "2";
                                        setTimeout(() => {
                                            countDownTimer.innerHTML = "1";
                                            setTimeout(() => {
                                                countDownTimer.innerHTML = "HAPPY INDEPENDENCE DAY";
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
    }, 1000);
});