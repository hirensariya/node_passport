const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mainSchema = new Schema({
    applying_for: {
        type: String

    },
    type_of_application: {
        type: String

    },
    type_of_passport_booklet: {
        type: String
    },
    passport_reason: {
        type: String
    },
    date_of_expiry: {
        type: Number
    },
    has_passport_expired: {
        type: Number
    },
    passport_appearance: {
        type: String

    },
    passport_signature: {
        type: String

    },
    passport_given_name: {
        type: String

    },
    passport_surname: {
        type: String

    },
    passport_dof: {
        type: String

    },
    passport_spouse_name: {
        type: String

    },
    passport_address: {
        type: String

    },
    passport_delete_ecr: {
        type: String

    },
    passport_other: {
        type: String

    },
    applicant_name: {
        type: String

    },
    middle_name: {
        type: String

    },
    applicant_surname: {
        type: String

    },
    aadhaar_no: {
        type: String

    },
    applicant_gender: {
        type: String

    },
    marital_status: {
        type: String

    },
    applicant_dob: {
        type: String

    },
    is_birth_india: {
        type: String

    },
    birth_city: {
        type: String

    },
    applicant_country: {
        type: String

    },
    applicant_state: {
        type: String

    },
    applicant_district: {
        type: String

    },
    applicant_citizenship: {
        type: String

    },
    applicant_pan: {
        type: String

    },
    applicant_voter_id: {
        type: String

    },
    applicant_educational: {
        type: String

    },
    applicant_employment_type: {
        type: String

    },
    applicant_employment_org: {
        type: String

    },
    applicant_spouse: {
        type: String

    },
    applicant_ecr: {
        type: String

    },
    applicant_visible_distinguishing: {
        type: String

    },
    applicant_other_name: {
        type: String

    },
    applicant_ever_changed_name: {
        type: String

    },
    applicant_family_father_fname: {
        type: String

    },
    applicant_family_father_mname: {
        type: String

    },
    applicant_family_father_sname: {
        type: String

    },
    applicant_family_mother_fname: {
        type: String

    },
    applicant_family_mother_mname: {
        type: String

    },
    applicant_family_mother_sname: {
        type: String

    },
    applicant_family_guardian_fname: {
        type: String

    },
    applicant_family_guardian_mname: {
        type: String

    },
    applicant_family_guardian_sname: {
        type: String

    },
    applicant_present_address: {
        type: String

    },
    applicant_address: {
        type: String

    },
    applicant_village: {
        type: String

    },
    applicant_detail_state: {
        type: String

    },
    applicant_detail_district: {
        type: String

    },
    applicant_detail_pin: {
        type: String

    },
    applicant_police_station: {
        type: String

    },
    applicant_detail_mobile: {
        type: String

    },
    applicant_detail_email: {
        type: String

    },
    applicant_detail_permanent_address: {
        type: String

    },
    applicant_emergency_address: {
        type: String

    },
    applicant_emergency_mobile: {
        type: String

    },
    applicant_emergency_email: {
        type: String

    },
    applicant_previous_identity_certificate: {
        type: String

    },
    applicant_identity_certificate: {
        type: String

    },
    applicant_date_of_issue: {
        type: String

    },
    applicant_diplomatic_date_of_expiry: {
        type: String

    },
    applicant_diplomatic_place_of_issue: {
        type: String

    },
    applicant_previous_passport: {
        type: String

    },
    applicant_previous_passport_filenumber: {
        type: String

    },
    applicant_previous_passport_issue: {
        type: String

    },
    applicant_previous_passport_applied: {
        type: String

    },
    applicant_other_criminal: {
        type: String

    },
    applicant_court: {
        type: String

    },
    applicant_fir: {
        type: String

    },
    applicant_law: {
        type: String

    },
    applicant_other_criminal_offence: {
        type: String

    },
    applicant_offence_court: {
        type: String

    },
    applicant_offence_fir: {
        type: String

    },
    applicant_offence_law: {
        type: String

    },
    applicant_other_refused: {
        type: String

    },
    applicant_refused: {
        type: String

    },
    applicant_other_revoked: {
        type: String

    },
    applicant_revoked_passport_number: {
        type: String

    },
    applicant_revoked_reason: {
        type: String

    },
    applicant_other_political: {
        type: String

    },
    political_country: {
        type: String

    },
    applicant_other_ec: {
        type: String

    },
    applicant_other_ec_emergency: {
        type: String

    },
    applicant_other_ec_date: {
        type: String

    },
    applicant_other_ec_travelled: {
        type: String

    },
    pplicant_other_ec_authority: {
        type: String

    },
    applicant_other_ec_repatriated: {
        type: String

    },
    applicant_proof_birth: {
        type: String

    },
    applicant_proof_residential_address: {
        type: String

    },
    promo: {
        type: String
    },
    price: {
        type: String
    }
}, { timestamps: true });

const mainform = mongoose.model('mainform', mainSchema);
module.exports = mainform;