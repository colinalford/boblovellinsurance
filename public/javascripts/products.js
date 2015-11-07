var products = document.getElementsByClassName("product");

for (i in products) {
    products[i].addEventListener("click", function() {
        var children = $(this).children();

        if (children.hasClass("product-info")) {
            if (window.matchMedia("(min-width: 1121px)").matches) {
                children.toggleClass("product-info-trans");
                children.parent().siblings().toggleClass("product-fade-out");
                children.parent().toggleClass("product-remain");
            } else if (window.matchMedia("(min-width: 591px)").matches) {
                children.parent().toggleClass("product-visible");
                children.toggleClass("product-info-display product-info-trans");
                children.parent().siblings().toggleClass("product-fade-out");
                children.parent().toggleClass("product-remain");
            }
        };
    });
};
