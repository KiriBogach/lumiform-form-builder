import Vue from "vue";
import Vuex from "vuex";
import {v4 as uuidv4} from 'uuid';

// TODO: Form Module
// import form from './form/Form';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        form: {
            uuid: uuidv4(),
            type: 'form',
            items: [],
        },
    },
    mutations: {
        SET_FORM(state, payload) {
            state.form = payload;
        },

        RESET_FORM(state,) {
            state.form = {
                uuid: uuidv4(),
                type: 'form',
                items: [],
            }
        },

        ADD_PAGE(state: any, previousPageUUID) {
            const newPage = {
                "uuid": uuidv4(),
                "type": "page",
                "title": "new page",
                "items": []
            };
            if (previousPageUUID) {
                const index = state.form.items.findIndex((p: any) => p.uuid === previousPageUUID);
                state.form.items.splice(index, 0, newPage);
            } else {
                state.form.items.push(newPage)
            }
        },

        ADD_QUESTION(state: any, data) {
            const newQuestion = {
                uuid: uuidv4(),
                type: "question",
                title: data.title,
                'response_type': 'text',
            };
            if (data.uuid) {
                const index = data.items.findIndex((p: any) => p.uuid === data.uuid);
                data.items.splice(index, 0, newQuestion);
            } else {
                data.items.push(newQuestion);
            }
        },

        ADD_SECTION(state: any, data) {
            const newSection = {
                uuid: uuidv4(),
                type: "section",
                title: data.title,
                items: []
            };
            if (data.uuid) {
                const index = data.items.findIndex((p: any) => p.uuid === data.uuid);
                data.items.splice(index, 0, newSection);
            } else {
                data.items.push(newSection);
            }
        },

        UPDATE_PAGE_TITLE(state: any, payload) {
            state.form.items.find((p: any) => p.uuid === payload.uuid).title = payload.value;
        },

    },
    actions: {
        setForm({commit}, payload) {
            commit('SET_FORM', payload);
        },
        resetForm({commit}) {
            commit('RESET_FORM');
        },
        addPage({commit}, previousPageUUID) {
            commit('ADD_PAGE', previousPageUUID);
        },
        addQuestion({commit}, data) {
            commit('ADD_QUESTION', data);
        },
        addSection({commit}, data) {
            commit('ADD_SECTION', data);
        },
        updatePageTitle({commit}, payload) {
            commit('UPDATE_PAGE_TITLE', payload);
        },
    },
    modules: {}
});
