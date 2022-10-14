import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
    children: "Heading Small"
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
    children: "Heading Large"
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with h1</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
