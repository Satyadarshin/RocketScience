<template>
  <div class="authors content">
      <table>
      <tr>
        <th>Author</th><th>Born</th><th>Died</th>
      </tr>
      <tr v-for="(author, index) in authorList" :key="index">
        <td>{{ author.name }}</td><td> {{author.born}}</td><td>{{ author.died }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    props: {
        authorList: Array
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
            //width: 6rem
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