<template>
    <div>
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
                    v-for="author in paginatedTable"
                    :key="author.id"
                    itemscope itemtype="http://schema.org/author"
                >
<<<<<<< HEAD
                    <md-table-cell><router-link :to="author.name | lastFirstLastNameURL">{{ author.name }}</router-link></md-table-cell>
=======
                    <!-- <md-table-cell>{{ author.name }}</md-table-cell> -->
                    <md-table-cell><router-link :to="'/authors/' + lastFirstLastNameURL(author.name)">{{ author.name }}</router-link></md-table-cell>
>>>>>>> will-050620
                    <md-table-cell>{{ author.born | dateFormat }}</md-table-cell>
                    <md-table-cell>{{ author.died | dateFormat}}</md-table-cell>
                </md-table-row>
            </tbody>
        </md-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sortKey: 'name',
            sortDirection: 'asc',
            columns: ['name', 'born', 'died'],
            theDate: '',
            pageSize:10,
            currentPage:1
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
        lastFirstLastNameURL: ( lastFirstName ) => {
            //Make an SEO friendly URL.
            //Reverse to first-surname order, and replace space and commas with underscores to be properly formatted URLs
            let firstLastName = ""
            return firstLastName = lastFirstName.split(", ").reverse().join(" ").replace(/[ ,]/g, "_")
        },

    },
    filters: {
       dateFormat: (bornDied) => {
           if (bornDied === '') return
            const months = {
                "01": "January",
                "02": "February",
                "03": "March",
                "04": "April",
                "05": "May",
                "06": "June",
                "07": "July",
                "08": "August",
                "09": "September",
                "10": "October",
                "11": "November",
                "12": "December"
            };
            const date_components = bornDied.split("-");
            const year = date_components[0];
            const month = months[date_components[1]];
            const day = date_components[2];
            const current = `${day} ${month} ${year}`;
            return current
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
        },
        pageCount() {
            let length = this.sortedAuthors.length
            return Math.ceil(length/this.pageSize)
        }, 
        paginatedTable() {
            const start = this.currentPage * this.pageSize
            const end = start +this.pageSize
            return this.sortedAuthors.slice(start, end)
        }
    }
}
</script>

<style lang="scss" scoped>
th {
    text-transform: capitalize;
    cursor: pointer;
}
</style>
