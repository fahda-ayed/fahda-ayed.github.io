let slctElem = (s)=> document.querySelector(s),
    slctElems = (s)=> document.querySelectorAll(s);


window.addEventListener('load', loaded);

function loaded() {
  slctElem('#loader').style.display = 'none';
  document.body.style.overflow = 'auto';
}


// fetch and append elements to these parents

let researches_container = slctElem('#researches-container'),
    coursses_container = slctElem('#courses-container');
