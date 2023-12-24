<script setup>
const user = useSupabaseUser();
const router = useRouter();

if (!user.value) {
    router.push("/login");
}
</script>
<template>
    <div class="grid gap-10">
        <TransactionsPeriodCards />
        <TransactionsCreateSection />
        <TransactionsTable />
    </div>
</template>
