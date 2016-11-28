var currentRow = $("#s5table");
var result = "";

for (var i = 0; i < 4; i++) {
    currentRow = currentRow.next();

    currentRow.children("td").each(function(index) {
        var thisText = $(this).text().trim();
        if (thisText.length < 2) {
            thisText = " " + thisText;
        }

        result += thisText + ",";

        if (index < 15) {
            result += " ";
        } else {
            result += "\n";
        }

    });
}

console.log(result);