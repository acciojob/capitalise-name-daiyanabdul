function convertToUpperCase() {
 
    var inputField = document.getElementById("fname");

    
    inputField.value = inputField.value.toUpperCase();
}


document.getElementById("fname").addEventListener("blur", convertToUpperCase);

