<template>
    <footer>
        <div class="upper-footer">
            <p>&copy; 2020 Satyadarshin Perry</p>
        </div>
    </footer>
</template>

<script>

</script>

<style lang="scss" scoped>
footer {
    margin-top: 3rem;
    width: 100%;
    background-color: $oil;
    height: 10rem;
    .upper-footer {
        max-width: 512px;
        margin-left: auto;
        margin-right: auto;
        height: 10vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        p { 
            font-weight: bold;
            color: $white;
            text-align: left
        }
    }
}
</style>