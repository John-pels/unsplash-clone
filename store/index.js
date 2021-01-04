import { RANDOM, SEARCH } from '../services/api'
import {
  TOGGLE_MODAL,
  GET_RANDOM,
  GET_SEARCH_RESULTS,
  IS_LOADING,
} from './types'
export const state = () => ({
  toggleModal: false,
  isLoading: false,
  random: [],
  search: [],
})

export const mutations = {
  [TOGGLE_MODAL](state, value) {
    state.toggleModal = value
  },
  [GET_RANDOM](state, payload) {
    state.random = payload
  },
  [GET_SEARCH_RESULTS](state, payload) {
    state.search = payload
  },
  [IS_LOADING](state, bol) {
    state.isLoading = bol
  },
}

export const actions = {
  toggleModalAction({ commit }, bol) {
    commit(TOGGLE_MODAL, bol)
  },
  async getRandomPhotos({ commit }) {
    try {
      commit(IS_LOADING, true)
      const response = await this.$axios.$get(RANDOM)
      commit(GET_RANDOM, response)
      console.log(response)
    } catch (error) {
      commit(IS_LOADING, false)
      throw new Error(error)
    }
  },

  async searchByQuery({ commit }, query) {
    try {
      commit(IS_LOADING, true)
      const response = await this.$axios.post(SEARCH(query))
      commit(GET_SEARCH_RESULTS, response)
      console.log(response)
    } catch (error) {
      commit(IS_LOADING, false)
      throw new Error(error)
    }
  },
}
