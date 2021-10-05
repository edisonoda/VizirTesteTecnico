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
    ></v-data-table>
  </div>
</template>

<script>
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

        this.items.unshift(this.calcularPreco(time, plan, tax));
      },

      calcularPreco(time, plan, tax){
        const custoSemP = tax.custo * time;

        switch (plan){
          case 'FaleMais 30':
            time -= 30;
            break;

          case 'FaleMais 60':
            time -= 60;
            break;

          case 'FaleMais 120':
            time -= 120;
            break;
        }

        if(time < 0) time = 0;

        const custoComP = tax.custo * time * 1.1;

        console.log(custoSemP, custoComP);

        return {
          origem: tax.origem,
          destino: tax.destino,
          tempo: this.data.time ? this.data.time : 0,
          plano: plan,
          custoComP: custoComP,
          custoSemP: custoSemP,
        }
      }
    },
    props:[
      'data'
    ]
  }
</script>