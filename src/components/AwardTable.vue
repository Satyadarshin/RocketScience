<template>
<div>
    <table>
        <caption v-if="selectedAward.length === 0">Choose an Award category</caption>
        <caption v-else>Your selected award category is the <span>{{ who }}</span> for <span>{{ what }}</span></caption>
        <thead>
            <tr>
                <th v-for="column in columns">
                    <a href="#" @click.prevent="sortBy('column')">{{ column }}</a>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr 
            v-for="(award, index) in selectedAward"
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
            sortKey: 'year',
            sortDirection: 'asc',
            columns: [] //create an array to contain the supplied array's keys to use as column headers
        }
    },
    props: {
        who: String,
        what: String,
        selectedAward: Array
    },
    methods: {
        sortBy: (sortkey) => {
        }
    },
    computed: {
        createHeaders() {
            let test = this.selectedAward[0]
            return this.columns = Object.keys(test)
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
    } 
    tr:nth-child(even) {
        background-color: $lightgrey;
    }
    td, th { 
        text-align: left;
        padding: .5rem  0 .5rem .25rem;
    }
    thead {
        border-bottom: 1px solid $table-border;
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