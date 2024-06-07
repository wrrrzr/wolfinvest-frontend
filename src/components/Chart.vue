<template>
    <Line v-if="loaded" :data="chartData" :options="options"/>
</template>
<script>
import { Line } from 'vue-chartjs'
import api from "@/api"

export default {
    components: {
        Line,
    },
    props: {
        symbolChart: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            loaded: false,
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
        formatDate(date) {
            let hours = date.getHours()
            let minutes = date.getMinutes()
            if (hours < 10) {
                hours = hours + "0"
            }
            if (minutes < 10) {
                minutes = minutes + "0"
            }
            return `${hours}:${minutes}`
        }
    },
    mounted() {
        const timestamps = []
        const prices = []
        this.symbolChart.forEach((el) => {
            timestamps.push(this.formatDate(new Date(el.timestamp)))
            prices.push(el.price)
        })
        this.chartData = {...this.chartData, labels: timestamps, datasets: [{backgroundColor: 'Tomato', data: prices}]}
        this.loaded = true
    }
}
</script>
