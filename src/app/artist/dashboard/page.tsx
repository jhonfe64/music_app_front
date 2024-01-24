"use client";
import React from "react";
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
//aqui pedir la infomacion del usuario manadara  redux para
//compartir con los otros componentes

function Dashboard() {
  const session = useSession();

  session && redirect(`/artist/dashboard/profile`);
}

export default Dashboard;
