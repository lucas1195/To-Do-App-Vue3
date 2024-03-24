<template>
  <div>
    <v-card class="pa-2">
      <v-card-title> Adicionar uma Nova Tarefa </v-card-title>
      <v-card-text>
        <v-text-field
          label="Titulo Task"
          clearable
          variant="outlined"
          class="mt-4"
          v-model="model.title"
        ></v-text-field>
        <v-text-field
          label="Descrição"
          clearable
          variant="outlined"
          class="mt-4"
          v-model="model.descricao"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="addTask"
          append-icon="$vuetify"
          variant="outlined"
          color="warning"
        >
          Add Task
        </v-btn>
      </v-card-actions>
    </v-card>
    <TodoList />
  </div>
</template>

<script setup>
//******IMPORTS*******"
import { onMounted } from "vue";
import { useTaskStore } from "@/store/taskStore";
import TodoList from "@/components/TodoList";
//******IMPORTS*******"

//******COMPOSABLES*******"
const taskStore = useTaskStore();
//******COMPOSABLES*******"

//******PROPS*******"

//******PROPS*******"

//******EMITS*******"

//******EMITS*******"

//******VARIAVEIS*******"
const model = ref({
  title: undefined,
  descricao: undefined,
});

const tasks = ref([]);
//******VARIAVEIS*******"

//******WATCHS*******"

//******WATCHS*******"

//******COMPUTEDS*******"

//******COMPUTEDS*******"

//******LIFECYCLE HOOKS*******"
onMounted(() => {});
//******LIFECYCLE HOOKS*******"

//******METHODS*******"
const addTask = () => {
  const params = {
    title: model.value.title,
    descricao: model.value.descricao,
  };

  taskStore.keepItemsTasks(params);

  model.value = {
    title: "",
    descricao: "",
  };
};
//******METHODS*******"

//******OUTROS*******"

//******OUTROS*******"

//******EXPOSE*******"

//******EXPOSE*******"
</script>
