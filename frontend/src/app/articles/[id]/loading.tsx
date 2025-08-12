'use client';
import { Spinner } from '@blueprintjs/core';

export default function Loading() {
  return (
    <div style={{ maxWidth: 800, margin: '24px auto', padding: 16 }}>
      <Spinner />
    </div>
  );
}
