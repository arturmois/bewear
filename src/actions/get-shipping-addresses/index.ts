"use server";

import { headers } from "next/headers";

import { db } from "@/db";
import { auth } from "@/lib/auth";

export const getShippingAddresses = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  const addresses = await db.query.shippingAddressTable.findMany({
    where: (addr, { eq }) => eq(addr.userId, session.user.id),
  });
  return addresses;
};


