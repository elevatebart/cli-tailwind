import { mount } from "@cypress/vue";
import Button from "./Button.vue";

describe(
  "<Button />",
  it("should look like a button", () => {
    mount(Button);
  })
);
