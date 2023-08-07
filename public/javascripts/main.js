// const { response } = require("express");

// const { response } = require("../../app");

var loadSelectedPage = (pageType) => {
    var pageTemplateUrl = ''
    switch (pageType) {
        case 'login':
            pageTemplateUrl = 'templates/login.htm'
            break;
        case 'signup':
            pageTemplateUrl = 'templates/signup.htm'
            break;
        case 'forget_pass':
            pageTemplateUrl = 'templates/forget_pass.htm'
            break;
        case 'homePage':
            pageTemplateUrl = 'templates/homePage.htm'
            break;
        case 'product':
            pageTemplateUrl = 'templates/product.htm'
            break;
    }
    loadPageTemplate(pageTemplateUrl, pageType);
}

var loadPageTemplate = (templateUrl, pageType) => {
    $.ajax({
        url: templateUrl,
        method: 'GET',
        data: {},
        success: (response) => {
            //  console.log('response')
            //  console.log(response)
            $(".mainPageBlock").html('')
            $(".mainPageBlock").append(response)
            if (pageType == 'homePage') {
                loadHomePageDetails()
            }
            if (pageType == 'product') {
                loadProductData()
            }
        }
    })
}

var loadHomePageDetails = () => {
    $.ajax({
        url: '/homePage',
        method: 'GET',
        dataType: 'JSON',
        data: {},
        success: (response) => {
            console.log(response)

            var product1 = Handlebars.compile(document.querySelector(".slide1").innerHTML)
            var product2 = Handlebars.compile(document.querySelector(".slide2").innerHTML)
            var product3 = Handlebars.compile(document.querySelector("#order_part").innerHTML)

            response.Dish.forEach((pData) => {
                $("#sec1").append(product1(pData))
            }),
                response.Brand.forEach((pData) => {
                    $("#sec2").append(product2(pData))
                }),
                response.Order.forEach((pData) => {
                    $("#order_sec").append(product3(pData))
                })
        },
        error: (err) => {
            console.log(err)
        }
    })
    // loadProductData()

}

var loadProductData = () => {
    $.ajax({
        url: '/product',
        method: 'GET',
        dataType: 'JSON',
        data: {},
        success: (response) => {
            console.log(response)
            // var product1 = Handlebars.compile(document.querySelector("#pp_div3").innerHTML)
            // var product2 = Handlebars.compile(document.querySelector(".product_content").innerHTML)

            // response.Pizza.forEach((pData) => {
            //     $("#pp_div2").append(product1(pData))
            // }),
            //     response.Pizza.forEach((pData) => {
            //         $("#product_det").append(product2(pData))
            //     })


            $(document).ready(function () {

                let productId = fetchId();

                var product1 = Handlebars.compile(document.querySelector("#pp_div3").innerHTML)
                var product2 = Handlebars.compile(document.querySelector(".product_content").innerHTML)

                // var getData = () => {

                Object.getOwnPropertyNames(response).forEach((val) => {
                    if (productId == val) {
                        response[val].forEach((pData) => {
                            $("#pp_div2").append(product1(pData))
                        }),
                            response[val].forEach((pData) => {
                                $("#product_det").append(product2(pData))
                            })
                    }
                })

                // }
                // getData()

            })

            const fetchId = () => {
                var keyvalues = window.location.search;
                var key = new URLSearchParams(keyvalues);
                var id = key.get('id')
                return id;
            }

        },
        error: (err) => {
            console.log(err)
        }
    })
}

loadSelectedPage('login')