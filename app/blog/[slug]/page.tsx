import React from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaEnvelope, FaBlog, FaArrowLeft, FaList } from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    slug: "scalable-sql-schema-realtime-chat",
    title: "Designing a Scalable SQL Schema for a Real-Time Chat Application",
    excerpt:
      "Building a real-time chat system sounds simple at first—users send messages, and others receive them. But once you start thinking about delivery guarantees, read receipts, group chats, and scalability, the data model becomes significantly more complex.",
    date: "2025-03-18",
    readTime: "9 min read",
    category: "Backend",
    tags: ["PostgreSQL", "SQL", "Schema Design", "Real-Time", "Chat"],
    content: `Building a real-time chat system sounds simple at first—users send messages, and others receive them. But once you start thinking about delivery guarantees, read receipts, group chats, and scalability, the data model becomes significantly more complex.

In this post, we'll design a normalized and scalable SQL schema (PostgreSQL) for a chat application, inspired by real-world systems like those used in modern platforms.

Problem Statement

We want to design a chat system that supports:

One-to-one and group conversations

Real-time messaging

Message delivery tracking

Read receipts

High scalability under heavy load

Key Data Points

Before jumping into schema design, let's identify the core pieces of data:

Message content (text/media)

Sender and recipients

Send time

Delivery status (is_delivered, delivered_at)

Read status (is_read, read_at)

Conversation participants

These requirements will drive our schema.

Database Schema Design

We'll break the system into a few core tables.

1. Users

Stores basic user information.

users (
  id BIGSERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

2. Conversations

Represents a chat thread (either 1:1 or group).

conversations (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  ended_at TIMESTAMP NULL
);

Note: We intentionally do not store user IDs here, because a conversation can have multiple participants.

3. Conversation Participants

Maps users to conversations.

conversation_participants (
  id BIGSERIAL PRIMARY KEY,
  conversation_id BIGINT REFERENCES conversations(id),
  user_id BIGINT REFERENCES users(id),
  joined_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(conversation_id, user_id)
);

This table enables:

Group chats

Adding/removing participants

Querying all conversations for a user

4. Messages

Stores individual messages.

messages (
  id BIGSERIAL PRIMARY KEY,
  conversation_id BIGINT REFERENCES conversations(id),
  sender_id BIGINT REFERENCES users(id),
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

Key points:

Each message belongs to a conversation

Each message has a sender

Messages are immutable (recommended for auditability)

5. Message Status (Delivery & Read Tracking)

Instead of storing is_read or is_delivered directly on the message, we track it per user.

message_status (
  id BIGSERIAL PRIMARY KEY,
  message_id BIGINT REFERENCES messages(id),
  user_id BIGINT REFERENCES users(id),
  is_delivered BOOLEAN DEFAULT FALSE,
  delivered_at TIMESTAMP NULL,
  is_read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP NULL,
  UNIQUE(message_id, user_id)
);

This design is crucial for:

Group chats (different users read at different times)

Accurate delivery tracking

Scalability

Why This Design Works

1. Fully Normalized

No redundant data

Clear relationships using foreign keys

Easy to maintain and extend

2. Scales for Group Chats

By separating:

conversations

participants

message statuses

we avoid duplication and support any number of users per chat.

3. Flexible Read/Delivery Tracking

Instead of a single is_read flag, we support:

Per-user delivery

Per-user read timestamps

This mirrors how real chat apps behave.

Scaling Considerations

A normalized schema alone is not enough. To handle large-scale systems, we need additional strategies.

Indexing

Critical indexes:

CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);
CREATE INDEX idx_message_status_user_id ON message_status(user_id);

Pagination

Never load all messages at once.

Use:

Cursor-based pagination (created_at, id)

LIMIT queries

Partitioning

For very large systems:

Partition messages table by time (e.g., monthly)

Or shard by conversation_id

Caching

Use a caching layer (e.g., Redis) for:

Recent messages

Active conversations

Tradeoffs

Approach          | Pros              | Cons
Normalized schema | Clean, flexible   | Requires joins
Denormalized schema | Faster reads   | Harder to maintain

In practice, many systems use a hybrid approach:

Normalize in the database

Denormalize in cache

Final Thoughts

Designing a chat system is a great exercise in real-world backend engineering. What looks simple quickly introduces challenges around:

Data modeling

Concurrency

Scalability

The schema we designed here provides a strong foundation that can scale with your application while remaining clean and maintainable.`,
  },
];

function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative bg-white min-h-screen overflow-hidden text-neutral-900 mx-auto sm:px-10 px-5">
      <div className="max-w-3xl w-full mx-auto">
        <FloatingNav
          variant="light"
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Blog", link: "/blog", icon: <FaBlog /> },
            { name: "About", link: "/about", icon: <FaUser /> },
            { name: "Contact", link: "/contact", icon: <FaEnvelope /> },
          ]}
        />

        {/* Back Button */}
        <div className="pt-32 pb-8">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors mb-6"
          >
            <FaArrowLeft className="text-base" />
            Back to blog
          </Link>
        </div>

        {/* Blog Post */}
        <article className="mb-20">
          <span className="inline-block bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-neutral-500">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-neutral-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </article>

        <div className="text-center pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-800 px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors text-sm font-medium"
          >
            <FaList />
            View all posts
          </Link>
        </div>
      </div>
    </main>
  );
}

