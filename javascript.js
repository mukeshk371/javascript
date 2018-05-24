function onLoad(){
	var inputField = document.getElementById('input');
	inputField.addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			if(this.value){
				addTodo(this.value);
			}
			this.value = '';
		}
	});
}

function addTodo(text){
	var ul = document.getElementById('todoList');
	var newLi = createLiElment(text);
	ul.appendChild(newLi);
}

function createLiElment(text){
	var newLi = document.createElement("LI");

	var checkBox = createLiCheckBox();
    newLi.appendChild(checkBox);

    var textSpan = createLiTextSpan(text);
	newLi.appendChild(textSpan);

	var removeButton = createLiRemoveButton();
	newLi.appendChild(removeButton);
	return newLi;
}

function createLiTextSpan(text){
	var textSpan = document.createElement("SPAN");
	textSpan.innerHTML = text;
	return textSpan;
}

function createLiCheckBox(){
	var checkBox = document.createElement('INPUT');
    checkBox.type = 'checkbox';
    checkBox.className += " checkbox-round";
    checkBox.addEventListener('click', function(event){
    	var parentLi = this.parentNode;
    	parentLi.classList.toggle('todo-done')
    	
    });
    return checkBox;
}

function createLiRemoveButton(){
	var removeButton = document.createElement("A");
	removeButton.className+='close';
	removeButton.addEventListener('click', function(event){
		var todoList = document.getElementById('todoList');
		todoList.removeChild(this.parentNode);
	});
	return removeButton;
}


document.addEventListener('click', function(){
	var list = document.getElementsByTagName('UL')[0];
	list.getElementsByTagName('LI')[0].style.color = "blue";
});