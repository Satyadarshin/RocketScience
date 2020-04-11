<template>
    <table>
        <caption>Your selected award category is the [Awarding Body] for [Award Category]</caption>
       <tbody>
            <tr 
            v-for="(award, index) in selectedAward"
            :key="index"
            >
                <td>{{ award.year }}</td>
                <td>{{ award.winner.author }}</td>
                <td>{{ award.winner.title}}</td>
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
        background-color: gray;
        color: white
    }
    td { text-align: left;
        padding: .5rem 0;
        border-bottom: 1px solid
    }
}
</style>