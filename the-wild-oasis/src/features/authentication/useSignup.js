import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiUser";
import toast from "react-hot-toast";
export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupAPI({ email, password, fullName }),
    onSuccess: () => {
      toast.success("create user successfully");
    },
  });
  return { signup, isLoading };
}
