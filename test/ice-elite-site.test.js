import { html, fixture, expect } from '@open-wc/testing';
import "../ice-elite-site.js";

describe("IceEliteSite test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <ice-elite-site
        title="title"
      ></ice-elite-site>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
