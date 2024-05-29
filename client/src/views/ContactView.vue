<template>
    <Navbar />
    <div class="container">
        <div class="about">
            <h1>Contactanos</h1>
            <p>Si por cualquier motivo encuentras la necesidad de contactarte con nosotros, puedes completar el formulario a continuación y te daremos respuesta lo mas pronto posible.</p>
            <div class="about-column">
                <section class="contact" id="contact">

                    <div class="contact-form">
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input
                                type="hidden"
                                name="access_key"
                                value="df6d4c33-5ce1-4632-b408-d65124126a8a"
                            />

                            <div class="contact-form-input">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div class="contact-form-input">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div class="contact-form-input">
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                            <div class="contact-form-submit">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>

		        </section>

                <div class="about-img">
                    <img src="https://www.rover.com/blog/wp-content/uploads/a-happy-cat-min-e1670602302321.jpg" alt="cat">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style scoped>

.contact {
    width: 40%;
}

.contact-right {
	display: flex;
	width: 40%;
	flex-direction: column;
	justify-content: center;
	color: white;
}

.contact-right .contact-form .contact-form-title span {
	font-size: 4rem;
}

.contact-form-input input,
.contact-form-input textarea {
	font-family: var(--inter);
}

.contact-form-input input {
	width: 100%;
	padding: 1rem 1rem;
	margin-top: 1rem;
	border: none;
	font-size: 0.75rem;
	color: black;
    background-color: #ececec;
}

.contact-form-input textarea {
	width: 100%;
	padding: 1rem 1rem;
	margin-top: 1rem;
	min-height: 8rem;
	font-size: 0.75rem;
	border: none;
	color: black;
    background-color: #ececec;
}

.contact-form-input textarea:focus,
.contact-form-input input:focus {
	outline: 2px solid #198A9A;
}

.contact-form-submit button {
	width: 100%;
	padding: 1rem 2rem;
	margin: 2rem 0;
	border: none;
	background-color: #198A9A;
	color: rgb(255, 255, 255);
	font-size: 2rem;
	cursor: pointer;
	transition: 0.2s ease all;
}

.contact-form-submit button:hover {
	background-color: #414141;
	scale: 1.02;
	transition: 0.2s ease all;
}


.container {
    display: flex;
    justify-content: center;
}

.about {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin-top: 4rem;
}

.about-column {
    display: flex;
    margin-top: 2rem;
    gap: 3rem;
    margin-left: 15rem;
}

.about-img {
    width: 40%;
}

.about-info {
    width: 40%;
}

img {
    width: 100%;
}


p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

strong {
    font-weight: 700;
    color: #198A9A;
}


.bulletpoint {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3rem;
}

.imgprotect {
    width: 5rem;
}

.text {
    width: 50rem;
}

h1 {
    margin-bottom: 2rem;
}
</style>

