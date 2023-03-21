<template>
  <div id="app">
    <div class="main">
      <button @click="saveStory">Save Story</button>
      <DocParser v-model="story"/>
      <StoryEditor v-model="story" />
    </div>
  </div>
</template>

<script>
import StoryEditor from './components/StoryEditor/StoryEditor.vue';
import DocParser from './components/DocParser.vue';
import {saveStory} from "./utils"
export default {
  name: 'App',
  components: {
    DocParser,
    StoryEditor
  },
  data() {
    return {
      story:null
    }
  },
  methods:{ 
    saveStory() {
      saveStory(this.story)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  margin-left:auto;
  margin-right:auto;
  max-width: 1100px;
  padding-left: 5px;
  padding-right: 5px;
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

</style>
