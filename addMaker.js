function addMaker(a) {
    return function(b) {
        return a + b;
    }
}

addMaker(10)(5);

var add5 = addMaker(5);
add5(3);

var add3 = addMaker(3);
add3(4);