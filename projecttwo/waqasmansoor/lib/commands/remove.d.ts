import { Command } from '@oclif/command';
export default class Remove extends Command {
    static description: string;
    static args: {
        name: string;
    }[];
    run(): Promise<void>;
}
