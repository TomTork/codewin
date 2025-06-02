<script setup lang="ts">
import type { Project } from "~/types/IProject";

const { slides, advantages, projects, statusLoading } = useMainData()

async function goToProject(project: Project) {
  await navigateTo(`/project/${project.slug}`)
}

</script>

<template lang="pug">
  .margin-main(v-if="statusLoading === 3")
    template(v-if="statusLoading === 3")
      v-carousel(
        height="563"
        :show-arrows="false"
        delimiter-icon="mdi-square"
        hide-delimiter-background
        cycle
      )
        v-carousel-item(
          v-for="(slide, i) in slides"
          :key="i"
        )
          .carousel-obj
            .col
              .carousel-header
                a {{ slide.value.title }}
              .carousel-text
                a {{ slide.value.description }}
              button
                a {{ slide.value.btnText }}
            .carousel-image
              img(
                :src="'https://api.los-bio.ru/files/certificates/' + slide.value.image[0].name",
                alt="Slide image"
              )
    .main-block
      a Наши преимущества
      div
        div.container
          div.card(v-for="(item, i) in advantages" :key="i")
            .col
              .row
                img(
                  :src="item.value.icon"
                  :alt="item.value.id"
                )
                a.head {{ item.value.title }}
              a.main {{ item.value.description }}
    .main-block
      a Проекты
      div
        div.projects
          div.container(
            v-for="(project, index) in projects" :key="index"
            @click="goToProject(project)"
            )
            v-carousel(
              height="208px"
              :show-arrows="false"
              hide-delimiter-background
              :show-delimiters="false"
              style="margin-bottom: 0;"
            )
              v-carousel-item(
                v-for="(photo, i) in project.photos"
                :key="i"
              )
                img(
                  :src="`https://api.los-bio.ru/files/${photo.catalog}/${photo.name}`"
                )
            a.title {{ project.title }}
            a.description {{ project.short_description.blocks[0].data.text }}
            .divider
            a
              span.info Тип работы:
              span.value {{ ' ' + project.works }}
            .divider
            a
              span.info Заказчик:
              span.value {{ ' ' + project.customer }}
</template>

<style scoped></style>