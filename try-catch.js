function doException() {
    throw new Error("Error...");
}

function noException() {
    return true;
}

function callException(type) {
     if (type === "do") {
         doException();
     } else {
         noException();
     }
}

function main() {
    try {
        callException("no");
    } catch(e) {
        console.log(e);
    } finally {
        console.log("Finished!!");
    }
}

main();