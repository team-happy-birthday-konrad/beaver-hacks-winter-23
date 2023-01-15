const Patient_Datum = require('./patient_data.model');

/**
 * Load patient_datum and append to req.
 */
function load(req, res, next, id) {
  Patient_Datum.get(id)
    .then((patient_datum) => {
      req.patient_datum = patient_datum; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get patient_datum
 * @returns {Patient_Datum}
 */
function get(req, res) {
  return res.json(req.patient_datum);
}

/**
 * Create new patient_datum
 * @property {string} req.body.active_energy
 * @property {string} req.body.exerc_time
 * @property {string} req.body.sleep_wrist_temp
 * @property {string} req.body.stand_hr
 * @property {string} req.body.stand_time
 * @property {string} req.body.basal_body_temp
 * @property {string} req.body.basal_energy_burned
 * @property {string} req.body.bac
 * @property {string} req.body.blood_glucose
 * @property {string} req.body.blood_oxy
 * @property {string} req.body.blood_press_s
 * @property {string} req.body.blood_press_d
 * @property {string} req.body.body_fat
 * @property {string} req.body.bmi
 * @property {string} req.body.body_temp
 * @property {string} req.body.calcium
 * @property {string} req.body.carbs
 * @property {string} req.body.Cl
 * @property {string} req.body.chromium
 * @property {string} req.body.Cu
 * @property {string} req.body.cycling
 * @property {string} req.body.diet_biotin
 * @property {string} req.body.diet_caffeine
 * @property {string} req.body.diet_chol
 * @property {string} req.body.diet_energy
 * @property {string} req.body.diet_sugar
 * @property {string} req.body.diet_water
 * @property {string} req.body.snow_sport
 * @property {string} req.body.audio
 * @property {string} req.body.fiber
 * @property {string} req.body.flights
 * @property {string} req.body.folate
 * @property {string} req.body.forced_expir
 * @property {string} req.body.forced_vital
 * @property {string} req.body.hand
 * @property {string} req.body.headphone_audio
 * @property {string} req.body.heart_rate_min
 * @property {string} req.body.heart_rate_max
 * @property {string} req.body.heart_rate_avg
 * @property {string} req.body.heart_rate_var
 * @property {string} req.body.height
 * @property {string} req.body.high_hr_notif_min
 * @property {string} req.body.high_hr_notif_max
 * @property {string} req.body.high_hr_notif_avg
 * @property {string} req.body.inhaler
 * @property {string} req.body.insulin
 * @property {string} req.body.iodine
 * @property {string} req.body.Fe
 * @property {string} req.body.irregular_hr_min
 * @property {string} req.body.irregular_hr_max
 * @property {string} req.body.irregular_hr_avg
 * @property {string} req.body.lean_bm
 * @property {string} req.body.low_hr_notif_min
 * @property {string} req.body.low_hr_notif_max
 * @property {string} req.body.low_hr_notif_avg
 * @property {string} req.body.Mg
 * @property {string} req.body.Mn
 * @property {string} req.body.mindful
 * @property {string} req.body.Mo
 * @property {string} req.body.monounsat_fat
 * @property {string} req.body.niacin
 * @property {string} req.body.fallen
 * @property {string} req.body.pantothenic_acid
 * @property {string} req.body.peak_expir_flow
 * @property {string} req.body.prei_perf_index
 * @property {string} req.body.polyunsat_fat
 * @property {string} req.body.K
 * @property {string} req.body.protein
 * @property {string} req.body.push
 * @property {string} req.body.respir_rate
 * @property {string} req.body.rest_hr
 * @property {string} req.body.riboflavin
 * @property {string} req.body.sat_fat
 * @property {string} req.body.Se
 * @property {string} req.body.sex_act_un
 * @property {string} req.body.sex_act_pro
 * @property {string} req.body.sex_act_nopro
 * @property {string} req.body.six_min
 * @property {string} req.body.sleep
 * @property {string} req.body.Na
 * @property {string} req.body.stair_down
 * @property {string} req.body.stair_up
 * @property {string} req.body.steps
 * @property {string} req.body.swim_dist
 * @property {string} req.body.swim_stroke
 * @property {string} req.body.thiamin
 * @property {string} req.body.toothbrushing
 * @property {string} req.body.total_fat
 * @property {string} req.body.vo2
 * @property {string} req.body.vit_a
 * @property {string} req.body.vit_b12
 * @property {string} req.body.vit_b6
 * @property {string} req.body.vit_c
 * @property {string} req.body.vit_d
 * @property {string} req.body.vit_e
 * @property {string} req.body.vit_k
 * @property {string} req.body.waist
 * @property {string} req.body.walk_run_dist
 * @property {string} req.body.walk_asy
 * @property {string} req.body.walk_supp
 * @property {string} req.body.walk_hr
 * @property {string} req.body.walk_speed
 * @property {string} req.body.walk_step
 * @property {string} req.body.weight_bm
 * @property {string} req.body.wheelchair_dist
 * @property {string} req.body.zinc
 * @returns {Patient_Datum}
 */
function create(req, res, next) {
  const patient_datum = new Patient_Datum({
    active_energy: req.body.active_energy,
    exerc_time: req.body.exerc_time,
    sleep_wrist_temp: req.body.sleep_wrist_temp,
    stand_hr: req.body.stand_hr,
    stand_time: req.body.stand_time,
    basal_body_temp: req.body.basal_body_temp,
    basal_energy_burned: req.body.basal_energy_burned,
    bac: req.body.bac,
    blood_glucose: req.body.blood_glucose,
    blood_oxy: req.body.blood_oxy,
    blood_press_s: req.body.blood_press_s,
    blood_press_d: req.body.blood_press_d,
    body_fat: req.body.body_fat,
    bmi: req.body.bmi,
    body_temp: req.body.body_temp,
    calcium: req.body.calcium,
    carbs: req.body.carbs,
    Cl: req.body.Cl,
    chromium: req.body.chromium,
    Cu: req.body.Cu,
    cycling: req.body.cycling,
    diet_biotin: req.body.diet_biotin,
    diet_caffeine: req.body.diet_caffeine,
    diet_chol: req.body.diet_chol,
    diet_energy: req.body.diet_energy,
    diet_sugar: req.body.diet_sugar,
    diet_water: req.body.diet_water,
    snow_sport: req.body.snow_sport,
    audio: req.body.audio,
    fiber: req.body.fiber,
    flights: req.body.flights,
    folate: req.body.folate,
    forced_expir: req.body.forced_expir,
    forced_vital: req.body.forced_vital,
    hand: req.body.hand,
    headphone_audio: req.body.headphone_audio,
    heart_rate_min: req.body.heart_rate_min,
    heart_rate_max: req.body.heart_rate_max,
    heart_rate_avg: req.body.heart_rate_avg,
    heart_rate_var: req.body.heart_rate_var,
    height: req.body.height,
    high_hr_notif_min: req.body.high_hr_notif_min,
    high_hr_notif_max: req.body.high_hr_notif_max,
    high_hr_notif_avg: req.body.high_hr_notif_avg,
    inhaler: req.body.inhaler,
    insulin: req.body.insulin,
    iodine: req.body.iodine,
    Fe: req.body.Fe,
    irregular_hr_min: req.body.irregular_hr_min,
    irregular_hr_max: req.body.irregular_hr_max,
    irregular_hr_avg: req.body.irregular_hr_avg,
    lean_bm: req.body.lean_bm,
    low_hr_notif_min: req.body.low_hr_notif_min,
    low_hr_notif_max: req.body.low_hr_notif_max,
    low_hr_notif_avg: req.body.low_hr_notif_avg,
    Mg: req.body.Mg,
    Mn: req.body.Mn,
    mindful: req.body.mindful,
    Mo: req.body.Mo,
    monounsat_fat: req.body.monounsat_fat,
    niacin: req.body.niacin,
    fallen: req.body.fallen,
    pantothenic_acid: req.body.pantothenic_acid,
    peak_expir_flow: req.body.peak_expir_flow,
    prei_perf_index: req.body.prei_perf_index,
    polyunsat_fat: req.body.polyunsat_fat,
    K: req.body.K,
    protein: req.body.protein,
    push: req.body.push,
    respir_rate: req.body.respir_rate,
    rest_hr: req.body.rest_hr,
    riboflavin: req.body.riboflavin,
    sat_fat: req.body.sat_fat,
    Se: req.body.Se,
    sex_act_un: req.body.sex_act_un,
    sex_act_pro: req.body.sex_act_pro,
    sex_act_nopro: req.body.sex_act_nopro,
    six_min: req.body.six_min,
    sleep: req.body.sleep,
    Na: req.body.Na,
    stair_down: req.body.stair_down,
    stair_up: req.body.stair_up,
    steps: req.body.steps,
    swim_dist: req.body.swim_dist,
    swim_stroke: req.body.swim_stroke,
    thiamin: req.body.thiamin,
    toothbrushing: req.body.toothbrushing,
    total_fat: req.body.total_fat,
    vo2: req.body.vo2,
    vit_a: req.body.vit_a,
    vit_b12: req.body.vit_b12,
    vit_b6: req.body.vit_b6,
    vit_c: req.body.vit_c,
    vit_d: req.body.vit_d,
    vit_e: req.body.vit_e,
    vit_k: req.body.vit_k,
    waist: req.body.waist,
    walk_run_dist: req.body.walk_run_dist,
    walk_asy: req.body.walk_asy,
    walk_supp: req.body.walk_supp,
    walk_hr: req.body.walk_hr,
    walk_speed: req.body.walk_speed,
    walk_step: req.body.walk_step,
    weight_bm: req.body.weight_bm,
    wheelchair_dist: req.body.wheelchair_dist,
    zinc: req.body.zinc,
  });

  patient_datum.save()
    .then(savedPatient_Datum => res.json(savedPatient_Datum))
    .catch(e => next(e));
}

/**
 * Update existing patient_datum
 * @property {string} req.body.active_energy
 * @property {string} req.body.exerc_time
 * @property {string} req.body.sleep_wrist_temp
 * @property {string} req.body.stand_hr
 * @property {string} req.body.stand_time
 * @property {string} req.body.basal_body_temp
 * @property {string} req.body.basal_energy_burned
 * @property {string} req.body.bac
 * @property {string} req.body.blood_glucose
 * @property {string} req.body.blood_oxy
 * @property {string} req.body.blood_press_s
 * @property {string} req.body.blood_press_d
 * @property {string} req.body.body_fat
 * @property {string} req.body.bmi
 * @property {string} req.body.body_temp
 * @property {string} req.body.calcium
 * @property {string} req.body.carbs
 * @property {string} req.body.Cl
 * @property {string} req.body.chromium
 * @property {string} req.body.Cu
 * @property {string} req.body.cycling
 * @property {string} req.body.diet_biotin
 * @property {string} req.body.diet_caffeine
 * @property {string} req.body.diet_chol
 * @property {string} req.body.diet_energy
 * @property {string} req.body.diet_sugar
 * @property {string} req.body.diet_water
 * @property {string} req.body.snow_sport
 * @property {string} req.body.audio
 * @property {string} req.body.fiber
 * @property {string} req.body.flights
 * @property {string} req.body.folate
 * @property {string} req.body.forced_expir
 * @property {string} req.body.forced_vital
 * @property {string} req.body.hand
 * @property {string} req.body.headphone_audio
 * @property {string} req.body.heart_rate_min
 * @property {string} req.body.heart_rate_max
 * @property {string} req.body.heart_rate_avg
 * @property {string} req.body.heart_rate_var
 * @property {string} req.body.height
 * @property {string} req.body.high_hr_notif_min
 * @property {string} req.body.high_hr_notif_max
 * @property {string} req.body.high_hr_notif_avg
 * @property {string} req.body.inhaler
 * @property {string} req.body.insulin
 * @property {string} req.body.iodine
 * @property {string} req.body.Fe
 * @property {string} req.body.irregular_hr_min
 * @property {string} req.body.irregular_hr_max
 * @property {string} req.body.irregular_hr_avg
 * @property {string} req.body.lean_bm
 * @property {string} req.body.low_hr_notif_min
 * @property {string} req.body.low_hr_notif_max
 * @property {string} req.body.low_hr_notif_avg
 * @property {string} req.body.Mg
 * @property {string} req.body.Mn
 * @property {string} req.body.mindful
 * @property {string} req.body.Mo
 * @property {string} req.body.monounsat_fat
 * @property {string} req.body.niacin
 * @property {string} req.body.fallen
 * @property {string} req.body.pantothenic_acid
 * @property {string} req.body.peak_expir_flow
 * @property {string} req.body.prei_perf_index
 * @property {string} req.body.polyunsat_fat
 * @property {string} req.body.K
 * @property {string} req.body.protein
 * @property {string} req.body.push
 * @property {string} req.body.respir_rate
 * @property {string} req.body.rest_hr
 * @property {string} req.body.riboflavin
 * @property {string} req.body.sat_fat
 * @property {string} req.body.Se
 * @property {string} req.body.sex_act_un
 * @property {string} req.body.sex_act_pro
 * @property {string} req.body.sex_act_nopro
 * @property {string} req.body.six_min
 * @property {string} req.body.sleep
 * @property {string} req.body.Na
 * @property {string} req.body.stair_down
 * @property {string} req.body.stair_up
 * @property {string} req.body.steps
 * @property {string} req.body.swim_dist
 * @property {string} req.body.swim_stroke
 * @property {string} req.body.thiamin
 * @property {string} req.body.toothbrushing
 * @property {string} req.body.total_fat
 * @property {string} req.body.vo2
 * @property {string} req.body.vit_a
 * @property {string} req.body.vit_b12
 * @property {string} req.body.vit_b6
 * @property {string} req.body.vit_c
 * @property {string} req.body.vit_d
 * @property {string} req.body.vit_e
 * @property {string} req.body.vit_k
 * @property {string} req.body.waist
 * @property {string} req.body.walk_run_dist
 * @property {string} req.body.walk_asy
 * @property {string} req.body.walk_supp
 * @property {string} req.body.walk_hr
 * @property {string} req.body.walk_speed
 * @property {string} req.body.walk_step
 * @property {string} req.body.weight_bm
 * @property {string} req.body.wheelchair_dist
 * @property {string} req.body.zinc
 * @returns {Patient_Datum}
 */
function update(req, res, next) {
  const patient_datum = req.patient_datum;
  patient_datum.active_energy: req.body.active_energy;
  patient_datum.exerc_time: req.body.exerc_time;
  patient_datum.sleep_wrist_temp: req.body.sleep_wrist_temp;
  patient_datum.stand_hr: req.body.stand_hr;
  patient_datum.stand_time: req.body.stand_time;
  patient_datum.basal_body_temp: req.body.basal_body_temp;
  patient_datum.basal_energy_burned: req.body.basal_energy_burned;
  patient_datum.bac: req.body.bac;
  patient_datum.blood_glucose: req.body.blood_glucose;
  patient_datum.blood_oxy: req.body.blood_oxy;
  patient_datum.blood_press_s: req.body.blood_press_s;
  patient_datum.blood_press_d: req.body.blood_press_d;
  patient_datum.body_fat: req.body.body_fat;
  patient_datum.bmi: req.body.bmi;
  patient_datum.body_temp: req.body.body_temp;
  patient_datum.calcium: req.body.calcium;
  patient_datum.carbs: req.body.carbs;
  patient_datum.Cl: req.body.Cl;
  patient_datum.chromium: req.body.chromium;
  patient_datum.Cu: req.body.Cu;
  patient_datum.cycling: req.body.cycling;
  patient_datum.diet_biotin: req.body.diet_biotin;
  patient_datum.diet_caffeine: req.body.diet_caffeine;
  patient_datum.diet_chol: req.body.diet_chol;
  patient_datum.diet_energy: req.body.diet_energy;
  patient_datum.diet_sugar: req.body.diet_sugar;
  patient_datum.diet_water: req.body.diet_water;
  patient_datum.snow_sport: req.body.snow_sport;
  patient_datum.audio: req.body.audio;
  patient_datum.fiber: req.body.fiber;
  patient_datum.flights: req.body.flights;
  patient_datum.folate: req.body.folate;
  patient_datum.forced_expir: req.body.forced_expir;
  patient_datum.forced_vital: req.body.forced_vital;
  patient_datum.hand: req.body.hand;
  patient_datum.headphone_audio: req.body.headphone_audio;
  patient_datum.heart_rate_min: req.body.heart_rate_min;
  patient_datum.heart_rate_max: req.body.heart_rate_max;
  patient_datum.heart_rate_avg: req.body.heart_rate_avg;
  patient_datum.heart_rate_var: req.body.heart_rate_var;
  patient_datum.height: req.body.height;
  patient_datum.high_hr_notif_min: req.body.high_hr_notif_min;
  patient_datum.high_hr_notif_max: req.body.high_hr_notif_max;
  patient_datum.high_hr_notif_avg: req.body.high_hr_notif_avg;
  patient_datum.inhaler: req.body.inhaler;
  patient_datum.insulin: req.body.insulin;
  patient_datum.iodine: req.body.iodine;
  patient_datum.Fe: req.body.Fe;
  patient_datum.irregular_hr_min: req.body.irregular_hr_min;
  patient_datum.irregular_hr_max: req.body.irregular_hr_max;
  patient_datum.irregular_hr_avg: req.body.irregular_hr_avg;
  patient_datum.lean_bm: req.body.lean_bm;
  patient_datum.low_hr_notif_min: req.body.low_hr_notif_min;
  patient_datum.low_hr_notif_max: req.body.low_hr_notif_max;
  patient_datum.low_hr_notif_avg: req.body.low_hr_notif_avg;
  patient_datum.Mg: req.body.Mg;
  patient_datum.Mn: req.body.Mn;
  patient_datum.mindful: req.body.mindful;
  patient_datum.Mo: req.body.Mo;
  patient_datum.monounsat_fat: req.body.monounsat_fat;
  patient_datum.niacin: req.body.niacin;
  patient_datum.fallen: req.body.fallen;
  patient_datum.pantothenic_acid: req.body.pantothenic_acid;
  patient_datum.peak_expir_flow: req.body.peak_expir_flow;
  patient_datum.prei_perf_index: req.body.prei_perf_index;
  patient_datum.polyunsat_fat: req.body.polyunsat_fat;
  patient_datum.K: req.body.K;
  patient_datum.protein: req.body.protein;
  patient_datum.push: req.body.push;
  patient_datum.respir_rate: req.body.respir_rate;
  patient_datum.rest_hr: req.body.rest_hr;
  patient_datum.riboflavin: req.body.riboflavin;
  patient_datum.sat_fat: req.body.sat_fat;
  patient_datum.Se: req.body.Se;
  patient_datum.sex_act_un: req.body.sex_act_un;
  patient_datum.sex_act_pro: req.body.sex_act_pro;
  patient_datum.sex_act_nopro: req.body.sex_act_nopro;
  patient_datum.six_min: req.body.six_min;
  patient_datum.sleep: req.body.sleep;
  patient_datum.Na: req.body.Na;
  patient_datum.stair_down: req.body.stair_down;
  patient_datum.stair_up: req.body.stair_up;
  patient_datum.steps: req.body.steps;
  patient_datum.swim_dist: req.body.swim_dist;
  patient_datum.swim_stroke: req.body.swim_stroke;
  patient_datum.thiamin: req.body.thiamin;
  patient_datum.toothbrushing: req.body.toothbrushing;
  patient_datum.total_fat: req.body.total_fat;
  patient_datum.vo2: req.body.vo2;
  patient_datum.vit_a: req.body.vit_a;
  patient_datum.vit_b12: req.body.vit_b12;
  patient_datum.vit_b6: req.body.vit_b6;
  patient_datum.vit_c: req.body.vit_c;
  patient_datum.vit_d: req.body.vit_d;
  patient_datum.vit_e: req.body.vit_e;
  patient_datum.vit_k: req.body.vit_k;
  patient_datum.waist: req.body.waist;
  patient_datum.walk_run_dist: req.body.walk_run_dist;
  patient_datum.walk_asy: req.body.walk_asy;
  patient_datum.walk_supp: req.body.walk_supp;
  patient_datum.walk_hr: req.body.walk_hr;
  patient_datum.walk_speed: req.body.walk_speed;
  patient_datum.walk_step: req.body.walk_step;
  patient_datum.weight_bm: req.body.weight_bm;
  patient_datum.wheelchair_dist: req.body.wheelchair_dist;
  patient_datum.zinc: req.body.zinc;

  patient_datum.save()
    .then(savedPatient_Datum => res.json(savedPatient_Datum))
    .catch(e => next(e));
}

/**
 * Get patient_datum list.
 * @property {number} req.query.skip - Number of patient_data to be skipped.
 * @property {number} req.query.limit - Limit number of patient_data to be returned.
 * @returns {Patient_Datum[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Patient_Datum.list({ limit, skip })
    .then(patient_data => res.json(patient_data))
    .catch(e => next(e));
}

/**
 * Delete patient_datum.
 * @returns {Patient_Datum}
 */
function remove(req, res, next) {
  const patient_datum = req.patient_datum;
  patient_datum.remove()
    .then(deletedPatient_Datum => res.json(deletedPatient_Datum))
    .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };
