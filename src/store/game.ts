import {RootState} from "@/store/index";
import {ActionTree, GetterTree, MutationTree} from "vuex";
import {GameOption, GamePhase, GameResultState} from "@/models/enums";
import {randomEnumValue} from "@/helper/unity";


const resultMap: Record<GameOption, GameOption[]> = {
    [GameOption.Scissors] : [GameOption.Paper, GameOption.Lizard],
    [GameOption.Paper] : [GameOption.Rock, GameOption.Spock],
    [GameOption.Rock] : [GameOption.Lizard, GameOption.Scissors],
    [GameOption.Lizard] : [GameOption.Spock, GameOption.Paper],
    [GameOption.Spock] : [GameOption.Lizard, GameOption.Rock],
}

export interface GameState {
    score: number;
    phase: GamePhase;
    userSelected: GameOption,
    botSelected: GameOption,
    gameResult: GameResultState,
    loseInRow: number
}

const getters: GetterTree<GameState, RootState> = {
};

const mutations: MutationTree<GameState> = {
    setGamePhase: (state, payload: GamePhase) => {
        state.phase = payload;
    },
    setUserSelected: (state, payload: GameOption) => {
        state.userSelected = payload;
    },
    setBotSelected: (state, payload: GameOption) => {
        state.botSelected = payload;
    },
    setScore: (state, payload: number) => {
        state.score = payload;
    },
    setLoseInRow: (state, payload: number) => {
        state.loseInRow = payload;
    },
    setGameResult: (state, payload: GameResultState) => {
        state.gameResult = payload;
        state.phase = GamePhase.Result
    },
};

const actions: ActionTree<GameState, RootState> = {
    calcGameResult: ({commit, state}, userSelection: GameOption) => {
        commit('setUserSelected', userSelection);
        const botSelection: GameOption = randomEnumValue(GameOption);
        commit('setBotSelected', botSelection);
        let result: GameResultState = GameResultState.Draw;
        if (resultMap[userSelection].includes(botSelection)) {
            result = GameResultState.Win;
            commit('setLoseInRow', 0)
        }
        if (resultMap[botSelection].includes(userSelection)) {
            result = GameResultState.Lose;
            commit('setLoseInRow', state.loseInRow + 1)
        }
        console.log(userSelection);
        console.log(botSelection);
        console.log(result);
        commit('setGameResult', result);
    },
    replayGame: ({commit, state}) => {
        commit('setGamePhase', GamePhase.Selecting)
    }
};

const initialState: GameState = {
    score: 0,
    phase: GamePhase.Selecting,
    userSelected: GameOption.Lizard,
    botSelected: GameOption.Lizard,
    gameResult: GameResultState.Draw,
    loseInRow: 0
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    mutations,
    actions
};
