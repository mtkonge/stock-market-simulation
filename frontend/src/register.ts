const htmlRegisterUsernameInput = document.querySelector<HTMLInputElement>("#username")!;
const htmlRegisterPasswordInput = document.querySelector<HTMLInputElement>("#password")!;
const htmlRegisterErrorParagraph = document.querySelector<HTMLParagraphElement>("#errormsg")!
const htmlRegisterForm = document.querySelector<HTMLFormElement>("#register-form")!

htmlRegisterForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = {
        username: htmlRegisterUsernameInput.value,
        password: htmlRegisterPasswordInput.value
    };
    const res = await sendPostRequest("/api/register", data);
    const body = await res.json();
    if (body.msg === "Ok") {
        return window.location.pathname = "/login";
    }
    else {
        htmlRegisterErrorParagraph.textContent = body.msg
    }
})