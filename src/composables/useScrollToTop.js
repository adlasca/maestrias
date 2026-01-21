import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollToTop() {
  const showScrollTop = ref(false)

  const checkScroll = () => {
    showScrollTop.value = window.scrollY > 300
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', checkScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
  })

  return {
    showScrollTop,
    scrollToTop,
  }
}
