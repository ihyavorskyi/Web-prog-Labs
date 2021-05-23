(function () {
    $ajaxUtils.sendGetRequest(
        "snippets/header-snippet.html",
        function (response) {
            document.getElementById("header").innerHTML = response
        });

    $ajaxUtils.sendGetRequest(
        "snippets/footer-snippet.html",
        function (response) {
            document.getElementById("footer").innerHTML = response
        });
}())