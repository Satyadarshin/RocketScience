<template>
    <div>
        <tr 
        v-for="(award, index) in awards"
        :key="index"
        >
            <td>{{ award.year }}</td>
            <td>{{ award.author }}</td>
            <td>{{ award.title}}</td>
        </tr>
    </div>
</template>

<script>
export default {
    data() {
        return{
            awards: ''
        }
    }
}
</script>