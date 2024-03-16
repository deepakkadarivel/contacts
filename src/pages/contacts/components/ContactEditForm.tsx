import { Form, useLoaderData } from "react-router-dom";
import { ContactLoaderData } from "../type";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactEditForm() {
  const data = useLoaderData() as ContactLoaderData;
  const contact = data?.contact;

  return (
    <Form method="post" id="contact-form" className="space-y-4">
      <Input
        name="first"
        placeholder="First"
        label="First name"
        defaultValue={contact?.first}
      />
      <Input
        name="last"
        placeholder="Last"
        label="Lirst name"
        defaultValue={contact?.last}
      />

      <Input
        name="twitter"
        placeholder="@jack"
        label="Twitter handle"
        defaultValue={contact?.twitter}
      />

      <Input
        name="avatar"
        placeholder="https://example.com/avatar.jpg"
        label="Avatar URL"
        defaultValue={contact?.avatar}
      />

      <Textarea
        name="notes"
        placeholder="https://example.com/avatar.jpg"
        label="Notes"
        defaultValue={contact?.notes}
        rows={6}
      />

      <div className="space-x-4">
        <Button type="submit">Save</Button>
        <Button type="button" variant="secondary">
          Cancel
        </Button>
      </div>
    </Form>
  );
}
