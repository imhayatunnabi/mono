<template>
    <BackendLayout>
        <template v-slot:backend>
            <p>hello </p>
        </template>
    </BackendLayout>
</template>
<script>
import BackendLayout from '../../../components/layouts/BackendLayout.vue';
export default {
    name: 'DashboardComponent',
    components: {
        BackendLayout,
    }
}
</script>