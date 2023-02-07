const toggleButton = document.querySelector('.email')
const form = document.querySelector('form')

toggleButton.addEventListener('click', () => {
    form.style.display === "none" ? form.style.display = "flex" : form.style.display = "none"
})