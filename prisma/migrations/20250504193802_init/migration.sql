-- CreateTable
CREATE TABLE "Generation" (
    "id" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "tone" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Generation_pkey" PRIMARY KEY ("id")
);
