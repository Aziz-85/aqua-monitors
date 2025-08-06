import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = 'Aziz@gmail.com'
  const plainPassword = '123456'
  const hashedPassword = await bcrypt.hash(plainPassword, 10)

  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hashedPassword },
    create: {
      name: 'Aziz',
      email,
      password: hashedPassword,
    },
  })

  console.log(`✅ User ${user.email} created or updated.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
