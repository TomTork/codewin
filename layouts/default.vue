<script setup lang="ts">
const isCatalogOpen = ref<boolean>(false)
const isHovered = ref<boolean>(false)
const catalogExamples = [
  { title: 'Пример 1' },
  { title: 'Пример 2' },
  { title: 'Пример 3' },
  { title: 'Пример 4' },
]

</script>

<template lang="pug">
  header.header
    .container
      .col
        .row.contact.gap
          .row
            .img
              ImageGeo(:filled="true")
            a г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204
          .row
            .img
              ImagePhone(:filled="true")
            a +7 (391) 209 57-57
          .row
            .img
              ImagePhone(:filled="true")
            a +7 (391) 215 54-33
          .row
            .img
              ImageMail(:filled="true")
            a los-bio@mail.ru
          .row
            .img
              ImageArrow(:filled="true")
            a Заказать звонок
        .divider
    .about
      .row.sections
        nuxt-link(to="/").logo
          ImageLogo(:filled="true")
        .row.names
          a О компании
          a Проекты
          div
            v-menu(open-on-hover)
              template(v-slot:activator="{ props }")
                a(
                  @mouseenter="isHovered = true"
                  @mouseleave="isHovered = false"
                  v-bind="props", class="menu-link"
                  )
                  | Каталог
                  span.arrow(:class="{ rotated: isHovered }")
                    ImageDArrow
              v-list
                v-list-item(
                  v-for="(item, index) in catalogExamples",
                  :key="index",
                  :value="item"
                )
                  a {{ item.title }}
          a Контакты
        button
          a Получить КП
  div.col.main
    slot
  footer.footer
    .container
      .col
        nuxt-link(to="/").logo
          ImageLogo(:filled="true")
        a(style="margin-top: 30px") ООО «ТОРГОВЫЙ ДОМ «ЛОС-БИО»
        .col
          a
            span.info ИНН:
            span.value 2463123719
            span.info КПП:
            span.value 246301001
          a
            span.info ОГРН:
            span.value 1212400008688
      .col
        a КОМПАНИЯ
        .nav-links
          a О компании
          a Проекты
          a Каталог
          a Контакты
      .col
        a КАТАЛОГ
        .nav-links
          a КНС
          a Ёмкости
          a Ливневые очистные-сооружения
          a Хозяйственно-бытовые очистные сооружения
          a Комплектующие
      .col
        a КОНТАКТЫ
        .nav-links
          .row
            ImagePhone(:filled="true")
            a(style="margin-top: 0") +7 (391) 209-57-57
          .row
            ImagePhone(:filled="true")
            a(style="margin-top: 0") +7 (391) 209-57-57
          .row
            ImageMail(:filled="true" class="mail-icon")
            a(style="margin-top: 0; text-decoration: underline;") los-bio@mail.ru
          .row
            ImageArrow(:filled="true")
            a(style="margin-top: 0; text-decoration: underline;") Заказать звонок
          button
            a Получить КП
</template>

<style scoped>

</style>