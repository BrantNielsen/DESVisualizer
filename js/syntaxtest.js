var thisStage = this;

stage.enableMouseOver();

this.showPermutation = function (inputData, numInputColumns, permutationMapping, numMappingColumns, outputData) {
    function bitArrayDataIndexFunc(data, dataIndex) {
        return data.get(dataIndex)? "1" : "0";
    }

    function pmDataIndexFunc(data, dataIndex) {
        return data[dataIndex].toString();
    }

    var inputStartX = 20;
    var inputSpaceX = 30;
    var inputFields = placeFields(inputData, numInputColumns, inputStartX, 20, inputSpaceX, 30, bitArrayDataIndexFunc);

    var pmStartX = inputStartX + numInputColumns * inputSpaceX + 100;
    var pmSpaceX = 40;
    var pmFields = placeFields(permutationMapping, numMappingColumns, pmStartX, 20, pmSpaceX, 30, pmDataIndexFunc);

    var outputStartX = pmStartX + numMappingColumns * pmSpaceX + 100;
    var outputSpaceX = inputSpaceX;
    var outputFields = placeFields(outputData, numMappingColumns, outputStartX, 20, outputSpaceX, 30, bitArrayDataIndexFunc);

    //var inputHighlighter = new createjs.Graphics().beginFill("#eeeeee").drawRect(0, 0, 100, 100);
    var inputHighlighter = new createjs.Shape();
    inputHighlighter.graphics.beginFill("#eeeeee").drawRect(0, 0, 25, 25);
    inputHighlighter.x = -100;
    inputHighlighter.y = -100;
    thisStage.addChildAt(inputHighlighter, 0);

    var mappingHighlighter = new createjs.Shape();
    mappingHighlighter.graphics.beginFill("#eeeeee").drawRect(0, 0, 35, 30);
    mappingHighlighter.x = -100;
    mappingHighlighter.y = -100;
    thisStage.addChildAt(mappingHighlighter, 0);

    var outputHighlighter = new createjs.Shape();
    outputHighlighter.graphics.beginFill("#eeeeee").drawRect(0, 0, 25, 25);
    outputHighlighter.x = -100;
    outputHighlighter.y = -100;
    thisStage.addChildAt(outputHighlighter, 0);

    thisStage.stepForwardBtn.removeAllEventListeners();
    thisStage.stepForwardBtn.addEventListener("click", stepForward);

    thisStage.stepBackwardBtn.removeAllEventListeners();
    thisStage.stepBackwardBtn.addEventListener("click", stepBackward);

    var stepIndex = -1;

    function stepForward() {
        stepIndex++;

        if (stepIndex === 0) {
            hideAll(outputFields);
        } else if (stepIndex === permutationMapping.length) {
            stepIndex = -1;
            moveHighlights(stepIndex);

            return false;
        }

        moveHighlights(stepIndex);
        outputFields[stepIndex].visible = true;
    }

    return true;
}

function stepBackward() {
    stepIndex--;
    if (stepIndex < -1) {
        stepIndex = permutationMapping.length - 1;
    }

    moveHighlights(stepIndex);

    if (stepIndex === -1) {
        showAll(outputFields);
        return false;
    } else if (stepIndex < permutationMapping.length - 1) {
        outputFields[stepIndex + 1].visible = false;
    }

    return true;
}

function moveHighlights(stepIndex) {
    if (stepIndex === -1) {
        inputHighlighter.x = mappingHighlighter.x = outputHighlighter.x = -100;
        inputHighlighter.y = mappingHighlighter.y = outputHighlighter.y = -100;
    } else {
        inputHighlighter.x = inputFields[permutationMapping[stepIndex] - 1].getTransformedBounds().x - 5;
        inputHighlighter.y = inputFields[permutationMapping[stepIndex] - 1].getTransformedBounds().y - 5;

        mappingHighlighter.x = pmFields[stepIndex].getTransformedBounds().x - 5;
        mappingHighlighter.y = pmFields[stepIndex].getTransformedBounds().y - 5;

        outputHighlighter.x = outputFields[stepIndex].getTransformedBounds().x - 5;
        outputHighlighter.y = outputFields[stepIndex].getTransformedBounds().y - 5;
    }
}

function placeFields(data, numColumns, startX, startY, spaceX, spaceY, getDataIndexFunction) {
    var fields = [];
    var currentY = startY;
    var dataIndex = 0;

    while (dataIndex < data.length) {
        for (var colIndex = 0; colIndex < numColumns && dataIndex < data.length; colIndex++) {
            var thisField = new createjs.Text(getDataIndexFunction(data, dataIndex), "20px Open Sans", "#333");
            thisField.x = startX + (colIndex * spaceX);
            thisField.y = currentY;
            thisField.textAlign = "right";
            thisStage.addChild(thisField);

            fields[dataIndex] = thisField;

            dataIndex++;
        }

        currentY += spaceY;
    }

    return fields;
}

function hideAll(displayObjects) {
    for (var i = 0; i < displayObjects.length; i++) {
        displayObjects[i].visible = false;
    }
}

function showAll(displayObjects) {
    for (var i = 0; i < displayObjects.length; i++) {
        displayObjects[i].visible = true;
    }
}

this.showPermutation(BitArray.fromHex("0123456789ABCDEF"), 8, DES.PERMUTATION_MAPPINGS.INITIAL_PERMUTATION, 8, BitArray.fromHex("FEDCBA9876543210"));



/*var myOtherText = new createjs.Text("Hello World!", "20px Open Sans", "#333");

 this.addChild(myOtherText);*/