db.createCollection('vaccination_records')

db.vaccination_records.insertOne({
  recordId: 'R001',
  studentId: 'S002',
  vaccineName: 'Covaxin',
  vaccinationDate: new Date('2025-04-01')
})
