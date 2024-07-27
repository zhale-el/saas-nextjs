"use client";

import NewAccountSheet from "@/features/accounts/components/new-account-sheet";
import { useMountedState } from "react-use";
import EditAccountSheet from "@/features/accounts/components/edit-account-sheet";
const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <NewAccountSheet />
      <EditAccountSheet />
    </div>
  );
};

export default SheetProvider;
