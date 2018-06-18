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

