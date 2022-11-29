import type { FC } from 'react';
import React from 'react';
import { Text } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export const TestComponent: FC = () => {
  return <Text>Test</Text>;
};
