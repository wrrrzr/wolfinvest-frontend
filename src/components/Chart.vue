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
        symbol: {
            type: String,
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
                    }
                },
                scales: {
                    x: {
                        display: false,
                    },
                },
            },
        }
    },
    async mounted() {
        const resp = await api.get(`/symbols/get-daily-history?symbol=${this.symbol}`)
        this.chartData = {...this.chartData, labels: [...resp.data], datasets: [{backgroundColor: '#f87979', data: resp.data}]}
        this.loaded = true
    }
}
</script>
