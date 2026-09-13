// const bd = document.getElementById("bd")
// console.log(bd);

// const ph = document.getElementsByClassName('ph');
// console.log(ph);

// const allH2 = document.getElementsByTagName('h2')
// console.log(allH2);


// const bd2 = document.querySelector("#bd")
// console.log(bd2);


// Text content modify 


const bd = document.getElementById("bd")
console.log(bd.textContent);
console.log(bd.innerHTML);
console.log(bd.innerText);

bd.textContent = "Hi Dhaka"
bd.innerHTML = '<h6 style="color: red; font-size: 15px;">Hi Bangladesh</h6>';


// modify attribute
console.log(bd.getAttribute("class"))

const img = document.querySelector("#img");
console.log(img.getAttribute("src"))


img.src = "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"

img.style.height = "200px";
img.style.width = "200px";