<template>
    <Line :data="data" :options="options"/>
</template>
<script>
import { Line } from 'vue-chartjs'

export default {
    components: {
        Line,
    },
    data() {
        return {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        backgroundColor: '#f87979',
                        data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    }
                },
            },
        }
    }
}
</script>
