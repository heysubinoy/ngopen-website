import { Suspense } from "react"
import { getCurrentUser } from "@/lib/auth"
import DashboardContent from "@/components/dashboard-content"
import { LoadingState } from "@/components/loading-state"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  return (
    <Suspense fallback={<LoadingState />}>
      <DashboardContent user={user!} />
    </Suspense>
  )
}
