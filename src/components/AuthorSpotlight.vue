<template>
    <div id="author-spotlight" class="content"> 
        <div class="author_summary">
            <h3>{{ cleanAuthorName(authorName) }}</h3>
            <p>Born &ndash; died?</p>
            <p><a href="#">Web</a></p>
        </div>
        <div class="author_bio">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, facilis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, voluptate iusto consequatur, soluta voluptates deserunt excepturi sequi nobis, odio minima odit autem facilis eum modi porro accusamus dignissimos natus quod? Ipsa unde quas facere exercitationem.</p> 
        </div>
        <img :src="imageAttributer('src', authorName )" :alt="imageAttributer('alt', authorName )"/>

    </div>
</template>

<script>

export default {
    data() {
        return {
            imageSrc: `/assets/authors/`,
            imageAlt: `Photograph of Science Fiction author`,
        }
    },
    props: {
        authorName: String
    },
    methods: {
        findAuthor(name, authorRecords){
            for (let i=0; i < authorRecords.length; i++) {
                if (authorRecords[i].name === name) {
                    return authorRecords[i];
                }
            }
        },
        imageAttributer(attribute, author) {
            if (attribute === 'src') return `${this.imageSrc}${author}.jpg`
            if (attribute === 'alt') return `${this.imageAlt} ${this.cleanAuthorName(author)}`
        },
        cleanAuthorName(webSafeName) {
            return webSafeName.replace(/_/g, " ")
        }
    }
}
</script>

<style lang="scss" scoped>
#author-spotlight {
    display:flex;
    border: 1px solid;
    min-height: 10rem;
    text-align: left;
    h3 { 
        width: 40%;
        text-align: left;
        margin-left: 1rem;
    }
    .author_bio {
        margin: 0 1rem
    }
    img {
        width: 30%;
    }
 }
</style>