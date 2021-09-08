<template>
    <div class="container">
        <ScoreBoard />
    </div>
</template>

<script>
import {Component, Vue} from "vue-property-decorator";
import ScoreBoard from "@/components/ScoreBoard";

@Component({
    components: {ScoreBoard}
})
export default class MainGame extends Vue {

}
</script>
