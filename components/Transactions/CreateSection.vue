<script setup>
const isOpen = ref(false);
</script>

<template>
    <div class="flex gap-4 items-center justify-between flex-wrap">
        <h2>My Transactions</h2>
        <UButton icon="i-heroicons-plus-solid" @click="isOpen = true">
            Add New
        </UButton>

        <UModal v-model="isOpen">
            <UCard>
                <template #header>
                    <h2 class="text-xl">Create new</h2>
                </template>

                <TransactionsForm @completed="isOpen = false" />
            </UCard>
        </UModal>
    </div>
</template>
