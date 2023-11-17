const alphabet = "!$&'()*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz=";

export function url_btoa(data)
{
	let result = "";
	for(let i = 0; i < data.length; i += 3)
	{
		const a = data[i];
		const b = data[i + 1];
		const c = data[i + 2];
		const aIndex = a >> 2;
		const bIndex = ((a & 3) << 4) | (b >> 4);
		const cIndex = ((b & 15) << 2) | (c >> 6);
		const dIndex = c & 63;
		result +=
			alphabet.charAt(aIndex) +
			alphabet.charAt(bIndex) +
			(i + 1 < data.length ? alphabet.charAt(cIndex) : "") +
			(i + 2 < data.length ? alphabet.charAt(dIndex) : "");
	}
	return result;
}

export function url_atob(str)
{
	let result = new Uint8Array(Math.floor((str.length * 3) / 4));
	let resultIndex = 0;
	let paddingCount = 0;
	for(let i = 0; i < str.length; i += 4)
	{
		const aIndex = alphabet.indexOf(str.charAt(i));
		const bIndex = alphabet.indexOf(str.charAt(i + 1));
		const cIndex = i + 2 < str.length ? alphabet.indexOf(str.charAt(i + 2)) : -1;
		const dIndex = i + 3 < str.length ? alphabet.indexOf(str.charAt(i + 3)) : -1;
		const a = (aIndex << 2) | (bIndex >> 4);
		const b = ((bIndex & 15) << 4) | (cIndex >> 2);
		const c = ((cIndex & 3) << 6) | dIndex;
		result[resultIndex++] = a;
		if(cIndex !== -1)
			result[resultIndex++] = b;
		if(dIndex !== -1)
			result[resultIndex++] = c;
		if(str.charAt(i + 2) === "=")
			paddingCount++;
		if(str.charAt(i + 3) === "=")
			paddingCount++;
	}
	return result.slice(0, resultIndex - paddingCount);
}

const compressionMethod = "deflate";

export async function deflate(str)
{
	const stream = new TextEncoderStream();
	const writer = stream.writable.getWriter();
	const writePromise = writer.write(str).then(_ => writer.close());

	let res = [];
	const reader = stream
		.readable
		.pipeThrough(new CompressionStream(compressionMethod))
		.getReader();
	const readPromise = new Promise(async resolve => {
		while(true) {
			const {done, value} = await reader.read();
			if(done) break;
			res.push(...value);
		}
		resolve();
	});
	await Promise.all([writePromise, readPromise]);
	return res;
}

export async function inflate(bytes)
{
	const stream = new DecompressionStream(compressionMethod);
	const writer = stream.writable.getWriter();
	const writePromise = writer.write(bytes).then(_ => writer.close());

	let res = "";
	const reader = stream
		.readable
		.pipeThrough(new TextDecoderStream())
		.getReader();
	const readPromise = new Promise(async resolve => {
		while(true) {
			const {done, value} = await reader.read();
			if(done) break;
			res += value;
		}
		resolve();
	});
	await Promise.all([writePromise, readPromise]);
	return res;
}
