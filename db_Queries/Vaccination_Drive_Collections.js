db.createCollection('vaccination_drives')

db.vaccination_drives.insertOne({
  driveId: 'D001',
  vaccineName: 'Covaxin',
  date: new Date('2025-05-15'),
  availableDoses: 100,
  applicableGrades: ['5', '6']
})

db.vaccination_drives.insertMany([
  { driveId: 'D002', vaccineName: 'Covishield', date: new Date('2025-05-20'), availableDoses: 50, applicableGrades: ['6', '7'] }
])
