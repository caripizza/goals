<template>
  <ul v-if="goals">
    <Goal v-for="goal in goals" 
      :key="goal.id"
      :goal="goal"
      :onEdit="onEdit"/>
  </ul>
</template>

<script>
import Goal from './Goal';

export default {
  props: {
    goals: null,
    onEdit: Function
  },
  components: {
    Goal
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
  border: 1px solid cyan;
}
</style>
