const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  body: { type: String, required: true },
  type: { type: String, required: false },
  folder: { type: Schema.Types.ObjectId, ref: 'Folder' },
});

module.exports = mongoose.model('File', FileSchema);
