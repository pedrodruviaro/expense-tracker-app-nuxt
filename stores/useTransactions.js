export const useTransactionsStore = defineStore("transactions", () => {
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const { notifyError, notifySuccess } = useNotifications();

    const pending = ref(false);
    const transactions = ref([]);

    const transactionsByDate = computed(() => {
        const relations = {};

        if (!transactions.value || transactions.value.length <= 0) return;
        transactions.value.forEach((transaction) => {
            if (!relations[transaction.date]) {
                relations[transaction.date] = [];
            }
            relations[transaction.date].push(transaction);
        });
        const values = [];
        for (const key in relations) {
            const item = {
                date: key,
                transactions: relations[key],
            };
            values.push(item);
        }
        return values;
    });

    async function getTransactions() {
        try {
            pending.value = true;

            const { data, error } = await supabase
                .from("transactions")
                .select()
                .eq("user_id", user.value.id)
                .order("date", { ascending: false });

            if (error) {
                throw new Error();
            }

            transactions.value = data;

            return { error: null };
        } catch (error) {
            notifyError();
        } finally {
            pending.value = false;
        }
    }

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
        getTransactions,
        pending: pending,
        transactions: transactions,
        transactionsByDate: transactionsByDate,
    };
});
