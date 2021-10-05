<template>
    <div>
      <h2>Tempo (min):</h2>

      <v-text-field
            label="Ex: 32"
            type="number"
            solo
            v-on:change="selecionarTempo"
          ></v-text-field>

      <h2>Planos:</h2>

      <v-btn-toggle
        v-model="toggle_one"
        shaped
        mandatory
        color="blue accent-3"
        v-on:change="selecionarPlano"
        class="mb-5"
      >
        <v-btn value="FaleMais 30">
          FaleMais 30
        </v-btn>

        <v-btn value="FaleMais 60">
          FaleMais 60
        </v-btn>

        <v-btn value="FaleMais 120">
          FaleMais 120
        </v-btn>
      </v-btn-toggle>

      <h2>Selecione a taxa:</h2>

      <v-data-table
        :headers="headers"
        :items="items"
        :disabe-pagination="true"
        :hide-default-footer="true"
        @click:row="selecionarTaxa"
        mobile-breakpoint="0"
        single-select
        item-key="id"
      ></v-data-table>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        data: {},
        toggle_one: 'FaleMais 30',
        selectedId: -1,
        headers: [
          { text: 'Origem', value: 'origem' },
          { text: 'Destino', value: 'destino' },
          { text: '$/min', value: 'custo' },
        ],
        items: [
          {
            origem: '011',
            destino: '016',
            custo: 1.90,
            id: 0,
          },
          {
            origem: '016',
            destino: '011',
            custo: 2.90,
            id: 1,
          },
          {
            origem: '011',
            destino: '017',
            custo: 1.70,
            id: 2,
          },
          {
            origem: '017',
            destino: '011',
            custo: 2.70,
            id: 3,
          },
          {
            origem: '011',
            destino: '018',
            custo: 0.90,
            id: 4,
          },
          {
            origem: '018',
            destino: '011',
            custo: 1.90,
            id: 5,
          },
        ],
      }
    },
    methods: {
        selecionarTaxa(value, row){
          row.select(true);
          this.selectedId = value.id;
          this.data.tax = value;
          this.$emit("DataChanged", this.data);
        },
        selecionarPlano(value){
          this.data.plan = value;
          this.$emit("DataChanged", this.data);
        },
        selecionarTempo(value){
          this.data.time = value;
          this.$emit("DataChanged", this.data);
        }
    }
  }
</script>

<style>
  tr.v-data-table__selected {
    background: lightskyblue !important;
  }
</style>