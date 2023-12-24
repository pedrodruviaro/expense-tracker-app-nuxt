<script setup>
const user = useSupabaseUser();
// const router = useRouter();

// if (user) {
// router.push("/");
// }

const { login } = useAuthActions();
</script>

<template>
    <h1>Login</h1>
    <UButton @click="login">Login with google</UButton>
</template>
