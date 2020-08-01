/* var h = document.createElement('h1')
var myValue = document.createTextNode('hey priyanka!')
h.appendChild(myValue)
document.querySelector('h1').appendChild(h) 

var val = 5

while (val > 0) {
    console.log(val)
    val--;
}*/
//add and remove button work properly
 
var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

//want to add one more todo list
//add a p tag and assign a value of "Enter your todo" 

   function addItem(){
    var input = document.getElementById('input') ; 
    var item = input.value; 
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if (item === '') {
        return false;
    }else{
        //create li
        li = document.createElement('li')

        //create check
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')

        //create lable
        var lable = document.createElement('lable')
        lable.setAttribute('for', 'item') // ptional

        //add these element on web page

        ul.appendChild(lable);
        li.appendChild(checkbox);
        lable.appendChild(textnode);
        li.appendChild(lable);
        ul.insertBefore(li, ul.childNodes[0])

        // want to add time 

        setTimeout(() => {
            li.className = 'visual';
        }, 2);

        input.Value = '';
    }
    
   }




   var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)


 //console.log(li) after li = ul.children it show all li list we don't need that const element = li[index]; // its only select the value of list console.log(element) after for loop we are using here while loop to check if check then remove the todo list by one loop with another loop

   function removeItem(){
       li = ul.children
       for (let index = 0; index < li.length; index++) {
           while (li[index] && li[index].children[0].checked){
               ul.removeChild(li[index])
               
           }
       }
   }
   // want to remove all list by one click

   var ulAll = document.getElementById('list')
var liAll;


var removeButtonAll = document.getElementById('removeall')
removeButtonAll.addEventListener('click', removeItemAll)

function removeItemAll(){
    liAll = ulAll.children
    for (let index = 0; index < liAll.length; index++) {
        while (liAll[index] && liAll[index].children[0]){
            ulAll.removeChild(liAll[index])
            
        }
    }
}