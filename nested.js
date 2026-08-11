function outer() {
    function inner() {
        console.log("Inner function executed");
    }
    inner();
}
outer();
