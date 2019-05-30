'use-strict';
const faker = require('faker');
const moment = require('Moment');
// const db = require('/dbhelper.js'); //renamed and repurposed this file
// const db = require('/controller.js')

// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
var seedMaker = function() {
	//- - - - - - - - - - - - - - -  - - - - - - - - - - - - -  - - - - - entropy section
	var rando100 = Math.floor(Math.random() * 100);
	var rando7 = Math.ceil(Math.random() * 7);
	var rando3 = Math.floor(Math.random() * 3);
	var randoStars = 0.5 + Math.floor(Math.random() * 10) / 2;
	var even = rando7 % 2 === 0;
	//- - - - - - - - - - - - - - -  - - - - - - - - - - - - -  - - - - - - - Product choices (colors or sizes)
	const colorMaker = () => {
		var color = faker.commerce.color();
		var split = color.split('');
		var letter = split[0].toUpperCase();
		color = letter + split.slice(1, split.length).join('');
		return color;
	};
	var buyOptions = {
		size: ['Select your size', 'xSmall', 'Small', 'Medium', 'Large', 'xLarge'],
		color: ['Select a color'],
	};
	var n = rando7;
	while (n) {
		if (even) {
			var length = buyOptions.color.length;
			var lengthPlus1 = length + 1;

			while (buyOptions.color.length !== lengthPlus1) {
				var color = colorMaker();
				if (buyOptions.color.indexOf(color) === -1) {
					buyOptions.color.push(color);
				}
			} //this while loop creates a random amount of color options between 1-7 when rando is even (so just giving the user either size options or color somewhat randomly but roughly 50% of thetime at scale)
		}
		n--;
	}
	//- - - - - - - - - - - - - - -  - - - - - - - - - - - - -  - - realistic shipping price gen i need to learn regex
	var price = faker.commerce.price(1, 12); // random price
	price = '$' + price.slice(0, 2);
	if (price.indexOf('.') === -1) {
		price = price + '.';
	}
	price = price + `${rando100}`; // adding cents
	if (rando100 < 10) {
		price = price + '0';
	}

	var storeName = faker.company.bsAdjective() + ' ' + faker.random.word(); // you can remove the LLC if you'd like. That would be more accurate. I only added this because the names and pcitures will not allign since everything is gibberish. Etsy storenames do not have any indicator that they are a business other than the fact that they do not describe the product as specifically.
	var splitSN = storeName.split(' ');
	storeName = splitSN
		.map(word => {
			var letter = word[0];
			letter = letter.toUpperCase();
			var newWord = letter + word.slice(1, word.length);
			return newWord;
		})
		.join(' ');
	if (storeName.length < 25) {
		storeName += ', LLC';
	}

	var title = function() {
		// product name. In etsy there are a variety of lenghts of product names. Often longer ones are pretty much filled with adjectivies. This will spit out a relativly random amount of words in general.
		var result =
			faker.commerce.productAdjective() + ' ' + faker.commerce.productAdjective() + faker.commerce.product() + ' | ';

		for (let i = 0; i <= rando7; i++) {
			result += ' ' + faker.commerce.productAdjective();
			if (even && i === 2) {
				result += ' ' + faker.commerce.color();
			}
		}
		return result;
	};

	var description = function() {
		// simmilar to the product title above, this will generate a random amount of description setences / paragraphs within reason. The first half of this is the default always present things, the for loop is where the super random magic happens
		var result = [
			faker.lorem.sentence(randoStars + rando7 + rando3 + 1),
			faker.lorem.sentence(rando7 + 4),
			faker.lorem.paragraph(rando3 + 1),
			faker.lorem.sentence(rando3 * 4 + 4),
			faker.lorem.sentence(rando3 * 8 + 5),
			faker.lorem.paragraph(rando7 + 1),
		];

		for (let i = 0; i <= 1 + rando100 / 10; i++) {
			result.push(faker.lorem.sentence(rando3 * 8 + i * 2));
			if (even && i === 2) {
				result.push(faker.lorem.paragraph(rando3 * 2 + 1));
			}
		}
		return result;
	};
	//- - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - -putting it all together - this is the object that will be elem  in the seeds array that ultiamtly will be fed into the database & then state.
	var output = {
		storeName: storeName,
		title: title(),
		description: description(),
		url: faker.internet.url(),
		price: '$' + faker.finance.amount(2, 300),
		quantity: rando100,
		buyoptions: even ? buyOptions.color : buyOptions.size, // either will give the product a size or a color

		eta: [
			moment()
				.add(rando7 > 3 ? rando7 - 2 : rando7, 'days')
				.format('MMM-D'),
			moment()
				.add(rando7 + 1, 'days')
				.format('MMM-D'),
		], //gives two random dates in the future that are spread between 1-3 days apart and begin within 1-3 days of now. that math might be a little off but thats essentially what this does.
		shipprice: price,
		location: `${faker.address.city()}, ${faker.address.state()}`,

		stars: randoStars,
		numStars: Math.floor(randoStars * rando100),
		peopleWantThis: rando7 > 4 ? `${rando7 * rando3} people have this in their carts right now.` : null, //otherpeople want this thing pops up sometimes in my module so I made it only happen if the rando7 number is higher than 4 and then have a p random amount of folks hungry for the product.
	};
	return output;
};
// | | | | | | | | | | | | | | | | | |- - - - -this is where we make 100 of these records
var seeds = [];
for (let i = 0; i < 100; i++) {
	var seed = seedMaker();
	seed.tjnid = 'tjn-id' + i.toString();
	seeds.push(seed);
}
// console.log(seeds.slice(0,3)) //use this to check jsut 3 records
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |

// console.log(db)

module.exports = seeds;

//
//
//
//
//
//
//
////
//
//
//
//
//
//

// IF YOU WANTED TO DO THIS VIA ETSY API, I'VE Done the some of the ground work for your below....

// const axios = require("Axios")
// const keys = require("../config/keys.js")
// axios.get(`https://openapi.etsy.com/v2/listings/active?api_key=${keys.etsy}`)
// .then(response => {
//   var results = response.data.results

//   console.log("We got a response!!!")
//   console.log("|- _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ -|")
//   console.log("|- _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ -|")
//   console.log(results.slice(0,4))
//   console.log("|- _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ -|")
//   console.log("|- _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ - _ -|")

//   var storeName = results.user_id // 62421954  num probably have to make query for store name
//   var storeNameTwo = results.shop_section_id //idk
//   var title = results.title
//   var description = results.description;
//   var url = results.url
//   var price = results.price
//   var quantity = results.quantity
//   var buyoptions; //= //maybefind random product options from faker not on the api
//   var shippingInformation; // randomize this from faker
//   var returnsAccepted// switch back and forth between no and yes randomly.

// })
// .catch(err => {
//   console.log("We got an error or something")
//   console.log(err)
//   console.log("|- !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! - !!!! -|")

// })

//etsy api output below, and etsy api call above

// var sampleListing = { listing_id: 499376992,
//   state: 'active',
//   user_id: 62421954,
//   category_id: 69150433,
//   title:
//    'Cross Stitch Pattern - Alphabet - Cross Stitch  Monogram  - Wedding Cross Stitch - Embroidery- PDF - INSTANT DOWNLOAD',
//   description:
//    'Cross Stitch Pattern - Alphabet - Cross Stitch  Monogram .\n\nThis is a digital Cross stitch pattern that you can instantly download from Etsy after purchase.\n\nTemplates include a full alphabet - 26 pages.\n\nPATTERN SPECIFICATIONS:\nletter height - 5.79 inches (14,7 cm) on 14-count Aida.\n\nDigital PDF format , not a finished product.\n\nCross Stitch patterns are for personal use only. The patterns may not be re-sold or re-distributed commercially in any manner.\n\nTry and you will succeed!',
//   creation_tsz: 1558031309,
//   ending_tsz: 1568658509,
//   original_creation_tsz: 1487346203,
//   last_modified_tsz: 1558031309,
//   price: '7.00',
//   currency_code: 'USD',
//   quantity: 75,
//   sku: [],
//   tags:
//    [ 'Cross Stitch Wedding',
//      'Scheme Cross Stitch',
//      'Cross Stitch pattern',
//      'Wedding Cross Stitch',
//      'Motif Cross Stitch',
//      'Monogram',
//      'Cross Stitch quote',
//      'Embroidery',
//      'letter Cross Stitch',
//      'Cross Stitch letter',
//      'Cross Stitch',
//      'Birthday gift',
//      'Gift for couple' ],
//   category_path: [ 'Supplies' ],
//   category_path_ids: [ 69150433 ],
//   materials: [ 'Digital PDF format' ],
//   shop_section_id: 17036603,
//   featured_rank: null,
//   state_tsz: 1512417020,
//   url:
//    'https://www.etsy.com/listing/499376992/cross-stitch-pattern-alphabet-cross?utm_source=learningtocodewithre&utm_medium=api&utm_campaign=api',
//   views: 800,
//   num_favorers: 95,
//   shipping_template_id: null,
//   processing_min: null,
//   processing_max: null,
//   who_made: 'i_did',
//   is_supply: 'false',
//   when_made: '2010_2019',
//   item_weight: null,
//   item_weight_unit: 'oz',
//   item_length: null,
//   item_width: null,
//   item_height: null,
//   item_dimensions_unit: 'in',
//   is_private: false,
//   recipient: null,
//   occasion: null,
//   style: null,
//   non_taxable: false,
//   is_customizable: false,
//   is_digital: true,
//   file_data: '1 PDF',
//   should_auto_renew: false,
//   language: 'en-US',
//   has_variations: false,
//   taxonomy_id: 6343,
//   taxonomy_path:
//    [ 'Craft Supplies & Tools',
//      'Patterns & How To',
//      'Patterns & Blueprints' ],
//   used_manufacturer: false }
