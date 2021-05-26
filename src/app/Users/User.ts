export interface User{
    user_id: number,
    user_name: String,
    room:[{
        room_no: String
    }],
   address:[{
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        country: String,
        zipCode: String
    }],
    phone_number: number,
    email_id: String,
    password: String,
    gender: String,
    date_of_birth: Date,
    food_preferences: String

}