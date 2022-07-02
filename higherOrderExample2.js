const Employees =
[
    {
        "jobTitleName":"Developer",
        "firstName":"Romin",
        "lastName":"Irani",
        "employeeCode":"E1",
        "region":"CA",
        "phoneNumber":"408-1234567",
        "emailAddress":"romin.irani@gmail.com"
    },
    {
        "jobTitleName":"Developer",
        "firstName":"Neil",
        "lastName":"Irani",
        "employeeCode":"E2",
        "region":"CA",
        "phoneNumber":"408-1111111",
        "emailAddress":"neilrirani@gmail.com"
    },
    {
        "jobTitleName":"Program Directory",
        "firstName":"Tom",
        "lastName":"Hanks",
        "employeeCode":"E3",
        "region":"CA",
        "phoneNumber":"408-2222222",
        "emailAddress":"tomhanks@gmail.com"
    }
];

//Using map()
const fullName = Employees.map(employee => employee.firstName.concat(" ").concat(employee.lastName));
console.log(fullName);


//Using filter()
const jobTitle = Employees.filter(title => title.jobTitleName === 'Developer').map(email => email.emailAddress);

console.log(jobTitle);

//Using reduce()
    Employees.reduce(function (previousValue, currentValue, currentIndex, array) {

    });