<template>
    <div v-if="isLoading" class="loading-container">
        <div v-if="overlay" class="loading-overlay">
            <div class="loading-spinner">
                <div class="spinner-ring" />
                <div class="spinner-ring" />
                <div class="spinner-ring" />
                <div class="spinner-ring" />
            </div>
            <p v-if="displayText" class="loading-text">
                {{ displayText }}
            </p>
        </div>

        <div v-else class="skeleton-container">
            <slot name="skeleton">
                <div class="skeleton-card">
                    <div class="skeleton-header" />
                    <div class="skeleton-content">
                        <div class="skeleton-line" />
                        <div class="skeleton-line short" />
                        <div class="skeleton-line" />
                    </div>
                </div>
            </slot>
        </div>
    </div>
    <slot v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'

interface Props {
    loading?: boolean
    text?: string
    overlay?: boolean
    size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
    loading: false,
    text: '',
    overlay: false,
    size: 'md',
})

const appStore = useAppStore()

const isLoading = computed(() => props.loading || appStore.isLoading)

const displayText = computed(() => props.text || appStore.loadingMessage || 'Cargando...')
</script>

<style scoped>
.loading-container {
    position: relative;
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}

.loading-spinner {
    position: relative;
    width: 60px;
    height: 60px;
}

.spinner-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.spinner-ring:nth-child(1) {
    animation-delay: -0.45s;
}

.spinner-ring:nth-child(2) {
    animation-delay: -0.3s;
}

.spinner-ring:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loading-text {
    margin-top: 1rem;
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
}

/* Skeleton Styles */
.skeleton-container {
    padding: 1rem;
}

.skeleton-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.skeleton-header {
    height: 2rem;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.skeleton-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.skeleton-line {
    height: 1rem;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 4px;
}

.skeleton-line.short {
    width: 60%;
}

@keyframes loading {
    0% {
        background-position: 200% 0;
    }

    100% {
        background-position: -200% 0;
    }
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .loading-overlay {
        padding: 1rem;
    }

    .loading-spinner {
        width: 50px;
        height: 50px;
    }

    .loading-text {
        font-size: 1rem;
    }
}
</style>
