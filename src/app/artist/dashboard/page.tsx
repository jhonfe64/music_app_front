"use client";
import React from "react";
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
//aqui pedir la infomacion del usuario manadara  redux para
//compartir con los otros componentes

function Dashboard() {
  const session = useSession();
  const user: any = session?.data?.user;
  const id = user?.userToken?.id;
  id && id.length > 0 && redirect(`/artist/dashboard/profile/${id}`);
}

export default Dashboard;
