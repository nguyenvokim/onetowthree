<template>
    <div class="game_options_box">
        <div class="game_options">
            <GamePickerOption :game-option="GameOption.Scissors" @select-option="handleSelectOption" />
            <GamePickerOption :game-option="GameOption.Paper" @select-option="handleSelectOption" />
            <GamePickerOption :game-option="GameOption.Rock" @select-option="handleSelectOption" />
            <GamePickerOption :game-option="GameOption.Lizard" @select-option="handleSelectOption" />
            <GamePickerOption :game-option="GameOption.Spock" @select-option="handleSelectOption" />
        </div>
    </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import {GameOption, GamePhase} from "@/models/enums";
import GamePickerOption from "@/components/GamePickerOption.vue";
import {mapActions} from "vuex";

@Component({
    components: {GamePickerOption},
    methods: {
        ...mapActions('game', ['calcGameResult'])
    }
})
export default class GamePicker extends Vue {
    readonly GameOption: GameOption = GameOption

    calcGameResult!: (gameOption: GameOption) => void;

    handleSelectOption(option: GameOption) {
        this.calcGameResult(option);
    }
}
</script>
