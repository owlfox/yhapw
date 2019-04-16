function job() {
    // chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    //     console.log(response.farewell);
    // });
    document.body.style.border = "5px solid red";
    let link = document.querySelector(`#cp-trouble-container>div>a`)
    let link_simple = document.querySelector(`#cp-modal-button-code-simple`);
    let input = document.querySelector(`#AccessCode`);
    let button = document.querySelector(`#cp-continue-btn`);
    
    let url;
    switch(true) {
        case link != null:
            url = link.href;
            break;
        case link_simple != null:
            url = link_simple.href;
            break;
    }
    console.log(`${link}, ${link_simple}, goto ${url} ?`)
    if (url) window.location.href = url;
    else {
        if (!button.disabled) {
            console.log("clicking... start internet")
            button.click()
        }
        else {
            input.value = "penguins"
            document.querySelector(`#TermsAndConditionsCheckbox`).click();
            document.querySelector(`#cp-continue-btn`).click();
        }
        
    }
    
    
    
}


window.onload = function () { job() }