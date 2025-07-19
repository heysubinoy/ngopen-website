import { Suspense } from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DashboardContent from "@/components/dashboard-content";
import { LoadingState } from "@/components/loading-state";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <Suspense fallback={<LoadingState />}>
      <DashboardContent />
    </Suspense>
  );
}
