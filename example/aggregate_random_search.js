// size 개수만큼 랜덤한 순서로 검색

const mongoose = require('mongoose');
mongoose.connect(process.env.mongoDBUrl);

const testModel = require('../models/test');

const aggregate_random_search = async()=>{
  try{
    const result = await testModel.aggregate([
      {
        $sample: { size: 1 }
      }
    ]);
    console.log('result', result);
    return undefined;
  }
  catch(err){
    throw console.error('err', err);
  }
}