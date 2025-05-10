db.createCollection('students')

db.students.insertOne({
  studentId: 'S001',
  name: 'John Doe',
  grade: '5',
  vaccinatedStatus: false,
  vaccinationDate: null,
  vaccineName: null
})

db.students.insertMany([
  { studentId: 'S002', name: 'Jane Doe', grade: '6', vaccinatedStatus: true, vaccinationDate: new Date('2025-04-01'), vaccineName: 'Covaxin' },
  { studentId: 'S003', name: 'Alice Smith', grade: '7', vaccinatedStatus: false, vaccinationDate: null, vaccineName: null }
])
