<template>
    <section class="about" id="Sobre">
        <section class="about-text">
            <h2>Binary Devs</h2>

            <p>Somos uma empresa focada em trazer a tecnologia de sites para integrar seus serviços 
                ou necessidades a uma forma fácil e intuitiva que possa alavancar seus negócios.Trabalhamos com serviços 
                que começam de apenas Front end básicos ou aplicações Full stack, 
                nossas tecnologias usadas podem variar de HTML, CSS, JS ou Vue.js para o Frontend, Node para o Backend.</p>
        </section>

        <img src="../assets/logo.png" class="about-image">
    </section>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style>
    .about-text{
        text-align: center;
        width: 500px;
    }

    .about-text h2{
        color: #1A80F9;
        font-size: 38px;
        margin-bottom: 10px;
    }

    .about-text p{
        font-size: 21px;
    }

    .about{
        display: flex;
        justify-content: center;
        align-items: center; 
        gap: 30px;
        height: 600px;
    }

    .about-image{
        width: 300px;
    }

    @media (max-width: 510px) {
        .about-text{
            width: 100%;
        }

        .about{
            flex-direction: column;
            justify-content: center;
        }

        .about-image{
            width: 60%;
        }

        .about-text p{
            font-size: 19px;
        }
    }
</style>