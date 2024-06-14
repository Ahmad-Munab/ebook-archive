import * as React from "react";

interface EmailTemplateProps {
  firstName: string[];
  description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  description,
}) => (
  <div>
    <h1>
      Welcome,{" "}
      {firstName.map((name) => (
        <span key={name} className="text-red-600 text-4xl">
          {name},
        </span>
      ))}
    </h1>

    <p className="text-black font-bold text-xl">{description}</p>
  </div>
);
