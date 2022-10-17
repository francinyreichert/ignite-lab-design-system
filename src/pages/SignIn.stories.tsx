import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./SignIn";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

export default {
  title: "Pages/Sing In",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Successful login!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText("Type your e-mail"),
      "example@hmail.com"
    );
    userEvent.type(canvas.getByPlaceholderText("******"), "l5D4n9BC");
    userEvent.click(canvas.getByRole("button"));
    await waitFor(() => {
      expect(canvas.getByText("You are successfully logged in"));
    });
  },
};
