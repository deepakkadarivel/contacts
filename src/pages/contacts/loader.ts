import { json } from "react-router-dom";
import { getContacts } from "./dataModel";

export async function contactsLoader() {
  const contacts = await getContacts();
  return json({ contacts });
}
