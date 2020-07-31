import React from 'react';
import { Button } from './index.styles';
export default function Component({ title }) {
  return (
    <Button type='submit'>{title}</Button>
  )
}