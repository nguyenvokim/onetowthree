<template>
    <div class="score_board_box">
        <img src="/images/logo-bonus.svg" />
        <div class="score_box">
            <div class="title">
                SCORE
            </div>
            <div class="score">
                {{score}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import {mapState} from "vuex";

@Component({
    computed: {
        ...mapState('game', ['score'])
    }
})
export default class ScoreBoard extends Vue {
    score!: number
}
</script>
