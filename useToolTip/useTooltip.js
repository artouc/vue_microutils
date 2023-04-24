export const useToolTip = () => {
    const toolTipDisplayFlg = ref(false)
    const toolTipXPos = ref(0)
    const toolTipYPos = ref(0)
    const toolTipText = ref("")

    const showToolTip = () => toolTipDisplayFlg.value = true

    function updateToolTipPos(event) {
        toolTipXPos.value = event.clientX + 'px'
        toolTipYPos.value = event.clientY + 'px'

        toolTipText.value = event.srcElement.dataset.tooltipalt
    }

    const eraseToolTip = () => toolTipDisplayFlg.value = false

    if(process.client) {
        document.querySelectorAll('[data-tooltipalt]').forEach((i) => {
            onMounted(() => i.addEventListener('mouseenter', showToolTip))
            onUnmounted(() => i.removeEventListener('mouseenter', showToolTip))

            onMounted(() => i.addEventListener('mousemove', updateToolTipPos))
            onUnmounted(() => i.removeEventListener('mousemove', updateToolTipPos))

            onMounted(() => i.addEventListener('mouseleave', eraseToolTip))
            onUnmounted(() => i.removeEventListener('mouseleave', eraseToolTip))
        })
    }

    return {
        toolTipDisplayFlg,
        toolTipXPos,
        toolTipYPos,
        toolTipText
    }
}