import { Command } from '@oclif/command';
export default class List extends Command {
    static description: string;
    static args: {
        name: string;
    }[];
    run(): Promise<void>;
}
