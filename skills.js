const bluetooth = require('bluetooth');

// get bluetooth devices nearby
function getBluetoothDevices() {
    bluetooth.on('device', function (address, name) {
        console.log(name + ' (' + address + ')');
    });

    bluetooth.discover();
}

getBluetoothDevices();