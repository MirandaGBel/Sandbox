
console.log("inicio! ");
//previewText($input = document.getElementById('dropInputText'));

function previewText() {
    $input = document.getElementById('dropInputText').value;
    console.log("" + $input);
  }

 function toggleDarkMode(){
    console.log("test");

 }
 function previewText() {

    var inputTicketNumber = document.getElementById('inputTicketNumber');
    var textarea = document.getElementById('dropInputText');
    textarea.style.display = 'block'; // Show the textarea
    var input = textarea.value;
    //console.log("" + input);
    
    //console.log("" + inputTicketNumber.value);
    //https://tickets.grupobel.pt/Ticket/Display.html?id=80389

    var previewDiv = document.getElementById('preview');
    
    var inputTicketNumber = document.getElementById('inputTicketNumber');
    var previewContent = previewDiv.innerHTML;
    var previewContent = inputTicketNumber.innerHTML;
    if(inputTicketNumber.value==""){
        alert("Por favor inserir o numero de ticket!")

    }else{
        let text = "Ir para ticket #"+inputTicketNumber.value;
        var final = "https://tickets.grupobel.pt/Ticket/Display.html?id="+inputTicketNumber.value;
        var result = "<a href='" + final + "' target='_blank' rel='noopener noreferrer'>" + text + "</a>";
        
        console.log(result);
        //previewDiv.innerHTML = final;
        previewDiv.innerHTML = result;
        /*
        
*/
    }

}

function switchEdit() {
    var textarea = document.getElementById('dropInputText');
    var switchBtn = document.getElementById('switch');
    var inputManual = document.getElementById('inputManual');
    
    if(switchBtn.textContent=="Editar"){
        textarea.style.display = 'none'; // switch the textarea
        inputManual.style.display = 'block'; // switch the textarea
        switchBtn.textContent= "Automatic";        
    }
    else if(switchBtn.textContent=="Automatic"){
        textarea.style.display = 'block'; // switch the textarea
        inputManual.style.display = 'none'; // switch the textarea
        switchBtn.textContent= "Editar";        
    }
    console.log("teste "+switchBtn.textContent);

  }
  
    
    
    