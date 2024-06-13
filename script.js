

const toggleBtn = () => {
    let btton = document.getElementById("navLinks")
    let nav = document.querySelector(".nav-mobile")

    btton.addEventListener("click", () => {
        // console.log("button has clicked")
        nav.classList.toggle("nav-mobile-menu")
    })
}

toggleBtn()
