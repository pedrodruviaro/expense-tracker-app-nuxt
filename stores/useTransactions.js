export const useTransactionsStore = defineStore("transactions", () => {
    const supabase = useSupabaseClient();
    const { notifyError, notifySuccess } = useNotifications();

    const pending = ref(false);
    const transactions = ref([]);

    async function getTransactions() {}

    async function create(transaction) {
        try {
            pending.value = true;

            const { data, error } = await supabase
                .from("transactions")
                .upsert(transaction);
            // .select();

            if (error) {
                throw new Error();
            }

            notifySuccess("Transaction added!");

            return { error: false, data };
        } catch (error) {
            notifyError("Failed to create transaction");

            return { error: true, data: null };
        } finally {
            pending.value = false;
        }
    }

    return {
        create,
        pending: pending,
    };
});
