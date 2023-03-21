<template>
  <ComponentContainer
  :id="component.id" 
  :index="0">

    <template v-slot:icon>
      <img src="@/assets/node icons/TextNodeIcon.svg" />
    </template>

    <template v-slot:title>
      Text
    </template>

    <template v-slot:content>

      <textarea v-model="component.text"
      class="text-component-text"
      placeholder="Add text to your screen here..."
      ></textarea>
    
    </template>

  </ComponentContainer>
</template>

<script>
import ComponentContainer from './ComponentContainer.vue'

export default {
  components: {
    ComponentContainer
  },
  props: ['value'],
  computed: {
    component: {
      get() {
        return this.value
      },
      set(value) {
        return this.$emit('input', value)
      }
    }
  }
}
</script>

<style>
.text-component-text {
  border: 1px solid grey;
  width: 100%;
  resize:none;
  height: 45.3333px !important; 
  width: 100%;
}
</style>