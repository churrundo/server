const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    complaints: [{
        type: Schema.Types.ObjectId,
        ref: 'Complaint'
    }],
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    announcements: [{
        type: Schema.Types.ObjectId,
        ref: 'Announcement'
    }],
    details: {
        makeAvailable: {
            type: Boolean,
            default: false
        },
        apartmentNumber: {
            type: String,
            default: ''
        },
        profilePicture: {
            type: String,
            default: ''
        }, // Future iteration, implement Cloudinary image upload
        contactNumber: {
            type: String,
            default: ''
        },
        occupation: {
            type: String,
            default: ''
        },
        shortBio: {
            type: String,
            default: ''
        },
        moveInDate: {
            type: Date,
            default: Date.now
        },
        emergencyContact: {
            name: {
                type: String,
                default: ''
            },
            phone: {
                type: String,
                default: ''
            }
        },
        pets: [{
            type: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            }
        }],
        vehicleDetails: {
            type: {
                type: String,
                default: ''
            },
            make: {
                type: String,
                default: ''
            },
            model: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            },
            licensePlate: {
                type: String,
                default: ''
            }
        },
        specialSkills: {
            type: [String],
            default: undefined
        },
        socialMediaLinks: {
            instagram: {
                type: String,
                default: ''
            },
            facebook: {
                type: String,
                default: ''
            },
            twitter: {
                type: String,
                default: ''
            },
            linkedin: {
                type: String,
                default: ''
            },
            other: {
                type: String,
                default: ''
            }
        },
        languagesSpoken: {
            type: [String],
            default: undefined
        }
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);