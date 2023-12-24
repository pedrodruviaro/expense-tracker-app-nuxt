export function useAuthActions() {
    const supabase = useSupabaseClient();
    const router = useRouter();
    const { notifyError, notifySuccess } = useNotification();
    const pending = ref(false);

    async function login() {
        try {
            pending.value = true;

            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    queryParams: {
                        access_type: "offline",
                        prompt: "consent",
                    },
                    redirectTo: "http://localhost:3000/confirm",
                },
            });

            if (error) {
                throw new Error();
            }

            router.push("/");
        } catch (error) {
            notifyError("Failed to login");
        } finally {
            pending.value = false;
        }
    }

    async function logout() {
        try {
            pending.value = true;

            const { error } = await supabase.auth.signOut();

            if (error) {
                throw new Error("Failed to logout, refresh and try again");
            }

            notifySuccess("Logout successfully. See you soon!");
            router.push("/login");
        } catch (error) {
            console.log(error);
        } finally {
            pending.value = false;
        }
    }

    return { login, logout, pending };
}
