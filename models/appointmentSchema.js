import mongoose from 'mongoose';
import validator from 'validator';

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, 'First Name Must Contain At Least 3 Characters!'],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, 'Last Name Must Contain At Least 3 Characters!'],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'Provide A Valid Email!'],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, 'Phone Number Must Contain Exact 11 Digits!'],
    maxLength: [11, 'Phone Number Must Contain Exact 11 Digits!'],
  },
  nic: {
    type: String,
    required: true,
    minLength: [13, 'NIC Must Contain Only 13 Digits!'],
    maxLength: [13, 'NIC Must Contain Only 13 Digits!'],
  },
  dob: {
    type: Date,
    required: [true, 'DOB Is Required!'],
  },
  gender: {
    type: String,
    required: [true, 'Gender Is Required!'],
    enum: ['Male', 'Female'],
  },
  appointment_date: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending',
  },
});

export const Appointment = mongoose.model('Appointment', appointmentSchema);
