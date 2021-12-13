import React, { useCallback } from 'react';
import { Story, Meta } from '@storybook/react';
import { useLocalState } from '.';

const ExampleComponent = () => {
  const [example, exampleSet] = useLocalState('test-hook-example', 69);

  const changeExample = useCallback(() => {
    exampleSet(1337);
  }, [exampleSet]);

  return (
    <div>
      <div>{example}</div>
      <div>
        <button type="button" onClick={changeExample}>
          Change
        </button>
      </div>
    </div>
  );
};

export default {
  title: 'Test Hook',
  component: ExampleComponent,
  parameters: {
    componentSubtitle: 'Component Example',
  },
} as Meta;

export const StoryComponent: Story = () => <ExampleComponent />;
