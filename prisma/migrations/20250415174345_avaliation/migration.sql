-- CreateTable
CREATE TABLE "avaliations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "perfil" TEXT,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
