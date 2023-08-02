const inputBox = document.getElementById('text-field');
inputBox.addEventListener('keypress', addTask);
const ulContainer = document.querySelector('ul');

function addTask(event){
   if(event.keyCode === 13) {
        var inputValue = document.getElementById('text-field').value.trim();

        if(inputValue.length == 0)
        {
            alert('Enter some todo here.');
        }

        else 
        {
            var newTextNode = document.createTextNode(inputValue);
            var newLi = document.createElement('li');
            newLi.appendChild(newTextNode);
            ulContainer.appendChild(newLi);
            inputBox.value = "";
            var img = document.createElement('img');
            img.setAttribute('src', 'blueTrash.png');
            newLi.appendChild(img);
        }
    }
}

// click event to delete todo task.
ulContainer.addEventListener('click', completed);

function completed(event){
    if(event.target.tagName == "LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName == "IMG"){
        event.target.parentElement.remove();
    }
}


// Hide and show function., to hide and show input element when we click plus icon.
var plusIcon = document.getElementById('plus-icon');
inputBox.style.display = 'none';
plusIcon.addEventListener('click', function() {
    if(inputBox.style.display == 'none'){
        inputBox.style.display = 'block';
    }
    else {
        inputBox.style.display = 'none';
    }
});