<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template> -->

<template>
  <v-app style="background: #F5F4F7;">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-card class="mx-auto" flat
            style="min-height: 27.0625rem; max-width: 25rem; border-radius: 0.625rem; background: #FFF;">
            <v-card-title class="mx-auto" style="max-width: 5rem; max-height: 5rem;">
              <v-img :src="require('@/assets/logo2.svg')"></v-img>
            </v-card-title>
            <v-card-title>
              <span
                style="color: var(--text-color, rgba(23, 23, 23, 0.80)); text-align: center; font-family: Roboto; font-size: 1.25rem; font-style: normal; font-weight: 500; line-height: normal; letter-spacing: 0.01438rem;"
                class="mx-auto">Log
                In to Crayonte Smart Automation</span>
            </v-card-title>
            <v-col>
              <v-card-subtitle class="mx-6" style="min-width: 18.75rem; margin-top: -0.5rem;">
                <v-text-field placeholder="User ID" v-model="cred.username" :rules="unrules" flat solo dense
                  outlined></v-text-field>
              </v-card-subtitle>
              <v-card-subtitle class="mx-6" style="min-width: 18.75rem; margin-top: -1.5rem">
                <v-text-field placeholder="Password" v-model="cred.passWord" :rules="pwrules" flat solo dense outlined
                  :type="showPassword ? 'text' : 'password'">
                  <template v-slot:append>
                    <v-img @click="showPassword = !showPassword" style="cursor: pointer;" v-if="showPassword"
                      src="../assets/lock.svg"></v-img>
                    <v-img @click="showPassword = !showPassword" style="cursor: pointer;" v-else
                      src="../assets/unlock.svg"></v-img>
                  </template>
                </v-text-field>
              </v-card-subtitle>
              <v-card-actions>
                <v-btn class="mx-auto" flat @click="login()"
                  style="min-width: 18.75rem; margin-top: -1.5rem; display: flex; width: 18.75rem; padding: 0.625rem 0rem 0.70713rem 0rem; justify-content: center; align-items: center; border-radius: 0.375rem; background: var(--primary-blue, #343790); color: #FFF; font-family: Roboto; font-size: 0.875rem; font-style: normal; font-weight: 400; line-height: normal;">Log
                  In</v-btn>

              </v-card-actions>

              <v-card-text>
                <span
                  style="color: var(--primary-blue-shade, #4245B5); text-align: center; font-family: Roboto; font-size: 14px; font-style: normal; font-weight: 400; line-height: normal;">Don’t
                  have an Account? Contact your IT!</span>
              </v-card-text>
              <v-card-text>
                <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
              </v-card-text>
            </v-col>
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
      showPassword: false,
      errorMessage: '',
      cred:{ username: '', passWord: '' },
      unrules: [v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      pwrules: [
        v => !!v || 'Password is required',
        v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) || 'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
      ]
    };
  },

  name: 'HomeView',
  // components: {
  //   Lock
  // }
  methods: {
   login(){
    const axios = require('axios');
    // let data = JSON.stringify({
    //   "username": "darshan",
    //   "password": "Crayonte2023#"
    // });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://cral.crayonte.com/api/signin',
      headers: {
        'Content-Type': 'application/json'
      },
      data: this.cred
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert(JSON.stringify(response.data));
        // localStorage.setItem("token", response.data.token);
        this.$store.state.LoggedIn = true
        this.$store.state.token = response.data.token
        this.$store.state.userid = response.data.userid
        this.$store.state.usertype = response.data.usertype
      })
      .catch((error) => {
        console.log(error);
        alert(error)
      });
   }
  }
}


</script>

<style>
.error-message {
  color: red;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>