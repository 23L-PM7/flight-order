"use client";

import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { GoPlusCircle } from "react-icons/go";
import { TextField } from "@mui/joy";

export default function CardModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="soft" color="neutral" onClick={() => setOpen(true)}>
        <div className="cursor-pointer  ounded-md py-2 px-4 text-center transition duration-300 hover:text-[#8DD3BB]">
          <div className=" flex justify-center">
            <GoPlusCircle size={70} />
          </div>
          <p className="hover:text-[#8DD3BB] text-lg">Add new Card</p>
        </div>
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Add new Card
          </Typography>
          <div>
            {/* <TextField
              id="outlined-multiline-flexible"
              label="Multiline"
              multiline
              maxRows={4}
            /> */}
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
