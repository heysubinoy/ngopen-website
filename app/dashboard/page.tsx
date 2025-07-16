import { Suspense } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DashboardContent from "@/components/dashboard-content";
import { LoadingState } from "@/components/loading-state";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <Suspense fallback={<LoadingState />}>
      <DashboardContent user={user!} />
    </Suspense>
  );
}
