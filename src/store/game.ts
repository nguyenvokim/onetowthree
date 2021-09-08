import {RootState} from "@/store/index";
import {ActionTree, GetterTree, MutationTree} from "vuex";
import {GamePhase} from "@/models/enums";


export interface GameState {
    score: number;
    phase: GamePhase;
}

const getters: GetterTree<GameState, RootState> = {
};

const mutations: MutationTree<GameState> = {
    setGamePhase: (state, payload: GamePhase) => {
        state.phase = payload;
    },
};

const actions: ActionTree<GameState, RootState> = {

};

const initialState: GameState = {
    score: 0,
    phase: GamePhase.Selecting
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    mutations,
    actions
};
