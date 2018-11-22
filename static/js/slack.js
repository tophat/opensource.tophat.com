const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

const showCheckmark = () => {
    const element = document.getElementsByClassName('slack-success')[0]
    element.style.visibility = 'visible'
    const message = document.getElementsByClassName('form-submit-message success')[0]
    message.style.visibility = 'visible';
}

const hideMessages = () => {
    const elements = document.getElementsByClassName('form-submit-message')
    for(let i = 0; i < elements.length; i++){ 
        element = elements[i]
        element.style.visibility = 'hidden'
    }
    const check = document.getElementsByClassName('slack-success')[0]
    check.style.visibility = 'hidden'
}

const handleFormSubmit = (e) => {
    e.preventDefault()
    hideMessages()
    const email = document.getElementById('email').value
    if(!email) return

    const isValid = validateEmail(email)
    if(!isValid){
        const element = document.getElementsByClassName('form-submit-message invalid')[0]
        element.style.visibility = 'visible';
        return
    }    

    var http = new XMLHttpRequest();
    var url = 'https://slackinvite.dev.tophat.com/invite';
    var params = JSON.stringify({ email })

    http.open('POST', url, true);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send(params);
    showCheckmark()
}


const form = document.getElementById('slack-invite')
const submitButton = document.getElementById('slack-submit-button')
form.addEventListener('submit', handleFormSubmit)
submitButton.addEventListener('click', handleFormSubmit)
