<template>
  <div class="form-controls">
    <input
      type="text"
      name="input"
      placeholder="Search for a country..."
      @keyup="filter()"
      v-model="name"
    />
    <select name="select" v-model="region" @change="filter()">
      <option value="">Filter all regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useCountriesStore } from "@/stores/counter";
import { ref } from "vue";

//Data
const store = useCountriesStore();
const name = ref("");
const region = ref("");

//Actions
const filter = () => store.filter(name.value, region.value);
</script>

<style scoped>
input {
  width: 100%;
  padding: 18px;
  background-color: #fff;
  border: 0px;
  box-shadow: 0px 0px 5px 1px lightgrey;
  border-radius: 3px;
  margin-bottom: 40px;
}
input::placeholder {
  color: lightgrey;
}
select {
  min-width: 200px;
  padding: 15px;
  border: 0px;
  box-shadow: 0px 0px 5px 1px lightgrey;
  border-radius: 3px;
  background-color: #fff;
}
</style>
