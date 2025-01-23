module.exports = {
    formate: 'A4',
    orientation: 'potrait',
    border: '10mm',
    timeout: 120000,
    header: {
        height: '10mm',
        contents: ``
    },
    footer: {
        height: '10mm',
        contents: {
            first: 'Cover page',
            2: 'Second page',
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>',
            last: 'Last Page'
        }
    },
}