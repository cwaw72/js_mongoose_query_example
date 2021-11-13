// size 개수만큼 랜덤한 순서로 검색

const mongoose = require('mongoose');
mongoose.connect(process.env.mongoDBUrl);

const testModel = require('../models/test');

const create_multi_documents = async () => {
  try {

    const testList = [];
    for (let i = 1; i < 10000; i += 1) {
      testList.push(new testModel());
    }

    const result = await testModel.collection.insertMany(testList);
    console.log('result', result);
    return undefined;
  }
  catch (err) {
    throw console.error('err', err);
  }
}
