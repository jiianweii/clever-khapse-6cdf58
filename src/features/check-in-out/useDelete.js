import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDelete() {
  const queryClient = useQueryClient();
  const { mutate: removeBooking, isLoading: isRemovingBooking } = useMutation({
    mutationFn: (bookingId) => {
      deleteBooking(bookingId);
    },
    onSuccess: () => {
      toast.success("Booking has been successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: () => {
      toast.error("There was an error while deleting booking");
    },
  });

  return { removeBooking, isRemovingBooking };
}
