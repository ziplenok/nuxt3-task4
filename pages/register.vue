<script setup>
const client = useSupabaseClient();

const email = ref("");
const password = ref("");
const fistName = ref("");
const lastName = ref("");
const isBloked = false;

const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp() {
  try {
    const { error } = await client.auth.signUp({
      email: email.value,
      email_confirm: true,
      password: paddedPassword.value,
      options: {
        data: {
          first_name: fistName.value,
          last_name: lastName.value,
          is_blocked: isBloked,
          email: email.value,
        },
      },
    });
    if (error) throw error;
    successMsg.value = "User was created succesfully";
  } catch (error) {
    errorMsg.value = error.massage;
  }
}

const minlength = 6;
const paddedPassword = ref("");

watch(
  () => password.value.length,
  () => {
    if (password.value.length < minlength) {
      const zeroToAdd = minlength - password.value.length;
      paddedPassword.value = password.value + "0".repeat(zeroToAdd);
    } else {
      paddedPassword.value = password.value;
    }
    console.log(paddedPassword.value);
  }
);
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <p
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        4th task
      </p>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Create an account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="fist-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >First name</label
              >
              <input
                type="text"
                name="text"
                id="fist-name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Anatoliy"
                v-model="fistName"
                required=""
              />
            </div>
            <div>
              <label
                for="last-name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >LAst name</label
              >
              <input
                type="text"
                name="last-name"
                id="last-name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Razinov"
                v-model="lastName"
                required=""
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@gmail.com"
                v-model="email"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                autocomplete="on"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="password"
                required=""
              />
            </div>
            <button
              type="submit"
              class="w-full text-[rgb(255,_112,_88)] bg-[rgba(255,_112,_88,_0.2)] hover:bg-[rgb(255,_112,_88)] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="signUp"
            >
              Create an account
            </button>

            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <NuxtLink
                to="/login"
                class="font-medium text-gray-500 hover:text-[rgb(255,_112,_88)] hover:underline dark:text-blue-500"
                >Login here</NuxtLink
              >
            </p>
            <p v-if="errorMsg" class="text-re">
              {{ errorMsg }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
