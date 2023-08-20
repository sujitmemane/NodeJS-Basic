const sendObj = {
    method: "GET"
}
function callbackFn(result) {
    result.json().then(data => console.log(data))
}

fetch('http://localhost:3000/handleSum?counter=40', sendObj).then(callbackFn)