<script setup>
const transactionsStore = useTransactionsStore();
const { pending, transactionsByDate } = storeToRefs(transactionsStore);

await useAsyncData("transactions", () => {
    transactionsStore.getTransactions();
});
</script>

<template>
    <section>
        <div class="grid gap-8" v-if="pending">
            <article class="grid gap-3">
                <USkeleton class="w-24 h-6" />
                <USkeleton class="w-full h-20" />
            </article>
            <article class="grid gap-3">
                <USkeleton class="w-24 h-6" />
                <USkeleton class="w-full h-20" />
            </article>
            <article class="grid gap-3">
                <USkeleton class="w-24 h-6" />
                <USkeleton class="w-full h-20" />
            </article>
        </div>

        <div class="grid gap-8" v-else>
            <article v-for="date in transactionsByDate" :key="date.date">
                <h3>{{ date.date }}</h3>
                <ul>
                    <TransactionsRow
                        v-for="transaction in date.transactions"
                        :key="transaction.id"
                        :transaction="transaction"
                    />
                </ul>
            </article>
        </div>
    </section>
</template>

<style scoped>
h3 {
    @apply mb-3 font-semibold text-lg;
}

ul {
    @apply grid gap-2;
}
</style>
