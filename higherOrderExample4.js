const Details = [
    {
        "_id": "62ba0e781367cbb32b35d77d",
        "isActive": true,
        "balance": "$2,678.00",
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "name": "Eloise Vazquez",
        "gender": "female",
        "email": "eloisevazquez@webiotic.com",
        "address": "189 Granite Street, Blairstown, New Mexico, 8050",
        "friends": [
            {
                "id": 0,
                "name": "Jenny Kennedy"
            },
            {
                "id": 1,
                "name": "Monroe Goff"
            },
            {
                "id": 2,
                "name": "Gallagher Hale"
            }
        ]
    },
    {
        "_id": "62ba0e781bbee7ae27208106",
        "isActive": false,
        "balance": "$3,489.76",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": "Bernadine Brock",
        "gender": "female",
        "email": "bernadinebrock@webiotic.com",
        "address": "539 Erskine Loop, Morningside, Connecticut, 9719",
        "friends": [
            {
                "id": 0,
                "name": "Terra Byers"
            },
            {
                "id": 1,
                "name": "Greene Sellers"
            },
            {
                "id": 2,
                "name": "Bryan Casey"
            }
        ]
    },
    {
        "_id": "62ba0e788093a65946695fa8",
        "isActive": true,
        "balance": "$1,825.07",
        "picture": "http://placehold.it/32x32",
        "age": 32,
        "name": "Mcdowell West",
        "gender": "male",
        "email": "mcdowellwest@webiotic.com",
        "address": "580 Kingsland Avenue, Valmy, North Carolina, 7265",
        "friends": [
            {
                "id": 0,
                "name": "Parsons Salazar"
            },
            {
                "id": 1,
                "name": "Stella Mcintosh"
            },
            {
                "id": 2,
                "name": "Faye Marquez"
            }
        ]
    }
];

const personFriends = Details.map( (data) => {

    let personName = data.name;
    let friends = data.friends;

    let person_friends = friends.map(friend => friend.name);

    return personName.concat("   friends =>  ").concat(person_friends);
});
console.log(personFriends);

const malePersonDetails = Details.filter(sex => sex.gender === 'male');

const fmalePersonDetails = Details.filter(sex => sex.gender === 'female');

const activePerson = Details.filter(active => active.isActive === true).map(activeName => activeName.name);

//console.log(activePerson);







