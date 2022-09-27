// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ contact }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <Card sx={{ minWidth: "auto" }}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt={contact.name}
              src={contact.photo}
              sx={{ width: 56, height: 56 }}
            />
          </ListItemAvatar>
          <ListItemText primary={contact.name} secondary={contact.phone} />
          <ListItemText secondary={contact.email} />
        </ListItem>
      </List>
    </Card>
  );
};

export default Contact;
