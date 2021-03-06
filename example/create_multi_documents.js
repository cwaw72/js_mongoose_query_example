// 다수 다큐먼트 넣기 (insert 시 mongoose unique key 처리)

const mongoose = require('mongoose');
mongoose.connect(process.env.mongoDBUrl);

const testModel = require('../models/test');

const create_multi_documents = async () => {
  try {

    const testList = [];
    for (let i = 1; i < 10000; i += 1) {
      testList.push(new testModel());
    }

    const result = await testModel.collection.insertMany(testList, {ordered: false});
    console.log('result', result);
    return undefined;
  }
  catch (err) {
    throw console.error('err', err);
  }
}
