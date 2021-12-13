import React from 'react';

/**
 * ExampleComponent
 */
export const ExampleComponent = ({ text }: ExampleComponentProps) => (
  <span data-testid="test-component">{text}</span>
);

/**
 * ExampleComponent props
 */
export interface ExampleComponentProps {
  /**
   * Prop
   */
  text: string;
}
