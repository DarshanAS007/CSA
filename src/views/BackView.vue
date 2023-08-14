<!-- BackView file is literally used as a backup file -->
<template>
  <v-app style="background: #F5F4F7;">
    <v-container fluid class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card class="mx-auto" flat style="border-radius: 0.625rem; background: #FFF;">
            <v-card-title class="mx-auto" style="max-width: 5rem; max-height: 5rem;">
              <v-img :src="require('@/assets/logo2.svg')"></v-img>
            </v-card-title>
            <v-card-title>
              <span
                style="color: var(--text-color, rgba(23, 23, 23, 0.80)); text-align: center; font-family: Roboto; font-size: 1.25rem; font-style: normal; font-weight: 500; line-height: normal; letter-spacing: 0.01438rem;"
                class="mx-auto">Log
                In to Crayonte Smart Automation</span>
            </v-card-title>
            <v-card-subtitle class="mx-4" style="margin-top: 1.5rem;">
              <v-text-field placeholder="User ID" solo dense outlined></v-text-field>
            </v-card-subtitle>
            <v-card-subtitle class="mx-4" style="margin-top: 1rem;">
              <v-text-field placeholder="Password" solo dense outlined
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"></v-text-field>
            </v-card-subtitle>
            <v-card-actions>
              <v-btn class="mx-auto" flat
                style="display: flex; width: 100%; padding: 0.625rem 0rem 0.70713rem 0rem; justify-content: center; align-items: center; border-radius: 0.375rem; background: var(--primary-blue, #343790); color: #FFF; font-family: Roboto; font-size: 0.875rem; font-style: normal; font-weight: 400; line-height: normal;">Log
                In</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
  
<script>
export default {
  data() {
    return {
      showPassword: false
    };
  }
};
</script>
  
<style>
/* Add any custom styles here */
</style>
  

  <!-- <template slot="append-icon">
    <v-img :src="require('@/assets/lock.svg')"></v-img>
    <v-img :src="require('@/assets/unlock.svg')"></v-img>
  </template> 

async login() {
      if (!this.cred.userId || !this.cred.passWord) {
        this.errorMessage = 'Please enter both User ID and Password.';
        return;
      }

      try {
        const response = await axios.post('http://cral.crayonte.com/api/signin', {
          userId: this.cred.userId,
          password: this.passWord
        });

        // Handle the response, e.g., redirect on successful login
        if (response.data.success) {
          this.errorMessage = '';
          // Redirect to a new page or perform other actions
        } else {
          this.errorMessage = 'Invalid credentials. Please try again.';
        }
      } catch (error) {
        this.errorMessage = 'An error occurred. Please try again later.';
      }
    },
    

-->