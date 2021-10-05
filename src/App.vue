<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1 class="display-1 font-weight-bold">
          Telzir
        </h1>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col><Form v-on:DataChanged="setData"/>
          <CalcHistory :data="data"/></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Form from './components/Form';
import CalcHistory from './components/CalcHistory';

export default {
  name: 'App',

  components: {
    Form,
    CalcHistory,
  },

  data: () => ({
    data: null,
  }),

  methods: {
    setData: function(value){
      this.data = value;
    },
  }
};
</script>
