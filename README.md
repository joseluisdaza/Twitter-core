# Twitter-core — Chirp API Models

> Smithy IDL models for the Chirp API. This repository is the single source of truth for all API contracts and generates TypeScript types used by the Lambda handlers.

[![Smithy](https://img.shields.io/badge/Smithy-2.0-blue)](https://smithy.io/)
[![Java](https://img.shields.io/badge/Java-21+-orange?logo=openjdk)](https://openjdk.org/)

---

## 📋 Overview

This repository contains the [Smithy](https://smithy.io/) IDL models that define the **Chirp API**. Running the Gradle build generates TypeScript server-side code (types, validators, and operation stubs) consumed by the Lambda handlers in the main infrastructure repository.

It is used as a **Git Submodule** inside [joseluisdaza/twitter](https://github.com/joseluisdaza/twitter), mounted at `smithy/`.

---

## 📁 Structure

```
Twitter-core/
├── model/
│   ├── main.smithy        # ChirpService — lists all 23 operations
│   ├── auth.smithy        # Login, Logout, Register
│   ├── chirps.smithy      # Chirp CRUD, likes, hide, timeline
│   ├── comments.smithy    # CreateComment, GetChirpComments, DeleteComment
│   ├── follows.smithy     # FollowUser, UnfollowUser, GetFollowers, GetFollowing
│   ├── users.smithy       # GetUser, GetUserByUsername, UpdateUserProfile
│   └── common.smithy      # Shared types and error shapes
├── build.gradle           # Gradle build config
├── smithy-build.json      # Smithy build config (TypeScript codegen plugin)
└── gradlew                # Gradle wrapper
```

---

## 🚀 Getting Started

### Prerequisites

- **Java 21+** — required by the Gradle wrapper

### Build

```bash
./gradlew build
```

Generated TypeScript types are placed in:

```
generated/source/typescript-server-codegen/
```

These are referenced by the Lambda handlers in the infrastructure repository via a relative path resolved at CDK bundle time.

---

## 🔌 API Operations

All 23 operations are registered in `model/main.smithy` under the `ChirpService`:

| Group    | Operations |
|----------|-----------|
| **Auth** | `Login` · `Logout` · `Register` |
| **Chirps** | `CreateChirp` · `GetChirp` · `GetUserChirps` · `GetTimeline` · `DeleteChirp` · `LikeChirp` · `UnlikeChirp` · `GetChirpLikes` · `GetUserLikes` · `HideChirp` |
| **Comments** | `CreateComment` · `GetChirpComments` · `DeleteComment` |
| **Follows** | `FollowUser` · `UnfollowUser` · `GetFollowers` · `GetFollowing` |
| **Users** | `GetUser` · `GetUserByUsername` · `UpdateUserProfile` |

---

## 🔗 Related Repositories

| Repository | Description |
|---|---|
| [joseluisdaza/twitter](https://github.com/joseluisdaza/twitter) | AWS CDK infrastructure + Lambda handlers |
| [joseluisdaza/Twitter-frontend](https://github.com/joseluisdaza/Twitter-frontend) | Static frontend (HTML/CSS/JS) |