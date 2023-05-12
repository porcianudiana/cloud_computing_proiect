import {sendMethodNotAllowed, sendOk,} from '@/js/utils/apiMethods.js';
import {getCollection} from "@/js/utils/functions";

const COLLECTION_NAME = 'records';

const getRecords = async () => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.find({}).toArray();
}

export default async function handler(req, res) {

	const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';
	if(!isAllowedMethod) {
		return sendMethodNotAllowed(res);
	}

	// if(req.method === 'GET' && req.query.id) {
	// 	const id = req.query.id;
	// 	const record = await getRecord(id);
	// 	return sendOk(res, record);
	// }
	//else 
    if(req.method === 'GET') {
		const records = await getRecords();
		return sendOk(res, records);
	}
	// else if(req.method === 'POST') {
	// 	const record = req.body;
	// 	const result = await postRecord(record);
	// 	return sendOk(res, result);
	// }
	// else if(req.method === 'PUT') {
	// 	const record = req.body;
	// 	const result = await putRecord(record);
	// 	return sendOk(res, result);
	// }
	// else if(req.method === 'DELETE') {
	// 	const id = req.query.id;
	// 	const result = await deleteRecord(id);
	// 	return sendOk(res, result);
	// }
}