$(document).ready(function () {
    $.ajax({
        url: "/ToDoes/buildToDoTable",
        success: function (result) {
            $("#tableDiv").html(result);
        }
    })
});