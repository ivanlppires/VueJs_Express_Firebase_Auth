<template>
    <v-card v-if="userStore.isLoggedIn">
        <v-card-title>Clientes</v-card-title>
        <v-card-text>
            <ClientCrud />
        </v-card-text>
    </v-card>
    <v-alert v-else type="error">
        Você não está logado
    </v-alert>
</template>
<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>