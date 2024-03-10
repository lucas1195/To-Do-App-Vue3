<template>
  <div>
    <v-card class="pa-2">
      <v-card-title> Adicionar uma Nova Task </v-card-title>
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
        <v-btn @click="addTask" append-icon="$vuetify" variant="outlined">
          Add Task
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-list lines="three" select-strategy="classic">
      <v-list-subheader>General Tasks</v-list-subheader>
      <v-list-item v-for="(task, index) in tasks" :key="index" :value="index">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn
              :name="index"
              :model-value="isActive"
            ></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-title :name="index">{{ task.title }} </v-list-item-title>
        <v-list-item-subtitle :name="index"
          >{{ task.descricao }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
//******IMPORTS*******"
import { onMounted } from "vue";
//******IMPORTS*******"

//******COMPOSABLES*******"

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

  tasks.value.push(params);

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
