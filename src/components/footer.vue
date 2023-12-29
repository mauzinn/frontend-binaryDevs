<template>
    <footer class="footer">
        <contactVue />
    </footer>
</template>

<script>
    import contactVue from './contact.vue'

    export default {
        name: "footer",
        components: {
            contactVue
        }
    }
</script>

<style>
    .footer{
        background-color: var(--footer-background);
        width: 100%;
        padding: 20px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>