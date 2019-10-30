import { render, fireEvent, cleanup } from '@testing-library/vue';
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  it('should render', () => {
    const { container } = render(BaseButton);
    expect(container).toBeDefined();
  });

  it('should ', async () => {
    const { getByText, emitted } = render(BaseButton, {
      slots: {
        default: 'Test'
      }
    });

    const button = getByText('Test');
    expect(button).toBeDefined();
    await fireEvent.click(button);
    await fireEvent.click(button);

    expect(emitted().click).toHaveLength(2);
  });
});
