let url_string = window.location.href;
let url = new URL(url_string);
let id = url.searchParams.get("id");
let type = url.searchParams.get("type");


fetch("../data/files.json")
.then(res => res.json())
.then(data=>{
    document.querySelector('#file-name').textContent = data[type][id];
    document.querySelector('iframe').setAttribute('src',`../files/${type}/${data[type][id]}.pdf`);
});
