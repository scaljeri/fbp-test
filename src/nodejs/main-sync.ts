import { nodejs } from '@scaljeri/fbp-core'; 

const { 
	setNodeJSContext,
	stateBasic, 
	FbpEngine,
	FbpLogger,
	FbpRandonNumberGenerator } = nodejs;

setNodeJSContext();


const engine = new nodejs.FbpEngine();
engine.register(FbpLogger);
engine.register(FbpRandonNumberGenerator)
engine.state = stateBasic;
