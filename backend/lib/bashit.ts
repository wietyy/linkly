import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);


// ladies and gentlemen, this is the solution to all problems in life
// created 5/19/26 by wietyy
export async function bashit(command: string): Promise<string> {
    try {
        const { stdout } = await execAsync(command);
        return stdout.trim();
    } catch (err: any) {
        // include stderr if available for debugging
        const message =
            err?.stderr?.toString()?.trim() ||
            err?.message ||
            "Unknown error running bash command";

        throw new Error(message);
    }
}

export default bashit;