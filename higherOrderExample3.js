const Addresses =
[
    {
        "full_name":"Frankie Renner",
        "address":
            {
                "street":"33842 Monahan Drive",
                "city":"Cockburn Town"
            }
    },
    {
        "full_name":"Theresa Stoltenberg",
        "address":
            {
                "street":"70262 Jacobi Extensions",
                "city":"Muang Kènthao"
            }
    },
    {
        "full_name":"Meghan Larson",
        "address":
            {
                "street":"743 Hickle Lake",
                "city":"Southfield"
            }
    },
    {
        "full_name":"Bill Heidenreich",
        "address":
            {
                "street":"87979 Predovic Rest",
                "city":"Mwaro"
            }
    },
    {
        "full_name":"Lynda Stoltenberg",
        "address":
            {
                "street":"57277 Weber Plaza",
                "city":"Fuembellida"
            }
    }
];

// full name and their city
const details = Addresses.map(name => name.full_name.concat("   City -> ").concat(name.address.city));

console.log(details);