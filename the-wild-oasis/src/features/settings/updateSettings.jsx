import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingsAPI } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSettings, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingsAPI,
    onSuccess: () => {
      toast.success("update settings successfully");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateSettings, isUpdating };
}
