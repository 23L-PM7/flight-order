"use client";

import React from "react";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import EditingModal from "./EditingModal";

export default function AdminDashboard() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        sx={{ backgroundColor: "#8DD3BB" }}
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        Add flight
      </Button>
      <EditingModal flightId={""} open={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
}
