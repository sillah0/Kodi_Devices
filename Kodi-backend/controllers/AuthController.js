const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
   try {
      const { name, email, password } = req.body;
      const newUser = await User.create({ name, email, password });
      res.status(201).json({ success: true, data: newUser });
   } catch (err) {
      res.status(400).json({ success: false, error: err.message });
   }
};

exports.login = async (req, res) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });

   if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
   }

   const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
   res.status(200).json({ success: true, token });
};
