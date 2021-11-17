// type data 길이가 5가 아닌 데이터 검색

const mongoose = require('mongoose');
mongoose.connect(process.env.mongoDBUrl);

const testModel = require('../models/test');

const find_strLength = async () => {
  try {

    const result = await testModel.find({"$expr": { "$ne": [ { "$strLenCP": "$type" }, 5 ] }})
    console.log('result', result);
    return undefined;

  }
  catch (err) {
    throw console.error('err', err);
  }
}
