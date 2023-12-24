<script setup>
const { logout, pending } = useAuthActions();

const emit = defineEmits(["update:model-value"]);
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const isOpen = computed({
    get() {
        return props.modelValue;
    },

    set() {
        emit("update:model-value");
    },
});

function handleLogout() {
    isOpen.value = false;
    logout();
}
</script>

<template>
    <UModal v-model="isOpen">
        <UCard>
            <template #header>
                <h2 class="text-lg">Are you sure you want to exit?</h2>
            </template>
            <div class="grid grid-cols-2 gap-4 items-center">
                <UButton
                    class="flex text-center justify-center"
                    variant="outline"
                    @click="isOpen = false"
                    :disabled="pending"
                    >Cancel</UButton
                >
                <UButton
                    class="flex text-center justify-center"
                    :loading="pending"
                    @click="handleLogout"
                    >Exit</UButton
                >
            </div>
        </UCard>
    </UModal>
</template>
