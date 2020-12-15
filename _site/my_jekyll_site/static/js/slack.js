const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

const showCheckmark = () => {
    const element = document.getElementsByClassName('slack-success')[0]
    element.style.visibility = 'visible'
}

const showFormValidation = messageType => {
    let element
    switch(messageType) {
        case 'success' :
            showCheckmark()
            element = document.getElementsByClassName('form-submit-message success')[0]
            break
        case 'resubmit':
            element = document.getElementsByClassName('form-submit-message resubmit')[0]
            break
        case 'exists':
            element = document.getElementsByClassName('form-submit-message exists')[0]
            break
        case 'error':
        default:
            element = document.getElementsByClassName('form-submit-message error')[0]
    }
    element.style.visibility = 'visible';
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

const resubmittingRequest = (message) => {
    return message.indexOf('You have already been invited to Slack') > -1
}

const existsRequest = (message) => {
    return message.indexOf('Sending you to Slack...') > -1
}

const handleFormSubmit = (e) => {
    e.preventDefault()
    hideMessages()
    const emailNode = document.getElementById('email')
    const email = emailNode.value

    const isValid = email && validateEmail(email)
    if(!isValid){
        const element = document.getElementsByClassName('form-submit-message invalid')[0]
        element.style.visibility = 'visible';
        emailNode.focus()
        return
    }

    const buttonNode = document.getElementById('slack-submit-button')
    buttonNode.classList.add('disabled')
    buttonNode.disabled = true

    var http = new XMLHttpRequest();
    var url = 'https://slackinvite.dev.tophat.com/invite';
    var params = JSON.stringify({ email })

    http.open('POST', url, true);
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      http.onreadystatechange = function() {
        if (http.readyState === 4) {
            buttonNode.classList.remove('disabled')
            buttonNode.disabled = false
            const response = JSON.parse(http.response)
            if(response.success) {
                showFormValidation('success')
            } else if(resubmittingRequest(response.message)) {
                showFormValidation('resubmit')
                emailNode.focus()
            } else if(existsRequest(response.message)) {
                showFormValidation('exists')
                emailNode.focus()
            } else {
                showFormValidation('error')
                emailNode.focus()
            }
        }
      }
    http.send(params);
}


const form = document.getElementById('slack-invite')
const submitButton = document.getElementById('slack-submit-button')
form.addEventListener('submit', handleFormSubmit)
submitButton.addEventListener('click', handleFormSubmit)
