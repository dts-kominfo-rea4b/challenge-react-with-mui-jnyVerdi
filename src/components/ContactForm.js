// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ContactForm = ({ handleNewContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState([]);

  return (
    <Card sx={{ minWidth: "auto" }}>
      <CardContent>
        <TextField
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={newContact.name}
          onChange={(e) => {
            setNewContact({ ...newContact, name: e.target.value });
          }}
        />
        <TextField
          required
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          value={newContact.phone}
          onChange={(e) => {
            setNewContact({ ...newContact, phone: e.target.value });
          }}
        />
        <TextField
          required
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={newContact.email}
          onChange={(e) => {
            setNewContact({ ...newContact, email: e.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Photo URL ▼"
          variant="outlined"
          value={newContact.photo}
          onChange={(e) => {
            setNewContact({ ...newContact, photo: e.target.value });
          }}
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            newContact.photo
              ? handleNewContact(newContact)
              : handleNewContact({
                  name: newContact.name,
                  phone: newContact.phone,
                  email: newContact.email,
                  photo: "http://placekitten.com/600",
                });
            setNewContact({ name: "", phone: "", email: "", photo: "" });
          }}
        >
          ADD NEW
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContactForm;
