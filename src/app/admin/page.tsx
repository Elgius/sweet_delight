"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/admin/login-form";
import { useAdminAuth } from "@/hooks/use-admin-auth";
import { Cake } from "lucide-react";

export default function AdminLoginPage() {
  const { isAuthenticated } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin/staff");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-secondary/30 to-gray-100 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
            <Cake className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-primary">Sweet Delights</h1>
          <p className="text-muted-foreground">Staff Portal</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
