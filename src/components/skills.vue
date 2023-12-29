<template>
    <section class="skills" id="Qualidades">
        <h2 class="title-section">Qualidades</h2>

        <section class="center-div">
            <section class="cards">
                <article class="card" v-for="skill in skills" :key="skill.id">
                    <h3>
                        <span class="material-symbols-outlined icon">
                        {{skill.icon}}
                        </span>
                        {{skill.title}}
                    </h3>
                    <p>{{skill.text}}</p>
                </article>
            </section>
        </section>
    </section>
</template>

<script>
    export default {
        name: "skills",
        data() {
            return {
                skills: [{
                    icon: "quick_reorder",
                    id: 0,
                    title: "Entrega estimada",
                    text: "Damos um prazo estimado fixo para a entrega do projeto, qualquer atraso pode ser ocasionado em descontos no serviço."
                },
                {
                    icon: "payments",
                    id: 1,
                    title: "Reembolso em 7 dias",
                    text: "Comprometemo-nos com a qualidade dos nossos serviços. Se, por qualquer motivo, você não estiver satisfeito nos primeiros 7 dias após a contratação, oferecemos uma garantia de reembolso total."
                },
                {
                    icon: "verified_user",
                    id: 2,
                    title: "Garantia de Satisfação",
                    text: "Nossa prioridade é a sua satisfação. Se, por algum motivo, você não estiver completamente satisfeito com nosso serviço, faremos o necessário para corrigir e garantir sua felicidade."
                },
                {
                    icon: "find_in_page",
                    id: 0,
                    title: "Transparência Total",
                    text: "Mantemos total transparência em todas as etapas do processo. Desde o início até a conclusão do projeto, você terá acesso a informações detalhadas para acompanhar e entender cada fase."
                }]
            }
        }
    }
</script>

<style>
    .skills{
        height: 450px;
        display: flex;
        flex-direction: column;
    }

    .title-section{
        font-size: 34px;
        text-align: center;
    }

    .cards{
        display: flex;
        flex-wrap: wrap;
        width: 900px;
        gap: 120px;
        row-gap: 30px;
        justify-content: center;
        align-items: center;
    }

    .card{
        background-color: #FBFBFB;
        border: 1px solid #D9D9D9;
        padding: 15px;
        width: 350px;
        border-radius: 10px;
        transition: 0.3s;
        cursor: pointer;
        min-height: 110px;
    }

    .icon{
        color: rgb(18, 212, 18);
    }

    .center-div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .card:hover{
        transform: scale(102%);
        box-shadow: 1px 4px 6px rgba(0, 255, 55, 0.151);
    }

    .card h3{
        font-size: 24px;
        margin-bottom: 8px;
    }

    .card p{
        color: rgb(26, 26, 26);
    }

    @media (max-width: 910px) {
        .cards{
            width: 100%;
        }

        .skills {
            height: 100%;
        }
    }

    @media (max-width: 360px) {
        .card{
            width: 80%;
        }
    }
</style>