const {google} = require('googleapis');
const { ConnectionStates } = require('mongoose');

const auth = new google.auth.GoogleAuth({
    keyFile: "keys.json", //the key file
    //url to spreadsheets API
    scopes: "https://www.googleapis.com/auth/spreadsheets", 
});
const authClientObject = auth.getClient();

//Google sheets instance
const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });

// spreadsheet id
const spreadsheetId = "1FFVdpNqWv8Rd3CR1rGW4NN-DLeqwjeKzBgEIeHZqk-Y";

const updateSheet = async(data) => {
    // Get metadata about spreadsheet
    const sheetClear = await googleSheetsInstance.spreadsheets.values.clear({
        auth,
        spreadsheetId,
        range: "A6:F100",
    });
    // console.log(data.length)
    if(data.length){       
        for(var x = 0;x < data.length;x++){
            await googleSheetsInstance.spreadsheets.values.update({
                auth,
                spreadsheetId,
                range: "A"+ (x+6) +":F"+(x+6),
                valueInputOption: "USER_ENTERED", 
                resource: {
                    values: [[x+1,data[x].id,data[x].name,data[x].subject,data[x].teacher, data[x].time]]
                },
            });
        }}
    // console.log(sheetInfo.data.values.length);
}
module.exports = {updateSheet}