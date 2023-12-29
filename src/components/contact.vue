<template>
    <section class="contact" id="Contate-me">
        <h2 class="title-section">Contate-nos</h2>

        <alertVue :text="this.alert.text" :type="this.alert.type" />

        <form class="form" @submit="CONTACT_SEND">
            <div>
                <input type="email" class="input" v-model="email" placeholder="example@email.com" required> 
                <input type="text" class="input" v-model="name" placeholder="example" required> 
            </div>

            <textarea type="text" class="input textarea" v-model="message" placeholder="hello i am example and... " required></textarea>

            <button class="send-button">Enviar</button>
        </form>
    </section>
</template>

<script>
    import alertVue from './alert.vue'

    export default {
        name: "contact",
        data() {
            return {
                email: "",
                name: "",
                message: "",
                alert: {
                    text: "",
                    type: undefined
                }
            }
        },
        components: {
            alertVue
        },
        methods: {
            CREATE_ALERT(text, type) {
                this.alert.text = text
                this.alert.type = type

                setTimeout(() => {
                    this.alert.text = ""
                    this.alert.type = undefined
                }, 1500)
            },
            async CONTACT_SEND(e) {
                e.preventDefault()

                let URL = "http://localhost:3000/email/send"

                if (this.$store.state.service != -1) {
                    let service = this.$store.state.services.filter(ser => ser.id == this.$store.state.service)

                    console.log(service)

                    let DATA = {
                        email: this.email,
                        name: this.name,
                        message: this.message,
                        service: service[0].title
                    }

                    let request = await fetch(URL, {
                        method: 'POST',
                        body: JSON.stringify(DATA),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(async(res) => {
                        let response = await res.json()

                        if (response.result) {
                            this.message = ""
                            this.name = ""
                            this.email = ""
                            this.CREATE_ALERT("Enviado com sucesso!", true)
                        } else {
                            this.CREATE_ALERT(response.error, false)
                        }
                    })
                } else {
                    this.CREATE_ALERT("Selecione um serviço para nos contatar.", false)
                }
            }
        }
    }
</script>

<style scoped>
    .title-section{
        color: white;
        margin-bottom: 40px;
    }
</style>

<style>
    .contact{
        background-color: var(--contact-background);
        width: 600px;
        height: 400px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.205);
        border-radius: 20px;
    }

    .input{
        width: 95%;
        padding: 14px 10px;
        font-size: 17px;
        border: none;
        border-radius: 10px;
        outline: none;
        margin-bottom: 10px;
        transition: 0.3s;
    }

    .textarea{
        height: 130px;
        resize: none;
    }

    .form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .form div{
        display: flex;
        flex-direction: row;
        gap: 10px;
        width: 98.5%;
    }

    .send-button{
        background-color: #32e098;
        color: white;
        font-size: 19px;
        padding: 10px 30px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 10px;

        transition: 200ms;
    }

    .send-button:hover{
        transform: scale(103%);
    }

    .input:focus{
        transform: scale(103%);
        box-shadow: 1px 3px 6px rgba(0, 174, 255, 0.219);
        background-color: rgb(246, 253, 255);
    }

    @media (max-width: 610px) {
        .contact{
            width: 100%;
            border-radius: 0px;
            box-shadow: none;
            padding: 20px 0px;
            height: 100%;
        }

        .input{
            width: 80%;
        }

        .form div{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
</style>