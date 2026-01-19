<script setup>
const stats = [
    { label: 'Modalidad', value: 'Híbrida', icon: '📍' },
    { label: 'Duración', value: '2 Períodos (1 Año)', icon: '⏱️' },
    { label: 'Enfoque', value: 'BIM 3D a 7D', icon: '🏗️' },
    { label: 'Título', value: 'Magíster', icon: '🎓' }
]
</script>

<template>
    <section class="stats-section">
        <div class="grid">
            <div v-for="(stat, index) in stats" :key="index" class="stat-card">
                <div class="icon">{{ stat.icon }}</div>
                <div class="value">{{ stat.value }}</div>
                <div class="label">{{ stat.label }}</div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.stats-section {
    background-color: white;
    padding: 3rem 2rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.stat-card {
    text-align: center;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid #eee;
    transition: transform 0.3s;
}

.stat-card:hover {
    transform: translateY(-5px);
    border-color: var(--uce-blue);
}

.icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--uce-blue);
}

.label {
    color: #666;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>