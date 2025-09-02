import { PrismaService } from "src/shared/databases/prisma.database";
export declare class ListScenarioRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(): Promise<{
        id: string;
        title: string;
        description: string | null;
        createdAt: Date;
    }[]>;
}
