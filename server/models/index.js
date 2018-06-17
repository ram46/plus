var connection = require('../../database/index.js')
var Sequelize = require('sequelize')


var Activity = connection.define('activity', {
  function: {
    type: Sequelize.STRING,
  },
  query: {
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

// Activity.create({
//   function: 'basic',
//   user: {
//     username: 'kilo'
//   }
// }, {include: [{
//   association: Activity.User,
//   include: [ User.username ]
//   }]
// })

// User.sync()
// Activity.sync()


// User.bulkCreate([
//   {username:'userA'},{username:'userB'},{username:'userC'}
// ])

module.exports = {
  User: User,
  Activity: Activity
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

