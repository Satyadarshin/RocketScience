<template>
  <div class="authors content">
      <table>
        <th 
            v-for="(column, index) in columns"
            :key="index"
            >
            <span @click="sortBy(column)">{{ column }}</span>
        </th>
        <tr v-for="(author, index) in sortedAuthors" :key="index">
            <td><router-link :to="author.name">{{ author.name }}</router-link></td><td>{{ author.born }}</td><td>{{ author.died }}</td>
        </tr>
    </table>
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
        reverseLastFirstName( lastFirstName ) {
            let firstLastName = ""
            return firstLastName = lastFirstName.split(", ").reverse().join(" ");
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
    },
    mounted: {
        insertFirstLastName() {
            return this.authorList.forEach( (a) => {
                a.alternateName = this.reverseLastFirstName( a.name )
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
    } 
    td, th { 
        padding: .5rem  0 .5rem .25rem;
    }
    td { 
        &:first-child {
            text-align: left;
        }
        &:nth-child(2) { 
            text-align: right 
        }   
        &:last-child { 
            text-align: left; 
            padding-left: 1rem;   
        }
    } 
    tbody {
        tr:nth-child(odd) {
            background-color: $lightgrey;
        }
    }
    thead {
        tr{
            border-bottom: 1px solid $table-border;
            th { 
                &:first-child {
                    text-align: left;
                    width: 12rem
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
}
</style>