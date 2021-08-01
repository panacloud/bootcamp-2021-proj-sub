import { Command } from '@oclif/command';
export default class Interact extends Command {
    static description: string;
    static args: {
        name: string;
    }[];
    run(): Promise<void>;
}
