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

function loadGallery() {
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
                });
        });
}

function loadHome() {
    clearMainContent();
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
}