import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  // Split emails if multiple, and render only addresses as links
  const emailParts = email.split(/\s+/);
  const emails = emailParts.filter(e => e.includes('@'));

  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}
        {emails.length > 0 && (
          <>
            {", "}
            <a className="text-decoration-none" href={`mailto:${emails[0]}`}>{emails[0]}</a>
            {emails[1] && (
              <>
                {" or "}
                <a className="text-decoration-none" href={`mailto:${emails[1]}`}>{emails[1]}</a>
              </>
            )}
          </>
        )}
        .
      </p>
    </>
  );
};

export default GetInTouch;
