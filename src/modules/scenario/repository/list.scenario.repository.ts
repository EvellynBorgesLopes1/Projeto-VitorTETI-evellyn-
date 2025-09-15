import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class ListScenarioRepository {
    listScenario() {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService) {}

    async list() {
        const scenarios = await this.prisma.scenario.findMany();
        return scenarios;
    }
}