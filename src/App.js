import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Grid from "@mui/material/Grid";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContact] = useState(contactsJSON);

  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const handleNewContact = (contact) => {
    setContact([...contacts, contact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs="auto" md="auto">
          <ContactForm handleNewContact={handleNewContact} />
        </Grid>
        <Grid item xs="auto" md="auto">
          {contacts.map((contact, index) => (
            <Contact data={contact} key={index} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
