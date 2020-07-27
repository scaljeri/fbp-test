import { nodejs } from '@scaljeri/fbp-core'; 

const { 
	setNodeJSContext,
	setWorkerPath,
	setNodePaths,
	stateBasicAsync, 
	FbpEngine,
	FbpLogger,
	FbpRandonNumberGenerator } = nodejs;

setNodeJSContext();
setWorkerPath('./node_modules/@scaljeri/fbp-core/dist/nodejs/nodejs-node-worker-esm.js');
// setNodePaths({ _: './node_modules/@scaljeri/fbp-core/dist/nodes' });
setNodePaths({ _: '../nodes' });

const engine = new nodejs.FbpEngine();
engine.register(FbpLogger);
engine.register(FbpRandonNumberGenerator)
engine.state = stateBasicAsync;
