import speedTest = require('speedtest-net');
const test = speedTest({ maxTime: 5000 })

test.on('testesever', (sever) => {
    pingTime = sever.bestPing;
})

test.on('data', (data) => {
    console.log(data)
})
test.on('error', (data) => console.log(data))