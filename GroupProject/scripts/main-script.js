function insertProperty(html, propName, propValue) {
    return html.replace(new RegExp(`{{${propName}}}`, "g"), propValue);
}

function clearMainContent() {
    document.getElementById("main-content").innerHTML =
        `<section>
            <div id="gallery-head"></div>
            <div class="container">
                <div class="row" id="gallery-items"></div>
                <div class="row" id="food-block"></div>
                <div class="row" id="food-items"></div>
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
                    }
                });
        });
}

function loadCategory(categoryId) {
    var categories = [];
    $ajaxUtils.sendGetRequest("storage/categories.json",
        response => {
            categories = JSON.parse(response);
            var currentCategory = categories.filter(c => c.id === categoryId)[0];

            console.log(currentCategory);
            clearMainContent();
            $ajaxUtils.sendGetRequest(
                "snippets/category/category.html",
                catResponse => {
                    catResponse = insertProperty(catResponse, "categoryName", currentCategory.name);
                    catResponse = insertProperty(catResponse, "categorySrc", currentCategory.img);
                    document.getElementById("food-block").innerHTML += catResponse;
                });

            $ajaxUtils.sendGetRequest(
                'storage/' + currentCategory.source,
                catItemsResp => {
                    $ajaxUtils.sendGetRequest(
                        "snippets/category/category-item.html",
                        catItemResponse => {
                            var items = JSON.parse(catItemsResp);
                            for (let i = 0; i < items.length; i++) {
                                var html = catItemResponse;
                                html = insertProperty(html, 'foodName', items[i].name);
                                html = insertProperty(html, 'foodDescription', items[i].description);
                                html = insertProperty(html, 'foodImg', items[i].img);
                                html = insertProperty(html, 'foodPrice', items[i].price);
                                html = insertProperty(html, 'foodWeight', items[i].weight);
                                document.getElementById("food-items").innerHTML += html;
                            }
                        });
                }
            )

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