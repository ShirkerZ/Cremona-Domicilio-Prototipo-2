export const state = () => ({
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

    //  Filter stores by category
    getStoreByCategory: state => payload => {
        return state.stores.filter(store => store.categories.find(el => el.slug === payload))
    },

    //  Filter stores by municipality
    getStoreByMunicipality: state => payload => {
        if (payload === "all-zones") {
            return state.stores
        }
        console.log("Payload", payload)
        let municipalitySlug = payload || state.selectedMunicipality.slug
        //  Select available stores (ONLY TEMPORARY)
        // const storesArray = state.stores.slice(0, 6)
        let result = state.stores.filter(store => (store.delivery_zones[state.deliveryZone || 0].municipalities.filter(el => el.slug == municipalitySlug)).length > 0)
        return result
    },

    //  Filter stores by 2 municipalities
    getStoreByMoreMunicipality: (state, getters) => (municipality) => {
        if (state.selectedMunicipality.slug === "all-zones") {
            return getters.getStoreByMunicipality(municipality)
        }
        let getter1 = getters.getStoreByMunicipality(municipality)
        let result = getter1.filter(store => (store.delivery_zones[state.deliveryZone || 0].municipalities.filter(el => el.slug == state.selectedMunicipality.slug)).length > 0)
        return result
    },

    //  Filter stores by category and municipality
    getStoreByCategoryAndMunicipality: (state, getters) => (municipality, category) => {
        if (municipality === "all-zones") {
            return state.stores.filter(store => store.categories.find(el => el.slug === category))
        }
        let municipalitySlug = municipality || state.selectedMunicipality.slug
        let storesMunicipality = getters.getStoreByMunicipality(municipalitySlug)
        let result = storesMunicipality.filter(store => store.category.find(el => el.slug === category))
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
    }
}



