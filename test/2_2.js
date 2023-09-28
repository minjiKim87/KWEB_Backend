const fs = require('fs');
const path = require('path');
const util = require('util');

const getDir = util.promisify(fs.readdir);
const getStat = util.promisify(fs.stat);

const searchDirectory = async directory => {
    try {
        const files = await getDir(directory);

        for (let file of files) {
            const filepath = path.join(directory, file);
            const statInfo = await getStat(filepath);

            if (statInfo.isDirectory()) {
                await searchDirectory(filepath); 
            } else if (path.extname(file) === '.js') {
                console.log(filepath);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

searchDirectory('./test'); 
