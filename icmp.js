const express = require('express');
const bodyParser = require('body-parser');
const ping = require('ping');

const app = express();

app.use(bodyParser.json());

// Add CORS headers to the response
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  //TODO:
  // res.header(
  //   'Access-Control-Allow-Origin',
  //   'https://measurements23.azurewebsites.net'
  // );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Private-Network', true);
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get('/test', (req, res) => {
  res.json({ message: 'ICMP server ready' });
});

app.post('/start-ping-test', (req, res) => {
  const { numberOfTrials, remoteEndpointForTest } = req.body;
  runPingTest(numberOfTrials, remoteEndpointForTest);
  res.json({ message: 'ICMP tests running' });
});

app.get('/get-ping-test-results', (req, res) => {
  res.json({ pingTestResults });
});

// state
let pingTestResults = [];

async function runPingTest(numberOfTrials, remoteEndpoint) {
  pingTestResults = [];
  for (let i = 0; i < numberOfTrials; i++) {
    try {
      const pingResult = await new Promise((resolve) => {
        const pingSession = ping.promise.probe(remoteEndpoint, {
          timeout: 2000,
          extra: ['-s', '32'],
        });

        let timeoutId = setTimeout(() => {
          pingSession.stop();
          resolve({
            trialTimeInMs: null,
            trialResult: 'timeout',
          });
        }, 2000);

        pingSession.then((response) => {
          clearTimeout(timeoutId);

          const result = {
            trialTimeInMs: response.time,
            trialResult: undefined,
          };

          if (response.alive) {
            result.trialResult = 'success';
          } else if (response.time === undefined) {
            result.trialResult = 'timeout';
          } else {
            result.trialResult = 'error';
          }

          resolve(result);
        });
      });
      pingTestResults.push(pingResult);
      console.log('result: ', pingResult);
    } catch {
      const result = {
        trialResult: 'error',
      };
      console.log(error);
      pingTestResults.push(result);
    }
  }
}

app.listen(1010, () => {
  console.log('Local Server is running on http://localhost:1010');
});
