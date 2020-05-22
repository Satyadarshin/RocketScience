<template>
  <div class="authors content">
      <table>
          <thead>
            <th 
                v-for="(column, index) in columns"
                :key="index"
                >
                <span @click="sortBy(column)">{{ column }}</span>
            </th>
          </thead>
        <tbody>
        <tr v-for="author in sortedAuthors" :key="author.id">
            <td><router-link :to="author.name | lastFirstLastNameURL">{{ author.name }}</router-link></td><td>{{ author.born }}</td><td>{{ author.died }}</td>
        </tr>
        </tbody>
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