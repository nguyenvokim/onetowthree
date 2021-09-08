<template>
    <div class="container">
        <ScoreBoard />
        <GamePicker v-if="phase === GamePhase.Selecting" />
        <GameResult v-if="phase === GamePhase.Result" />
        <a class="btn_rule" @click.prevent="handleShowRule">RULES</a>
        <div class="custom_modal" v-if="showModal">
            <div class="modal_bg"></div>
            <div class="modal_content">
                <a @click.prevent="handleCloseModal" class="close_btn">
                    <img src="/images/icon-close.svg" />
                </a>
                <h1>RULES</h1>
                <img src="/images/image-rules-bonus.svg" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ScoreBoard from "@/components/ScoreBoard";
import GamePicker from "@/components/GamePicker";
import {GamePhase} from "@/models/enums";
import {mapState} from "vuex";
import GameResult from "@/components/GameResult.vue";

@Component({
    components: {GameResult, GamePicker, ScoreBoard},
    computed: {
        ...mapState('game', ['phase'])
    }
})
export default class MainGame extends Vue {
    readonly GamePhase: GamePhase = GamePhase
    phase!: GamePhase

    showModal: boolean = false;

    handleShowRule() {
        this.showModal = true;
    }

    handleCloseModal() {
        this.showModal = false;
    }
}
</script>
