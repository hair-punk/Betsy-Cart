const db = require("./db.js")
const seeds = require("./seeder.js")

db.dropCollection()

db.create(seeds, (err, seeds) => {
  if (err){
    console.log('err')
  } else {
  console.log("Seeded the database - - - - - - - - !!");
  }
})

return

// db.clear((err, data)=> {
//   if(err){
//     console.log(err)
//     console.log("ERROR")
//   } else {
//     console.log("Cleared the DB")
//   }
// })