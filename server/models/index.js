var connection = require('../../database/index.js')
var Sequelize = require('sequelize')


var Activity = connection.define('activity', {
  mathFunc: {
    type: Sequelize.STRING,
  },
  query: {
    type: Sequelize.STRING
  },
  result: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true //otherwise sequelize changes the column name to plural itself
})
var User = connection.define('user', {
  username: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName:true
})
Activity.belongsTo(User);
User.hasMany(Activity);

// var Feedback = connection.define('feedback', {
//   score: {
//     type: Sequelize.INTEGER
//   },
//   comment: {
//     type: Sequelize.STRING
//   }
// }, {
  // freezeTableName: true
// })

User.sync()
Activity.sync()



// return Activity.create({
//   mathFunc:'basic',
//   query:'2+444',
//   result:'446',
//   user: {
//     username: 'jjjjjj'
//   }
// }, {
//   include: [ User ]
// })


// Activity.create({
//   mathFunc:'wewewew',
//   query:'2+444',
//   result:'446',
//   user: {
//     userId: 11
//   }
// }, {
//   include: [ User ]
// })

//  User.findOrCreate({where:{username:'ab2'}})

//  User.findOrCreate({where: {username:'sdsdsds'}})
//  .spread((user, created) => {
//   // console.log(user.get({plain:true}).username )
//   // var userName = user.get({plain:true}).username
//   // console.log(userName)
// })
//  .then((userName) => Activity.create({
//     mathFunc:'mathFUNCC'
//     query: '1121query',
//     result: '3reeessult',
//     user: {
//       username: userName
//     }

//   }, {
//     include: [ User ]
//   })
// )

// Activity.sync().then(()=>{
//   return Activity.create({
//     function: 'basic',
//     query: '3+4'
//   })
// })

// User.sync().then(()=>{
//   return User.create({
//     username: 'testUser'
//   })
// })


// User.create({
//   username: 'kilo',
//   activity: [
//   {function: 'basic'},
//   {function: 'factorial'}
//   ]
// }, {
//   include: [ Activity ]
// })



// User.sync()
// Activity.sync()


// User.bulkCreate([
//   {username:'userA'},{username:'userB'},{username:'userC'}
// ])

module.exports = {
  User: User,
  Activity: Activity,
  connection: connection
}

// // TEST
// const Product = connection.define('product', {
//   title: Sequelize.STRING
// });

// const Customer = connection.define('customer', {
//   first_name: Sequelize.STRING,
//   last_name: Sequelize.STRING
// });

// Product.belongsTo(Customer)

// Customer.sync()
// Product.sync()

// Product.create({
//   title: 'Chair',
//   customers: {
//     first_name: 'hh',
//     last_name: 'pp'
//   }
// }, {
//   include: [ Customer ]

// })

