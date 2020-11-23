
function sendRequestGetAllApplication(callback, callback2) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/api/aplication",
        success: callback,
        error: callback2
    });
}

function sendRequestDeleteApplication(id, callback, callback2) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8888/api/aplication/" + id,
        success: callback,
        error: callback2
    });
}

function sendRequestGetApplication(id, callback) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/api/aplication/" + id,
        success: callback
    });
}

function sendRequestAddApplication(data, callback, callback2) {
    $.ajax({
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        url: "http://localhost:8888/api/aplication",
        data: JSON.stringify(data),
        success: callback,
        error: callback2
    });
}

