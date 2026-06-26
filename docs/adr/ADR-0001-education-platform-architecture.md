# ADR-0001 — Create SaaSCoop Education Platform as a separate open source product

## Status

Accepted

## Context

SaaSCoop needs a sustainable way to publish open multilingual courses, onboard new contributors and reuse educational assets across GitHub, Microsoft Fabric, AI Engineering and other topics.

## Decision

Create a separate repository named `saascoop-education-platform` to act as the education hub. Individual courses may remain in independent repositories and be linked from the platform.

## Alternatives considered

1. Keep everything inside each course repository.
2. Create a monorepo with all courses.
3. Create a separate platform repository and keep courses modular.

## Consequences

Positive:

- Reduces coupling between platform and courses.
- Allows courses to evolve independently.
- Creates a reusable education asset for SaaSCoop.

Negative:

- Requires coordination between the platform and course repositories.
- Adds one extra repository to maintain.

## Mitigations

- Use templates.
- Use GitHub Actions.
- Document contribution rules.
- Keep the first version static and low-cost.
