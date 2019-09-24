import Vue from 'vue'
import { concat, get, values } from 'lodash'
import { getSheetWithoutRedis } from '../../../api'

export default {
  namespaced: true,
  state () {
    return {
      googleSheet: {
        statistics: [],
        typeNetizen: [],
        transcript: [],
        verifyNetizen: [],
        verifiedDataItems: [],
        verifiedDataCount: [],
        volunteer: []
      },
      dataListLoading: false,
      page: 1
    }
  },
  actions: {
    async FETCH_GOOGLE_SHEET ({ state, commit }, { name, params, isLoadMore = false }) {
      try {
        const res = await getSheetWithoutRedis({ params })
        const data = get(res, 'body')
        if (isLoadMore) {
          const orig = values(get(state, `googleSheet.${name}`) || [])
          const concatedData = concat(orig, data)
          commit('SET_GOOGLE_SHEET', { name, data: concatedData })
          return concatedData
        } else {
          commit('SET_GOOGLE_SHEET', { name, data })
          return data
        }
      } catch (error) {
        return error
      }
    }
  },
  mutations: {
    SET_GOOGLE_SHEET: (state, { name, data }) => {
      Vue.set(state.googleSheet, name, data)
    },
    SET_LOADING_STATUS: (state, { status }) => Vue.set(state, 'dataListLoading', status),
    SET_PAGE: (state, value) => Vue.set(state, 'page', value)
  },
  getters: {
    statisticsFormated: state => state.googleSheet.statistics.map(data => ({
      candidate: data[0],
      amount: {
        wrong: data[1],
        real: data[3],
        controversial: data[5],
        verifiable: data[9],
        verified: data[7],
        unverification: data[11],
        normal: data[13],
        frequency: data[16],
        total: data[15]
      },
      percentage: {
        wrong: Number.isNaN(Number(data[2])) ? 0 : Number(data[2]),
        real: Number.isNaN(Number(data[4])) ? 0 : Number(data[4]),
        controversial: Number.isNaN(Number(data[6])) ? 0 : Number(data[6]),
      }
    })).sort((a, b) => b.amount.wrong - a.amount.wrong),
    verifiedDataFormated: state => state.googleSheet.verifiedDataItems
      .filter(data => data[0] && data[0] !== '#N/A')
      .map(data => {
        const references = data[5].split('、').map(item => {
          const splited = item.split(' ')
          const name = splited[0]
          let url
          if (splited.length > 1) {
            url = splited[1]
          } else if (splited[0].match(/^https?:\/\//)) {
            url = splited[0]
          }
          return {
            name,
            url
          }
        })
        return {
          candidate: data[0],
          sentences: data[1],
          result: data[2],
          tags: data[3],
          description: data[4].replace(/\n/g, '<br>'),
          reference: data[5],
          references,
          date: data[6],
          media: data[7],
          typescript: data[8]
        }
      }),
    verifiedDataCountFormated: state => {
      const count = get(state, 'googleSheet.verifiedDataCount.0.0') || 0
      return Number(count)
    }
  }
}