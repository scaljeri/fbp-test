import {
	setNodeJSContext,
	setWorkerPath,
	setNodePaths,
	stateBasicAsync,
	FbpEngine,
	FbpLogger,
	FbpRandonNumberGenerator } from '@scaljeri/fbp-core-nodejs'; 

setNodeJSContext();
setWorkerPath('./node_modules/@scaljeri/fbp-core-nodejs/dist/nodejs-node-worker-esm.js');
// setNodePaths({ _: './node_modules/@scaljeri/fbp-core/dist/nodes' });
setNodePaths({ _: '../../fbp-core/dist/nodes' });

const engine = new FbpEngine();
engine.register(FbpLogger);
engine.register(FbpRandonNumberGenerator)
engine.state = stateBasicAsync;
