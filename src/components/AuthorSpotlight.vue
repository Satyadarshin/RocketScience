<template>
<div>
<h3>{{ authorName }}</h3>

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