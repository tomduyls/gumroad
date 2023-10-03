export const state = () => ({
  list: {
    url: 'gumroad',
    method: 'get',
  },
})

export const actions = {
  list(context, params) {
    return this.$axios({
      ...context.state.list,
      params,
    })
  },
}
