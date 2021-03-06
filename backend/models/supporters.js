var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const SupportersSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    contact: { type: String},
    text: { type: String},
    img_path: { type: String}, //TODO: 프론트에서 서포터리스트에서 accept 하면 DB에 넣는 Flag 변수인 Boolean type 을 추가
    isAccepted: {type: Boolean},
    homepage : {type : String},
    host : {type : String},
    time:{type: String}
});

// create new User document
SupportersSchema.statics.create = function(supporter_info) {
    const {
        name,
        email,
        contact,
        text,
        img_path,
        homepage,
        host
    } = supporter_info;


    const supporter = new this({
        name,
        email,
        contact,
        text,
        img_path,
        homepage,
        host,
        time : Date(),
        isAccepted : false
    })
    // return the Promise
    return supporter.save()
}


module.exports = mongoose.model('supporter', SupportersSchema);