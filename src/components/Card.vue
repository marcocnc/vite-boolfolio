<script>
export default {
    name: 'Card',

    props:{
        name: String,
        date: String,
        type: String,
        technologies: Array
    },

    methods:{
        formatData(dateString){
          const d = new Date(dateString);
          return d.toLocaleDateString();
        }
    }
}
</script>


<template>
    <div class="card p-3">
        <div class="card-title d-flex justify-content-between">
            <h3>{{ name }}</h3>
            <span>{{ formatData(date) }}</span>
        </div>
        <div class="categories-types">
            <p>
                <span class="badge bg-warning" v-for="technology in technologies" :key="technology.id">{{ technology.name }}</span>
            </p>
            <p>{{ type }}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .card{
        width: calc(100% / 3 - 40px);
        margin: 20px;
    }
</style>