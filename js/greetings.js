const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const link = document.querySelector("a")


function loginBtnSubmit(event) {
    event.preventDefault() // 브라우저 기본동작을 막는 것
    loginForm.classList.add(HIDDEN_CLASSNAME) // class 추가
    const username = loginInput.value // 입력값을 저장
    localStorage.setItem(USERNAME_KEY, username) // username을 localStorage에 저장
    paintGreetings(username)
}

// function handleLinkClick(event){
//     alert("블로그로 이동합니다.")
// }

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

// link.addEventListener("click", handleLinkClick)

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", loginBtnSubmit)
} else {
    paintGreetings(savedUsername)
}