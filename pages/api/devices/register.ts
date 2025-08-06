import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ error: "Unauthorized" });

  const { name, identifier } = req.body;

  try {
    const device = await prisma.device.create({
      data: {
        name,
        identifier,
        owner: { connect: { email: session.user.email } }
      }
    });
    res.status(200).json(device);
  } catch (e) {
    res.status(400).json({ error: "Device already exists or invalid input" });
  }
}