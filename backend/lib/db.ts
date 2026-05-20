import bashit from "./bashit";

//working (5/19/26)
async function createLink(linkId: string, link: string): Promise<string> {
    // god i love bashit, i spent an hour trying to get sqlite3 to work
    // and this is what did it
    let output = await bashit("sqlite3", [
        "./db/database.db",
        `INSERT INTO links (id, link) VALUES ('${linkId}', '${link}')`
    ]);
    return linkId;
}

async function getLink(linkId: string): Promise<string> {
    // its so beautiful isnt it
    let output = await bashit("sqlite3", [
        "./db/database.db",
        `SELECT link FROM links WHERE id = '${linkId}'`
    ]);
    return output;
}

export {
    createLink,
    getLink
}