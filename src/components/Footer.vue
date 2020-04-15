<template>
    <footer>
        <div class="upper-footer">
            <p>Rocket Science Copyright Satyadarshin</p>
        </div>
    </footer>
</template>

<script>

</script>

<style lang="scss" scoped>
footer {
    width: 100%;
    background-color: $oil;
    .upper-footer {
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
        height: 10vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        p { 
            width: 30%; 
            font-weight: bold;
            color: $white;
            text-align: left
        }
    }
}
</style>