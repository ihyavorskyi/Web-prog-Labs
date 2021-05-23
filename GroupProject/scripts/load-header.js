(function () {
    $ajaxUtils.sendGetRequest(
        "snippets/header-snippet.html",
        function (response) {
            document.getElementById("header").innerHTML = response
        });
}())