function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 2;

    if (x) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
);



//myPromise.then(value => myDisplayer(value)).catch(error => myDisplayer(error));


