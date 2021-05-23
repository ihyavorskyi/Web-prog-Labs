function insertProperty(html, propName, propValue) {
    return html.replace(new RegExp(`{{${propName}}}`, "g"), propValue);
}

function clearMainContent() {
    document.getElementById("main-content").innerHTML =
        `<section>
            <div id="gallery-head"></div>
            <div class="container">
                <div class="row" id="gallery-items"></div>
            </div>
        </section>`
}

function showLoader(show) {
    document.getElementById("loader").innerHTML = show ? `<div class="loader-wrapper"><div class="loader"></div></div>` : ``;
}

function loadGallery() {
    showLoader(true);
    clearMainContent();

    $ajaxUtils.sendGetRequest(
        "snippets/gallery/gallery.html",
        function (responseHtml) {
            document.getElementById("gallery-head").innerHTML = responseHtml
        });

    $ajaxUtils.sendGetRequest(
        "snippets/gallery/gallery-item.html",
        function (responseHtml) {
            $ajaxUtils.sendGetRequest(
                "storage/gallery/restourant.json",
                function (response) {
                    var images = JSON.parse(response)
                    for (let i = 0; i < images.length; i++) {
                        var html = responseHtml;
                        html = insertProperty(html, "image", images[i]);
                        document.getElementById("gallery-items").innerHTML += html
                    }
                    document.getElementById("gallery-items").innerHTML +=
                        `<div style="height: 110px;" class="bg-black p-4 mt-4 mb-5 col-12">
                            <h1 class="text-center text-white">Страви</h1>
                        </div>`
                });
        });

    $ajaxUtils.sendGetRequest(
        "snippets/gallery/gallery-item.html",
        function (responseHtml) {
            $ajaxUtils.sendGetRequest(
                "storage/gallery/food.json",
                function (response) {
                    var images = JSON.parse(response)
                    for (let i = 0; i < images.length; i++) {
                        var html = responseHtml;
                        html = insertProperty(html, "image", images[i]);
                        document.getElementById("gallery-items").innerHTML += html
                        showLoader(false);
                    }
                });
        });
}

function loadHome() {
    showLoader(true);
    clearMainContent();
    $ajaxUtils.sendGetRequest(
        "snippets/preview-snippet.html",
        function (response) {
            document.getElementById("main-content").innerHTML += response
            $ajaxUtils.sendGetRequest(
                "snippets/slider-snippet.html",
                function (response) {
                    document.getElementById("main-content").innerHTML += response
                    showLoader(false);

                });
        });
}