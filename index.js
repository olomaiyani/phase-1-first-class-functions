
function receivesAFunction(spy){
    console.log (spy());
}
receivesAFunction(function(){
    return "spy"
})
function returnsANamedFunction(){
return function receivesAFunction(){

}
}

function  returnsAnAnonymousFunction(){
    return function(){
        
    }
}