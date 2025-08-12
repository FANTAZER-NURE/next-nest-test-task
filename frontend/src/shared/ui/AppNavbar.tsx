'use client';
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Alignment,
} from '@blueprintjs/core';
import Link from 'next/link';

export function AppNavbar() {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Link href="/">Home</Link>
        </NavbarHeading>
      </NavbarGroup>
    </Navbar>
  );
}
