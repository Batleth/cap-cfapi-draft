const cds = require('@sap/cds');

module.exports = async srv => {

    srv.on("READ", "TestProjected", async (srv) => {
        //const CF = cds.connect.to("CF");
        //const result = await CF.send({
        //    method: 'GET',
        //    path: "/v3/apps"
        //});

        return [
            {
                ID: "29365561-ec77-46f3-9ab0-88b7f72a8df8",
                property1: "String"
            }
        ]
    })
}