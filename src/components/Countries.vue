<template>
  <div>
    <div
      class="card"
      v-for="country in store.$state.countries"
      :key="country.cca3"
    >
      <router-link :to="`/${country.cca3}`">
        <div class="flag">
          <img :src="country.flags.png" :alt="country.name" />
        </div>
        <div class="country-info">
          <p class="country-name">
            <b>{{ country.name.official }}</b>
          </p>
          <span class="general-info">
            <p><b>Population:</b> {{ country.population }}</p>
            <p><b>Region:</b> {{ country.region }}</p>
            <p>
              <b>Capital: </b
              ><span v-for="item in country.capital"> {{ item }} </span>
            </p>
          </span>
        </div>
      </router-link>
    </div>
    <div class="no-results">
      <p v-if="store.$state.countries.length === 0">No results found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountriesStore } from "@/stores/counter";
import { onBeforeMount } from "vue";

//Data
const store = useCountriesStore();

onBeforeMount(async () => {
  await store.listAllCountries();
});
</script>

<style scoped>
.card {
  margin: 40px 20px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 1px lightgray;
}
.flag > img {
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.country-info {
  padding: 25px;
}
.country-info .country-name {
  font-size: 1rem;
  margin-bottom: 15px;
}
.country-info .general-info {
  font-size: 0.8rem;
}
.no-results {
  padding: 30px;
  text-align: center;
}
a {
  text-decoration: none;
  color: black;
}
</style>
