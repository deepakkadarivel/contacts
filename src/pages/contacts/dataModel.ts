import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import { ContactType, ContactWrapperType } from "./type";
import { getRandomId } from "@/lib/utils";

// fake a cache so we don't slow down stuff we have already seen.
let fakeCache: Record<string, boolean | undefined> = {};
async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
  } else {
    if (fakeCache[key]) {
      return;
    } else {
      fakeCache[key] = true;
    }
  }

  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}

async function set(contacts: ContactType[]) {
  await localforage.setItem("contacts", contacts);
}

export async function getContacts(query?: string) {
  await fakeNetwork(`getContacts:${query ?? "all"}`);
  let contacts: ContactType[] | null = await localforage.getItem("contacts");
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  await fakeNetwork();
  const id = getRandomId();
  const contact = { id, createdAt: Date.now() };
  const contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string) {
  await fakeNetwork(`contact:${id}`);
  const contacts = await getContacts();
  const contact = contacts?.find((contact) => contact.id === id);
  return contact ?? null;
}

export async function updateContact(
  id: string,
  contactUpdate: ContactWrapperType
) {
  await fakeNetwork();
  const contacts = await getContacts();
  const contact = contacts?.find((contact) => contact.id === id);
  if (!contact) throw new Error(`No contact found for ${id}`);
  Object.assign(contact, contactUpdate);
  await set(contacts);
  return contact;
}

export async function deleteContact(id: string) {
  const contacts = await getContacts();
  const index = contacts?.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts?.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}
