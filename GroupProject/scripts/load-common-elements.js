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

    $ajaxUtils.sendGetRequest(
        "snippets/preview-snippet.html",
        function (response) {
            document.getElementById("main-content").innerHTML += response
            $ajaxUtils.sendGetRequest(
                "snippets/slider-snippet.html",
                function (response) {
                    document.getElementById("main-content").innerHTML += response
                });
        });
}())