import { Params, redirect } from "react-router-dom";
import { createContact, updateContact } from "../dataModel";

export async function contactCreateAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const contact = Object.fromEntries(formData);
  const newContact = await createContact(contact);
  return redirect(`/contacts/${newContact?.id}`);
}
export async function contactUpdateAction({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  const formData = await request.formData();
  const update = Object.fromEntries(formData);
  if (params.contactId) {
    await updateContact(params.contactId, update);
    return redirect(`/contacts/${params.contactId}`);
  }
}
