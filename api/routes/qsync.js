const express = require('express');
const router = express.Router();

const Host = require('../qsync/Host');

/* GET hosts listing. */
router.get('/hosts', (req, res, next) => {
    res.json([
        new Host({
            id: "Host0",
            enabled: true,
            inetAddr: null,
            port: null
        }),
        new Host({
            id: "Host1",
            enabled: true,
            inetAddr: "snapper",
            port: 8899
        })
    ]);
});

router.get('/jobs', (req, res, next) => {
    res.json([
        {
            id: 1,
            name: "Multimedia_E-books",
            server: "snapper",
            port: 8899,
            folderPairs: [
                {
                    src: "Multimedia/E-books", 
                    dst: "Napper_Backup/Multimedia_E-books/latest/Multimedia/E-books"
                }
            ]
        }
    ]);
});


module.exports = router;
