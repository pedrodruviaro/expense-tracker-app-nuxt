<template>
    <div class="grid grid-cols-3 gap-10">
        <UCard>
            <template #header>
                <h2 class="text-lg font-semibold">Income</h2>
            </template>
            <p class="text-3xl font-bold">$ 1000</p>
        </UCard>
        <UCard>
            <template #header>
                <h2 class="text-lg font-semibold">Expenses</h2>
            </template>
            <p class="text-3xl font-bold">$ 750</p>
        </UCard>
        <UCard>
            <template #header>
                <h2 class="text-lg font-semibold">Balance</h2>
            </template>
            <p class="text-3xl font-bold">$ 250</p>
        </UCard>
    </div>
</template>
