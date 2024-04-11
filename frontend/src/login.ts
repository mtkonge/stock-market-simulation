const htmlLoginUsernameInput = document.querySelector<HTMLInputElement>("#username")!;
const htmlLoginPasswordInput = document.querySelector<HTMLInputElement>("#password")!;
const htmlLoginErrorParagraph = document.querySelector<HTMLParagraphElement>("#errormsg")!
const htmlLoginForm = document.querySelector<HTMLFormElement>("#login-form")!

htmlLoginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = {
        username: htmlLoginUsernameInput.value,
        password: htmlLoginPasswordInput.value
    };
    const res = await sendPostRequest("/api/login", data);
    const body = await res.json();
    if (body.msg === "Ok") {
        return window.location.pathname = "/";
    }
    else {
        htmlLoginErrorParagraph.textContent = body.msg
    }
})