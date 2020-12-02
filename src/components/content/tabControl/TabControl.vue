<template>
  <div class="tabControl">
    <div v-for="(item,index) in items" class="tabControl-item"
         :class="{active:currentIndex == index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick',index);
      }
    }
  }
</script>

<style scoped>
  .tabControl {
    display: flex;
    text-align: center;
    background-color: white;
    height: 40px;
    line-height: 40px;
  }

  .tabControl-item {
    flex: 1;
  }

  .tabControl-item span {
    padding: 2px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }
</style>
