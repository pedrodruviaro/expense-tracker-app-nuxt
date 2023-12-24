<script setup></script>

<template>
    <article>
        <h3>24/12/2023</h3>
        <ul>
            <TransactionsRow />
            <TransactionsRow />
            <TransactionsRow />
        </ul>
    </article>
</template>

<style scoped>
h3 {
    @apply mb-3 font-semibold text-lg;
}

ul {
    @apply grid gap-2;
}
</style>
