const department = {
  async createDepartment(parent, args, ctx, info) {
    const { name } = args;
    return ctx.db.mutation.createDepartment({
      data: {
        name
      }
    }, info)
  }
};

module.exports = { department };