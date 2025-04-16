"use server"

import { cookies } from "next/headers"
import type { User } from "./types"

// Mock database for demonstration purposes
// In a real application, you would use a database
const USERS_DB: User[] = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    // In a real app, passwords would be hashed
    // and auth keys would be securely generated
    authKey: "ngp_1a2b3c4d5e6f7g8h9i0j",
  },
]

// Add more robust error handling to the login function
export async function login(email: string, password: string) {
  // In a real app, you would verify credentials against a database
  // and use proper password hashing
  const user = USERS_DB.find((u) => u.email === email)

  if (!user) {
    throw new Error("User not found")
  }

  // In a real app, you would verify the password here
  // For demo purposes, we're skipping this step

  // Create a session
  await createSession(user.id)

  return user
}

// Add more robust error handling to the signup function
export async function signup(name: string, email: string, password: string) {
  // Validate inputs
  if (!name || !email || !password) {
    throw new Error("All fields are required")
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format")
  }

  // Check if user already exists
  if (USERS_DB.some((u) => u.email === email)) {
    throw new Error("User already exists")
  }

  // In a real app, you would hash the password and
  // generate a secure auth key
  const newUser: User = {
    id: String(USERS_DB.length + 1),
    name,
    email,
    authKey: `ngp_${Math.random().toString(36).substring(2, 15)}`,
  }

  // Add user to "database"
  USERS_DB.push(newUser)

  // Create a session
  await createSession(newUser.id)

  return newUser
}

export async function getCurrentUser(): Promise<User | null> {
  const sessionId = cookies().get("session")?.value

  if (!sessionId) {
    return null
  }

  // In a real app, you would verify the session from a database
  // and check if it's still valid
  const userId = sessionId
  const user = USERS_DB.find((u) => u.id === userId)

  return user || null
}

async function createSession(userId: string) {
  // In a real app, you would create a session in a database
  // and set a secure, HTTP-only cookie with the session ID

  // For this example, we'll just use the user ID as the session ID
  cookies().set("session", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })
}

export async function logout() {
  cookies().delete("session")
}
