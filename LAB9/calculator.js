calculate = function() {
    var w = document.getElementById('w').value;
    var h = document.getElementById('h').value;

    var operation = document.getElementById('operations').value;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/calculate');

    xhr.responseType = 'json';
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");    

    xhr.send(JSON.stringify({
        'w': w,
        'h': h,
        'operation': operation
    }));

    xhr.onload = function() {
        console.log(123);
        if (xhr.status != 200) console.error('Cannot access the server!');
        else 
        {
            if (xhr.response === null) document.getElementById('result').innerText = 'Error!';
            else document.getElementById('result').innerText = xhr.response.result;
        }
    }
}