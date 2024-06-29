<template>
<canvas ref="lineChart"></canvas>
</template>
<script>
import {Chart} from "chart.js/auto"

export default {
    data() {
        return {
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        }
    },
    methods: {
        updateData(data) {
            this.chart.data = data
            this.chart.update()
        },
    },
    mounted() {
        this.chart = new Chart(this.$refs.lineChart, { type: 'line', options: this.options})
    }
}
</script>
