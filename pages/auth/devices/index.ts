import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ error: "Unauthorized" });

  const devices = await prisma.device.findMany({
    where: {
      owner: { email: session.user.email }
    },
    orderBy: { createdAt: "desc" }
  });

  res.status(200).json(devices);
}