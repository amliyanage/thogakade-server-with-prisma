-- CreateTable
CREATE TABLE `Customer` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `nic` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
