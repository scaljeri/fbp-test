import {
	setNodeJSContext,
	stateBasic,
	FbpEngine,
	FbpLogger,
	FbpRandonNumberGenerator } from '@scaljeri/fbp-core-nodejs'; 

setNodeJSContext();


const engine = new FbpEngine();
engine.register(FbpLogger);
engine.register(FbpRandonNumberGenerator)
engine.state = stateBasic;
