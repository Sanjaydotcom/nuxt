<template>
  <!-- component -->
  <div class="bg-white lg:w-3/12 md:6/12 w-10/12 m-auto my-28 shadow-md">
    <div class="py-8 px-8 rounded-xl">
      <Notification :message="error" v-if="error" />
      <div v-if="$auth.loggedIn">
        <p>dgdgdfgfdg</p>
</div>
      <h1 class="font-medium text-2xl mt-3 text-center">Login</h1>
      <form action="" class="mt-6" method="post" @submit.prevent="login">
        <div class="my-5 text-sm">
          <label for="email" class="block text-black">Email</label>
          <input
            type="text"
            autofocus
            id="username"
            name="email"
            v-model="username"
            class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Email"
          />
        </div>
        <div class="my-5 text-sm">
          <label for="password" class="block text-black">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
            class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Password"
          />
          <div class="flex justify-end mt-2 text-xs text-gray-600">
            <a href="../../pages/auth/forget_password.html hover:text-black"
              >Forget Password?</a
            >
          </div>
        </div>

        <button 
          class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full"
        >
          Login
        </button>
      </form>

    

      <p class="mt-12 text-xs text-center font-light text-gray-400">
        Don't have an account?
        <NuxtLink to="../auth/register" class="text-black font-medium">
          Create One
        </NuxtLink>
      </p>
    </div>
  </div>
</template>


<script>
import Notification from "~/components/Notification";
import axios from "axios";
export default {
  components: {
    Notification,
  },

  data() {
    return {

        username: '',
        password: ''
   
    };
  },

  methods: {
    async login() {
      console.log(this.username,this.password)
      try {
     let response=await this.$auth.loginWith('local', {
          data: {
          email: "eve.holt@reqres.in",
          password: "cityslicka"
          },
        })
        this.$router.push("/home")
      //  let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
       
      } catch (e) {
       console.log(e)
      }
    },
  },
};
</script>