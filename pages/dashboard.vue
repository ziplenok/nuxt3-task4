<script setup>
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

const currentProfile = ref({
  first_name: "",
  last_name: "",
});
const headerLoading = ref(true);

async function getCurrentProfile() {
  let { data, error } = await client
    .from("profiles")
    .select()
    .eq("id", user.value.id);

  if (error) console.log(error);
  currentProfile.value = data[0];
  headerLoading.value = false;
}

onMounted(() => {
  getCurrentProfile();
});

const profiles = ref([]);
const loadingProfiles = ref(true);

async function getProfiles() {
  let { data, error } = await client.from("profiles").select();

  if (error) console.log(error);
  profiles.value = data;
  loadingProfiles.value = false;
  console.log(profiles.value);
}

onMounted(() => {
  getProfiles();
});

async function logout() {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    router.push("/login");
  } catch (error) {
    console.log(error);
  }
}

const selecetedProfiles = ref([]);

/**
 * make buttons disabled
 */
const buttonsDisabled = ref(true);

watch(
  () => selecetedProfiles.value.length,
  () => {
    if (selecetedProfiles.value.length === 0) {
      buttonsDisabled.value = true;
    }
    if (selecetedProfiles.value.length !== 0) {
      buttonsDisabled.value = false;
    }
  }
);

async function block(profiles) {
  if (currentProfile.value.is_blocked === true) {
    router.push("/login");
    return;
  }
  try {
    const profilesToBeBlocked = profiles.map((obj) => ({
      id: obj.id,
      is_blocked: true,
    }));
    const { data, error } = await client
      .from("profiles")
      .upsert(profilesToBeBlocked);
    if (error) throw error;
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function unblock(profiles) {
  if (currentProfile.value.is_blocked === true) {
    router.push("/login");
    return;
  }
  try {
    const profilesToBeUnblocked = profiles.map((obj) => ({
      id: obj.id,
      is_blocked: false,
    }));
    const { data, error } = await client
      .from("profiles")
      .upsert(profilesToBeUnblocked);
    if (error) throw error;
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function deleteProfiles(profiles) {
  if (currentProfile.value.is_blocked === true) {
    router.push("/login");
    return;
  }
  try {
    const idsToDelete = profiles.map((obj) => obj.id);
    console.log(idsToDelete);
    const { data, error } = await client
      .from("profiles")
      .delete()
      .in("id", idsToDelete);
    if (error) throw error;
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

const checkAll = computed({
  get() {
    return profiles
      ? selecetedProfiles.value.length == profiles.value.length
      : false;
  },
  set(value) {
    var checked = [];
    if (value) {
      profiles.value.forEach(function (profile) {
        checked.push(profile);
      });
    }
    selecetedProfiles.value = checked;
  },
});

const renderStatus = (status) => {
  if (status) return "Blocked";
  if (!status) return "Active";
};
</script>

<template>
  <section class="dark:bg-gray-900">
    <div class="container mx-auto min-h-screen md:max-w-6xl">
      <div class="flex justify-end mt-12 items-center">
        <!-- loading sceleton -->
        <div
          v-if="headerLoading"
          role="status"
          class="max-w-sm animate-pulse flex"
        >
          <div class="h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-52"></div>
          <div class="h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
        </div>

        <div v-if="!headerLoading" class="mr-6">
          <span
            >Hello, {{ currentProfile.first_name }}
            {{ currentProfile.last_name }}</span
          >
        </div>
        <button
          v-if="!headerLoading"
          @click="logout"
          class="mr-6 hover:text-[rgb(255,_112,_88)] hover:bg-[rgba(255,_112,_88,_0.2)] cursor-pointer px-2 py-1 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div class="flex space-x-3 my-6 mx-3">
        <button
          class="flex border-2 border-[rgba(255,_112,_88,_0.4)] items-center px-1 py-0.5 disabled:opacity-50 btn-disabled cursor-pointer"
          :class="{ btn: !buttonsDisabled }"
          :disabled="buttonsDisabled"
          @click="block(selecetedProfiles)"
        >
          <IconLock class="h-8 w-8"></IconLock> <span> Block </span>
        </button>
        <button
          class="flex items-center justify-center disabled:opacity-50 btn-disabled border-2 border-[rgba(255,_112,_88,_0.4)] w-10 h-10 cursor-pointer"
          :class="{ btn: !buttonsDisabled }"
          :disabled="buttonsDisabled"
          @click="unblock(selecetedProfiles)"
        >
          <IconUnlock class="h-8 w-8"></IconUnlock>
        </button>
        <button
          class="inline-block disabled:opacity-50 rounded-full btn-disabled cursor-pointer"
          :class="{ btn: !buttonsDisabled }"
          :disabled="buttonsDisabled"
          @click="deleteProfiles(selecetedProfiles)"
        >
          <IconDelete class="h-10 w-10"></IconDelete>
        </button>
      </div>
      <div>
        <!-- loading table of profiles -->
        <TableSceleton v-if="loadingProfiles"></TableSceleton>

        <!-- else -->
        <div
          v-else
          class="relative overflow-x-auto drop-shadow-[rgba(255,_112,_88,_0.4)_5px_5px] sm:rounded-lg mx-2"
        >
          <table class="w-full text-sm text-left text-gray-600">
            <thead class="text-xs text-gray-800 uppercase bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 flex items-center justify-center"
                >
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 px-6 py-4 border disabled:opacity-50 border-gray-300 rounded bg-gray-50 accent-[rgba(255,_112,_88,_0.4)] focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    v-model="checkAll"
                  />
                </th>
                <th scope="col" class="px-6 py-3">Name</th>
                <th scope="col" class="px-6 py-3">Email</th>
                <th scope="col" class="px-6 py-3">Last Singin</th>
                <th scope="col" class="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="profile in profiles"
                :key="profile.id"
                :class="{ 'bg-gray-100': selecetedProfiles.includes(profile) }"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td>
                  <div class="flex items-center justify-center">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 px-6 py-4 border disabled:opacity-50 border-gray-300 rounded bg-gray-50 accent-[rgba(255,_112,_88,_0.4)] focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      :value="profile"
                      v-model="selecetedProfiles"
                    />
                  </div>
                </td>
                <td class="text-ellipsis overflow-hidden px-6 py-4">
                  {{ profile.first_name }} {{ profile.last_name }}
                </td>
                <td class="text-ellipsis overflow-hidden px-6 py-4">
                  {{ profile.email }}
                </td>
                <td class="text-ellipsis overflow-hidden px-6 py-4">
                  {{ profile.last_sign_in_at }}
                </td>
                <td class="text-ellipsis overflow-hidden px-6 py-4">
                  {{ renderStatus(profile.is_blocked) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.table .btn {
  box-shadow: rgba(255, 112, 88, 0.4) 5px 5px;
}
.btn:hover {
  box-shadow: white 0px 0px 0px;
  transition: 0.5s;
  transform: translate(3px, 3px);
}
.btn-disabled {
  box-shadow: rgba(255, 112, 88, 0.4) 5px 5px;
}
</style>
