import { render } from '@testing-library/react';

import DepA from './DepA';

describe('DepA', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DepA />);
    expect(baseElement).toBeTruthy();
  });
});
