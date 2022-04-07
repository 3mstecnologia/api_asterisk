const app = require("express");
const server = require("http").createServer(app);
server.listen(5050, () => {
  console.log("Server is running on port 5050");
});

const asterisk = require("asterisk-manager");
let ami = asterisk(5038, "172.16.255.102", "matheus", "21108399");

//ami.on("peerstatus", async (event) => {
//  console.log(event);
//});
ami.action(
  {
    action: "Originate",
    channel: "Khomp/*glinke1/991108888",
    context: "ramais",
    exten: 999,
    priority: 1,
    //EarlyMedia: "true",
    callerid: "991108888",
    //timeout: "30",
    async: "true",
    variable: {
      name1: "value1",
      name2: "value2",
    },
  },
  function (err, res) {}
);
