import Vue from 'vue';
import Vuex from 'vuex';
import {GameState} from "@/store/game";
import game from "@/store/game";

Vue.use(Vuex);

export interface RootState {
    game: GameState;
}

export default new Vuex.Store({
    modules: {
        game
    },
});
