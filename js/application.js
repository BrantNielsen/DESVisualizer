$(document).ready(function() {
    let mainForm = $("#jsMainForm");
    
    mainForm.submit(function(event) {
        event.preventDefault(); 
    });
    
    connectInputComponents($("#jsInputMessage"), mainForm.find('input[name="messageType"]'), $("#jsRandomMessage"), DES.generateRandomMessage);
    
    connectInputComponents($("#jsInputKey"), mainForm.find('input[name="keyType"]'), $("#jsRandomKey"), DES.generateRandomKey);
});

function connectInputComponents($textInput, $radioButtons, $randomButton, randomFunction) {
    
};