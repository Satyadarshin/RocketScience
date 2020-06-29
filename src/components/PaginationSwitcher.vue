<template>
    <md-table-row>
        <md-table-cell>
            <md-button class="md-icon-button md-raised">
                <md-icon>keyboard_arrow_left</md-icon>
            </md-button> 
            </md-table-cell> 
            <md-table-cell>
                <button class="test">
                     <a href="#">1</a>
                </button>
                <button class="test">
                     <a href="#">2</a>
                </button>
                 <button class="test">
                     <a href="#">3</a>
                </button>
               <span> ... </span>
                <button class="test">
                     <a href="#">10</a>
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
        pagination: Number
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
    border: 1px solid gray; margin-right: .25rem;
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
        background-color: silver;
        &:hover { 
            color: white !important;
            text-decoration: none;
            background-color: grey;
        }
    }
}
</style>