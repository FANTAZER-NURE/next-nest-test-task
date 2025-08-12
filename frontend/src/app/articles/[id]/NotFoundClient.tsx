'use client';
import Link from 'next/link';
import { Callout, Button } from '@blueprintjs/core';

export function NotFoundClient() {
  return (
    <main style={{ maxWidth: 800, margin: '24px auto', padding: 16 }}>
      <Callout intent="warning" title="Article not found">
        The requested article doesn’t exist or may have been removed.
        <div style={{ marginTop: 12 }}>
          <Link href="/">
            <Button
              icon="arrow-left"
              text="Back to articles"
              variant="minimal"
            />
          </Link>
        </div>
      </Callout>
    </main>
  );
}
