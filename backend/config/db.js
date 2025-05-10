const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vaccination-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database connected successfully');
}).catch((err) => {
  console.error('Database connection error:', err);
});
