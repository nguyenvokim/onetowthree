<template>
    <div class="container">
        <ScoreBoard />
        <GamePicker v-if="phase === GamePhase.Selecting" />
        <GameResult v-if="phase === GamePhase.Result" />
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
}
</script>
