<template>
    <Navbar />
    <div class="container">
        <div class="about">
            <h1>Nuestra Misión</h1>
            <div class="about-column">

                <div class="about-img">
                    <img src="https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU-1200-80.jpg" alt="dog">
                </div>
                <div class="about-info">
                    <div class="bulletpoint">
                        <div class="imgprotect">
                            <img src="/SALU ONLY LOGO.png" alt="logo">
                        </div>
                        <div class="text">
                            <p>En <strong>SALU</strong>, nos dedicamos a la <strong>salud y bienestar de tu mascota.</strong> Nuestro objetivo es ofrecer productos de calidad y servicios de primera para que tu mascota se sienta feliz y saludable. </p>
                        </div>
                    </div>
                    <div class="bulletpoint">
                        <div class="imgprotect">
                            <img src="/SALU ONLY LOGO.png" alt="logo">
                        </div>
                        <div class="text">
                            <p>Contamos con una amplia variedad de productos <strong>para perros, gatos y mas animales</strong>, desde alimentos hasta juguetes y accesorios. Además, ofrecemos servicios de veterinaria para que tu mascota esté siempre en las mejores manos.</p>
                        </div>
                    </div>
                    <div class="bulletpoint">
                        <div class="imgprotect">
                            <img src="/SALU ONLY LOGO.png" alt="logo">
                        </div>
                        <div class="text">
                            <p>En <strong>SALU</strong>, nos preocupamos por el bienestar de tu mascota tanto como tú. ¡Ven a visitarnos y descubre todo lo que tenemos para ofrecerte!</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style scoped>
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

</style>
