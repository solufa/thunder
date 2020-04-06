<template>
  <div class="container">
    <div>
      <h1 class="title">
        nuxt-ts
      </h1>
      <div v-for="work in works" :key="work.id">
        <nuxt-link :to="`/works/?id=${work.id}`">
          <img :src="thumbnailSrc(work)" />
          {{ work.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { WorkSummary } from '~/apis/works/list.json'

@Component
export default class extends Vue {
  works: WorkSummary[] = []

  get thumbnailSrc() {
    return (work: WorkSummary) => `/s3/works/${work.id}/thumbnail.png`
  }

  async fetch() {
    this.works = await $nuxt.$api.works.list_json.$get()
  }
}
</script>

<style scoped>
/* autoprefixer grid: no-autoplace */
.container {
  display: grid;

  /* Caution: `min-height: 100vh` does not work in IE 11 */
  height: 100vh;
  margin: 0 auto;
  text-align: center;

  /* Caution: `1fr` has different results in IE 11 */
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.container > div {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.title {
  font-size: 100px;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
