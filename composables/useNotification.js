export function useNotification() {
    const toast = useToast();

    const errorIcon = "i-heroicons-exclamation-circle";
    const sucessIcon = "i-heroicons-check-circle";

    function notify(icon, title, message = "", color) {
        toast.add({
            title: title || "Something went wrong",
            description: message,
            icon: icon || "",
            color: color || "gray",
        });
    }

    function notifySuccess(title, message = "") {
        notify(sucessIcon, title, message, "green");
    }

    function notifyError(title, message = "Refresh the page and try again") {
        notify(errorIcon, title, message, "red");
    }

    return {
        notifyError,
        notifySuccess,
    };
}
