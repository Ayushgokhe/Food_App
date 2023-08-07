var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var productData = {
        "Fride_Rice": [
            {
                "img": "../img/product1.avif",
                "name": "Fride Rice",
                "Price": " 200",
                "Rating": "4.0 ★",
                "Location": "Roast Cafe & Restaurant, Nagpur - 445001",
                "img1" : "../img/rice1.avif",
                "name1" : "Spicy Fride Rice"
            },
            {
                "img1":"../img/rice2.avif",
                "name1":"Bouffage"
            },
            {
                "img1":"../img/rice3.avif",
                "name1":"Laziz Affair"
            },
            {
                "img1":"../img/rice4.avif",
                "name1":"Mr. Chow's"
            },
            {
                "img1":"../img/rice5.avif",
                "name1":"Chicken Rice"
            },
            {
                "img1":"../img/rice6.avif",
                "name1":"Median Grilled"
            }
        ],
        "Biryani": [
            {
                "img": "../img/product2.avif",
                "name": "Best In Biryani",
                "Price": " 250",
                "Rating": "4.0 ★",
                "Location": "Biryani N Kebabs Hut, Nagpur - 440081",
                "img1" : "../img/biryani1.avif",
                "name1": "Biryani Adda"
            },
            {
                "img1":"../img/biryani2.avif",
                "name1":"Arabian Tandoor"
            },
            {
                "img1":"../img/biryani3.avif",
                "name1":"Hunger Town"
            },
            {
                "img1":"../img/biryani4.avif",
                "name1":"Desi Grill"
            },
            {
                "img1":"../img/biryani5.avif",
                "name1":"Zilha Biryani"
            },
            {
                "img1":"../img/biryani6.avif",
                "name1":"The Daawat Mahal"
            }
        ],
        "Pizza": [
            {
                "img": "../img/product3.avif",
                "name": "Veg Cheese Pizza",
                "Price": " 350",
                "Rating": "4.3 ★",
                "Location": "La Pino's Pizza Manish-Nagar, Nagpur - 440008",
                "img1":"../img/pizza1.avif",
                "name1":"Pizzzenia"
            },
            {
                "img1":"../img/pizza2.avif",
                "name1":"Grill Inn"
            },
            {
                "img1":"../img/pizza3.avif",
                "name1":"La Pino'z Pizza"
            },
            {
                "img1":"../img/pizza4.avif",
                "name1":"Pizza Hut"
            },
            {
                "img1":"../img/pizza5.avif",
                "name1":"Ovenstory Pizza"
            },
            {
                "img1":"../img/pizza6.avif",
                "name1":"Domino's Pizza"
            }
        ],
        "Burger": [
            {
                "img": "../img/product4.avif",
                "name": "Shabana's Burger",
                "Price": " 150",
                "Rating": "4.1 ★",
                "Location": "Shabana bakery Sadar, Nagpur - 443001",
                "img1" : "../img/burg1.avif",
                "name1": "McDonald's"
            },
            {
                "img1":"../img/burg2.avif",
                "name1":"Burger King"
            },
            {
                "img1":"../img/burg3.avif",
                "name1":"KFC"
            },
            {
                "img1":"../img/burg4.avif",
                "name1":"Grill Inn"
            },
            {
                "img1":"../img/burg5.avif",
                "name1":"Burger Bar"
            },
            {
                "img1":"../img/burg6.avif",
                "name1":"Cafe Panda"
            }
        ],
        "Chicken": [
            {
                "img": "../img/product5.webp",
                "name": "Spicy Chicken",
                "Price": " 450",
                "Rating": "4.1 ★",
                "Location": "Checkers Restaurant VCA, Nagpur - 441100",
                "img1":"../img/chicken1.avif",
                "name1":"Checkers"
            },
            {
                "img1":"../img/chicken2.avif",
                "name1":"Taco Bell"
            },
            {
                "img1":"../img/chicken3.avif",
                "name1":"Median Grilled"
            },
            {
                "img1":"../img/chicken4.avif",
                "name1":"Arabian Tandoor"
            },
            {
                "img1":"../img/chicken5.avif",
                "name1":"Bouffage"
            },
            {
                "img1":"../img/chicken6.avif",
                "name1":"Butter Chicken"
            }
        ],
        "Thali": [
            {
                "img": "../img/product6.avif",
                "name": "Special Thali",
                "Price": " 380",
                "Rating": "4.4 ★",
                "Location": "33 Mount Rd, Sadar bazar, Nagpur - 440001",
                "img1":"../img/thali1.avif",
                "name1":"Thali Express"
            },
            {
                "img1":"../img/thali2.avif",
                "name1":"Taste Of Thali"
            },
            {
                "img1":"../img/thali3.avif",
                "name1":"Tattwam"
            },
            {
                "img1":"../img/thali4.avif",
                "name1":"Thali Wala"
            },
            {
                "img1":"../img/thali5.avif",
                "name1":"99 Thali"
            },
            {
                "img1":"../img/thali6.avif",
                "name1":"Al-Zam Zam"
            }
        ],
        "Sandwich": [
            {
                "img": "../img/product7.avif",
                "name": "The Kuku's Sandwich",
                "Price": " 190",
                "Rating": "4.3 ★",
                "Location": "Mate SQ Shop No.5 Ambazari Rd, Nagpur - 443300",
                "img1" : "../img/sand1.avif",
                "name1":"Crostino"
            },
            {
                "img1":"../img/sand2.avif",
                "name1":"Tauby's"
            },
            {
                "img1":"../img/sand3.avif",
                "name1":"Melting World"
            },
            {
                "img1":"../img/sand4.avif",
                "name1":"Sandwich Centre"
            },
            {
                "img1":"../img/sand5.avif",
                "name1":"Cheese Sandwich"
            },
            {
                "img1":"../img/sand6.avif",
                "name1":"Cafe Panda"
            }
        ],
        "Rolls": [
            {
                "img": "../img/product8.avif",
                "name": "Calcutta Rolls",
                "Price": " 120",
                "Rating": "4.2 ★",
                "Location": "Ground Bhawan Shop N0.216 Ambazari Rd, Nagpur - 440022",
                "img1":"../img/roll1.avif",
                "name1":"Rolls Hub"
            },
            {
                "img1":"../img/roll2.avif",
                "name1":"Taco Bell"
            },
            {
                "img1":"../img/roll3.avif",
                "name1":"Three Beans"
            },
            {
                "img1":"../img/roll4.avif",
                "name1":"Rolls Mania"
            },
            {
                "img1":"../img/roll5.avif",
                "name1":"Subway"
            },
            {
                "img1":"../img/roll6.avif",
                "name1":"KFC"
            }
        ],
        "Paneer": [
            {
                "img": "../img/product9.avif",
                "name": "Authentic Punjabi Food",
                "Price": " 450",
                "Rating": "4.1 ★",
                "Location": "Pushpkunj Complex, 20 Central Bazar Road, Nagpur - 440010",
                "img1":"../img/pan1.avif",
                "name1":"Swad"
            },
            {
                "img1":"../img/pan2.avif",
                "name1":"Mumkins Xpress"
            },
            {
                "img1":"../img/pan3.avif",
                "name1":"Behrouz"
            },
            {
                "img1":"../img/pan4.avif",
                "name1":"Singh's"
            },
            {
                "img1":"../img/pan5.avif",
                "name1":"Step Inn"
            },
            {
                "img1":"../img/pan6.avif",
                "name1":"Desi Grill"
            }
            
        ],
        "Noodles": [
            {
                "img": "../img/product10.avif",
                "name": "Hot Spot Chinese Shop",
                "Price": " 130",
                "Rating": "4.3 ★",
                "Location": "IT Park Ambazari, Nagpur - 440022",
                "img1":"../img/noodles1.avif",
                "name1":"Step Inn"
            },
            {
                "img1":"../img/noodles2.avif",
                "name1":"Spicy Noodles"
            },
            {
                "img1":"../img/noodles3.avif",
                "name1":"Chaomin"
            },
            {
                "img1":"../img/noodles4.avif",
                "name1":"Checkers"
            },
            {
                "img1":"../img/noodles5.avif",
                "name1":"Happy Foods"
            },
            {
                "img1":"../img/noodles6.avif",
                "name1":"Median Grilled"
            }
        ],
        "Momos": [
            {
                "img": "../img/product11.avif",
                "name": "The Momos's Hut",
                "Price": " 170",
                "Rating": "4.0 ★",
                "Location": "Pn 20 Cng-2 Apartment, near Mata mandir Rd, Nagpur - 440021",
                "img1":"../img/momos1.avif",
                "name1":"Yummi Momos"
            },
            {
                "img1":"../img/momos2.avif",
                "name1":"The Momo's Hut"
            },
            {
                "img1":"../img/momos3.avif",
                "name1":"Dahiya Momos"
            },
            {
                "img1":"../img/momos4.avif",
                "name1":"Firangi Momos"
            },
            {
                "img1":"../img/momos5.avif",
                "name1":"Miki Momo"
            },
            {
                "img1":"../img/momos6.avif",
                "name1":"The Momo’s Bar"
            }
        ],
        "Cake": [
            {
                "img": "../img/product12.avif",
                "name": "Bombay Bakery Cake",
                "Price": " 550",
                "Rating": "4.2 ★",
                "Location": "near Badi Durga Mata Mandir chhaoni, Nagpur - 440032",
                "img1":"../img/cake1.avif",
                "name1":"Gunchiiis"
            },
            {
                "img1":"../img/cake2.avif",
                "name1":"Tauby's"
            },
            {
                "img1":"../img/cake3.avif",
                "name1":"Cake's Inn"
            },
            {
                "img1":"../img/cake4.avif",
                "name1":"Dream Desserts"
            },
            {
                "img1":"../img/cake5.avif",
                "name1":"Cake Honey Buzz"
            },
            {
                "img1":"../img/cake6.avif",
                "name1":"Cake'O Lock"
            }
        ]
    };

    res.send(JSON.stringify(productData))
    
});

module.exports = router;