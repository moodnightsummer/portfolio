import introductions from "../contents/introductions";
import contacts from "../contents/contact";

// 컨테이너
const classes = {
  profileWrap: "grid items-center gap-y-10 lg:max-w-7xl",
  wrap: "mt-4",
  contactName: "font-bold text-default mr-2",
};

export default function About() {
  return (
    <div class="flex justify-center items-center min-screen m-0">
      <div class="flex gap-20">
        <div class="w-400 p-4">
          <h2>About Me</h2>
          <p class="leading-relaxed">
            <div className={classes.wrap}>
              {introductions.map((intro, idx) => (
                <p key={idx}>{intro}</p>
              ))}
            </div>
          </p>
          <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
        </div>

        <div class="w-400 p-4">
          <p class="leading-relaxed">
            <h2>Contact</h2>
            <p class="leading-relaxed">
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
            </p>
          </p>
          <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
        </div>
      </div>
    </div>
  );
}
