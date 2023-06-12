function consoleError(errmsg:string): void{
    console.log(errmsg);
}
// void is used here 
function consoleerror(errmsg : string):never{
    throw new Error(errmsg);
}
// never is specially designed to handle error msg when we dont return a value 