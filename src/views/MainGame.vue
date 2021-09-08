<template>
    <div class="container">
        <ScoreBoard />
        <GamePicker />
    </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";
import ScoreBoard from "@/components/ScoreBoard";
import GamePicker from "@/components/GamePicker";

@Component({
    components: {GamePicker, ScoreBoard}
})
export default class MainGame extends Vue {

}
</script>
