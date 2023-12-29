<template>
    <header>
        <section class="header-main">
            <div>
                <a href="#Top" class="h1-link"><h1 class="title">Binary<span>Devs</span></h1></a>
                <button class="menu" @click="MENU">
                    <span class="material-symbols-outlined">
                    menu
                    </span>
                </button>
            </div>

            <ul class="nav" v-show="SHOW_MENU">
                <li><a href="#Sobre" class="link-nav">Sobre</a></li>
                <li><a href="#Qualidades" class="link-nav">Qualidades</a></li>
                <li><a href="#Servicos" class="link-nav">Serviços</a></li>
                <li class="contact-us"><a href="#Contate-me" class="link-nav">Contate-nos</a></li>
            </ul>
        </section>

        <section class="header-height" id="#Top"></section>
    </header>
</template>

<script>
    export default {
        name: "header",
        data() {
            return {
                SHOW_MENU: true
            }
        },
        methods: {
            HEADER_HEIGHT() {
                const headerHeight = document.querySelector('.header-height')

                if (this.SHOW_MENU) {
                    headerHeight.style.height = "222px"
                } else {
                    headerHeight.style.height = "102px"
                }
            },
            MENU() {
                this.SHOW_MENU = !this.SHOW_MENU
                this.HEADER_HEIGHT()
            }
        },
        created() {
            if (window.innerWidth <= 630) {
                this.SHOW_MENU = false
            }
        }
    }
</script>

<style>
    .header-main{
        background-color: var(--headerBackground);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 25px;
        position: fixed;
        top: 0;
        width: 97.5%;
        z-index: 6;
    }

    .header-height{
        width: 100%;
        height: 100px;
    }

    .nav{
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
    }

    .nav li{
        margin-right: 20px;
        color: black;
        transition: 0.3s;
    }

    .nav li:hover{
        transform: scale(103%);
        text-shadow: 1px 4px 6px rgb(0, 89, 255);
    }

    .link-nav{
        text-decoration: none;
        font-size: 20px;
        color: currentColor;
    }

    .contact-us{
        border: 1px solid #3278FF;
        background-color: #81C2FF;
        padding: 5px;
        white-space: nowrap;
        border-radius: 8px;
    }

    .title{
        color: var(--header-title);
        font-size: 38px;
        cursor: pointer;
        transition: 0.3s;
    }

    .title:hover{
        transform: scale(103%);
        text-shadow: 1px 4px 6px rgb(0, 174, 255);
    }

    .title span{
        color: black;
        font-size: 24px;
    }

    .h1-link{
        text-decoration: none;
    }
    .header-main div{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 80%;
    }

    .menu{
        display: none;
        justify-content: center;
        align-items: center;
        padding: 13px;
        border-radius: 50%;
        transform: scale(1.2);
        border: 1px solid currentColor;
        color: rgb(33, 202, 146);
        background: none;
        cursor: pointer;
        transition: 0.3s;
    }

    .menu:focus{
        transform: scale(1.25);
        color: red;
    }

    @media (max-width: 630px) {
        .nav{
            flex-direction: column;
        }

        .header-main{
            flex-direction: column;
        }

        .menu{
            display: flex;
        }
    }
</style>