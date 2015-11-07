var products = document.getElementsByClassName("product");

for (i in products) {
    products[i].addEventListener("click", function() {
        var children = this.childNodes;
        for (j in children) {
            if (children[j].className === "product-info") {
                children[j].className = "product-info product-info-trans";
                $(children[j]).parent().siblings().addClass("product-fade-out");
                $(children[j]).parent().addClass("product-remain");
            } else if(children[j].className === "product-info product-info-trans") {
                children[j].className = "product-info";
                $(children[j]).parent().siblings().removeClass("product-fade-out");
                $(children[j]).parent().removeClass("product-remain");
            };
        };
    });
};
