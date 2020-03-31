const reqEvent = (event) => require(`../events/ready.js`);
const event = (event) => require(`../events/disconnect.js`);
const Event = (event) => require(`../events/reconnecting.js`);
const events = (event) => require(`../events/eventTriger.js`);


module.exports = bot => {
    bot.on("ready", function(){reqEvent("ready")(bot) });
    bot.on("reconnecting", () => reqEvent("reconnecting" (bot)))
    bot.on("disconnect", () => reqEvent("disconnect" (bot)))
    bot.on("eventTriger", () => reqEvent("eventTriger" (bot)))
    
    
}