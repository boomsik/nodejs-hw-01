import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

function countContacts() {
  const contacts = JSON.parse(fs.readFileSync(PATH_DB, 'utf8'));

  const count = contacts.length;

  console.log(`Total contacts: ${count}`);

  return count;
}

countContacts();
