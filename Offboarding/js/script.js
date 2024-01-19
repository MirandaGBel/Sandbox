function previewText() {

    // Get the input text
    var inputTicketNumber = document.getElementById("inputTicketNumber").value;
    var textInput = document.getElementById("textInput").value;
    if (inputTicketNumber =="" || textInput == ""){
        alert("Por favor, preencha os campos Ticket e offboarding.")
        //alert(inputTicketNumber)
    }
    else{
    // Extract information using regular expressions
    
        var checklist = document.getElementById("checklist1");
        checklist.style.display = (checklist.style.display === 'none') ? 'block' : 'none';
      
    


    //var inputTicketNumber = textInput.match(/EMPRESA: (.+)$/m);
    var enterpriseMatch = textInput.match(/EMPRESA: (.+)$/m);
    var employeeFunctionMatch = textInput.match(/FUNÇÃO: (.+)$/m);
    var nameMatch = textInput.match(/NOME: (.+)$/m);
    var dateMatch = textInput.match(/DATA SAÍDA: (.+)$/m);

   


    // Extracted information
    var enterprise = enterpriseMatch ? enterpriseMatch[1] : "N/A";
    var employeeFunction = employeeFunctionMatch ? employeeFunctionMatch[1] : "N/A";
    var name = nameMatch ? nameMatch[1] : "N/A";
    var date = dateMatch ? dateMatch[1] : "N/A";

    // Create a preview popup
    var previewWindow = window.open("", "Preview", "width=400,height=300");
    //document.getElementById('markdown_preview').document.write = "Date()"

    // Write the preview content to the popup
    previewWindow.document.write(
        "<html><head><title>Preview</title></head><body>"
        +"<h2>Preview:</h2>"
        +"<p><strong>Ticcket:</strong> " + inputTicketNumber + "</p>"
        +"<p><strong>Name:</strong> " + name + "</p>"
        +"<p><strong>Enterprise:</strong> " + enterprise + "</p>"
        +"<p><strong>Employee Function:</strong> " + employeeFunction + "</p>"
        +"<p><strong>Date:</strong> " + date + "</p>"+
        +"</body></html>");
        
        // Close the document
        previewWindow.document.close();
    }
}


function toggleDarkMode() {
    //alert("file2")
    const body = document.body;
    body.classList.toggle('dark-mode'); // Toggle between light and dark mode
}



/*
document.getElementById('generateMarkdown').addEventListener('click', function() {
    const ticketNumber = document.getElementById('ticketNumber').value;
    const empresa = document.getElementById('empresaDropdown').value;
    const nomeColaborador = document.getElementById('nomeColaborador').value;

    const markdownContent = `
# Task Details

**DATA:** ${document.getElementById('dataField').value}
**NUMERO TICKET #:** ${ticketNumber}
**NOME:** ${nomeColaborador}
**EMPRESA:** ${empresa}
**DEPARTAMENTO:** ${document.getElementById('departamentoDropdown').value}

## {GLPI}

**GLPI:** ${document.getElementById('glpiYes').checked ? 'Yes' : 'No'}

### Tasks
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = `${ticketNumber} - ${empresa} - ${nomeColaborador}.md`;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
})
*/
