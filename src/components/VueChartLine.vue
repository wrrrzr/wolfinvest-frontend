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
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    annotation: {
                        annotations: []
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                        }
                    },
                    legend: {
                        display: false,
                    },
                },
            },
        }
    },
    methods: {
        updateData(data, symbolsActions) {
            this.chart.data = data
            let annotations = []
            let borderColor = ''
            symbolsActions.forEach((el) => {
                if (el.type === 1) {
                    borderColor = 'green'
                } else if (el.type === 2) {
                    borderColor = 'red'
                } else {
                    borderColor = 'blue'
                }
                annotations.push({
                    type: 'line',
                    xMin: el.time,
                    xMax: el.time,
                    borderColor: borderColor,
                    borderWidth: 3,
                    borderDash: [],
                    drawLine: 'vertical'
                })
            })
            this.options.plugins.annotation.annotations = annotations
            this.chart.update()
        },
    },
    mounted() {
        this.chart = new Chart(this.$refs.lineChart, { type: 'line', options: this.options})
    }
}
</script>
