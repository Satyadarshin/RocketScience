<template>
    <div class="content">
        <md-table>
            <thead>
                <md-table-row>
                    <md-table-head
                        v-for="(column, index) in columns"
                        :key="index"
                        >
                        <span @click="sortBy(column)">{{ column }}</span>
                    </md-table-head>
                </md-table-row>
            </thead>
            <tbody>
                <md-table-row 
                    v-for="author in sortedAuthors" 
                    :key="author.id"
                    itemscope itemtype="http://schema.org/author"
                >
                    <md-table-cell><router-link :to="author.name | lastFirstLastNameURL">{{ author.name }}</router-link></md-table-cell>
                    <md-table-cell>{{ author.born }}</md-table-cell>
                    <md-table-cell>{{ author.died }}</md-table-cell>
                </md-table-row>
            </tbody>
        </md-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sortKey: 'author',
            sortDirection: 'asc',
            columns: ['Author', 'Born', 'Died']
        }
    },
    props: {
        authorList: Array
    },
    methods: {
        sortBy(sortCriteria) {
            if (sortCriteria === this.sortKey) {
                this.sortDirection = (this.sortDirection === 'asc') ? 'desc':'asc' 
            }
            this.sortKey = sortCriteria
        },
    },
    filters: {
        lastFirstLastNameURL: ( lastFirstName ) => {
            //Make an SEO friendly URL.
            //Reverse to first-surname order, and replace space and commas with underscores to be properly formatted URLs
            let firstLastName = ""
            return firstLastName = lastFirstName.split(", ").reverse().join(" ").replace(/[ ,]/g, "_")
        }
    },
    computed: {
        sortedAuthors() {
            return this.authorList.sort( (a,b) => {
                let modifier = 1; 
                if(this.sortDirection === 'desc') modifier = -1
                if(a[this.sortKey] < b[this.sortKey]) return -1 * modifier
                if(a[this.sortKey] > b[this.sortKey]) return 1 * modifier
                return 0;
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>