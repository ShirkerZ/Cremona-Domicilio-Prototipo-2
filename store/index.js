export const state = () => ({
    showSearchBar: false,
    selectedMunicipality: null,
    deliveryZone: null,

    stores: [],

    zones: [],

    categories: [],
})

export const getters = {

    //  Get selected store (payload: based on url)
    getStoreData: (state) => (payload) => {
        let store = state.stores.find(store => store.slug === payload)
        return store
    },

    getCategory: state => payload => {
        let result = state.categories.find(el => el.slug === payload)
        return result
    },

    getMunicipality: state => payload => {
        let result = state.zones.find(el => el.slug === payload)
        return result
    },
}

export const mutations = {

    //  Change selected municipality
    changeMunicipality(state) {
        if ($nuxt.context.query.municipality) {
            if (state.zones.length) {
                state.selectedMunicipality = state.zones.find(comune => comune.slug === $nuxt.context.query.municipality)
                localStorage.setItem("municipality", state.selectedMunicipality.slug)
            } else {
                setTimeout(() => {
                    state.selectedMunicipality = state.zones.find(comune => comune.slug === $nuxt.context.query.municipality)
                    localStorage.setItem("municipality", state.selectedMunicipality.slug)
                }, 1000)
            }
        }
    },

    overwriteSelectedMunicipality(state, payload) {
        if (state.zones.length) {
            state.selectedMunicipality = state.zones.find(zone => zone.slug === payload)
        } else {
            setTimeout(() => {
                state.selectedMunicipality = state.zones.find(zone => zone.slug === payload)
            }, 1000)
        }
    },

    sortMunicipality(state) {
        state.zones = state.zones.sort((a, b) => b.name < a.name ? 1 : -1)
    },

    updateStores(state, payload) {
        state.stores = payload
    },

    updateZones(state, payload) {
        state.zones = payload
    },

    updateCategories(state, payload) {
        state.categories = payload
    },

    toggleSearchBar(state, payload) {
        state.showSearchBar = payload
    },
}



