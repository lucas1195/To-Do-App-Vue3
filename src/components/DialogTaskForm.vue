<template>
  <div class="pa-4 text-center">
    <v-dialog max-width="800" v-model="props.showDialog" persistent>
      <v-card title="Editar Tarefa">
        <template v-slot:text>
          <v-card class="pa-2" flat>
            <v-card-text>
              <v-text-field
                label="Titulo Task"
                clearable
                variant="outlined"
                class="mt-4"
                v-model="props.task.title"
              ></v-text-field>
              <v-text-field
                label="Descrição"
                clearable
                variant="outlined"
                class="mt-4"
                v-model="props.task.descricao"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </template>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Confirmar"
            variant="elevated"
            color="success"
            @click="
              taskStore.updateItemsTasks(props.currentIndex, updatedTask),
                emit('close')
            "
          ></v-btn>

          <v-btn
            color="red-darken-2"
            text="Fechar"
            variant="elevated"
            @click="emit('close')"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
//******IMPORTS*******"
import { onMounted } from "vue";
import { useTaskStore } from "@/store/taskStore";
//******IMPORTS*******"

//******COMPOSABLES*******"
const taskStore = useTaskStore();
//******COMPOSABLES*******"

//******PROPS*******"
const props = defineProps({
  showDialog: {
    type: Boolean,
  },
  task: {
    type: Object,
  },
  currentIndex: {
    type: Number,
  },
});
//******PROPS*******"

//******EMITS*******"
const emit = defineEmits(["close", "confirm"]);
//******EMITS*******"

//******VARIAVEIS*******"
const updatedTask = computed(() => {
  return {
    title: props.task.title,
    descricao: props.task.descricao,
  };
});
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
