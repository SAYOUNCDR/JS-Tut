/*
🔍 Element Selection:
- document.getElementById('id') 
- document.getElementsByClassName('class')
- document.getElementsByTagName('tag')
- document.querySelector('selector') 👉 Selects the first element matching (return HTML Collection so cant apply foreach)
- document.querySelectorAll('selector')👉 Selects all elements matching (returns NodeList => foreach can be applied)

🛠 Element Creation & Manipulation:
- document.createElement('tag')
- parentNode.appendChild(element)
- parentNode.removeChild(element)
- element.setAttribute('attribute', 'value')
- element.getAttribute('attribute')


🎨 Class and Content Handling:
- element.classList.add('class')
- element.classList.remove('class')
- element.textContent=`Text` (return all content wether its hidden or visible)
- element.innerText=`Text` (returns only visible content)
- element.innerHTML=`Text` (return HTML , Content also)

🎯 Event Handling:
- element.addEventListener('event', callback)
- element.removeEventListener('event', callback)
*/

//Heading colour change
let heading = document.querySelector("h1");
heading.style.color = "red";

/* --------------IMPORTANT STUFFs I THINK-------------- */

//** Using for each to traverse through each element and appling color
let unorderedList = document.querySelectorAll("li");
unorderedList.forEach((li) => {
  // li.style.backgroundColor = "green";
});



//** Using for each on those which returns HTML Collection not NodeList for easy for each implementation
//document.getElementByClassName('className') returns HTML COllection
let classNameList = document.getElementsByClassName("ulList"); //This return HTML Collection
let arrayList = Array.from(classNameList); //Convert into array to apply forEach

arrayList.forEach((li) => {
  li.style.color = "orange";
});
