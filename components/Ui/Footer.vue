<script setup>
const currentYear = computed(() => {
    return new Date().getFullYear();
});
</script>

<template>
    <footer class="border-t border-zinc-700 py-5">
        <UContainer class="flex justify-center text-sm">
            <p>&copy; Copyright {{ currentYear }}</p>
        </UContainer>
    </footer>
</template>
