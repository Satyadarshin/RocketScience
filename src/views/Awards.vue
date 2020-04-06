<template>
    <div>
        <h1>Science Fiction Literary Awards</h1>
        <button @click="viewAwardCategory(hugoAward, 'bestNovel')">Hugo Award for Best Novel</button>
        <button @click="viewAwardCategory(nebulaAward, 'bestNovel')">Nebula Award for Best Novel</button>
        <!-- <awardTable :selectedAward="displayCategory" /> -->
    </div>
</template>

<script>
import awardTable from '@/components/AwardTable.vue'
import awardDataService from '@/services/award-data-service.js'

export default { 
    data() {
        return {
            hugoAward: 'hugo_award',
            nebulaAward: 'nebula_award',
            displayCategory: {}
        }
    },
    props: {
        selectedAward: Object
    },
    methods: { 
        viewAwardCategory(category) {
            awardDataService.fetchAward(category)
            .then((jsonData) => {
                this.displayCategory = jsonData.results
            })
            .catch((error) => {
                console.error('Error:', error);
            })
        }
    },
    components: {
        awardTable
    }
}
</script>
