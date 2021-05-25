(function () {
    $ajaxUtils.sendGetRequest(
        "snippets/navigation/header-snippet.html",
        function (response) {
            document.getElementById("header").innerHTML = response
            $ajaxUtils.sendGetRequest(
                "snippets/navigation/footer-snippet.html",
                function (response) {
                    document.getElementById("footer").innerHTML = response
                    loadHome();
                });
        });
}())