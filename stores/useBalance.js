import { months } from "@/constants/dates";

export const useBalance = defineStore("balance", () => {
    const transactionsStore = useTransactionsStore();
    const { transactionsByDate } = storeToRefs(transactionsStore);

    const currentMonthIndex = ref(new Date().getMonth());
    const month = ref(months[new Date().getMonth()]);
    const year = ref(new Date().getFullYear());

    const values = reactive({
        income: 0,
        expense: 0,
        balance: 0,
    });

    const income = computed(() => {
        return useCurrency(values.income);
    });

    const expense = computed(() => {
        return useCurrency(values.expense);
    });

    const balance = computed(() => {
        return useCurrency(values.balance);
    });

    function calculateTransactionsByDate() {
        values.income = 0;
        values.expense = 0;
        values.balance = 0;

        let formatedMonth = "";

        if (currentMonthIndex.value >= 10) {
            formatedMonth = String(currentMonthIndex.value + 1);
        } else {
            formatedMonth = "0" + String(currentMonthIndex.value + 1);
        }

        const query = `${String(year.value)}-${String(formatedMonth)}`;

        transactionsByDate.value.forEach((group) => {
            if (group.date.slice(0, 7) === query) {
                group.transactions.forEach((transaction) => {
                    values[transaction.type] += transaction.amount;
                });
            }
        });

        values.balance = values.income - values.expense;
    }

    function handleStepBack() {
        if (currentMonthIndex.value === 0) {
            currentMonthIndex.value = 11;

            year.value = year.value - 1;
        } else {
            currentMonthIndex.value = currentMonthIndex.value - 1;
        }

        month.value = months[currentMonthIndex.value];

        calculateTransactionsByDate();
    }

    function handleNextStep() {
        if (currentMonthIndex.value === 11) {
            currentMonthIndex.value = 0;

            year.value = year.value + 1;
        } else {
            currentMonthIndex.value = currentMonthIndex.value + 1;
        }

        month.value = months[currentMonthIndex.value];

        calculateTransactionsByDate();
    }

    watch(transactionsByDate, () => {
        if (transactionsByDate.value.length > 1) {
            calculateTransactionsByDate();
        }
    });

    return {
        month,
        year,
        handleNextStep,
        handleStepBack,
        income,
        expense,
        balance,
    };
});
