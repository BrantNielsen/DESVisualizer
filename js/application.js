$(document).ready(function() {
    let $mainForm = $("#jsMainForm");
    
    let $messageInput = $("#jsMessageInput");
    let $keyInput = $("#jsKeyInput");
    
    let $messageRadioButtons = $mainForm.find('input[name="messageType"]');
    let $keyRadioButtons = $mainForm.find('input[name="keyType"]');
    
    $mainForm.submit(function(event) {
        let messageTypeSelection = getSelectedValue($messageRadioButtons);
        let keyTypeSelection = getSelectedValue($keyRadioButtons);
        
        let message = getProperBitArray($messageInput.val(), messageTypeSelection);
        let key = getProperBitArray($keyInput.val(), keyTypeSelection);
        
        let encryptionObject = DES.encrypt(key, message);
        let decryptionObject = DES.decrypt(key, encryptionObject.final);
        
        document.initializeVisualization(encryptionObject, decryptionObject);
        
        event.preventDefault(); 
    });
    
    let messageTypeSelection = getSelectedValue($messageRadioButtons);
    let keyTypeSelection = getSelectedValue($keyRadioButtons);
    
    if (messageTypeSelection === "hex") {
        $messageInput.attr("maxlength", 16);
    }
    
    if (keyTypeSelection === "hex") {
        $keyInput.attr("maxlength", 16);
    }
    
    connectInputComponents($messageInput, $messageRadioButtons, $("#jsRandomMessage"), DES.generateRandomMessage);
    
    connectInputComponents($keyInput, $keyRadioButtons, $("#jsRandomKey"), DES.generateRandomKey);
});

function connectInputComponents($textInput, $radioButtons, $randomButton, randomFunction) {
    let $hexButton = $radioButtons.filter('input[value="hex"]');
    
    $radioButtons.change(function() {
        let $this = $(this);
        
        if ($this.is(":checked")) {
            if ($this.val() === "hex") {
                if ($textInput.val().length > 0) {
                    let value = BitArray.fromAscii($textInput.val());
                    $textInput.val(value.toHexString());
                }
                
                $textInput.attr("maxlength", 16);
            } else if ($this.val() === "ascii") {
                if ($textInput.val().length > 0) {
                    let value = BitArray.fromHex($textInput.val());
                    $textInput.val(value.toAsciiString());
                }
                
                $textInput.attr("maxlength", 8);
            }
        }
    });
    
    $randomButton.click(function(event) {
        let randomValue = randomFunction();
        
        $hexButton.prop("checked", true);
        
        $textInput.val(randomValue.toHexString());
        
        event.preventDefault();
    });
};

function getSelectedValue($radioButtons) {
    return $radioButtons.filter(":checked").val();
};

function getProperBitArray(input, value) {
    if (value === "ascii") {
        return BitArray.fromAscii(input);
    } else if (value === "hex") {
        return BitArray.fromHex(input);
    }
    
    return new BitArray(0);
};