const express = require('express');
const router = express.Router();

/* GET hosts listing. */
router.get('/hosts', (req, res, next) => {
    res.json([
        {
            id: "Host0",
            enabled: true,
            inetAddr: null,
            port: null
        },
        {
            id: "Host1",
            enabled: true,
            inetAddr: "snapper",
            port: 8899
        }
    ]);
});

router.get('/jobs', (req, res, next) => {
    res.json([
        {
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
