import { Schema, model } from 'mongoose';

let PortfolioSchema: Schema = new Schema({
  id: {
    type: String,
    default: '',
    required: true
  },
  transactions: [
    {
      securityId: {
        type: String,
        default: '',
        required: true
      },
      type: {
        type: String,
        default: '',
        required: true
      },
      date: {
        type: String,
        default: '',
        required: true
      },
      amount: {
        type: String,
        default: '',
        required: true
      }
    }
  ]
});

export default model('Portfolio', PortfolioSchema);
