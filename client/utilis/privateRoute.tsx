"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type PrivateRouteProps = {
  children: ReactNode;
};

const PUBLIC_ROUTES = ["/login", "/register"];

function PrivateRoute({ children }: PrivateRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token")?.trim();
    const isAuthenticated = Boolean(token);
    const isPublicRoute = pathname ? PUBLIC_ROUTES.includes(pathname) : false;

    if (!isAuthenticated && !isPublicRoute) {
      void router.replace("/login");
      setIsChecking(false);
      return;
    }

    if (isAuthenticated && isPublicRoute) {
      void router.replace("/");
      setIsChecking(false);
      return;
    }

    setIsChecking(false);
  }, [pathname, router]);

  if (isChecking) {
    return null;
  }

  return <>{children}</>;
}

export default PrivateRoute;