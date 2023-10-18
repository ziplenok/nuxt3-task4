import type { Ref } from "vue";

export const useSignInLoading = () => {
  const isLoading: Ref<boolean> = useState("signInLoading", () => false);

  const startLoading = (): void => {
    isLoading.value = true;
  };
  const stopLoading = (): void => {
    isLoading.value = false;
  };

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
};
