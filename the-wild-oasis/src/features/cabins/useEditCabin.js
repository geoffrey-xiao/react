import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: editLoading } = useMutation({
    mutationFn: ({ cabin, id }) => createEditCabin(cabin, id),
    onSuccess: () => {
      toast.success("cabin edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      // reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { editCabin, editLoading };
}
