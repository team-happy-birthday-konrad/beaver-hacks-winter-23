const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const patient_datumCtrl = require('./patient_data.controller');
// const multer = require('multer');
// const csv = require('csv-parser');
// const fs = require('fs');

const router = express.Router(); // eslint-disable-line new-cap

// const upload = multer();
// router.route('/')
//   /** GET /api/patient_data - Get list of patient_data */
//   .get(patient_datumCtrl.list)

//   /** POST /api/patient_data - Create new patient_datum */
//   .post(validate(paramValidation.createUser), patient_datumCtrl.create);

// router.route('/:patient_datumId')
//   /** GET /api/patient_data/:patient_datumId - Get patient_datum */
//   .get(patient_datumCtrl.get)

//   /** PUT /api/patient_data/:patient_datumId - Update patient_datum */
//   .put(validate(paramValidation.updateUser), patient_datumCtrl.update)

//   /** DELETE /api/patient_data/:patient_datumId - Delete patient_datum */
//   .delete(patient_datumCtrl.remove);

// /** Load patient_datum when API with patient_datumId route parameter is hit */
// router.param('patient_datumId', patient_datumCtrl.load);


// router.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//       return res.status(400).send({
//           success: false,
//           message: 'Please select a file to upload'
//       });
//   }

//   if (req.file.mimetype !== 'text/csv') {
//       return res.status(400).send({
//           success: false,
//           message: 'Invalid file type. Please select a CSV file.'
//       });
//   }

//   fs.createReadStream(req.file.path)
//       .pipe(csv())
//       .on('data', (data) => {
//           // handle data here
//           console.log(data);
//       })
//       .on('end', () => {
//           // handle end of file here
//           console.log('CSV file successfully processed');
//       });
//   return res.status(200).send({
//       success: true,
//       message: 'File uploaded successfully'
//   });
// });

module.exports = router;
