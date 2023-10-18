export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();
  // const client = useSupabaseClient();
  // const currentProfile = ref();
  // const { startLoading, stopLoading } = useSignInLoading();
  // startLoading();
  // async function getCurrentProfile() {
  //   let { data, error } = await client
  //     .from("profiles")
  //     .select()
  //     .eq("id", user.value.id);

  //   if (error) console.log(error);
  //   currentProfile.value = data[0];
  //   stopLoading();
  // }
  // getCurrentProfile();

  if (!user.value) {
    return navigateTo("/login");
  }
});
