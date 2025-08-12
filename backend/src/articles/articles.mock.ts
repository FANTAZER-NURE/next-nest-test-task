import type { Article } from './types';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.\n\nCras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.\n\nDuis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.';

export const ARTICLES_MOCK: Article[] = [
  {
    id: 1,
    title: 'Introduction to NestJS',
    description:
      'A short intro to building scalable server-side apps with NestJS.',
    content:
      'NestJS is a progressive Node.js framework ... This article walks you through the basics and patterns.',
  },
  {
    id: 2,
    title: 'Understanding Next.js Routing',
    description: 'Overview of Next.js file-system routing and dynamic routes.',
    content:
      'Next.js provides a powerful file-system based router ... Learn how to create dynamic routes and nested paths.',
  },
  {
    id: 3,
    title: 'TypeScript Essentials',
    description: 'Key TypeScript features and patterns for robust apps.',
    content:
      'TypeScript adds strong typing to JavaScript. This guide covers interfaces, generics, unions, and utility types.',
  },
  {
    id: 4,
    title: 'Effective React Hooks',
    description:
      'Best practices for useState, useEffect, useCallback, and useMemo.',
    content:
      'Hooks simplify state and side-effects. Learn how to structure logic and avoid common pitfalls.',
  },
  {
    id: 5,
    title: 'API Design Fundamentals',
    description: 'Principles for designing clean, maintainable REST APIs.',
    content:
      'From resource modeling to error handling and versioning—this article shares solid API design practices.',
  },
  {
    id: 6,
    title: 'Testing with Jest',
    description: 'Unit and integration testing strategies using Jest.',
    content:
      'Discover patterns for mocking, coverage, and reliable e2e tests using Supertest.',
  },
  {
    id: 7,
    title: 'State Management Basics',
    description: 'When to lift state and how to avoid prop drilling.',
    content:
      'Explore simple state patterns, context, and composition before reaching for heavy tools.',
  },
  {
    id: 8,
    title: 'Effective Type Narrowing',
    description: 'Use guards and discriminated unions in TypeScript.',
    content:
      'Narrowing makes code safer and clearer. This article shows practical patterns for day-to-day work.',
  },
  {
    id: 9,
    title: 'HTTP Caching 101',
    description: 'Leverage ETags, Cache-Control, and immutable assets.',
    content:
      'A pragmatic guide to client and server caching to reduce latency and bandwidth.',
  },
  {
    id: 10,
    title: 'Accessibility for Developers',
    description: 'Build inclusive UIs with simple, consistent patterns.',
    content:
      'Covering semantics, keyboard support, focus management, and screen reader basics.',
  },
  {
    id: 11,
    title: 'API Error Handling Patterns',
    description: 'Design predictable errors and map them to UX.',
    content:
      'Standardize codes and payload shapes; surface actionable messages to users.',
  },
  {
    id: 12,
    title: 'Logging for Observability',
    description: 'From console logs to structured logs and tracing.',
    content:
      'Make logs queryable, add correlation IDs, and log at the right levels.',
  },
  {
    id: 13,
    title: 'Clean Code Naming',
    description: 'Name things so code explains itself.',
    content:
      'Guidelines for functions and variables that communicate intent without comments.',
  },
  {
    id: 14,
    title: 'Edge vs Server Rendering',
    description: 'Understand trade‑offs and choose wisely.',
    content:
      'Latency, data privacy, and caching strategies when moving compute closer to users.',
  },
  {
    id: 15,
    title: 'Security Essentials',
    description: 'OWASP basics for everyday web development.',
    content:
      'Covers XSS, CSRF, SSRF, and dependency risks with practical mitigations.',
  },
  {
    id: 16,
    title: 'Form UX Patterns',
    description: 'Validation, async states, and progressive disclosure.',
    content:
      'Reduce friction with inline validation and optimistic interactions.',
  },
  {
    id: 17,
    title: 'Microservice Contracts',
    description: 'Keep services decoupled but coordinated.',
    content:
      'Versioned APIs, idempotency, and backward‑compatible schema evolution.',
  },
  {
    id: 18,
    title: 'Queues and Async Jobs',
    description: 'When to move work off the request path.',
    content:
      'Use queues for reliability, retries, and throughput without blocking users.',
  },
  {
    id: 19,
    title: 'Pagination Strategies',
    description: 'Offset vs cursor and consistent ordering.',
    content:
      'Choose cursors for stability at scale and handle deleted/inserted rows safely.',
  },
  {
    id: 20,
    title: 'Webhooks Done Right',
    description: 'Security, retries, and signature verification.',
    content:
      'Deliver events reliably; use exponential backoff and signed payloads.',
  },
  {
    id: 21,
    title: 'Rate Limiting Tactics',
    description: 'Protect APIs without harming legitimate users.',
    content:
      'Token buckets, sliding windows, and per‑key scoping with helpful responses.',
  },
  {
    id: 22,
    title: 'File Upload Patterns',
    description: 'Direct‑to‑storage and signed URLs.',
    content: 'Reduce server load and support resumable uploads where needed.',
  },
  {
    id: 23,
    title: 'Search Basics',
    description: 'From LIKE to full‑text to external engines.',
    content:
      'Pick the right approach for scale, fuzziness, and relevance tuning.',
  },
  {
    id: 24,
    title: 'Background Schedulers',
    description: 'Cron jobs, recurring tasks, and drift handling.',
    content:
      'Design idempotent jobs and monitor execution windows and overlaps.',
  },
  {
    id: 25,
    title: 'Configuration Management',
    description: '12‑factor config and secrets separation.',
    content:
      'Use env vars, parameter stores, and staged rollouts for safer deploys.',
  },
  {
    id: 26,
    title: 'Performance Budgets',
    description: 'Keep apps fast with measurable constraints.',
    content: 'Set budgets for bundle size, TTFB, and queries; enforce in CI.',
  },
  {
    id: 27,
    title: 'Testing Pyramid in Practice',
    description: 'Balance unit, integration, and e2e tests.',
    content:
      'Prioritize fast tests and add thin e2e coverage for critical flows.',
  },
  {
    id: 28,
    title: 'Graceful Shutdowns',
    description: 'Handle termination signals and draining.',
    content:
      'Close connections, finish in‑flight jobs, and avoid data loss on deploys.',
  },
  {
    id: 29,
    title: 'Feature Flags 101',
    description: 'Ship safely with gradual rollout.',
    content:
      'Use flags for canaries, A/B tests, and quick rollbacks with auditability.',
  },
  {
    id: 30,
    title: 'API Pagination UX',
    description: 'Designing client UX for big lists.',
    content:
      'Combine infinite scroll, search, and filters with accessible navigation.',
  },
];

// Enrich content with lorem ipsum for detail pages
for (const article of ARTICLES_MOCK) {
  article.content = `${article.content}\n\n${LOREM}\n\n${LOREM}\n\n${LOREM}\n\n${LOREM}`;
}
