const { Query } = require('./Query');
const { Subscription } = require('./Subscription');
const { auth } = require('./Mutation/auth');
const { post } = require('./Mutation/post');
const { department } = require('./Mutation/department');
const { order } = require('./Mutation/order');
const { AuthPayload } = require('./AuthPayload');

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...post,
    ...department,
    ...order
  },
  Subscription,
  AuthPayload,
}
