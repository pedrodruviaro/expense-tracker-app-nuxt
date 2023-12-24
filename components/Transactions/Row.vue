<script setup>
const items = [
    [
        {
            label: "Edit",
            icon: "i-heroicons-pencil-square-20-solid",
            click: () => {
                console.log("Edit");
            },
        },

        {
            label: "Delete",
            icon: "i-heroicons-trash-20-solid",
            click: () => {
                console.log("Delete");
            },
        },
    ],
];
</script>

<template>
    <li
        class="border rounded-md p-3 border-zinc-700 grid items-center grid-cols-4 gap-2"
    >
        <UIcon
            name="i-heroicons-arrow-trending-down"
            class="text-red-400 justify-self-start w-5 h-6"
        />
        <p class="justify-center">Food</p>
        <p class="justify-center">$750</p>
        <UDropdown
            :items="items"
            :popper="{ placement: 'bottom-start' }"
            class="justify-self-end"
        >
            <UButton
                color="white"
                trailing-icon="i-heroicons-chevron-down-20-solid"
            />
        </UDropdown>
    </li>
</template>
