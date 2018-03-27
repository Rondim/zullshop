const { getUserId } = require('../../utils');

const order = {
  async createOrder(parent, args, ctx, info) {
    const {
      memberCard,
      name,
      surname,
      patronymic,
      check,
      coupons
    } = args;

    const userId = getUserId(ctx);
    const departments = await ctx.db.query.departments({
      where: {
        users_some: {
          id: userId
        }
      }
    }, info);

    return ctx.db.mutation.createOrder({
      data: {
        memberCard,
        name,
        surname,
        patronymic,
        check,
        coupons: {
          create: coupons
        },
        department: {
          connect: {
            id: departments[0]['id']
          }
        }
      }
    }, info)
  }
};

module.exports = {
  order
};