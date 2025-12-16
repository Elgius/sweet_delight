"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CustomerLoginForm } from "@/components/customer/customer-login-form";
import { useCustomerAuth } from "@/hooks/use-customer-auth";
import { User } from "lucide-react";

export default function CustomerLoginPage() {
  const { isAuthenticated } = useCustomerAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/customer/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-secondary/30 to-gray-100 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
            <User className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-primary">Sweet Delights</h1>
          <p className="text-muted-foreground">Customer Portal</p>
        </div>
        <CustomerLoginForm />
      </div>
    </div>
  );
}
