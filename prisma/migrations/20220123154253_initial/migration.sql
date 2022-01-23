-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "publishedAt" DATETIME NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "platform" INTEGER NOT NULL
);
