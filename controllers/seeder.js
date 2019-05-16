"use-strict" 
const axios = require("Axios")
const keys = require("../config/keys.js")


var seeder = function(){
  axios.get(`https://openapi.etsy.com/v2/listings/active?api_key=${keys.etsy}`)
  .then(response => {
    var results = response.data.results

    console.log("We got a response!!!")
    console.log("|- _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ -|")
    console.log("|- _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ -|")
    console.log(results.slice(0,4))
    console.log("|- _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ -|")
    console.log("|- _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ -|")

    var storeName = results.user_id // 62421954  num probably have to make query for store name
    var storeNameTwo = results.shop_section_id //idk
    var title = results.title
    var description = results.description;
    var url = results.url
    var price = results.price
    var quantity = results.quantity
    var buyoptions; //= //maybefind random product options from faker not on the api
    var shippingInformation; // randomize this from faker
    var returnsAccepted// switch back and forth between no and yes randomly. 

    
  })
  .catch(err => {
    console.log("We got an error or something")
    console.log(err)
    console.log("|- !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! -|")

  })
}


  // seeder();




  var sampleListing = { listing_id: 499376992,
    state: 'active',
    user_id: 62421954,
    category_id: 69150433,
    title:
     'Cross Stitch Pattern - Alphabet - Cross Stitch  Monogram  - Wedding Cross Stitch - Embroidery- PDF - INSTANT DOWNLOAD',
    description:
     'Cross Stitch Pattern - Alphabet - Cross Stitch  Monogram .\n\nThis is a digital Cross stitch pattern that you can instantly download from Etsy after purchase.\n\nTemplates include a full alphabet - 26 pages.\n\nPATTERN SPECIFICATIONS:\nletter height - 5.79 inches (14,7 cm) on 14-count Aida.\n\nDigital PDF format , not a finished product.\n\nCross Stitch patterns are for personal use only. The patterns may not be re-sold or re-distributed commercially in any manner.\n\nTry and you will succeed!',
    creation_tsz: 1558031309,
    ending_tsz: 1568658509,
    original_creation_tsz: 1487346203,
    last_modified_tsz: 1558031309,
    price: '7.00',
    currency_code: 'USD',
    quantity: 75,
    sku: [],
    tags:
     [ 'Cross Stitch Wedding',
       'Scheme Cross Stitch',
       'Cross Stitch pattern',
       'Wedding Cross Stitch',
       'Motif Cross Stitch',
       'Monogram',
       'Cross Stitch quote',
       'Embroidery',
       'letter Cross Stitch',
       'Cross Stitch letter',
       'Cross Stitch',
       'Birthday gift',
       'Gift for couple' ],
    category_path: [ 'Supplies' ],
    category_path_ids: [ 69150433 ],
    materials: [ 'Digital PDF format' ],
    shop_section_id: 17036603,
    featured_rank: null,
    state_tsz: 1512417020,
    url:
     'https://www.etsy.com/listing/499376992/cross-stitch-pattern-alphabet-cross?utm_source=learningtocodewithre&utm_medium=api&utm_campaign=api',
    views: 800,
    num_favorers: 95,
    shipping_template_id: null,
    processing_min: null,
    processing_max: null,
    who_made: 'i_did',
    is_supply: 'false',
    when_made: '2010_2019',
    item_weight: null,
    item_weight_unit: 'oz',
    item_length: null,
    item_width: null,
    item_height: null,
    item_dimensions_unit: 'in',
    is_private: false,
    recipient: null,
    occasion: null,
    style: null,
    non_taxable: false,
    is_customizable: false,
    is_digital: true,
    file_data: '1 PDF',
    should_auto_renew: false,
    language: 'en-US',
    has_variations: false,
    taxonomy_id: 6343,
    taxonomy_path:
     [ 'Craft Supplies & Tools',
       'Patterns & How To',
       'Patterns & Blueprints' ],
    used_manufacturer: false } 
