//function 
function printStatus(status) {
    if (status == 'loading') {
        console.log("currently loading");
    }
    else if (status == 'success') {
        console.log("SUcess!");
    }
    else if (status == 'error') {
        console.log("Failed...");
    }
}
printStatus('loading');
