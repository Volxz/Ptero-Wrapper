const Panel = require('./class/panel');

my_panel = new Panel('https://panel.local', 'public_key', 'private_key');

my_panel.get_server(1,(val, err) => {
    console.log(val);
});

