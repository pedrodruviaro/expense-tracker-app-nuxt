<script setup>
const user = useSupabaseUser();
const router = useRouter();

if (!user.value) {
    router.push("/login");
}
</script>
<template>
    <h1>Index</h1>
</template>
