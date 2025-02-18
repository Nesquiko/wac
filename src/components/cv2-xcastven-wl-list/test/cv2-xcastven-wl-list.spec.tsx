import { newSpecPage } from '@stencil/core/testing';
import { Cv2XcastvenWlList } from '../cv2-xcastven-wl-list';

describe('cv2-xcastven-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv2XcastvenWlList],
      html: `<cv2-xcastven-wl-list></cv2-xcastven-wl-list>`,
    });

    const wlList = page.rootInstance as Cv2XcastvenWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
