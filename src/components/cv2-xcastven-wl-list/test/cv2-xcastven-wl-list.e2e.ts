import { newE2EPage } from '@stencil/core/testing';

describe('cv2-xcastven-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv2-xcastven-wl-list></cv2-xcastven-wl-list>');

    const element = await page.find('cv2-xcastven-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
