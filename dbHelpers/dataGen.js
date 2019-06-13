const faker = require("faker")

function createItem(id) {//creates and returns a single item
  var item = {
    id: id,
    title: '',
    company: '',
    colors: [],
    price: '',
    shippingPrice: '',
    description: '',
    stars: '',
    numStars: '',
    quantity: '',
    location: '',
    deliveryMin: '',
    deliveryMax: '',
    url: '',
    peopleWantThis: ''
  };
  var jeweleryTypes = ['Earrings', 'Brooch', 'Tiara', 'Tie-Clip', 'Cufflink', 'Circlet', "Hairpin", "Buckle", "Ring", "Necklace", "Bracelet", "Lipring", "Anklet", 'Nose Ring', 'Nose Stud'];
  item.title = faker.commerce.productAdjective() + ' ' + jeweleryTypes[Math.floor(Math.random() * jeweleryTypes.length)] + '|';
  for (let x = 0; x < Math.floor(Math.random() * 8); x++) {
    item.title += ' ' + faker.commerce.productAdjective();
  }
  item.company = faker.company.companyName() + ' ' + faker.company.companySuffix();
  item.price = faker.commerce.price();
  for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
    var color = faker.commerce.color();
    var split = color.split('');
    var letter = split[0].toUpperCase();
    color = letter + split.slice(1, split.length).join('');
    item.colors.push(color)
  }

  item.stars = 0.5 + Math.floor(Math.random() * 10) / 2;
  item.numStars = (Math.floor(item.stars * Math.random() * 100));
  var description = [
    faker.lorem.sentence(item.stars + Math.floor(Math.random() * 7) + Math.floor(Math.random() * 3) + 1),
    faker.lorem.sentence(Math.floor(Math.random() * 7) + 4),
    faker.lorem.paragraph(Math.floor(Math.random() * 3) + 1),
    faker.lorem.sentence(Math.floor(Math.random() * 3) * 4 + 4),
    faker.lorem.sentence(Math.floor(Math.random() * 3) * 8 + 5),
    faker.lorem.paragraph(Math.floor(Math.random() * 7) + 1),
  ];

  for (let i = 0; i <= 1 + Math.floor(Math.random() * 10); i++) {
    description.push(faker.lorem.sentence(Math.floor(Math.random() * 3) * 8 + i * 2));
    description.push(faker.lorem.paragraph(Math.floor(Math.random() * 3) * 2 + 1));
  }
  item.description = description;
  item.quantity = Math.floor(Math.random() * 100);
  item.deliveryMin = Math.ceil(Math.random() * 5);
  item.deliveryMax = item.deliveryMin + Math.ceil(Math.random() * 3);
  item.url = faker.internet.url();
  item.shippingPrice = faker.finance.amount(2, 15)
  item.location = `${faker.address.city()}, ${faker.address.state()}`;
  item.peopleWantThis = (Math.ceil(Math.random() * 7) > 3 ? Math.ceil(Math.random() * 4) : null)
  return item;
}
// console.log(createItem())
// var date = new Date();
// console.log(date.toLocaleTimeString('en-US'))
// console.time('create');
// for (var x = 0; x < 1000000; x++) {

//   createItem(x)

// }
// console.timeEnd('create')
module.exports = createItem

