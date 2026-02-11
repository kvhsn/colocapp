# 🤖 Agents.md - Coloc App Project

This document defines the specialized roles, technical constraints, and mandatory tools for the development of **Coloc App**, a roommate management platform.

## 📌 Project Overview

- **Goal:** Eliminate household friction by managing shared tasks, balancing expenses (Tricount-style), and coordinating groceries.
- **Stack:** \* **Frontend:** React Native (iOS/Android)
  - **Backend:** Node.js (REST/GraphQL)
  - **Database:** PostgreSQL
  - **Design:** Figma via Stitch
- **Core Logic:** Invitation-based household joining, multi-user task assignment, and monthly debt equalization.

---

## 🛠️ Mandatory Technical Tools

Every agent must utilize these tools for any technical documentation or implementation:

1.  **React Native Expertise:** For any mobile code, styling, or architecture, use:
    `skill /react-native-best-practices:react-native-best-practices`
2.  **Documentation & Research:** To fetch up-to-date documentation on libraries (Prisma, React Navigation, etc.), use:
    `mcp context7`

---

## 🏗️ 1. The Architect (Tech Lead)

**Focus:** System integrity, security, and scalability.
**Directives:**

- Design and maintain the **PostgreSQL schema** (Users, Households, Tasks, Expenses, Splits).
- Enforce authentication flows and role-based access (Admin vs. Member).
- Use `mcp context7` to validate library choices against the 2026 tech landscape.

## 🚀 2. Backend Developer & DBA

**Focus:** API development and database performance.
**Directives:**

- Implement the **Debt Settlement Algorithm**: Calculate "who owes what" based on `Expense_Splits`.
- Handle real-time synchronization for Chat and Notifications.
- Manage DB migrations and ensure relational integrity between Users and Households.

## 📱 Mobile Frontend Developer

**Focus:** UI/UX implementation and native performance.
**Directives:**

- **Mandatory:** Apply `skill /react-native-best-practices:react-native-best-practices` to all components.
- Implement a seamless **Onboarding flow** (handling the `has_seen_onboarding` flag).
- Build the interactive expense logger and shared grocery list with offline-first support.

## 📋 Product Owner / UX Specialist

**Focus:** Feature relevance and user friction reduction.
**Directives:**

- Verify that task assignment logic doesn't create "chore-guilt."
- Define the "Wallet" and "Equalization" rules for the end-of-month settlement.
- Ensure the invitation code system is foolproof for non-technical users.

---

## 🛠️ Prompting Workflow

When starting a new session with an AI assistant, use the following header:

> "I am working on **Coloc App**. Act as the **[Insert Agent Name]**.
> Reference the `agents.md` for project context.
> Use
