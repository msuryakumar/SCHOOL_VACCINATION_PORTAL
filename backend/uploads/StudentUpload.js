const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), async (req, res) => {
  const students = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (row) => {
      students.push({
        name: row.name,
        studentId: row.studentId,
        class: row.class
      });
    })
    .on('end', async () => {
      try {
        await Student.insertMany(students);
        res.json({ message: 'Students uploaded successfully' });
      } catch (err) {
        res.status(500).json({ error: 'Upload failed' });
      }
      fs.unlinkSync(req.file.path); // Clean up
    });
});
