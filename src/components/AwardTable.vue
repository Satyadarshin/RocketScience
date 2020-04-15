<template>
    <table>
        <caption>Your selected award category is the [Awarding Body] for [Award Category]</caption>
        <thead>
            <tr>
                <th>Award Year</th>
                <th>Author</th>
                <th>Title</th>
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
</template>

<script>
export default {
    props: {
        selectedAward: {
            type: Object,
            default: function() {
                return {
                    selectedAward: {
                        year: '2019',
                        winner: {
                            title: 'The Calculating Stars',
                            author: 'Mary Robinnette Kowal'
                        }
                    }
                }
            }
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
        color: white
    } 
    tr:nth-child(odd) {
        background-color: $oil;
    }
    td, th { 
        text-align: left;
        padding: .5rem 0;
    }
    td {
        border-top: 1px solid $table-border;
    }
}
</style>