import { TOGGLE_MODAL } from './types'

export const state = () => ({
  toggleModal: false,
  fetching: false,
})

export const mutations = {
  [TOGGLE_MODAL](state, value) {
    state.toggleModal = value
  },
}

export const actions = {
  toggleModalAction({ commit }, bol) {
    commit(TOGGLE_MODAL, bol)
  },
}
