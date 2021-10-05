<template>
  <div>
    <v-btn
      elevation="2"
      v-on:click="onCalcularClick"
      block
      class="mb-3"
    >Calcular</v-btn>

    <v-data-table
      :headers="headers"
      :items="items"
      :disabe-pagination="true"
      :hide-default-footer="true"
      class="elevation-1"
      :header-props="{ sortIcon: null }"
    ></v-data-table>
  </div>
</template>

<script>
const calcularCusto = require('../utils/CalcCusto.js');

  export default {
    data () {
      return {
        headers: [
          { text: 'Origem', value: 'origem' },
          { text: 'Destino', value: 'destino' },
          { text: 'Tempo', value: 'tempo' },
          { text: 'Plano', value: 'plano' },
          { text: 'Com FaleMais', value: 'custoComP' },
          { text: 'Sem FaleMais', value: 'custoSemP' },
        ],
        items: [],
      }
    },
    methods: {
      onCalcularClick(){
        if(this.data == null) return;
        let time = this.data.time ? this.data.time : 0;
        const plan = this.data.plan ? this.data.plan : 'FaleMais 30';
        const tax = this.data.tax ? this.data.tax : {
          origem: 0,
          destino: 0,
          custo: 0
        };

        console.log(calcularCusto);
        this.items.unshift(calcularCusto(time, plan, tax));
      },
    },
    props:[
      'data'
    ]
  }
</script>