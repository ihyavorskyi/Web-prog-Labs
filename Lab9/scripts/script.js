(function () {
    $ajaxUtils.sendGetRequest(
        "snippets/navigation-snippet.html",
        function (response) {
            document.getElementById("navigation").innerHTML = response
        });
    loadCategories();
}());

function showLoader(show) {
    document.getElementById("loader").innerHTML = show ? `<div class="loader-wrapper"><div class="loader"></div></div>` : ``;
}

function insertProperty(html, propName, propValue) {
    return html.replace(new RegExp(`{{${propName}}}`, "g"), propValue);
}

function mainContentClear() {
    document.getElementById("main-content").innerHTML =
        `<div id="category-name"></div>
        <div class="row justify-content-center" id="categories"></div>
    <div id="categories-specials"></div>`;
}

function loadCategories() {
    showLoader(true);
    mainContentClear();
    $ajaxUtils.sendGetRequest(
        "storage/categories.json",
        function (response) {
            $ajaxUtils.sendGetRequest(
                "snippets/category-item-snippet.html",
                function (responseHtml) {
                    var categories = JSON.parse(response).categories;
                    for (let i = 0; i < categories.length; i++) {
                        var html = responseHtml;
                        html = insertProperty(html, "name", categories[i].name);
                        html = insertProperty(html, "image", categories[i].image);
                        html = insertProperty(html, "notes", categories[i].notes);
                        html = insertProperty(html, "shortname", categories[i].shortname);
                        document.getElementById("categories").innerHTML += html
                    }
                    showLoader(false);
                });
        });
    $ajaxUtils.sendGetRequest(
        "snippets/specials-snippet.html",
        function (response) {
            document.getElementById("categories-specials").innerHTML = response
        });
}

function loadCatalog() {
    showLoader(true);
    mainContentClear();
    $ajaxUtils.sendGetRequest(
        "storage/categories.json",
        function (response) {
            var categories = JSON.parse(response).categories;
            for (let i = 0; i < categories.length; i++) {
                loadCategory(categories[i].shortname, true)
            }
            showLoader(false);
        });
}

function loadSpecials() {
    var randCategory = Math.floor(Math.random() * (6 - 1) + 1);
    loadCategory(`cat${randCategory}`)
}

function loadCategoryName(shortname) {
    showLoader(true);
    $ajaxUtils.sendGetRequest(
        "snippets/category-name-snippet.html",
        function (responseHtml) {
            $ajaxUtils.sendGetRequest(
                "storage/categories.json",
                function (response) {
                    var category = JSON.parse(response).categories.filter(e => e.shortname === shortname);
                    responseHtml = insertProperty(responseHtml, "name", category[0].name);
                    document.getElementById("category-name").innerHTML = responseHtml
                    showLoader(false);
                });
        });
}

function loadCategory(shortname, isShowCategoryName) {
    showLoader(true);
    mainContentClear();
    if (!isShowCategoryName) { loadCategoryName(shortname) }
    $ajaxUtils.sendGetRequest(
        `storage/goods/${shortname}-goods.json`,
        function (response) {
            $ajaxUtils.sendGetRequest(
                "snippets/goods-item-snippet.html",
                function (responseHtml) {
                    var goods = JSON.parse(response).goods;
                    for (let i = 0; i < goods.length; i++) {
                        var html = responseHtml;
                        html = insertProperty(html, "name", goods[i].name);
                        html = insertProperty(html, "image", goods[i].image);

                        if (goods[i].description.length > 100) {
                            goods[i].description = `${goods[i].description.slice(0, 100)}...`;
                        }
                        html = insertProperty(html, "description", goods[i].description);
                        html = insertProperty(html, "price", goods[i].price);
                        document.getElementById("categories").innerHTML += html
                    }
                    showLoader(false);
                });
        });
}