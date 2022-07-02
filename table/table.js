const element = document.getElementById("buttonId");
element.addEventListener("click",myFunction);


function myFunction() {


    let table = document.createElement('table');

    let tr = document.createElement('tr');

    let arrHeader = ['ID', 'FirstName', 'LastName', 'Gender'];

    let array = [
        {
        ID: 1,
        FirstName: 'Mehvish',
        LastName: 'Ashiq',
        Gender: 'Female'
        },
        {
            ID: 2,
            FirstName: 'Thomas',
            LastName: 'Christoper',
            Gender: 'Male'
        },
        {
            ID: 3,
            FirstName: 'Shiva',
            LastName: 'Pandy',
            Gender: 'Male'
        },
        {
            ID: 4,
            FirstName: 'Tina',
            LastName: 'Robert',
            Gender: 'Female'
        },
        {
            ID: 5,
            FirstName: 'Jonny',
            LastName: 'Deep',
            Gender: 'Male'
        }
    ];

    arrHeader.map(function (header) {

        let th = document.createElement('th');
        let text = document.createTextNode(header);

        th.appendChild(text);
        tr.appendChild(th);
    });
    table.appendChild(tr);


    for (let i = 0; i < array.length; i++) {
         tr = document.createElement('tr');

         // array.map(id => {
         //
         //     let td1 = document.createElement('td');
         //     let text1 = document.createTextNode(id.FirstName);
         //     td1.appendChild(text1);
         //     tr.appendChild(td1);
         //
         //     console.log(tr);
         //
         // });

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');

        let text1 = document.createTextNode(array[i].ID);
        let text2 = document.createTextNode(array[i].FirstName);
        let text3 = document.createTextNode(array[i].LastName);
        let text4 = document.createTextNode(array[i].Gender);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table.appendChild(tr);
    }


    document.body.appendChild(table);
    clear();
}



