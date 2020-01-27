export default {
    exercises : [
        {name : "Weight Lifting", kcalPerMin : 8.9, type : ["Indoors"]},
        {name : "Rowing", kcalPerMin : 10.4, type : ["Indoors"]},
        {name : "Yoga", kcalPerMin : 5.9, type : ["Indoors"]},
        {name : "Bicycling", kcalPerMin : 10.4, type : ["Indoors", "Outdoors"]},
        {name : "Running", kcalPerMin : 14.8, type : ["Indoors", "Outdoors"]},
        {name : "Football", kcalPerMin : 10.4, type : ["Sport"]},
        {name : "Basketball", kcalPerMin : 0, type : "Sport"[]},
        {name : "Swimming", kcalPerMin : 14.8, type : ["Indoors"]},
        {name : "Martial Arts", kcalPerMin : 14.8, type : ["Sport"]},
        {name : "Rock Climbing", kcalPerMin : 16.3, type : ["Sport"]},
        {name : "Badminton", kcalPerMin : 6.7, type : ["Sport"]},
        {name : "Tennis", kcalPerMin : 10.4, type : ["Sport"]},
    ],
    workouts: [
        {warmup: exercises[1], workout: exercises[0]},
        {warmup: exercises[2], workout: exercises[7]},
        {warmup: exercises[2], workout: exercises[8]},
        {warmup: exercises[2], workout: exercises[9]},
        {warmup: exercises[3], workout: exercises[0]},
        {warmup: exercises[3], workout: exercises[9]},
        {warmup: exercises[4], workout: exercises[0]},
        {warmup: exercises[4], workout: exercises[5]},
        {warmup: exercises[4], workout: exercises[6]},
        {warmup: exercises[4], workout: exercises[8]},
        {warmup: exercises[4], workout: exercises[10]},
        {warmup: exercises[4], workout: exercises[11]}
    ]

}