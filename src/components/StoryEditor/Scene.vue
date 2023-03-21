<template>
  <ComponentContainer class="scene">
    <template v-slot:title>
      Scene
    </template>
    <template v-slot:icon>
      <span class="material-symbols-outlined">
      scene
      </span>
    </template>
    <template v-slot:content>
      <input type="text" v-model="scene.title" class="title-text-box"/>
    </template>
    <template v-slot:nested>
      <ComponentDropZone />
      <div
        v-for="component, index in nodes"
        :key="component.id">
        <component
          :is="component.type"
          v-model="nodes[index]" 
        />
        <ComponentDropZone />
      </div>
    </template>
  </ComponentContainer>
</template>

<script>
import ComponentContainer from "./Components/ComponentContainer.vue"
import ComponentDropZone from "./Components/ComponentDropZone.vue"
import TextComponent from "./Components/TextComponent.vue"
export default {
  props: ['value'],
  components: {
    ComponentDropZone,
    TextComponent,
    ComponentContainer
  },
  computed: {
    scene: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    nodes: {
      get() {
        return this.scene.components
      },
      set(value) {
        return this.scene.components = value
      }
    }
  }
}
</script>

<style>
.scene {
  background: rgb(250, 179, 64);
  color: white;
}
.title-text-box {
  width: 100%;
  background: transparent;
  color: white;
  font-weight: 600;
  font-size: 1.5em;
  border: none;
  border-bottom: 1px solid white;
}
</style>