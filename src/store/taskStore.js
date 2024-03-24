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
    saveLocalData();
  };

  const updateItemsTasks = (index, params) => {
    tasks.value[index] = params;
    saveLocalData();
  };

  const removeItemTasks = (index) => {
    tasks.value.splice(index, 1);
    saveLocalData();
  };

  const saveLocalData = () => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks.value));
    } catch (error) {
      console.error(error);
    }
  };

  const getLocalData = () => {
    try {
      let response = localStorage.getItem("tasks");
      if (response) {
        tasks.value = JSON.parse(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    $tasks,
    $loading,
    keepItemsTasks,
    removeItemTasks,
    updateItemsTasks,
    getLocalData,
  };
});
