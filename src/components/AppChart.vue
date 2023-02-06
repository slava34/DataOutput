<template>
  <Pie
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
  />
</template>

<script>
import {Pie} from 'vue-chartjs'
import {ArcElement, Chart as ChartJS, Legend, Title, Tooltip} from 'chart.js'



ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  name: 'AppChart',
  props: ['groups'],
  components: {Pie},
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    }
  },
  computed: {
    chartData() {
      return {
        labels: this.groups.map(group => group.name),
        datasets: [{
          data: this.groups.map(quantityItem => quantityItem?.items?.length || 0),
          label: 'Подгруппы',
          backgroundColor: this.groups.map(() => this.randColor())
        }]
      }
    }
  },
  methods: {
    randColor() {
      const r = Math.floor(Math.random() * (256));
      const g = Math.floor(Math.random() * (256));
      const b = Math.floor(Math.random() * (256));
      return  '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }
  }

}
</script>



