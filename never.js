function consoleError(errmsg) {
    console.log(errmsg);
}
// void is used here 
function consoleerror(errmsg) {
    throw new Error(errmsg);
}
// never is specially designed to handle error msg when we dont return a va
