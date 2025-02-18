import { newSpecPage } from '@stencil/core/testing';
import { Cv2XcastvenWlList } from '../cv2-xcastven-wl-list';

describe('cv2-xcastven-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv2XcastvenWlList],
      html: `<cv2-xcastven-wl-list></cv2-xcastven-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv2-xcastven-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv2-xcastven-wl-list>
    `);
  });
});
