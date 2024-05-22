<template>
    <v-text-field v-model="name" label="Nome"></v-text-field>
    <v-list>
        <v-list-item v-for="client in clients" :key="client.id">
            <v-list-item-content>
                <v-list-item-title>{{ client.name }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
                <v-btn @click="deleteClient(client.id)">Excluir</v-btn>
            </v-list-item-action>
        </v-list-item>
    </v-list>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const token = userStore.accessToken
const name = ref('')
const clients = ref([])

const getClients = async () => {
    const res = await fetch('http://localhost:5000/clients', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json()
    clients.value = data
}
// onmounted
onMounted(() => {
    getClients()
})

</script>