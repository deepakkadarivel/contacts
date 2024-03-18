import { Form, Link, useLoaderData } from "react-router-dom";
import { ContactLoaderData, ContactWrapperType } from "../type";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

function Favorite({ contact }: { contact: ContactWrapperType }) {
  // yes, this is a `let` for later
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

function Contact() {
  // const contact = {
  //   first: "Your",
  //   last: "Name",
  //   avatar: "https://i.pravatar.cc/300",
  //   twitter: "your_handle",
  //   notes: "Some notes",
  //   favorite: true,
  // };

  const defaultAvatar = "https://i.pravatar.cc/300";

  const { contact } = useLoaderData() as ContactLoaderData;

  return (
    <div id="contact" className="flex gap-4 container p-4">
      <div className="size-48">
        <img
          className="size-full rounded-xl"
          key={contact?.avatar ?? defaultAvatar}
          src={contact?.avatar ?? defaultAvatar}
        />
      </div>

      <div>
        <h1 className="flex gap-2 text-2xl font-medium">
          {contact?.first ?? contact?.last ? (
            <>
              {contact?.first} {contact?.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact?.twitter && (
          <Button variant="link" className="space-x-2 p-0">
            <Twitter />
            <Link
              target="_blank"
              to={`https://twitter.com/${contact?.twitter}`}
              rel="noreferrer"
            >
              {contact?.twitter}
            </Link>
          </Button>
        )}

        {contact?.notes && (
          <p className="line-clamp-3 mt-8 text-sm">{contact?.notes}</p>
        )}

        <div className="flex gap-2 mt-8">
          <Form action="edit">
            <Button type="submit" size="sm">
              Edit
            </Button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <Button type="submit" variant="destructive" size="sm">
              Delete
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
