const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const patient_datumCtrl = require('./patient_data.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/patient_data - Get list of patient_data */
  .get(patient_datumCtrl.list)

  /** POST /api/patient_data - Create new patient_datum */
  .post(validate(paramValidation.createUser), patient_datumCtrl.create);

router.route('/:patient_datumId')
  /** GET /api/patient_data/:patient_datumId - Get patient_datum */
  .get(patient_datumCtrl.get)

  /** PUT /api/patient_data/:patient_datumId - Update patient_datum */
  .put(validate(paramValidation.updateUser), patient_datumCtrl.update)

  /** DELETE /api/patient_data/:patient_datumId - Delete patient_datum */
  .delete(patient_datumCtrl.remove);

/** Load patient_datum when API with patient_datumId route parameter is hit */
router.param('patient_datumId', patient_datumCtrl.load);

module.exports = router;
