import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import "../theme/kit.css";
import { Link } from "..";

export default {
  title: "Elements/Link",
  component: Link,
} as Meta;

const Template = () => {
  return (
    <Link>
      <a href="https://www.google.de" target="_blank" rel="noopener noreferrer">
        Link
      </a>
    </Link>
  );
};

export const Default = Template.bind({});
