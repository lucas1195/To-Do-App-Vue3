import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const loading = ref(false);

  const $tasks = computed(() => {
    return tasks.value;
  });

  const $loading = computed(() => {
    return loading.value;
  });

  const keepItemsTasks = (params) => {
    tasks.value.push(params);
  };

  const removeItemTasks = (index) => {
    tasks.value.splice(index, 1);
  };

  return {
    $tasks,
    $loading,
    keepItemsTasks,
    removeItemTasks,
  };
});
