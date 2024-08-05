const text = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const no = document.querySelector("#no");
const start = (userChoice) => {
    if(userChoice === "no")
    {
        text.innerText = "This was not the option. See again!";
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