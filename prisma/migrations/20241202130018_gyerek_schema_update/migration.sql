-- CreateTable
CREATE TABLE `jatek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `megnevezes` VARCHAR(191) NOT NULL,
    `anyag` VARCHAR(191) NOT NULL,
    `suly` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gyerek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nev` VARCHAR(191) NOT NULL,
    `cim` VARCHAR(191) NOT NULL,
    `joe` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_gyerekjatek` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_gyerekjatek_AB_unique`(`A`, `B`),
    INDEX `_gyerekjatek_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_gyerekjatek` ADD CONSTRAINT `_gyerekjatek_A_fkey` FOREIGN KEY (`A`) REFERENCES `gyerek`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_gyerekjatek` ADD CONSTRAINT `_gyerekjatek_B_fkey` FOREIGN KEY (`B`) REFERENCES `jatek`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
