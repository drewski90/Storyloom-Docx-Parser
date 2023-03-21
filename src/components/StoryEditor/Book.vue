<template>
  <div>
    <div>
      {{ book }}
    </div>
    <Chapter 
    v-for="chapter, i in chapters" 
    :key="chapter.id"
    v-model="chapters[i]"
    />
  </div>
</template>

<script>
import Chapter from '../Chapter.vue'
export default {
  props: ['value'],
  components: {
    Chapter
  },
  computed: {
    book: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    chapters: {
      get() {
        return this.book.chapters
      },
      set(value) {
        this.book.chapters = chapters
      }
    }
  }
}
</script>

<style>

</style>