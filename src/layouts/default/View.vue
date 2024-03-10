<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-avatar="@/assets/profilePic.jpeg"
          subtitle="To-Do List"
          title="Lucas Laurindo"
        >
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <router-link v-for="(item, i) in menuItems" :to="item.to">
        <v-list :lines="false" density="compact" nav>
          <v-list-item :key="i" :value="item" color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </router-link>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>To-Do List App</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
const menuItems = computed(() => {
  return [
    { text: "Home", icon: "mdi-folder", to: "/" },
    { text: "About Us", icon: "mdi-account-multiple", to: "/about" },
  ];
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: #505050;
}
</style>
