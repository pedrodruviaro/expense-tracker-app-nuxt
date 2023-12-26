<script setup>
const balanceStore = useBalance();
const { month, year, income, expense, balance } = storeToRefs(balanceStore);

const dateToDisplay = computed(() => {
    const formatedMonth = month.value.slice(0, 3).toLowerCase();

    return `${formatedMonth}/${year.value}`;
});
</script>

<template>
    <section>
        {{}}
        <div class="flex gap-4 items-center mb-5">
            <UButton variant="ghost" @click="balanceStore.handleStepBack"
                >Prev</UButton
            >
            <p>
                {{ dateToDisplay }}
            </p>
            <UButton variant="ghost" @click="balanceStore.handleNextStep"
                >Next</UButton
            >
        </div>

        <div class="grid grid-cols-3 gap-10">
            <UCard>
                <template #header>
                    <h2 class="text-lg font-semibold">Income</h2>
                </template>
                <p class="text-3xl font-bold">
                    {{ income }}
                </p>
            </UCard>
            <UCard>
                <template #header>
                    <h2 class="text-lg font-semibold">Expenses</h2>
                </template>
                <p class="text-3xl font-bold">
                    {{ expense }}
                </p>
            </UCard>
            <UCard>
                <template #header>
                    <h2 class="text-lg font-semibold">Balance</h2>
                </template>
                <p class="text-3xl font-bold">
                    {{ balance }}
                </p>
            </UCard>
        </div>
    </section>
</template>
