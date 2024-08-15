import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

function removeLastContact() {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));

  if (contacts.length > 0) {
    const removedContact = contacts.pop();

    fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));

    console.log('Last contact removed:', removedContact);
  } else {
    console.log('No contacts to remove.');
  }
}

removeLastContact();
