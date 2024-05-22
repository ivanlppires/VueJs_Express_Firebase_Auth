<template>

  <v-toolbar app>
    <v-btn text @click="getPub()">Público</v-btn>
    <v-btn text @click="getPriv()">Privado</v-btn>
    <v-btn text @click="authGoogle()">Auth Google</v-btn>
    <v-btn @click="logout()">Logout</v-btn>
  </v-toolbar>

  <v-card>
    <v-card-title>{{ userStore.displayName }}</v-card-title>
    <v-card-text> {{ message }}</v-card-text>
  </v-card>

</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const message = ref('mensagem vai aparecer aqui')
const authGoogle = async () => {
  await userStore.authWithGoogle()
  getPriv();
}
const logout = async () => {
  await userStore.logout()
  getPriv();
}
const getPub = () => {
  fetch('http://localhost:5000/public')
    .then(res => res.json())
    .then(data => message.value = data.message)
    .catch(err => message.value = 'Erro interno')
}
const getPriv = () => {
  fetch('http://localhost:5000/private', {
    headers: {
      'Authorization': `Bearer ${userStore.accessToken}`
    }
  })
    .then(res => res.json())
    .then(data => message.value = data.message)
    .catch(err => message.value = 'Erro interno')
}
</script>
