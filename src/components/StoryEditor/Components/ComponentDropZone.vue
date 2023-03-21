<template>
  <div 
  class="drop-zone"
  :class="{'drop-zone-hover': draggingOver}" 
  @dragenter="dragOver=true"
  @mouseleave="dragOver=false"
  @dragover="handleDragOver"
  @drop="handleDrop"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      draggingOver: false
    }
  },
  methods: {
    handleDragOver(e) {
      e.preventDefault()
      console.log(e)
      this.draggingOver = true
    },
    handleDragLeave() {
      this.draggingOver = false
    },
    handleDrop(e) {
      console.log(e)
    }
  }
}
</script>

<style>
.drop-zone {
  padding: 2px;
  transition: padding 0.2s linear; /* vendorless fallback */
  -o-transition: padding 0.2s linear; /* opera */
  -ms-transition: padding 0.2s linear; /* IE 10 */
  -moz-transition: padding 0.2s linear; /* Firefox */
  -webkit-transition: padding 0.2s linear; /*safari and chrome */
}
.drop-zone-hover {
  padding: 6px;
  background: greenyellow;
}

</style>