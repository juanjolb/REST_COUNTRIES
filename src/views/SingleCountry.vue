<template>
  <div>
    <div class="btn-back">
      <input type="button" @click="goBack" value="Back" />
    </div>
    <div class="country">
      <div class="flag">
        <img
          :src="store.$state.country[0].flags.png"
          :alt="store.$state.country.name.official"
        />
      </div>
      <div class="country-info">
        <p class="country-name">
          <b>{{ store.$state.country.name.official }}</b>
        </p>
        <span class="general-info">
          <p>
            <b>Native Name:</b>
            {{ store.$state.country.name.nativeName.por.official }}
          </p>
          <p><b>Population:</b> {{ store.$state.country.population }}</p>
          <p><b>Region:</b> {{ store.$state.country.region }}</p>
          <p>
            <b>Capital: </b
            ><span v-for="item in store.$state.country.capital">
              {{ item }}
            </span>
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountriesStore } from "@/stores/counter";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const store = useCountriesStore();
const route = useRoute();

//Actions
const goBack = () => history.back();

onMounted(async () => {
  const cca3 = route.params.cca3;
  await store.listSingleCountry(cca3);
});
</script>

<style scoped>
.btn-back > input {
  background-color: #fff;
  padding: 5px 30px;
  border: 0px;
  box-shadow: 0px 0px 5px 1px lightgray;
}
.flag {
  margin: 30px 0px;
}
.country-name {
  padding: 0px 0px 20px 0px;
  font-size: 1rem;
}
.general-info > p {
  padding: 3px 0px;
  font-size: 0.8rem;
}
</style>
