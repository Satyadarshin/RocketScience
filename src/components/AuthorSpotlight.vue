<template>
    <div id="author-spotlight">
        <h3>{{ authorName  }}</h3>

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
    }
}
</script>

<style lang="scss" scoped>
#author-spotlight {
    h3 {
        text-align: left;
    }
    border: 1px solid;
    min-height: 10rem
 }
</style>