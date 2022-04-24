//Document
console.info("\nDOCUMENT");
console.info(document);
console.info(document.title);
console.info(document.body);
console.info(document.head);
console.info(document.contentType);
console.info(document.images);

//Node
console.info("\nNODE");
console.info(document.getElementById("menu"));
console.info(document.getElementById("second"));
console.info(document.getElementById("menu").children);
console.info(document.getElementById("menu").childElementCount);
console.info(document.getElementById("second").previousSibling);
console.info(document.getElementById("second").nextSibling);
document.getElementById("menu").removeChild(document.getElementById("second"));

//Element
console.info("\nELEMENT");
document.getElementById("title").textContent = "BELAJAR DOM";
console.info(document.getElementById("title").id);
console.info(document.getElementById("title").className);
console.info(document.getElementById("title").tagName);
document.getElementById("title").remove();
const content = document.getElementById("content");
const h1 = document.createElement("h1"); //membuat element h1
h1.textContent = "HelloWorld";
h1.id = "hw";
content.appendChild(h1);

//NodeList
console.info("\nNODELIST");
//nodelist => kumpulan node
console.info(document.getElementById("menu").childNodes); //bersifat live => setiap perubahan pada NodeList akan merubah semua NodeList
console.info(document.querySelectorAll("li")); //bersifat static => perubahan yg terjadi pada NodeList tidak akan merubah semua NodeList

//Attr
console.info("\nATTR");
document.getElementById("hw").setAttribute("name", "Yuri"); //set Attr
console.info(document.getElementById("hw").getAttribute("name")); //get Attr
//NamedNodeMap (kumpulan Attr)
for (let attr of document.getElementById("hw").attributes) {
  console.info(attr.name + " : " + attr.value);
}

//TextNode
console.info("\nTEXTNODE"); //membuat text tanpa tag
console.info(document.body.firstChild);
// document.body.appendChild(document.createTextNode("hello geys")); //membuat TextNode

//Event Handler
console.info("\nEVENTHANDLER");
document.getElementById("btn").addEventListener("click", () => {
  alert("clicked");
});
//global event
document.getElementById("btn").onclick = () => alert("clicked");

//Event
console.info("\nEVENT");
document.getElementById("canvas").onclick = (e) => {
  document.getElementById("canvas").textContent = `You Click At (${e.x}, ${e.y})`;

  //Style
  console.info("\nSTYLE");
  document.getElementById("canvas").style.backgroundColor = document.getElementById("canvas").style.backgroundColor === "red" ? "yellow" : "red";
};

//Inner Text & InnerHTML
console.info("\nINNERTEXT & INNERHTML");
console.info(document.getElementById("text").textContent);
console.info(document.getElementById("text").innerText);
console.info(document.getElementById("text").innerHTML);
document.getElementById("text").innerHTML = "<h3>This is Title</h3>";

//Window
console.info("\nWINDOW");
//window => representasi window berisi DOM Document
console.info(`Window width = ${window.screen.width} & height = ${window.screen.height}`);

//Query Selector
console.info("\nQUERY SELECTOR");
//querySelector(pola) menyeleksi node pertama yg sesuai pola
//querySelectorAll(pola) menyeleksi semua node yg sesuai pola
console.info(document.querySelectorAll("*")); //* => menyeleksi semua element
console.info(document.querySelector("li")); //element li
console.info(document.querySelector(".ul")); //class ul
console.info(document.querySelector("#menu")); //id menu
console.info(document.querySelector("[name=teks]"));
console.info(document.querySelector("p[name^='teks']"));

//Node Type
console.info("\nNODETYPE");
const nodes = document.body.childNodes;
nodes.forEach((node) => {
  console.info(`${node} : ${node.nodeType}`);
});

//HTML Element
console.info("\nHTMLELEMENT");
const link = document.getElementById("link");
link.href = `https://arfian-id.web.app/`;
link.target = "_blank";
link.textContent = "Arfian";

//HTML Form Element
console.info("\nHTMLFORMELEMENT");
// document.querySelector("form[name=commentForm]").onsubmit = (e) => {
//   e.preventDefault();
//   const commentList = document.getElementById("commentList");
//   const comment = document.getElementById("comment").value;
//   const from = document.getElementById("from").value;
//   const commentItem = document.createElement("p");
//   commentItem.textContent = `${comment} - ${from}`;
//   commentList.appendChild(commentItem);
//   document.forms["commentForm"].reset();
// };
//kelebihan form
document.forms["commentForm"].onsubmit = (e) => {
  e.preventDefault();
  const commentList = document.getElementById("commentList");
  const comment = document.forms["commentForm"]["comment"].value;
  const from = document.forms["commentForm"]["from"].value;
  const commentItem = document.createElement("p");
  commentItem.textContent = `${comment} - ${from}`;
  commentList.appendChild(commentItem);
  document.forms["commentForm"].reset();
};

//HTML Table Element
console.info("\nHTMLTABLEELEMENT");
const orderRevenue = document.getElementById("orderRevenue");
console.info(orderRevenue.caption);
console.info(orderRevenue.tHead);
console.info(orderRevenue.tBodies);
console.info(orderRevenue.tFoot);
//https://developer.mozilla.org/en-US/docs/Web/API#interfaces
