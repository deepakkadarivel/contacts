import { LoaderFunctionArgs, json } from "react-router-dom";
import { getContact, getContacts } from "./dataModel";

export async function contactsLoader() {
  const contacts = await getContacts();
  return json({ contacts });
}

export async function contactLoader({ params }: LoaderFunctionArgs) {
  if (!params.contactId) {
    return null;
  }
  const contact = await getContact(params.contactId);
  return json({ contact });
}
