import { Schema, model } from 'mongoose';

let SecuritySchema: Schema = new Schema({
  id: {
    type: String,
    default: '',
    required: true
  },
  historyDetails: [
    {
      endDate: {
        type: String,
        default: '',
        required: true
      },
      value: {
        type: String,
        default: '',
        required: true
      }
    }
  ]
});

export default model('Security', SecuritySchema);
