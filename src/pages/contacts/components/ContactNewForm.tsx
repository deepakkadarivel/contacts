import { Button } from "@/components/ui/button";
import { Form } from "react-router-dom";

function ContactNewForm() {
  return (
    <Form method="post">
      <Button type="submit">New</Button>
    </Form>
  );
}

export default ContactNewForm;
