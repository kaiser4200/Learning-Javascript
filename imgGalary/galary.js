
const data = [
    {
        "id":"0",
        "author":"Alejandro Escamilla",
        "width":304,
        "height":228,
        "url":"https://unsplash.com/photos/yC-Yzbqy7PY",
        "download_url":"https://picsum.photos/id/0/5616/3744"
    },
    {
        "id":"1",
        "author":"Alejandro Escamilla",
        "width":304,
        "height":228,
        "url":"https://unsplash.com/photos/LNRyGwIJr5c",
        "download_url":"https://picsum.photos/id/1/5616/3744"
    },
    {
        "id":"2",
        "author":"Paul Jarvis",
        "width":304,
        "height":228,
        "url":"https://unsplash.com/photos/6J--NXulQCs",
        "download_url":"https://picsum.photos/id/10/2500/1667"
    },
    {
        "id":"3",
        "author":"Tina Rataj",
        "width":304,
        "height":228,
        "url":"https://unsplash.com/photos/pwaaqfoMibI",
        "download_url":"https://picsum.photos/id/100/2500/1656"
    },
    {
        "id":"4",
        "author":"Lukas Budimaier",
        "width":304,
        "height":228,
        "url":"https://unsplash.com/photos/6cY-FvMlmkQ",
        "download_url":"https://picsum.photos/id/1000/5626/3635"
    },
    {
        "id":"5",
        "author":"Danielle MacInnes",
        "width":304,
        "height":228,
        "url":"https://unsplash.com/photos/1DkWWN1dr-s",
        "download_url":"https://picsum.photos/id/1001/5616/3744"
    }
];
const element = document.getElementById("buttonImg");
element.addEventListener('click',imgFunction);

function imgFunction() {

    data.map(imgData => {
        let x = document.createElement("IMG");

        let srcImg = imgData.download_url+'.jpg';

        x.setAttribute("title", imgData.author);
        x.setAttribute("src", srcImg);
        x.setAttribute("width", imgData.width);
        x.setAttribute("height", imgData.height);
        x.setAttribute("alt", "The Pulpit Rock");

        console.log(x);

        document.body.appendChild(x);
    });



}
