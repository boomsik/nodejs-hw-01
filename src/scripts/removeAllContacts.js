import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

function removeAllContacts() {
  const emptyContacts = [];

  fs.writeFileSync(PATH_DB, JSON.stringify(emptyContacts, null, 2));

  console.log('All contacts have been removed.');
}

removeAllContacts();
