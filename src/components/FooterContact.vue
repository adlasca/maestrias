<script setup>
// Datos reales extraídos
const contact = {
    email: "lwmorales@uce.edu.ec",
    phone: "(593 2) 2551-270",
    address: "Av. América y Universitaria, Quito - Facultad de Ingeniería"
}
</script>

<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="col">
                <h4>Universidad Central del Ecuador</h4>
                <p>Facultad de Ingeniería y Ciencias Aplicadas</p>
                <p>Consejo de Posgrado</p>
            </div>
            <div class="col">
                <h4>Contacto</h4>
                <p>📧 <a :href="'mailto:' + contact.email">{{ contact.email }}</a></p>
                <p>📞 {{ contact.phone }}</p>
                <p>📍 {{ contact.address }}</p>
            </div>
            <div class="col">
                <h4>Enlaces</h4>
                <a href="#">Descargar Brochure PDF</a>
                <a href="#">Facebook</a>
                <a href="#">LinkedIn</a>
            </div>
        </div>
        <div class="copyright">
            © 2026 UCE - Maestría en Ciencias e Ingeniería de la Construcción
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #1a202c;
    color: #cbd5e0;
    padding: 4rem 2rem 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

h4 {
    color: white;
    margin-bottom: 1rem;
}

a {
    color: #cbd5e0;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
}

a:hover {
    color: var(--uce-accent);
}

.copyright {
    text-align: center;
    margin-top: 3rem;
    padding-top: 1rem;
    border-top: 1px solid #2d3748;
    font-size: 0.8rem;
}
</style>