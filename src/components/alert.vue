<template>
    <section class="text-align">
        <h3 v-show="type" class="check">
            <span class="material-symbols-outlined">
            check_circle
            </span>
            {{text}}
        </h3>

        <h3 v-show="type == false" class="error">
            <span class="material-symbols-outlined">
            error
            </span>
            {{text}}
        </h3>
    </section>
</template>

<script>
    export default {
        name: 'alert',
        props: {
            text: String,
            type: Boolean
        }
    }
</script>

<style>
    .error{
        color: red;
    }

    .check{
        color: rgb(2, 199, 2);
    }

    .text-align{
        text-align: center
    }

    .text-align h3{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text-align h3 span{
        margin-right: 6px;
    }
</style>