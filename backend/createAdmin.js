// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const User = require('./models/User');  // Ensure this path points to your User model

// const ADMIN_EMAIL = 'admin@lc.com';
// const ADMIN_PASSWORD = 'admin1'; // Plain password for now, will hash it later
// const ADMIN_ROLE = 'admin';

// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(async () => {
//     const existingAdmin = await User.findOne({ email: ADMIN_EMAIL });
//     if (existingAdmin) {
//       console.log('Admin user already exists.');
//       return;
//     }

//     const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

//     const adminUser = new User({
//       email: ADMIN_EMAIL,
//       password: hashedPassword,
//       role: ADMIN_ROLE,
//       fullName: 'Admin User',
//     });

//     await adminUser.save();
//     console.log('Admin user created successfully!');
//     mongoose.disconnect();
//   })
//   .catch(err => {
//     console.error('Error creating admin user:', err);
//     mongoose.disconnect();
//   });
