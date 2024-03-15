import { createContact } from "../dataModel";

export async function contactNewAction() {
  const contact = await createContact();
  return { contact };
}
