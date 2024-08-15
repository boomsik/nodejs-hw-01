import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

function getAllContacts() {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));

  console.log(contacts);

  return contacts;
}

getAllContacts();
