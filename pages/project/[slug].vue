<script setup lang="ts">
import type { Project } from "~/types/IProject";

const route = useRoute()
const name = route.params.slug
const project = ref<Project>({} as Project)
const { data, status } = useFetch<Project>(`https://api.los-bio.ru/projects/${name}`)
const isLoaded = ref<boolean>(false)
const photos = ref<string[]>([])

watch(status, () => {
  if (status.value === 'success' && data.value) {
    project.value = data.value
    photos.value = data.value.photos.map((it) => (`https://api.los-bio.ru/files/${it.catalog}/${it.name}`))
    isLoaded.value = true
  }
})

const currentIndex = ref(0)

const nextPhoto = () => {
  currentIndex.value = (currentIndex.value + 1) % photos.value.length
}
</script>

<template lang="pug">
  .project(v-if="isLoaded")
    .row-header
      a Главная
      .dot
      a Проекты
      .dot
      a.title {{ project.title }}
    .row
      .main
        h1 {{ project.title }}
        .block
          .col(v-for="(desc, index) in project.description.blocks" :key="index")
            h2(v-if="desc.data.level" ) {{ desc.data.text }}
            p(v-else-if="desc.data.text", v-html="desc.data.text")
            ol(v-else-if="desc.data.items")
              li(v-for="(item, i) in desc.data.items" :key="i")
                span(v-html="item")
      .images
        .main-photo
          img(:src="photos[currentIndex]", alt="Main photo")
          button(@click="nextPhoto")
            p Следующее фото

        .thumbnails
          img(
            v-for="(photo, index) in photos"
            :key="index"
            :src="photo"
            :class="{ active: index === currentIndex }"
            @click="currentIndex = index"
          )

</template>

<style scoped>

</style>