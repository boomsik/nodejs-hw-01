import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

function generateContacts(count = 5) {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));

  for (let i = 0; i < count; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }

  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
  console.log(`${count} contacts generated`);
}

generateContacts(5);
