<script setup>
const user = useSupabaseUser();
const router = useRouter();

const isExitModalOpen = ref(false);

const profileMenuOptions = [
    [
        {
            label: user?.value?.email,
            slot: "account",
            disabled: true,
        },
    ],
    [
        {
            label: "Manage Categories",
            icon: "i-heroicons-cog-8-tooth",
            click: () => router.push("/categories"),
        },
    ],

    [
        {
            label: "Sign out",
            icon: "i-heroicons-arrow-left-on-rectangle",
            click: () => (isExitModalOpen.value = true),
        },
    ],
];
</script>

<template>
    <div class="flex items-center gap-4">
        <span>{{ user?.user_metadata?.name }}</span>
        <UDropdown
            :items="profileMenuOptions"
            :ui="{ item: { disabled: 'cursor-text select-text' } }"
            :popper="{ placement: 'bottom-start' }"
        >
            <UAvatar :src="user?.user_metadata?.avatar_url" />

            <template #account="{ item }">
                <div class="text-left">
                    <p>Signed in as</p>
                    <p
                        class="truncate font-medium text-gray-900 dark:text-white"
                    >
                        {{ item.label }}
                    </p>
                </div>
            </template>

            <template #item="{ item }">
                <span class="truncate">{{ item.label }}</span>

                <UIcon
                    :name="item.icon"
                    class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
                />
            </template>

            <UiHeaderExitModal v-model="isExitModalOpen" />
        </UDropdown>
    </div>
</template>
