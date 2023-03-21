<template>
  <div
  :draggable="draggable"
  class="node"
  v-bind="$attrs"
  > 
    <div class="node-container">
      <button class="node-button" v-if="$slots.icon">
        <slot name="icon">
        </slot>
      </button>
      <div class="node-content">
        <slot name="content"></slot>
      </div>
      <div class="node-options">
        <button class="node-button">
          <img src="@/assets/node icons/Clone.svg"/>
        </button>
        <button class="node-button">
          <img src="@/assets/node icons/Delete.svg"/>
        </button>
        <button class="node-button" 
        @dragstart="$emit('dragStart', id)"
        @mouseover="draggable=true" 
        @mouseleave="draggable=false">
          <img src="@/assets/node icons/Drag.svg"/>
        </button>
      </div>
    </div>
    <div v-if="$slots.nested" class="node-nested"> 
      <slot name="nested"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      draggable:true
    }
  },
  props: [
    'index',
    'id',
    'color'
  ],
}
</script>

<style>
.node-button {
  background: white;
  padding: 0;
  text-align: left;
  border: 1px rgb(0,0,0, .3) solid;
  padding: 5px;
  border-radius: 5px;
  margin:3px;
  cursor:pointer !important;
  -webkit-transition: all 1 ease;
  -moz-transition: all 1 ease;
  -ms-transition: all 1 ease;
  -o-transition: all 1 ease;
  transition: all 1 ease;
}
.node-button:hover {
  background: rgba(255, 255, 255, 0.2) !important;
}
.node-button > img, .node-button > span {
  width: 18px;
  height: 18px;
  font-size: 18px;
}
.node-content {
  align-items: center;
  display: flex;
  flex-grow: 1;
  -webkit-user-select:auto;
  -moz-user-select:auto;
  -ms-user-select:auto;
  user-select:auto;
}
.node-container {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;  
  display: flex;
  gap: 10px;
  padding: 8px;
  position: relative;
}
.node-options {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  text-align: left;
}
.drop-zone {
  height: 5px;
  border-radius: 4px;
}
.highlight-drop-zone {
  border: 1px solid green;
  background: rgb(89, 194, 89);
}
.component-title {
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 100;
  padding: 4px;
  font-size: .8em;
  background: rgba(0, 0, 0, 1);
  font-weight:800;
  color: white;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 5px;
  opacity: .5;
}
.node {
  position:relative;
  overflow: hidden;
  border: 1px solid #717171;
  border-radius: 5px;
  box-shadow: 0 4px 8px hsla(40,38%,87%,.8);
  background: #E0EAFC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.node-nested {
  padding: 8px;
  padding-bottom: 2px;
  margin: 5px;
  background: white;
  border-radius:5px;
  border: 1px solid grey;
}
</style>