<template>
    <VueChartLine ref="line"/>
</template>
<script>
import VueChartLine from "@/components/VueChartLine"
import api from "@/api"

const findClosest = (number, array) => {
  let closestNumber = array[0];
  let minDiff = Math.abs(number - closestNumber);

  for (const num of array) {
    let diff = Math.abs(number - num);
    if (diff < minDiff) {
      closestNumber = num;
      minDiff = diff;
    }
  }

  return closestNumber;
}

const toUnixTimestamp = (date) => parseInt((new Date(date).getTime() / 1000).toFixed(0))

export default {
    components: {
        VueChartLine,
    },
    data() {
        return {
            loaded: false,
        }
    },
    methods: {
        formatDate(interval, date) {
            if (interval === 1)
                return this.format5m(date)
            if (interval === 2)
                return this.format1h(date)
            if (interval === 3)
                return this.format1d(date)
            if (interval === 4)
                return this.format1wk(date)
            if (interval === 5)
                return this.format1mo(date)
            if (interval === 6)
                return this.format3mo(date)
        },
        format5m(date) {
            let hours = date.getHours()
            let minutes = date.getMinutes()
            if (hours < 10) {
                hours = "0" + hours
            }
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            return `${hours}:${minutes}`
        },
        format1h(date) {
            const year = date.getFullYear()
            const month = date.getMonth()
            const day = date.getDay()
            let hours = date.getHours()
            if (hours < 10) {
                hours = "0" + hours
            }
            return `${day}-${month} ${hours}:00`
        },
        format1d(date) {
            const year = date.getFullYear()
            const month = date.getMonth()
            const day = date.getDay()
            return `${day}-${month}-${year}`
        },
        format1wk(date) {
            const year = date.getFullYear()
            const month = date.getMonth()
            const day = date.getDay()
            return `${day}-${month}-${year}`
        },
        format1mo(date) {
            const year = date.getFullYear()
            const month = date.getMonth()
            return `${month}-${year}`
        },
        format3mo(date) {
            const year = date.getFullYear()
            const month = date.getMonth()
            return `${month}-${year}`
        },
    updateData(interval, newdata, symbolsActions) {
        const timestamps = []
        const prices = []

        newdata.forEach((el) => {
            timestamps.push(this.formatDate(interval, new Date(el.timestamp)))
            prices.push(el.price.buy)
        })

        let ddd = []
        newdata.forEach((el) => {
            ddd.push(toUnixTimestamp(new Date(el.timestamp)))
        })

        let newSymbolsActions = []
        let time = 0
        symbolsActions.forEach((el) => {
            time = findClosest(toUnixTimestamp(el.created_at), ddd)
            newSymbolsActions.push({type: el.action, time: this.formatDate(interval, new Date(time * 1000))})
        })

        let borderColor = 'rgba(0, 0, 0, 0.5)'
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            borderColor = '#a0a0a050'
        }
        this.chartData = {labels: timestamps, datasets: [{borderColor: borderColor, backgroundColor: 'Tomato', data: prices}]}
        this.loaded = true
        this.$refs.line.updateData(this.chartData, newSymbolsActions)
    }
    },
}
</script>
