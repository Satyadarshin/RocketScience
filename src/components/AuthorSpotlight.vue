<template>
    <div id="author-spotlight">
        <h3>{{ authorName  }}</h3>
        <div class="bio">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, facilis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, voluptate iusto consequatur, soluta voluptates deserunt excepturi sequi nobis, odio minima odit autem facilis eum modi porro accusamus dignissimos natus quod? Ipsa unde quas facere exercitationem.</p> 
        </div>
        <img src="https://via.placeholder.com/150"/>
    </div>
</template>

<script>

export default {
    data() {
return {
    // spotlight: 'test'
}
    },
    props: {
        authorName: String
    },
    methods: {
        findAuthor(name, authorRecords){
            for (var i=0; i < authorRecords.length; i++) {
                if (authorRecords[i].name === name) {
                    return authorRecords[i];
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#author-spotlight {

    display:flex;
    flex-direction: row;
    border: 1px solid;
    min-height: 10rem;
    text-align: left;
h3 { width: 40%;
        text-align: left;
        margin-left: 1rem;
    }
    .bio {
        margin: 0 1rem
    }
    img {
        width: 30%;
    }
 }
</style>