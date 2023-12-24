<template>
    <div class="default-layout">
        <UiHeader class="header" />
        <UContainer as="main" class="main-content">
            <slot />
        </UContainer>

        <UiFooter class="footer" />
    </div>
</template>

<style scoped>
.default-layout {
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    min-height: 100vh;
    gap: 3rem;
}

.main-content {
    width: 100%;
}
</style>
