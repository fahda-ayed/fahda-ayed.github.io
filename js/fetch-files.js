let url_string = window.location.href;
let url = new URL(url_string);
let id = url.searchParams.get("id");
let type = url.searchParams.get("type");

if(id && type !="CV"){
  fetch("../data/files.json")
  .then(res => res.json())
  .then(data=>{
    document.querySelector('#file-name').textContent = data[type][id];
    document.querySelector('iframe').setAttribute('src',`../files/${type}/${data[type][id]}.pdf`);
    document.querySelector('iframe').addEventListener('load', ()=>{
      document.querySelector('#loader').style.display = 'none';
      document.body.style.overflow = 'auto';
    })
  });
} else if(type.toLowerCase() == "cv"){
  document.querySelector('#file-name').textContent = "السيرة الذاتية";
  document.querySelector('iframe').setAttribute('src',`../files/فهدة عابد CV.pdf`);
  document.querySelector('#loader').style.display = 'none';
  document.body.style.overflow = 'auto';
}
