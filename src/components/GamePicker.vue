<template>
    <div class="game_options_box">
        <div class="game_options">
            <GamePickerOption :game-option="GameOption.Scissors" />
            <GamePickerOption :game-option="GameOption.Paper" />
            <GamePickerOption :game-option="GameOption.Rock" />
            <GamePickerOption :game-option="GameOption.Lizard" />
            <GamePickerOption :game-option="GameOption.Spock" />
        </div>
    </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import {GameOption} from "@/models/enums";
import GamePickerOption from "@/components/GamePickerOption.vue";

@Component({
    components: {GamePickerOption}
})
export default class GamePicker extends Vue {
    readonly GameOption: GameOption = GameOption
}
</script>
