import { defineStore } from 'pinia'

export const useCountriesStore = defineStore({
  id: 'countries',
  state: () => ({
    countries: [] = [],
    country: {} = {}
  }),
  actions: {
      async listAllCountries(){
        try {
          const response = await fetch('https://restcountries.com/v3.1/all')
          this.countries = await response.json()
        }
        catch(e){
          console.log(e);
        }
     },
      async filter(name: string, region: string){
        try {
          
          if (name.length && region.length){
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            if (response.status === 200) {
              const data = await response.json()
              this.countries = data.filter( (item: {}) => item.region === region)
            } else {
              this.countries = [];
            }
            return;
          } 

          if (name.length && !region.length){
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            response.status === 200 ? this.countries = await response.json() : this.countries = []
            return;
          }

          if (!name.length && region.length){
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
            response.status === 200 ? this.countries = await response.json() : this.countries = []
            return;
          }
          
          if (!name.length && !region.length) {
            this.listAllCountries();
            return;
          }
        }
        catch(e){
          console.log(e);
        }
     },
     async listSingleCountry(cca3: string | string[]){
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
        this.country = await response.json()
      } catch (e) 
      {
        console.log(e);
      }
     }
  }
})
