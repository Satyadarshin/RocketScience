<template>
    <div>
        <tr 
        v-for="(bestNovel, index) in bestNovels"
        :key="index"
        >
            <td>{{ bestNovel.year }}</td>
            <td>{{ bestNovel.author }}</td>
            <td>{{ bestNovel.title}}</td>
        </tr>
    </div>
</template>

<script>
export default {
    props: {
        bestNovel: Object
    }
}
</script>