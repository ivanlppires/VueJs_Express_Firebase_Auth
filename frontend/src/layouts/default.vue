<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>FMDS-AULA12</v-toolbar-title>
      <v-spacer />
      <v-btn to="/">HOME</v-btn>
      <v-btn to="/clients">CLIENTES</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
  //
</script>
