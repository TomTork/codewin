<script setup lang="ts">
import type { Project } from "~/types/IProject";

const route = useRoute()
const name = route.params.slug
const project = ref<Project>({} as Project)
const { data, status } = useFetch<Project>(`https://api.los-bio.ru/projects/${name}`)

watch(status, () => {
  if (status.value === 'success' && data.value) {
    project.value = data.value
  }
})

</script>

<template>

</template>

<style scoped>

</style>