<template>
  <v-container class="vue-component">
    <v-card class="mx-auto" max-width="500">
      <v-card-title>Bonjour</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addTodo">
          <v-text-field
            v-model="newTodo"
            label="New Todo"
            append-icon="mdi-plus"
            @click:append="addTodo"
          ></v-text-field>
        </v-form>
        <v-list>
          <v-list-item v-for="(todo, index) in todos" :key="todo.id">
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox v-model="todo.done"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through': todo.done }"
                >
                  {{ todo.text }}
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="removeTodo(todo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { VList, VListItem, VBtn, VCard } from "vuetify/components";

const props = defineProps({
  title: String,
  onTodosChanged: {
    type: Function,
    default: () => {},
  },
});

let id = 0;

const newTodo = ref("");

const todos = ref([
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn Vue", done: false },
]);
function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false });
  newTodo.value = "";
  props.onTodosChanged(todos.value);
}

function removeTodo(todoId) {
  todos.value = todos.value.filter((todo) => todo.id !== todoId);
  props.onTodosChanged(todos.value);
}

onMounted(() => {
  props.onTodosChanged(todos.value, todos.value);
});
</script>

<style scoped>
.vue-component {
  border: 6px solid green;
  padding: 10px;
}
</style>
