// Find the force of gravity between two objects

// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

// input
// Two arrays are given :

// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :

// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :

// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)
// Note
// value of G = 6.67 x 10-11N.kg–2.m2

// 1ft = 0.3048m

// 1lb = 0.453592kg

// return value must be Newton for force (obviously)

// μ copy this from here to use it in your solution

solution = (arr_val, arr_unit) => {
    // you code goes here
    let obj1 = arr_val[0]
    let obj2 = arr_val[1]
    let r = arr_val[2]
    let G = 6.67 * 10**-11
    
    if (arr_unit[0] == 'lb') obj1 *= 0.453592
    else if (arr_unit[0] == 'μg') obj1 *= 1/1000000000
    else if (arr_unit[0] == 'mg') obj1 *= 1/1000000
    else if (arr_unit[0] == 'g') obj1 *= 1/1000
    
    if (arr_unit[1] == 'lb') obj2 *= 0.453592
    else if (arr_unit[1] == 'μg') obj2 *= 1/1000000000
    else if (arr_unit[1] == 'mg') obj2 *= 1/1000000
    else if (arr_unit[1] == 'g') obj2 *= 1/1000
    
    if (arr_unit[2] == 'ft') r *= 1/.3048
    else if (arr_unit[2] == 'μm') r *= 1/1000000
    else if (arr_unit[2] == 'mm') r *= 1/1000
    else if (arr_unit[2] == 'cm') r *= 1/100
    
    let gravity = G* ((obj1 * obj2)/r**2)
    return gravity 
  };