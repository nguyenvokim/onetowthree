import {RootState} from "@/store/index";
import {ActionTree, GetterTree, MutationTree} from "vuex";


export interface GameState {
    score: number;
}

const getters: GetterTree<GameState, RootState> = {
};

const mutations: MutationTree<GameState> = {
};

const actions: ActionTree<GameState, RootState> = {

};

const initialState: GameState = {
    score: 0,
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    mutations,
    actions
};
