<template>
  <div>
    <h1 class="title">
      {{ work.title }}
    </h1>
    <iframe :src="work.url" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Work } from '~/apis/works/_workId.json'

@Component
export default class extends Vue {
  work: Work = {} as Work

  async fetch() {
    this.work = await $nuxt.$api.works
      ._workId_json(+this.$route.query.id)
      .$get()
  }
}
</script>

<style scoped>
.title {
  font-size: 100px;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
