const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Patient_Datum Schema
 */
const Patient_DataSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    active_energy: {
        type: Number,
    },
    alcohol_consumption: {
        type: Number,
    },
    apple_exercise_time: {
        type: Number,
    },
    apple_sleeping_wrist_temperature: {
        type: Number,
    },
    apple_stand_hour: {
        type: Number,
    },
    apple_stand_time: {
        type: Number,
    },
    basal_body_temperature: {
        type: Number,
    },
    basal_energy_burned: {
        type: Number,
    },
    blood_alcohol_content: {
        type: Number,
    },
    blood_glucose: {
        type: Number,
    },
    blood_oxygen_saturation: {
        type: Number,
    },
    blood_pressure_systolic: {
        type: Number,
    },
    blood_pressure_diastolic: {
        type: Number,
    },
    body_fat_percentage: {
        type: Number,
    },
    body_mass_index: {
        type: Number,
    },
    body_temperature: {
        type: Number,
    },
    calcium: {
        type: Number,
    },
    carbohydrates: {
        type: Number,
    },
    chloride: {
        type: Number,
    },
    chromium: {
        type: Number,
    },
    copper: {
        type: Number,
    },
    cycling_distance: {
        type: Number,
    },
    dietary_biotin: {
        type: Number,
    },
    dietary_caffeine: {
        type: Number,
    },
    dietary_cholesterol: {
        type: Number,
    },
    dietary_energy: {
        type: Number,
    },
    dietary_sugar: {
        type: Number,
    },
    dietary_water: {
        type: Number,
    },
    distance_downhill_snow_sports: {
        type: Number,
    },
    environmental_audio_exposure: {
        type: Number,
    },
    fiber: {
        type: Number,
    },
    flights_climbed: {
        type: Number,
    },
    folate: {
        type: Number,
    },
    forced_expiratory_volume_1: {
        type: Number,
    },
    forced_vital_capacity: {
        type: Number,
    },
    handwashing: {
        type: Number,
    },
    headphone_audio_exposure: {
        type: Number,
    },
    heart_rate_min: {
        type: Number,
    },
    heart_rate_max: {
        type: Number,
    },
    heart_rate_avg: {
        type: Number,
    },

    heart_rate_variability: {
        type: Number,
    },
    height: {
        type: Number,
    },
    high_heart_rate_notifications_min: {
        type: Number,
    },
    high_heart_rate_notifications_max: {
        type: Number,
    },
    high_heart_rate_notifications_avg: {
        type: Number,
    },
    inhaler_usage: {
        type: Number,
    },
    insulin_delivery: {
        type: Number,
    },
    iodine: {
        type: Number,
    },
    iron: {
        type: Number,
    },
    irregular_heart_rate_notifications_min: {
        type: Number,
    },
    irregular_heart_rate_notifications_max: {
        type: Number,
    },
    irregular_heart_rate_notifications_avg: {
        type: Number,
    },
    lean_body_mass: {
        type: Number,
    },
    low_heart_rate_notifications_min: {
        type: Number,
    },
    low_heart_rate_notifications_max: {
        type: Number,
    },
    low_heart_rate_notifications_avg: {
        type: Number,
    },
    magnesium: {
        type: Number,
    },
    manganese: {
        type: Number,
    },
    mindful_minutes: {
        type: Number,
    },
    molybdenum: {
        type: Number,
    },
    monounsaturated_fat: {
        type: Number,
    },
    niacin: {
        type: Number,
    },
    number_of_times_fallen: {
        type: Number,
    },
    pantothenic_acid: {
        type: Number,
    },
    peak_expiratory_flow_rate: {
        type: Number,
    },
    peripheral_perfusion_index: {
        type: Number,
    },
    polyunsaturated_fat: {
        type: Number,
    },
    potassium: {
        type: Number,
    },
    protein: {
        type: Number,
    },
    push_count: {
        type: Number,
    },
    respiratory_rate: {
        type: Number,
    },
    resting_heart_rate: {
        type: Number,
    },
    riboflavin: {
        type: Number,
    },
    saturated_fat: {
        type: Number,
    },
    selenium: {
        type: Number,
    },
    sexual_activity_unspecified: {
        type: Number,
    },
    sexual_activity_protection_used: {
        type: Number,
    },
    sexual_activity_protection_not_used: {
        type: Number,
    },
    six_minute_walking_test_distance: {
        type: Number,
    },
    sleep_analysis_asleep: {
        type: Number,
    },

    sleep_analysis_in_bed: {
        type: Number,
    },
    sodium: {
        type: Number,
    },
    stair_speed_down: {
        type: Number,
    },
    stair_speed_up: {
        type: Number,
    },
    step_count: {
        type: Number,
    },
    swimming_distance: {
        type: Number,
    },
    swimming_stroke_count: {
        type: Number,
    },
    thiamin: {
        type: Number,
    },
    toothbrushing: {
        type: Number,
    },
    total_fat: {
        type: Number,
    },
    VO2_max: {
        type: Number,
    },
    vitamin_a: {
        type: Number,
    },
    vitamin_b12: {
        type: Number,
    },
    vitamin_b6: {
        type: Number,
    },
    vitamin_c: {
        type: Number,
    },
    vitamin_d: {
        type: Number,
    },
    vitamin_e: {
        type: Number,
    },
    vitamin_k: {
        type: Number,
    },
    waist_circumference: {
        type: Number,
    },
    walking_running_distance: {
        type: Number,
    },
    walking_asymmetry_percentage: {
        type: Number,
    },
    walking_double_support_percentage: {
        type: Number,
    },
    walking_heart_rate_average: {
        type: Number,
    },
    walking_speed: {
        type: Number,
    },
    walking_step_length: {
        type: Number,
    },
    weight_body_mass: {
        type: Number,
    },
    wheelchair_distance: {
        type: Number,
    },
    zinc: {
        type: Number,
    },
});
const Patient_Data = mongoose.model('Patient_Data', Patient_DataSchema);

module.exports = Patient_Data;

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
Patient_DataSchema.method({});

/**
 * Statics
 */
Patient_DataSchema.statics = {
    /**
     * Get patient_datum
     * @param {ObjectId} id - The objectId of patient_datum.
     * @returns {Promise<Patient_Datum, APIError>}
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((patient_datum) => {
                if (patient_datum) {
                    return patient_datum;;
                }
                const err = new APIError('No such patient_datum; exists!', httpStatus.NOT_FOUND);
                return Promise.reject(err);
            });
    },

    /**
     * List patient_data in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of patient_data to be skipped.
     * @param {number} limit - Limit number of patient_data to be returned.
     * @returns {Promise<Patient_Datum[]>}
     */
    list({ skip = 0, limit = 50 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(+skip)
            .limit(+limit)
            .exec();
    }
};

/**
 * @typedef Patient_Datum
 */
module.exports = mongoose.model('Patient_Datum', Patient_DataSchema);
