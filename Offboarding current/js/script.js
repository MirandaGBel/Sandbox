//index
function previewText() {
    // Get the input text
    var textInput = document.getElementById("textInput").value;

    // Extract information using regular expressions
    var enterpriseMatch = textInput.match(/Empresa: (.+)$/m);
    var employeeFunctionMatch = textInput.match(/Função: (.+)$/m);
    var nameMatch = textInput.match(/Nome: (.+)$/m);
    var dateMatch = textInput.match(/Data de Admissão: (.+)$/m);

    // Extracted information
    var enterprise = enterpriseMatch ? enterpriseMatch[1] : "N/A";
    var employeeFunction = employeeFunctionMatch ? employeeFunctionMatch[1] : "N/A";
    var name = nameMatch ? nameMatch[1] : "N/A";
    var date = dateMatch ? dateMatch[1] : "N/A";

    // Create a preview popup
    var previewWindow = window.open("", "Preview", "width=400,height=300");

    // Write the preview content to the popup
    previewWindow.document.write("<html><head><title>Preview</title></head><body>");
    previewWindow.document.write("<h2>Preview:</h2>");
    previewWindow.document.write("<p><strong>Enterprise:</strong> " + enterprise + "</p>");
    previewWindow.document.write("<p><strong>Employee Function:</strong> " + employeeFunction + "</p>");
    previewWindow.document.write("<p><strong>Name:</strong> " + name + "</p>");
    previewWindow.document.write("<p><strong>Date:</strong> " + date + "</p>");
    previewWindow.document.write("</body></html>");

    // Close the document
    previewWindow.document.close();
}

