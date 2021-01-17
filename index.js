import register from './register.js';

const observable = async () => {
	const {Observable: AnyObservable} = await register();
	return AnyObservable;
};

export default observable;
