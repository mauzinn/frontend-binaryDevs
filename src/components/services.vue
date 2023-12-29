<template>
    <section class="services" id="Servicos">
        <h2 class="title-section">Serviços</h2>

        <alertVue :text="alert.text" :type="alert.type" />

        <section class="services-items">
            <article class="service" v-for="service in services" :key="service.id">
                <h3>{{service.title}}</h3>
                <img src="../assets/logo.png">
                <p>{{service.text}}</p>
                <div>
                    <h4>{{service.price}}</h4>
                    <button @click="SELECT_SERVICE(service.id)">Selecionar</button>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
    import alertVue from './alert.vue'

    export default {
        name: "services",
        data() {
            return {
                services: [{
                    id: 0,
                    price: "R$ 279,99",
                    title: 'Criação de Site',
                    text: "A criação de sites inicia em 279,99, variando conforme as preferências do cliente e o prazo estabelecido."
                },
                {
                    id: 1,
                    price: "R$ 99,99",
                    title: 'Manutenção de Site',
                    text: "Serviços de manutenção para garantir o funcionamento ideal do seu site, a partir de 99,99. Personalizado conforme suas necessidades."
                },
                {
                    id: 2,
                    price: "Consulte",
                    title: 'Outro Serviço',
                    text: "Oferecemos soluções personalizadas para atender às suas necessidades específicas. Consulte-nos para obter informações sobre preços e detalhes."
                }],
                alert: {
                    text: "",
                    type: undefined
                }
            }
        },
        methods: {
            CLEAR_ALERT() {
                setTimeout(() => {
                    this.alert.text = ""
                    this.alert.type = undefined
                }, 1500)
            },
            SELECT_SERVICE(id) {
                let service = this.$store.state.services.filter(serv => serv.id == id)
                this.$store.commit("SET_SERVICE", id)
                this.alert.text = `Serviço *${service[0].title}* selecionado!`
                this.alert.type = true
                this.CLEAR_ALERT()
            }
        },
        components: {
            alertVue
        }
    }
</script>

<style>
    .services{
        background-color: #FAFAFA;
        height: 700px;
        display: flex;
        flex-direction: column;
    }

    .services-items{
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        row-gap: 20px;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .service{
        border: 1px solid #D9D9D9;
        background-color: #FBFBFB;
        width: 230px;
        height: 450px;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.3s;
    }

    .service:hover{
        transform: scale(101%);
        background-color: rgb(245, 252, 255);
        border-color: rgb(178, 231, 253);
    }

    .service h3{
        font-size: 25px;
    }

    .service p{
        font-size: 17px;
    }

    .service img{
        margin-top: 20px;
        margin-bottom: 10px;
        width: 160px;
    }

    .service div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }

    .service div h4{
        font-size: 22px;
        margin-bottom: 10px;
    }

    .service div button{
        background-color: #43B7F9;
        color: white;
        font-size: 19px;
        padding: 10px 30px;
        border: none;
        border-radius: 10px;
        cursor: pointer;

        transition: 0.3s;
    }

    .service div button:hover{
        transform: scale(103%);
        box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.349);
    }

    @media (max-width: 920px) {
        .services{
            height: 100%;
            padding: 20px 0px;
        }

        .service{
            height: 100%;
        }
    }
</style>