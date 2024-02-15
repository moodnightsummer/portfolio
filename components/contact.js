import contacts from "../contents/contact";

const classes = {
  profileWrap: "grid items-center gap-y-10 lg:max-w-7xl",
  wrap: "mt-4",
  contactName: "font-bold text-default mr-2",
};

export default function Contact() {
  return (
    <div className={classes.wrap}>
      {contacts.map((contact, idx) => (
        <p key={idx} className="break-all">
          <span className={classes.contactName}>{contact.name}</span>
          <a href={contact.link} target="blank">
            {contact.text || contact.link}
          </a>
        </p>
      ))}
    </div>
  );
}
