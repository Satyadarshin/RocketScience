<template>
<div>

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
                    <a href="#" @click.prevent="sortBy(column)">{{ column }}</a>
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
                <td itemprop="author">{{ award.winner.author }}</td>
                <td itemprop="name">{{ award.winner.title }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

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
                this.sortDirection = this.sortDirection === 'asc' ? 'desc':'asc' 
            }
            this.sortKey = sortCriteria
        }
    },
    computed: {
        sortedWinners() {
            return this.selectedAward.sort((a, b) => {
                if (this.SortDirection === 'asc') {
                    return a[this.sortKey] > b[this.sortKey];      
                }
                return a[this.sortKey] < b[this.sortKey];
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
        &:nth-child(2) { 
            text-align: right 
        }   
        &:last-child { 
            text-align: left; padding-left: 1rem;   
        }
    } 
    thead {
        tr{
            border-bottom: 1px solid $table-border;
        }
        th {
            a {
                text-decoration: none;
                color: $oil;
                text-transform: capitalize;
            }
            cursor: pointer
        }
    }
}
</style>