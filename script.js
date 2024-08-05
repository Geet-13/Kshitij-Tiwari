const text1 = document.querySelector("#msg1");
const text2 = document.querySelector("#msg2");
const choices = document.querySelectorAll(".choice");
const no = document.querySelector("#no");
const start = (userChoice) => {
    if(userChoice === "no")
    {
        text1.innerText = "This was not the option.";
        text2.innerText = "See again!"
        no.innerText = "Yes";
        no.id = "yes";
    }
    else 
    {
        window.location = "next.html";
    }
}
choices.forEach((choice => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        start(userChoice);
    })
}))
