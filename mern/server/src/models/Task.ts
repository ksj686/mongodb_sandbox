import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  content: string;
  status: 'pending' | 'done';
  priority: 'low' | 'medium' | 'high';
  tags: string[];
  project: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema: Schema = new Schema({
  content: { type: String, required: true },
  status: { type: String, enum: ['pending', 'done'], default: 'pending' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  tags: [{ type: String }],
  project: { type: Schema.Types.ObjectId, ref: 'Project', required: true }
}, {
  timestamps: true
});

export default mongoose.model<ITask>('Task', taskSchema);
