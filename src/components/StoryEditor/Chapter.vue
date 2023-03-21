<template>
  <div class="chapter-container"
    @mouseleave="editTitle=false">
    <div class="toolbar">
      <input 
        class="toolbar-title" 
        type="text" 
        v-model="chapter.title" 
        @keyup.enter="editTitle = false"/>
    </div>
    <div class="chapter-scene-container">
      <ComponentDropZone />
      <div
        v-for="key in Object.keys(scenes)"
        :key="key">
        <Scene v-model="scenes[key]"/>
        <ComponentDropZone />
      </div>
    </div>
  </div>
</template>

<script>
import ComponentDropZone from './Components/ComponentDropZone.vue';
import Scene from './Scene.vue';
export default {
  props: ['value'],
  components: {
    Scene,
    ComponentDropZone 
  },
  computed: {
    chapter:{
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    scenes: {
      get() {
        return this.chapter.contents.scenes
      },
      set(value) {
        this.chapter.contents.scenes = value
      }
    }
  }
}
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  color: white;
  background: #1161f6;
}
.toolbar-title {
  width: 100%;
  background: transparent;
  color: white;
  font-weight: 600;
  font-size: 1.5em;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.153);
}
.toolbar > button {
  background: rgba(255, 255, 255, 0.829);
  border: 1px solid grey;
  box-shadow: 3px 3px 5px rgba(0,0,0,.4);
  border-radius: 10px;
  font-size: 10px;
  cursor:pointer;
}
.toolbar > button:hover {
  background: rgba(255, 255, 255,1);
}
.chapter-container {
  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgba(136, 136, 136, 0.8)
}
.chapter-scene-container {
  padding: 8px;
}
</style>
