<template>
    <div class="scoreboard">
        <table class="scoreboard-column">
            <tr>
                <th class="table-th" v-for="(column, index) in columns()" :key="index">{{column}}</th>
            </tr>
            <tr v-for="(combo, index) in combinations()" :key="index">
                <td :style="combo.style" :class="{'table-td-clicked': combo.isLocked, 'table-points': combo.givesPoints}" @click="setPoints(combo.id)" v-for="(column, index) in columns()" :key="index">{{combo[column]}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    methods: {
        columns() {
            return this.$store.getters.getColumns;
        },
        combinations() {
             return this.$store.getters.getCombinations;
        },
        setPoints(index) {
            this.$store.commit('setPoints', index);
            this.unlockDices();
        },
        unlockDices() {
            this.$store.commit('unlockDices');
        }
    }
}
</script>


<style>
    table, th, td {
        border: 1px solid black;
        color: rgb(35, 35, 223);
        cursor: pointer;
    }

    .table-td-clicked {
        color: rgb(20, 20, 20);
        cursor: text;
    }

    .table-points {
        color: rgb(209, 209, 60);
    }

    .table-th {
        text-transform: uppercase;
    }

    .scoreboard {
        font-size: 1.5rem;
        margin-top: 2.2rem;
        background-color: rgb(250, 235, 168);
    }   

    .scoreboard-column {
        width: 100%;
    }
</style>

