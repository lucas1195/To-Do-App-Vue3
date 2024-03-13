<template>
  <v-list lines="three" select-strategy="classic">
    <v-list-subheader>General Tasks</v-list-subheader>
    <v-list-item
      v-for="(task, index) in props.tasks"
      :key="index"
      :value="index"
    >
      <template v-slot:prepend="{ isActive }">
        <v-list-item-action start>
          <v-checkbox-btn
            :name="`btn_${index}`"
            :model-value="isActive"
          ></v-checkbox-btn>
        </v-list-item-action>
      </template>
      <v-list-item-title :name="index">{{ task.title }} </v-list-item-title>
      <v-list-item-subtitle :name="index"
        >{{ task.descricao }}
      </v-list-item-subtitle>

      <template v-slot:append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-dots-vertical" color="warning" v-bind="props" />
          </template>
          <v-list>
            <v-list-item value="1">
              <v-list-item-title @click="showDialogTaskForm = true"
                >Editar</v-list-item-title
              >
            </v-list-item>
            <v-list-item value="2">
              <v-list-item-title>Deletar</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <DialogTaskForm
        :showDialog="showDialogTaskForm"
        @close="showDialogTaskForm = false"
        :task="task"
      />
    </v-list-item>
  </v-list>
</template>

<script setup>
//******IMPORTS*******"
import { onMounted } from "vue";
//******IMPORTS*******"

//******COMPOSABLES*******"

//******COMPOSABLES*******"

//******PROPS*******"
const props = defineProps({
  tasks: {
    type: Object,
  },
});
//******PROPS*******"

//******EMITS*******"

//******EMITS*******"

//******VARIAVEIS*******"
const showDialogTaskForm = ref(false);
//******VARIAVEIS*******"

//******WATCHS*******"

//******WATCHS*******"

//******COMPUTEDS*******"

//******COMPUTEDS*******"

//******LIFECYCLE HOOKS*******"
onMounted(() => {});
//******LIFECYCLE HOOKS*******"

//******METHODS*******"

//******METHODS*******"

//******OUTROS*******"

//******OUTROS*******"

//******EXPOSE*******"

//******EXPOSE*******"
</script>
