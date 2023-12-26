export function useCurrency(value) {
    const formater = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "USD",
    });

    return formater.format(value);
}
