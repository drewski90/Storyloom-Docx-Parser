<template>
  <div>
  
    <input
      @change="handleSelect"
      ref="filePicker"
      class="file-picker-input"
      type="file"
      id="docpicker"
      accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    />

    <div class="panel mb-1">
      <div class="flex-space-between panel-title">
        <div class="pa-1">Select a word document</div>
        <div class="pa-1">
          <button @click="$refs.filePicker.click()">Open File</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {openDocument, wordDocToStory} from "../utils.js"
export default {
  props: ['value'],
  computed: {
    story: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    handleSelect(e) {
      openDocument(e.target.files[0])
        .then(story => this.story = wordDocToStory(story));
    }
  }
}
</script>

<style scoped>
.pa-1 {
  padding: 5px;
}
.mb-1 {
  margin-bottom: 5px;
}
.file-picker {
  padding: 5px;
  border: 1px solid grey;
  cursor: pointer;
  overflow: hidden;
  background: white;
  border-radius: 2px;
  text-align: center;
}
.file-picker-input {
  visibility: hidden;
  position: fixed;
}
.panel {
  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgba(136, 136, 136, 0.8)
}
.panel-title {
  font-size:1.5em;
  display: flex;
  justify-content: space-between;
  color: white;
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.panel-content {
  padding: 8px;
  overflow: hidden;
}
button {
  padding: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.flex-space-between {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.paragraph-element {
  padding: 5px;
  margin-bottom: 15px;
  border: 2px solid rgb(0, 61, 125);
}
.text-element {
  padding: 5px;
  margin-bottom: 15px;
  border: 1px solid rgb(0, 0, 0);
}
</style>
