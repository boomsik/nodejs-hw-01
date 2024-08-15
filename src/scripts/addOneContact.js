import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

function addOneContact() {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));

  const newContact = createFakeContact();

  contacts.push(newContact);

  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));

  console.log('1 contact added successfully.');
}

addOneContact();
