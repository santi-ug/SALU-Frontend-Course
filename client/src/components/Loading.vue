<template>
    <div class="container">
        <div class="spinner"></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;

}

.spinner {
    width: 85px;
    height: 85px;
    
    border: 9px solid #0000001a;
    border-radius: 50%;
    border-right-color: #198A9A;
    
    animation: spin 1s ease infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>