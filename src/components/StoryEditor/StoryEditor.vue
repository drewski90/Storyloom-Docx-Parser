<template>
  <div v-if="value">
    <Chapter 
      v-for="chapter, index in chapters"
      :key="chapter.id"
      v-model="chapters[index]"
    />
  </div>
</template>

<script>
import Chapter from './Chapter.vue'
export default {
  components: {
    Chapter
  },
  props: ['value'],
  computed: {
    story: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    chapters: {
      get() {
        return this.story.chapters
      },
      set(value) {
        this.story.chapters = value
      }
    }
  }
}
</script>

<style>
.block {
  margin-bottom: 15px;
  box-shadow: 0px 0px 10px black;
}

</style>