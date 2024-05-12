import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (data) => {
      console.log(data);
      toast.success("login successfully");
      // queryClient.invalidateQueries({
      //   queryKey: ["user"],
      // });
      queryClient.setQueryData(["user"], data?.user);
      navigate("/", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });
  return { login, isLoading };
}
