import { Params, redirect } from "react-router-dom";
import { createContact, updateContact } from "../dataModel";

export async function contactNewAction() {
  const contact = await createContact();
  return { contact };
}

export async function contactCreateAction({
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
