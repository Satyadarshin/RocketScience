<template>
    <md-table-row>
        <md-table-cell>
            <md-button class="md-icon-button md-raised">
                <md-icon>keyboard_arrow_left</md-icon>
            </md-button> 
            </md-table-cell> 
            <md-table-cell>
                <button v-for="page in pagination" class="test">
                     <a href="#">{{page}}</a>
                </button>
            </md-table-cell>
            <md-table-cell>
            <md-button class="md-icon-button md-raised">
                <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
        </md-table-cell>
    </md-table-row>
</template>

<script>
export default {
    data(){
        return {
            page: 1
        }
    },
    props: {
        pagination: Array
    },
    computed: {
        // pages() {
        //     return pages = this.pagination
        // } 
    }
}
</script>

<style lang="scss" scoped>
.test { 
    //display:block;
    width: 1.9rem;
    border-radius: 3px; 
    height: 2.1rem;
    border: 1px solid #949494; 
    margin-right: .25rem;
    a { 
        color: black !important; 
        font-size: .9rem;
        height: 2rem; 
        padding-top: .25rem;  
        padding-bottom: .25rem; 
        line-height: 1.9;
        width: 1.8rem; 
        margin-left: -.5rem; 
        padding:0;
        display: block;
        border-radius: 3px;
        border: 1px solid white;
        background-color: #e0e0e0;
        &:hover { 
            color: white !important;
            text-decoration: none;
            background-color: grey;
        }
    }
}
</style>