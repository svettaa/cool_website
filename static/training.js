
function sendRequestGetAllTrainings(callback, callback2) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/api/training",
        success: callback,
        error: callback2
    });
}

function sendRequestDeleteTraining(id, callback, callback2) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8888/api/training/" + id,
        success: callback,
        error: callback2
    });
}

function sendRequestGetTraining(id, callback) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/api/training/" + id,
        success: callback
    });
}

function sendRequestEditTraining(id, data, callback, callback2) {
    $.ajax({
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        url: "http://localhost:8888/api/training/" + id,
        data: JSON.stringify(data),
        success: callback,
        error: callback2
    });
}

function sendRequestAddTraining(data, callback, callback2) {
    $.ajax({
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        url: "http://localhost:8888/api/training",
        data: JSON.stringify(data),
        success: callback,
        error: callback2
    });
}

