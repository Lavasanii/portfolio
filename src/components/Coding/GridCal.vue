<template>
    <div class="container">
        <div class="card">
            <DataTable v-model:filters="filters" stripedRows  :value="products" showGridlines tableStyle="min-width: 50rem" paginator
                :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]">
                <template #header>
                    <InputText v-model="filters['global'].value" placeholder="suchen ..." />
                </template>
                <template #empty> Keine Daten gefunden</template>
                <template #loading> Laden.. </template>
                <Column field="name" header="Name" sortable></Column>
                <Column field="email" header="Email" sortable></Column>
                <Column field="age" header="Age" sortable></Column>
                <Column field="birthdate" header="Birthdate" sortable></Column>
            </DataTable>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref,} from 'vue';
import moment from 'moment';
import { FilterMatchMode } from 'primevue/api';

const products = ref([

{
        name: 'John Doe',
        email: 'john@example.com',
        birthdate: '1990-05-15' // Beispielgeburtstag im ISO-Format (YYYY-MM-DD)
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        birthdate: '1985-10-22' // Beispielgeburtstag im ISO-Format (YYYY-MM-DD)
    },
    // Füge weitere Daten hinzu...
]);

const filters = ref();

// Define Filters
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};
initFilters();


// Berechne das Alter basierend auf dem Geburtsdatum
// Mit Moment.js
const calculateAge = () => {
    const today = moment();
    products.value.forEach(person => {
        const pDate = moment(person.birthdate);
        const diffyear = today.year() - pDate.year();
        person.age = diffyear;
    });

};
calculateAge();

</script>





<style>
.container {
    padding-left: 16px;
    padding-right: 16px;
}
</style>