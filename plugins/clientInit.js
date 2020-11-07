export default async (ctx) => {
  await ctx.store.dispatch('clientInit', ctx);
};
