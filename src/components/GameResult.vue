<template>
    <div class="game_result_box">
        <div class="user_result result_box">
            <div class="title">YOU PICKED</div>
            <div class="result">
                <GamePickerOption :game-option="userSelected" :allow-click="false" />
            </div>
        </div>
        <transition name="gameresult">
            <div v-if="showOptionNext" class="overall_result overall_result_box desktop_only">
                <div class="title">
                    {{resultText}}
                </div>
                <div class="action">
                    <a @click.prevent="handleRetry">PLAY AGAIN</a>
                </div>
            </div>
        </transition>
        <div class="bot_result result_box">
            <div class="title">THE HOURSE PICKED</div>
            <div class="result">
                <transition name="fade">
                    <GamePickerOption v-if="showBotResult" :game-option="botSelected" :allow-click="false" />
                </transition>
            </div>
        </div>

        <transition name="gameresultmobile">
            <div v-if="showOptionNext" class="overall_result overall_result_box mobile_only">
                <div class="title">
                    {{resultText}}
                </div>
                <div class="action">
                    <a @click.prevent="handleRetry">PLAY AGAIN</a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import {mapActions, mapMutations, mapState} from "vuex";
import {GameOption, GameResultState} from "@/models/enums";
import GamePickerOption from "@/components/GamePickerOption.vue";

@Component({
    components: {GamePickerOption},
    computed: {
        ...mapState('game', ['userSelected', 'botSelected', 'gameResult', 'score'])
    },
    methods: {
        ...mapActions('game', ['replayGame']),
        ...mapMutations('game', ['setScore'])
    }
})
export default class GameResult extends Vue {
    userSelected!: GameOption
    botSelected!: GameOption
    gameResult!: GameResultState
    score!: number
    replayGame!: () => void;
    setScore: (score: number) => void;

    showBotResult: Boolean = false
    showOptionNext: Boolean = false

    created() {
        setTimeout(() => {
            this.showBotResult = true
        }, 2000);
        setTimeout(() => {
            let currentScore = this.score;
            if (this.gameResult === GameResultState.Win) {
                currentScore += 1;
            }
            if (this.gameResult === GameResultState.Lose) {
                currentScore -= 1;
            }
            this.setScore(currentScore);
            this.showOptionNext = true
        }, 5000)
    }

    get resultText(): String {
        if (this.gameResult === GameResultState.Win) {
            return 'YOU WIN';
        }
        if (this.gameResult === GameResultState.Lose) {
            return 'YOU LOSE';
        }
        return 'DRAW'
    }

    handleRetry() {
        this.replayGame();
    }
}
</script>
