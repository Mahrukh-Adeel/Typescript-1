// create a type
type Status = 'loading' | 'success' | 'error';
//function 
function printStatus(status: Status){
    if ( status== 'loading'){
        console.log("currently loading");
    }
    else if (status == 'success'){
        console.log("SUcess!");
    }
    else if (status == 'error'){
        console.log("Failed...");
    }
}
printStatus('loading');