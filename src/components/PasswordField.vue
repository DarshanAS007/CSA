<template>
    <v-card-subtitle class="mx-6">
        <v-text-field placeholder="Password" flat solo dense outlined append-icon :type="showPassword ? 'text' : 'password'"
            @click.stop="togglePasswordVisibility">
            <template slot="append-icon">
                <v-img :src="passwordIcon"></v-img>
            </template>
        </v-text-field>
    </v-card-subtitle>
</template>
  
<script>
export default {
    props: {
        showPassword: Boolean,
        lockSrc: String,
        unlockSrc: String
    },
    data() {
        return {
            isPasswordVisible: false
        };
    },
    computed: {
        passwordIcon() {
            return this.isPasswordVisible ? this.unlockSrc : this.lockSrc;
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.isPasswordVisible = !this.isPasswordVisible;
            this.$emit("toggle-visibility", this.isPasswordVisible);
        }
    }
};
</script>
  