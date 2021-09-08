<template>
    <div class="option_card" @click="handleClick">
        <div class="circle" :style="borderRadiusStyle">
            <img :src="imageUrl" />
        </div>
    </div>
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";
import {GameOption} from "@/models/enums";


@Component({
})
export default class GamePicker extends Vue {
    readonly GameOption: GameOption
    @Prop({type: Number}) gameOption!: GameOption

    get color(): string {
        let colours: Record<GameOption, string> = {
            [GameOption.Rock] : '#DB3F59',
            [GameOption.Scissors] : '#EBA11B',
            [GameOption.Paper] : '#4563EE',
            [GameOption.Spock] : '#3FB8CD',
            [GameOption.Lizard] : '#844DE7',
        }
        return colours[this.gameOption]
    }

    get borderRadiusStyle(): CSSStyleDeclaration {
        return {
            border: `solid 18px ${this.color}`
        }
    }

    get imageUrl(): string {
        switch (this.gameOption) {
            case GameOption.Lizard:
                return '/images/icon-lizard.svg';
            case GameOption.Paper:
                return '/images/icon-paper.svg';
            case GameOption.Rock:
                return '/images/icon-rock.svg';
            case GameOption.Scissors:
                return '/images/icon-scissors.svg';
            case GameOption.Spock:
                return '/images/icon-spock.svg';
            default:
                return '/images/icon-lizard.svg';
        }
    }

    handleClick() {
        this.$emit('select-option', this.gameOption)
    }
}
</script>
