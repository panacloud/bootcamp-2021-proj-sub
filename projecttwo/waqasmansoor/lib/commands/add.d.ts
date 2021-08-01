import { Command } from '@oclif/command';
export default class Add extends Command {
    static description: string;
    static args: {
        name: string;
    }[];
    static flags: {
        done: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
