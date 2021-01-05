import { RANDOM, SEARCH } from '../services/api'
import {
  TOGGLE_MODAL,
  GET_RANDOM,
  GET_SEARCH_RESULTS,
  IS_LOADING,
  PHOTO_INFO,
} from './types'
export const state = () => ({
  toggleModal: false,
  isLoading: false,
  random: [],
  search: [],
  photoInfo: {},
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
  [PHOTO_INFO](state, payload) {
    state.photoInfo = payload
  },
}

export const actions = {
  toggleModalAction({ commit }, bol) {
    commit(TOGGLE_MODAL, bol)
  },
  grabPhotoInfo({ commit }, payload) {
    commit(PHOTO_INFO, payload)
  },
  async getRandomPhotos({ commit }) {
    try {
      commit(IS_LOADING, true)
      const response = await this.$axios.$get(RANDOM)
      commit(GET_RANDOM, response)
    } catch (error) {
      commit(IS_LOADING, false)
      throw new Error(error)
    } finally {
      commit(IS_LOADING, false)
    }
  },

  async searchByQuery({ commit }, query) {
    try {
      commit(IS_LOADING, true)
      const response = await this.$axios.get(SEARCH(query))
      const returnedData = await response.data.results
      commit(GET_SEARCH_RESULTS, returnedData)
    } catch (error) {
      commit(IS_LOADING, false)
      throw new Error(error)
    } finally {
      commit(IS_LOADING, false)
    }
  },
}
