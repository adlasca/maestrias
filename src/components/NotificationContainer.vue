<template>
    <Teleport to="body">
        <TransitionGroup name="notification" tag="div" class="notification-container" @enter="onEnter" @leave="onLeave">
            <div v-for="notification in notifications" :key="notification.id" :class="[
                'notification',
                `notification--${notification.type}`,
                { 'notification--dismissible': notification.dismissible },
            ]" role="alert" :aria-live="notification.type === 'error' ? 'assertive' : 'polite'">
                <div class="notification__content">
                    <div class="notification__icon">
                        <component :is="getIcon(notification.type)" />
                    </div>
                    <div class="notification__body">
                        <h4 v-if="notification.title" class="notification__title">
                            {{ notification.title }}
                        </h4>
                        <p class="notification__message">
                            {{ notification.message }}
                        </p>
                    </div>
                    <button v-if="notification.dismissible" class="notification__close" aria-label="Cerrar notificación"
                        @click="dismiss(notification.id)">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>
                </div>
                <div v-if="notification.progress" class="notification__progress"
                    :style="{ width: `${notification.progress}%` }" />
            </div>
        </TransitionGroup>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, onUnmounted, h } from 'vue'

export type NotificationType = 'success' | 'error' | 'warning' | 'info'

export interface Notification {
    id: string
    type: NotificationType
    title?: string
    message: string
    duration?: number
    dismissible?: boolean
    progress?: number
}

const notifications = ref<Notification[]>([])
let notificationId = 0

const add = (
    type: NotificationType,
    message: string,
    options: Partial<Omit<Notification, 'id' | 'type' | 'message'>> = {},
) => {
    const id = `notification-${++notificationId}`
    const notification: Notification = {
        id,
        type,
        message,
        duration: 5000,
        dismissible: true,
        ...options,
    }

    notifications.value.push(notification)

    if (notification.duration && notification.duration > 0) {
        setTimeout(() => {
            dismiss(id)
        }, notification.duration)
    }

    return id
}

const dismiss = (id: string) => {
    const index = notifications.value.findIndex((n) => n.id === id)
    if (index > -1) {
        notifications.value.splice(index, 1)
    }
}

const clear = () => {
    notifications.value = []
}

const success = (message: string, options?: Partial<Notification>) =>
    add('success', message, options)

const error = (message: string, options?: Partial<Notification>) => add('error', message, options)

const warning = (message: string, options?: Partial<Notification>) =>
    add('warning', message, options)

const info = (message: string, options?: Partial<Notification>) => add('info', message, options)

// Iconos SVG inline
const CheckIcon = () =>
    h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
        h('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' }),
    ])

const ErrorIcon = () =>
    h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
        h('path', {
            d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
        }),
    ])

const WarningIcon = () =>
    h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
        h('path', { d: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z' }),
    ])

const InfoIcon = () =>
    h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
        h('path', {
            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
        }),
    ])

const getIcon = (type: NotificationType) => {
    switch (type) {
        case 'success':
            return CheckIcon
        case 'error':
            return ErrorIcon
        case 'warning':
            return WarningIcon
        case 'info':
            return InfoIcon
    }
}

// Animaciones
const onEnter = (el: Element) => {
    const element = el as HTMLElement
    element.style.transform = 'translateX(100%)'
    element.style.opacity = '0'

    requestAnimationFrame(() => {
        element.style.transition = 'all 0.3s ease-out'
        element.style.transform = 'translateX(0)'
        element.style.opacity = '1'
    })
}

const onLeave = (el: Element) => {
    const element = el as HTMLElement
    element.style.transform = 'translateX(0)'
    element.style.opacity = '1'

    requestAnimationFrame(() => {
        element.style.transition = 'all 0.3s ease-in'
        element.style.transform = 'translateX(100%)'
        element.style.opacity = '0'
    })
}

// Cleanup on unmount
onUnmounted(() => {
    clear()
})

// Exponer funciones globalmente
defineExpose({
    add,
    dismiss,
    clear,
    success,
    error,
    warning,
    info,
})
</script>

<style scoped>
.notification-container {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    max-width: 400px;
    pointer-events: none;
}

.notification {
    margin-bottom: 0.5rem;
    pointer-events: auto;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.notification__content {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    min-width: 300px;
}

.notification__icon {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.125rem;
}

.notification__body {
    flex: 1;
}

.notification__title {
    margin: 0 0 0.25rem 0;
    font-size: 0.875rem;
    font-weight: 600;
}

.notification__message {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.4;
}

.notification__close {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.notification__close:hover {
    opacity: 1;
}

.notification__progress {
    height: 3px;
    background: currentColor;
    transition: width 0.3s ease;
}

/* Tipos de notificación */
.notification--success {
    background: rgba(16, 185, 129, 0.95);
    color: white;
    border-left: 4px solid #10b981;
}

.notification--error {
    background: rgba(239, 68, 68, 0.95);
    color: white;
    border-left: 4px solid #ef4444;
}

.notification--warning {
    background: rgba(245, 158, 11, 0.95);
    color: white;
    border-left: 4px solid #f59e0b;
}

.notification--info {
    background: rgba(59, 130, 246, 0.95);
    color: white;
    border-left: 4px solid #3b82f6;
}

/* Animaciones */
.notification-enter-active,
.notification-leave-active {
    transition: all 0.3s ease;
}

.notification-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.notification-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.notification-move {
    transition: transform 0.3s ease;
}

/* Responsive */
@media (max-width: 480px) {
    .notification-container {
        left: 1rem;
        right: 1rem;
        max-width: none;
    }

    .notification__content {
        min-width: auto;
    }
}
</style>
