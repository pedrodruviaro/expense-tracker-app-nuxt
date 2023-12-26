<script setup>
import { z } from "zod";
import { transactionTypeOptions } from "@/constants/transactionTypeOptions";

const categories = ["1", "2"];

const transactionStore = useTransactionsStore();
const { pending } = storeToRefs(transactionStore);
const user = useSupabaseUser();
const emit = defineEmits(["completed"]);

const initialState = {
    description: undefined,
    amount: undefined,
    type: undefined,
    date: undefined,
    category: undefined,
};

const state = ref({ ...initialState });
const form = ref();

const formSchema = z.object({
    description: z.string().min(5),
    amount: z.number().positive(),
    type: z.string(),
    date: z.string(),
    category: z.string(),
});

function resetForm() {
    Object.assign((state.value = initialState));

    // clear errors
    form.value.clear();
}

async function onSubmit() {
    const transaction = {
        user_id: user.value.id,
        description: state.value.description,
        amount: state.value.amount,
        type: state.value.type,
        date: state.value.date,
        category: state.value.category,
    };

    const { error } = await transactionStore.create(transaction);

    if (!error) {
        resetForm();
        emit("completed");
    }
}
</script>

<template>
    <UForm
        ref="form"
        :schema="formSchema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
    >
        <UFormGroup label="Description" name="description">
            <UInput v-model="state.description" />
        </UFormGroup>

        <UFormGroup label="Amount" name="amount">
            <UInput v-model="state.amount" type="number" />
        </UFormGroup>

        <div class="grid gap-4 grid-cols-2">
            <UFormGroup label="Type" name="type">
                <USelect
                    v-model="state.type"
                    :options="transactionTypeOptions"
                />
            </UFormGroup>

            <UFormGroup label="Date" name="date">
                <UInput v-model="state.date" type="date" />
            </UFormGroup>
        </div>

        <UFormGroup label="Category" name="category">
            <USelect v-model="state.category" :options="categories" />
        </UFormGroup>

        <UButton
            type="submit"
            class="flex justify-center w-full"
            :loading="pending"
        >
            Create
        </UButton>
    </UForm>
</template>
