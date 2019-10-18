import { render, cleanup } from "@testing-library/vue";
import BaseLink from "./BaseLink.vue";

describe("BaseLink", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  it("should render", () => {
    const { container } = render(BaseLink);
    expect(container).toBeDefined();
  });

  it("should ", async () => {
    const { container, getByText } = render(BaseLink, {
      slots: {
        default: "Test"
      },
      props: { href: "https://lindgr3n.com" }
    });

    const link = getByText("Test");
    expect(link).toBeDefined();
    expect(
      container.querySelector('a[href="https://lindgr3n.com"]')
    ).not.toBeNull();
  });
});
