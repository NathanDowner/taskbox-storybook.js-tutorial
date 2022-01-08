import { render } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';

import * as TaskListStories from './TaskList.stories';

const { WithPinnedTasks } = composeStories(TaskListStories);

describe('TaskList', () => {
  it('should render pinned tasks at the top', () => {
    const { container } = render(<WithPinnedTasks />);

    expect(
      container.querySelector(
        '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
      )
    ).not.toBe(null);
  });
});
