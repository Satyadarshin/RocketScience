<template>
<div>
    <table>
        <caption v-if="selectedAward.length === 0">Choose an Award category</caption>
        <caption v-else>Your selected award category is the <span>{{ who }}</span> for <span>{{ what }}</span></caption>
        <thead>
            <tr>
                <th @click="sortBy('year')">Award Year</th>
                <th @click="sortBy('author')">Author</th>
                <th @click="sortBy('title')">Title</th>
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
            sortDirection: 'asc'
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
            cursor: pointer
        }
    }
}
</style>