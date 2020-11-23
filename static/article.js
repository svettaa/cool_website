
function sendRequestGetAllArticles(callback, callback2) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/api/group",
        success: callback,
        error: callback2
    });
}

function sendRequestDeleteArticle(id, callback, callback2) {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8888/api/group/" + id,
        success: callback,
        error: callback2
    });
}

function sendRequestGetArticle(id, callback) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/api/group/" + id,
        success: callback
    });
}

function sendRequestEditArticle(id, data, callback, callback2) {
    $.ajax({
        type: "POST",
        contentType: 'application/json',
        dataType: 'json',
        url: "http://localhost:8888/api/group/" + id,
        data: JSON.stringify(data),
        success: callback,
        error: callback2
    });
}

function sendRequestAddArticle(data, callback, callback2) {
    $.ajax({
        type: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        url: "http://localhost:8888/api/group",
        data: JSON.stringify(data),
        success: callback,
        error: callback2
    });
}

