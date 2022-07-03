const element = document.getElementById("buttonId");
element.addEventListener("click", countryFunction);

function countryFunction() {

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://raw.githubusercontent.com/kaiser4200/Learning-Javascript/master/Ajax/countries.json");
    xhttp.responseType = 'json';
    xhttp.send();

    xhttp.onload = function() {

        var countries =xhttp.response;


        //console.log(countries);
        // let countrys = JSON.parse(countries);
        // console.log(typeof countrys);
        // console.log(countrys);

        countries.map(function (country){

            createList(country);

        });
    };
}



function createList(data) {

    const ul = document.createElement("ul");

    const node = document.createElement("li");

    const textnode = document.createTextNode(data.name);

    ul.appendChild(node);

    node.appendChild(textnode);

    document.body.appendChild(node);

}






const elementDistrict = document.getElementById("districtId");
elementDistrict.addEventListener("click", districtFunction);

async function districtFunction() {

    let districts = await getDistricts();

    districts.map(function (district){

        createList(district);

    });


    async function getDistricts() {
        let url = 'districtBD.json';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
}


