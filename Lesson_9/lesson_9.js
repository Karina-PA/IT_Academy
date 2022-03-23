const fs = require ('fs-extra');

fs.ensureDir ('./Folder_1', () => {
    console.log ('First folder is created');
    fs.ensureFile ('./Folder_1/file.txt', () => {
        console.log ('File is created');
        fs.ensureDir ('./Folder_2', () => {
            console.log ('Second folder is created');
            fs.move ('./Folder_1/file.txt', './Folder_2/file.txt', () => {
                console.log ('File is moved');
                fs.remove ('./Folder_2/file.txt', () => {
                    console.log ('File is removed');
                    fs.remove ('./Folder_1', () => {
                        console.log ('First folder is removed');
                        fs.remove ('./Folder_2', () => {
                            console.log ('Second folder is removed')
                        })
                    })
                })
            })
        })
    })
})