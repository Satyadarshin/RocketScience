<template>
<div class="content">
    <table>
        <caption v-if="selectedAward.length === 0">Choose an Award category, above</caption>
        <caption v-else>Your selected award category is the <span>{{ who }}</span> for <span>{{ what }}</span></caption>
        <thead>
            <tr class="filter" v-if="selectedAward.length!== 0">
                <th coslpan="3">     
                     <input v-model="search" class="form-control" placeholder="Filter by year, author, or title">
                </th>
            </tr>
            <tr v-show="selectedAward.length >= 1">
                <th 
                    v-for="(column, index) in columns"
                    :key="index"
                    >
                    <span @click="sortBy(column)">{{ column }}</span>
                </th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td colspan="3">pagination buttons</td>
            </tr>
        </tfoot>
        <tbody>
            <tr 
            v-for="(award, index) in sortedWinners"
            :key="index"
            itemscope itemtype="http://schema.org/Book"
            >
                <td>{{ award.year }}</td>
                <td itemprop="author"><router-link :to="`/authors/${award.winner.author}`">{{ award.winner.author }}</router-link></td>
                <td itemprop="name">{{ award.winner.title }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
authorList
<script>
export default {
    data: () => {
        return {
            search: '',
            sortKey: 'year',
            sortDirection: 'asc',
            columns: ['Year', 'Author','Title']
        }
    },
    props: {
        who: String,
        what: String,
        selectedAward: Array
    },
    methods: {
        sortBy(sortCriteria) {
            if (sortCriteria === this.sortKey) {
                this.sortDirection = (this.sortDirection === 'asc') ? 'desc':'asc' 
            }
            this.sortKey = sortCriteria
        }
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
        sortedWinners() {
            return this.selectedAward.sort((a,b) => {
                let modifier = 1; 
                if(this.sortDirection === 'desc') modifier = -1;
                if(a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
                if(a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
                return 0;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
table {
    margin: 1rem 0;
    width: 100%;
    border-collapse: collapse;
    caption {
        padding: 1rem 0;
        background-color: $table-caption;
        color:$white;
        span {
            text-transform: capitalize;
        }
    } tbody {

    tr:nth-child(odd) {
        background-color: $lightgrey;
    }
    }
    td, th { 
        padding: .5rem  0 .5rem .25rem;
    }
    td { 
        &:first-child {
            text-align: left;
            width: 6rem
        }
        &:nth-child(2) { 
            text-align: left 
        }   
        &:last-child { 
            text-align: left; 
            padding-left: 1rem;   
        }
    } 
    thead {
        tr{
            border-bottom: 1px solid $table-border;
        }
        th { 
            text-align: left;
            &:first-child {
                width: 6rem
            }
            span {
                text-decoration: none;
                color: $oil;
                text-transform: capitalize;
            }
            cursor: pointer
        }
    }
}
</style>