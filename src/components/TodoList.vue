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
            <v-list-item>
              <v-list-item-title><v-btn>Editar</v-btn></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><v-btn>Deletar</v-btn></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
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
