import { render } from '@testing-library/react';

import DepB from './DepB';

describe('DepB', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DepB />);
    expect(baseElement).toBeTruthy();
  });
});
