//Queries for CRUD Operations
//1. Fetch all students

db.students.find()

//2. Fetch student by studentId

db.students.find({ studentId: 'S001' })

//3. Add a new student

db.students.insertOne({
  studentId: 'S004',
  name: 'Mark Lee',
  grade: '5',
  vaccinatedStatus: false,
  vaccinationDate: null,
  vaccineName: null
})

//4. Update student vaccination status

db.students.updateOne(
  { studentId: 'S003' }, 
  { $set: { vaccinatedStatus: true, vaccinationDate: new Date('2025-05-15'), vaccineName: 'Covaxin' } }
)

//5. Fetch all vaccination drives

db.vaccination_drives.find()

//6. Fetch vaccination drive by driveId

db.vaccination_drives.find({ driveId: 'D001' })

//7. Add a new vaccination drive

db.vaccination_drives.insertOne({
  driveId: 'D003',
  vaccineName: 'Covaxin',
  date: new Date('2025-06-01'),
  availableDoses: 80,
  applicableGrades: ['5', '6']
})

//8. Update vaccination drive details

db.vaccination_drives.updateOne(
  { driveId: 'D001' }, 
  { $set: { availableDoses: 120 } }
)

//9. Fetch vaccination records

db.vaccination_records.find()

//10. Add a new vaccination record

db.vaccination_records.insertOne({
  recordId: 'R002',
  studentId: 'S004',
  vaccineName: 'Covishield',
  vaccinationDate: new Date('2025-05-05')
})

//11. Get students by vaccination status

db.students.find({ vaccinatedStatus: true })

//12. Get upcoming vaccination drives within the next 30 days

db.vaccination_drives.find({
  date: { $gte: new Date(), $lt: new Date(new Date().setDate(new Date().getDate() + 30)) }
})




