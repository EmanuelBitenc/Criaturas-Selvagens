/*const img = document.querySelectorAll("img");
console.log(img);

const imgAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgAnimais);

const links = document.querySelectorAll('a[href^="#"]');
console.log(links);

const h2 = document.querySelector(" .animais-descricao h2");
console.log(h2);

const p = document.querySelectorAll("p");
console.log(p[p.length - 1]);


const img = document.querySelectorAll("img");

const imgArray = Array.from(img);
imgArray.forEach((item, index, array) => {});
**/

/*
// Mostre no console cada parágrado do site

const paragrafos = document.querySelectorAll("p");
const paragrafosArray = Array.from(paragrafos);

// Mostre o texto dos parágrafos no console

paragrafosArray.forEach((item) => {
  console.log(item.innerText);
});


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);


// Adicione a classe ativo a todos os itens do menu

const menu = document.querySelectorAll(".menu a");
menu.forEach((item) => {
  item.classList.add("ativo");
  console.log(item);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove("ativo");
  console.log(item);
});

menu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll("img");
img.forEach((itens) => {
  const atributo = itens.hasAttribute("alt");
  console.log(itens, atributo);
});
// Modifique o href do link externo no menu
const menu = document.querySelectorAll(".menu a");

menu.forEach((item) => {
  item.setAttribute("href", "#animais");
  console.log(item);
});

console.log(menu);

**/
