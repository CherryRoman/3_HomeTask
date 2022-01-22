var inputValue = document.querySelector('[type="text"]');
var inputBtn = document.querySelector('[type="button"]');
var ouput = document.querySelector('#output');
var listItems = document.getElementById('list');
var regExp = /\s{1,}/;
var messageForm = document.querySelector('#message-form');
var createItemBtn = document.querySelector('[value="How many letters a?"]');
var howManyA = document.querySelector('#HowManyA');
var okBtn = document.querySelector('[value="OK"]');

inputBtn.onclick = setFunc;
createItemBtn.onclick = toggleMessageFormView;
okBtn.onclick = toggleMessageFormView;

function setFunc(){  
  var res = inputValue.value.split(regExp);  
  var listElem = document.createElement('ul');
  listItems.appendChild(listElem);

  for(var i=0; i < res.length; i++) {
    if(i === 0){
      var item = document.createElement('li');
      item.innerHTML = res[i];      
      listElem.appendChild(item);     
      item.innerHTML = item.innerHTML.toUpperCase();
    } else if(i == res.length - 1) {
      var item = document.createElement('li');
      item.innerHTML = res[i];      
      listElem.appendChild(item);
      item.innerHTML = item.innerHTML.toLowerCase();
    } else if(i == (res.length - 2)) {
      var item = document.createElement('li');
      item.innerHTML = res[i];      
      listElem.appendChild(item);
      item.innerHTML = item.innerHTML.toLowerCase();
    } else {
    var item = document.createElement('li');
    item.innerHTML = res[i];
    listElem.appendChild(item);
    }
  }
}

function toggleMessageFormView() {  
  var aInMassRegExp = /a/g;
  var resA = inputValue.value.match(aInMassRegExp);
  messageForm.classList.toggle('visible');  
  howManyA.innerHTML = "Всего букв а =  " + resA.length;    
  }