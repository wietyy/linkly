import bashit from "./bashit";

//working (5/19/26)
async function createLink(linkId: string, link: string): Promise<string> {
    let output = await bashit(`sqlite3 ./db/database.db "INSERT INTO links (id, link) VALUES ('${linkId}', '${link}')"`);
    return linkId;
}

// TODO: Create this function
async function getLink(linkId: string): Promise<string> {
    let output = await bashit(`sqlite3 ./db/database.db "SELECT link FROM links WHERE id = '${linkId}'"`);
    return output;
}

export {
    createLink,
    getLink
}