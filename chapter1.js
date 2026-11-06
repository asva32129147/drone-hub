export const chapter = {
 "title": "Chapter 1: Your Drone, Your Tools, and the Language of Measurement",
 "items": [
  {
   "id": "cp0",
   "group": "Checkpoints",
   "label": "Checkpoint 1.1 Q1",
   "prompt": "A drone has a mass of 1.2 kg. How many newtons must each of its four motors supply to hover? Give the answer in grams-force too.",
   "type": "num",
   "ans": [
    2.943,
    300
   ]
  },
  {
   "id": "cp1",
   "group": "Checkpoints",
   "label": "Checkpoint 1.1 Q2",
   "prompt": "Explain in two sentences why speeding up only Pair A makes the drone spin, but speeding up all four equally does not. ",
   "type": "reflect",
   "rubric": [
    [
     "says each propeller puts a twisting force (torque) on the frame",
     [
      "torque",
      "twist",
      "rotational force"
     ]
    ],
    [
     "says the twists cancel when speeds are equal, or are unbalanced when only Pair A speeds up",
     [
      "cancel",
      "balanc",
      "unbalanc",
      "net",
      "imbalance",
      "equal"
     ]
    ]
   ],
   "model": "Each propeller twists the frame opposite to how it spins. Pair A and Pair B twist in opposite directions, so with equal speeds the twists cancel. Speeding up only Pair A makes its twist bigger than Pair B's, leaving a net twist that spins the drone."
  },
  {
   "id": "cp2",
   "group": "Checkpoints",
   "label": "Checkpoint 1.2 Q1",
   "prompt": "Trace what happens when you push your stick forward: which parts does the command pass through before the motors change speed? ",
   "type": "reflect",
   "rubric": [
    [
     "names the radio / control link / receiver",
     [
      "radio",
      "control link",
      "receiver"
     ]
    ],
    [
     "names the flight controller",
     [
      "flight controller"
     ]
    ],
    [
     "names the ESC",
     [
      "esc",
      "speed controller"
     ]
    ],
    [
     "ends at the motors",
     [
      "motor"
     ]
    ]
   ],
   "model": "Your controller sends the command over the control link (radio) to the flight controller, which tells the ESC, which changes the power to the motors."
  },
  {
   "id": "cp3",
   "group": "Checkpoints",
   "label": "Checkpoint A Q1",
   "prompt": "Convert 60\u00b0 to radians, in exact form and as a decimal.",
   "type": "num",
   "ans": [
    1.047
   ]
  },
  {
   "id": "cp4",
   "group": "Checkpoints",
   "label": "Checkpoint A Q2",
   "prompt": "Convert 2 radians to degrees.",
   "type": "num",
   "ans": [
    114.6
   ]
  },
  {
   "id": "cp5",
   "group": "Checkpoints",
   "label": "Checkpoint A Q3",
   "prompt": "A propeller of radius 0.0889 m turns through 0.5 rad. How far does its tip travel along the circle? ",
   "type": "num",
   "ans": [
    0.04445
   ]
  },
  {
   "id": "cp6",
   "group": "Checkpoints",
   "label": "Checkpoint 1.3 Q1",
   "prompt": "Which part decides how fast a motor should spin, and which part actually changes the electrical power delivered to it?",
   "type": "reflect",
   "rubric": [
    [
     "says the flight controller decides",
     [
      "flight controller"
     ]
    ],
    [
     "says the ESC delivers the power",
     [
      "esc",
      "speed controller"
     ]
    ]
   ],
   "model": "The flight controller decides how fast each motor should spin. The ESC actually changes the electrical power delivered to the motor."
  },
  {
   "id": "cp7",
   "group": "Checkpoints",
   "label": "Checkpoint 1.3 Q2",
   "prompt": "In your own words, why can't you connect a brushless motor directly to a battery?",
   "type": "reflect",
   "rubric": [
    [
     "mentions the three wires / coils / phases",
     [
      "three",
      "3 wire",
      "coil",
      "phase"
     ]
    ],
    [
     "says something must switch them in order, at the right moments (the ESC)",
     [
      "switch",
      "order",
      "sequence",
      "timing",
      "esc",
      "commutat",
      "electronics"
     ]
    ]
   ],
   "model": "A brushless motor has three coil wires that must be switched on in the right order at the right moments, thousands of times a second. The ESC does that switching; a battery alone cannot."
  },
  {
   "id": "cp8",
   "group": "Checkpoints",
   "label": "Checkpoint 1.3 Q3",
   "prompt": "For a 4S battery (nominal 3.7 V per cell), what is the unloaded speed of a 900KV motor in rpm? Show the multiplication.",
   "type": "num",
   "ans": [
    13320
   ]
  },
  {
   "id": "cp9",
   "group": "Checkpoints",
   "label": "Checkpoint 1.3 Q4",
   "prompt": "Which parts in the table would you want to confirm on a datasheet before buying? Pick two and say what number you would look for on each. ",
   "type": "reflect",
   "rubric": [
    [
     "names a part and a number to find (e.g. max current, thrust, voltage)",
     [
      "current",
      "thrust",
      "voltage",
      "amp",
      "cell",
      "mass",
      "weight",
      "spi",
      "i2c",
      "rate",
      "kv"
     ]
    ]
   ],
   "model": "For example: the ESC's maximum continuous current and supported cell count, and the motor's maximum thrust and recommended battery."
  },
  {
   "id": "cp10",
   "group": "Checkpoints",
   "label": "Checkpoint 1.4 Q1",
   "prompt": "A drone is hovering and a gust suddenly starts tilting it. Which sensor would notice first, and why does it matter that it updates quickly?",
   "type": "reflect",
   "rubric": [
    [
     "names the gyroscope (or IMU)",
     [
      "gyro",
      "imu"
     ]
    ],
    [
     "explains why fast updates matter",
     [
      "fast",
      "quick",
      "rate",
      "soon",
      "immediate",
      "delay",
      "late",
      "early"
     ]
    ]
   ],
   "model": "The gyroscope notices first because it measures rotation rate directly. A fast update lets the controller correct the tilt before it grows."
  },
  {
   "id": "cp11",
   "group": "Checkpoints",
   "label": "Checkpoint 1.4 Q2",
   "prompt": "Why can't GPS alone stabilize a drone's tilt? Give two reasons from this section. ",
   "type": "reflect",
   "rubric": [
    [
     "says GPS updates slowly",
     [
      "slow",
      "few times",
      "update",
      "hz",
      "delay",
      "rate"
     ]
    ],
    [
     "says GPS gives position, not tilt, or fails indoors/accuracy is coarse",
     [
      "indoor",
      "tilt",
      "orientation",
      "angle",
      "position",
      "accura",
      "signal",
      "satellite"
     ]
    ]
   ],
   "model": "GPS updates only a few times per second, far too slowly to catch a tilt. It also reports position and speed rather than tilt, and does not work well indoors."
  },
  {
   "id": "cp12",
   "group": "Checkpoints",
   "label": "Checkpoint 1.5 Q1",
   "prompt": "Convert 12 cm to meters, then 36 km/h to m/s with the fractions shown.",
   "type": "num",
   "ans": [
    0.12,
    10
   ]
  },
  {
   "id": "cp13",
   "group": "Checkpoints",
   "label": "Checkpoint 1.5 Q2",
   "prompt": "A 4S 1300 mAh battery at a nominal 14.8 V stores how many watt-hours and how many joules?",
   "type": "num",
   "ans": [
    19.24,
    69264
   ]
  },
  {
   "id": "cp14",
   "group": "Checkpoints",
   "label": "Checkpoint 1.5 Q3",
   "prompt": "A motor test listing reports 1850 g of thrust. Express it in newtons. ",
   "type": "num",
   "ans": [
    18.15
   ]
  },
  {
   "id": "cp15",
   "group": "Checkpoints",
   "label": "Checkpoint 1.6 Q1",
   "prompt": "How many significant figures does each number have: 0.00560, 3400, 3.400 \u00d7 10\u00b3, 2005, 12.0?",
   "type": "reflect"
  },
  {
   "id": "cp16",
   "group": "Checkpoints",
   "label": "Checkpoint 1.6 Q2",
   "prompt": "A plate measures 3.2 m by 1.25 m. Give its area with the correct number of significant figures.",
   "type": "num",
   "ans": [
    4.0
   ]
  },
  {
   "id": "cp17",
   "group": "Checkpoints",
   "label": "Checkpoint 1.6 Q3",
   "prompt": "Add 12.5 g + 0.75 g + 103 g and report the result with the correct number of decimal places.",
   "type": "num",
   "ans": [
    116
   ]
  },
  {
   "id": "cp18",
   "group": "Checkpoints",
   "label": "Checkpoint 1.6 Q4",
   "prompt": "A thrust stand reads 1850 g \u00b110 g. Give the thrust in newtons with its uncertainty, using Worked Example 11 as your model.",
   "type": "num",
   "ans": [
    18.1,
    0.1
   ]
  },
  {
   "id": "cp19",
   "group": "Checkpoints",
   "label": "Checkpoint 1.6 Q5",
   "prompt": "Write 0.0075 and 48,000 in scientific notation, then multiply them.",
   "type": "num",
   "ans": [
    360
   ]
  },
  {
   "id": "cp20",
   "group": "Checkpoints",
   "label": "Checkpoint 1.6 Q6",
   "prompt": "Power is voltage times current. Use units to show that volt \u00d7 ampere gives watts (J/s). Hint: volt = J/C and ampere = C/s.",
   "type": "reflect",
   "rubric": [
    [
     "uses volt = J/C and ampere = C/s",
     [
      "j/c",
      "c/s",
      "joule",
      "coulomb"
     ]
    ],
    [
     "arrives at J/s = watts",
     [
      "j/s",
      "watt"
     ]
    ]
   ],
   "model": "(J/C) x (C/s) = J/s, which is a watt."
  },
  {
   "id": "cp21",
   "group": "Checkpoints",
   "label": "Checkpoint 1.6 Q7",
   "prompt": "A student claims that the distance an object falls is d = \u00bd g t\u00b3. Check the units and say what is wrong.",
   "type": "reflect",
   "rubric": [
    [
     "does a unit/dimension check",
     [
      "unit",
      "dimension",
      "m/s",
      "s\u00b3",
      "s^3"
     ]
    ],
    [
     "says the formula should use t squared",
     [
      "squared",
      "t\u00b2",
      "t^2",
      "s\u00b2"
     ]
    ]
   ],
   "model": "g is m/s^2, so g x t^3 is m/s^2 x s^3 = m*s, not meters. The correct formula is d = 1/2 g t^2."
  },
  {
   "id": "cp22",
   "group": "Checkpoints",
   "label": "Checkpoint 1.6 Q8",
   "prompt": "You predicted a hover thrust of 2.2 N per motor and measured 2.4 N. What is the percent error? ",
   "type": "num",
   "ans": [
    9.09
   ]
  },
  {
   "id": "cp23",
   "group": "Checkpoints",
   "label": "Checkpoint 1.7 Q1",
   "prompt": "What does thrust_g[1:3] give when thrust_g = [10, 20, 30, 40]? Then what does thrust_g[-2] give?",
   "type": "num",
   "ans": [
    20,
    30,
    30
   ],
   "model": "[20, 30] and 30"
  },
  {
   "id": "cp24",
   "group": "Checkpoints",
   "label": "Checkpoint 1.7 Q2",
   "prompt": "What does part_mass_g.get(\"battery\", 0) return when part_mass_g has no \"battery\" key? What would part_mass_g[\"battery\"] do instead?",
   "type": "reflect",
   "rubric": [
    [
     "says .get returns 0",
     [
      "/\\b0\\b/"
     ]
    ],
    [
     "says the bracket version raises a KeyError",
     [
      "keyerror",
      "error",
      "exception"
     ]
    ]
   ],
   "model": ".get(\"battery\", 0) returns 0. part_mass_g[\"battery\"] raises a KeyError."
  },
  {
   "id": "cp25",
   "group": "Checkpoints",
   "label": "Checkpoint 1.7 Q3",
   "prompt": "In the Drone class, what is self when you run big.hover_thrust_per_motor_n()?",
   "type": "reflect",
   "rubric": [
    [
     "says self is the big object",
     [
      "big"
     ]
    ]
   ],
   "model": "self is the big object, the Drone made with Drone(\"big hex\", 1.5, 6)."
  },
  {
   "id": "cp26",
   "group": "Checkpoints",
   "label": "Checkpoint 1.7 Q4",
   "prompt": "Python prints 2.2366800000000002 for a calculation whose inputs have 3 significant figures. Explain why the answer is not \"accurate to 17 digits,\" and write the line of Python that prints it correctly.",
   "type": "reflect",
   "rubric": [
    [
     "explains the extra digits are binary rounding noise",
     [
      "binary",
      "rounding",
      "noise",
      "float",
      "represent",
      "exact"
     ]
    ],
    [
     "shows a line that rounds or formats, such as round() or .3g",
     [
      "round",
      ".3g",
      "format",
      "f\""
     ]
    ]
   ],
   "model": "Computers store decimals in binary, so the long tail is rounding noise, not information. Use print(round(x, 2)) or print(f\"{x:.3g}\")."
  },
  {
   "id": "cp27",
   "group": "Checkpoints",
   "label": "Checkpoint 1.7 Q5",
   "prompt": "Predict what math.sin(30) prints, and say why it is not 0.5. Then write the line that gives 0.5.",
   "type": "reflect",
   "rubric": [
    [
     "says the function expects radians",
     [
      "radian"
     ]
    ],
    [
     "uses math.radians in the fix",
     [
      "math.radians",
      "radians("
     ]
    ],
    [
     "gives about -0.988",
     [
      "/0\\.98/"
     ]
    ]
   ],
   "model": "math.sin treats 30 as radians and prints about -0.988. Use math.sin(math.radians(30)), which gives 0.5."
  },
  {
   "type": "reflect",
   "id": "cp28",
   "group": "Checkpoints",
   "label": "Checkpoint 1.7 Q6",
   "prompt": "Rewrite def c(x): return x * 1000 / 3600 so it follows the habits above: a clear name, a docstring, and an assert that checks 36 km/h gives 10 m/s.",
   "rubric": [
    [
     "uses a clear name such as kmh_to_ms",
     [
      "kmh",
      "ms",
      "km_h",
      "speed"
     ]
    ],
    [
     "has a docstring",
     [
      "\"\"\"",
      "'''",
      "docstring"
     ]
    ],
    [
     "has an assert for 36 km/h giving 10",
     [
      "assert"
     ]
    ]
   ]
  },
  {
   "type": "reflect",
   "id": "cp29",
   "group": "Checkpoints",
   "label": "Checkpoint 1.7 Q7",
   "prompt": "A program uses the bare number 9.81 in six different places. It gives correct answers. Give two reasons this is still a problem. ",
   "rubric": [
    [
     "says a change would have to be made in many places",
     [
      "one place",
      "once",
      "change",
      "update",
      "single",
      "everywhere",
      "every",
      "six"
     ]
    ],
    [
     "says the meaning is unclear to a reader (magic number)",
     [
      "unclear",
      "meaning",
      "magic",
      "read",
      "name",
      "what it is",
      "understand"
     ]
    ]
   ]
  },
  {
   "id": "q1_1",
   "group": "Unit Quiz 1",
   "label": "Question 1",
   "prompt": "A drone has a mass of 1.4 kg and each of its four motors can give at most 6.5 N. Give (a) the thrust each motor must supply to hover, in newtons, and (b) the thrust-to-weight ratio at full power. Separate the answers with a comma.",
   "type": "num",
   "ans": [
    3.43,
    1.89
   ],
   "model": "(a) 1.4 x 9.81 / 4 = 3.43 N. (b) 4 x 6.5 / (1.4 x 9.81) = 1.89.",
   "topics": [
    "T1",
    "T2"
   ],
   "conn": true
  },
  {
   "id": "q1_2",
   "group": "Unit Quiz 1",
   "label": "Question 2",
   "prompt": "You want the drone to turn on the spot (yaw) without climbing or descending. What should the flight controller do?",
   "type": "mc",
   "options": [
    "Speed up the two front motors and slow the two rear motors",
    "Speed up the two left motors and slow the two right motors",
    "Speed up all four motors equally",
    "Speed up one diagonal pair of motors and slow the other pair by the same amount"
   ],
   "correct": 3,
   "explain": "Unequal speeds between the two pairs leave a net twisting force, while equal and opposite changes keep total thrust, and so height, unchanged.",
   "topics": [
    "T3",
    "T1"
   ],
   "conn": true
  },
  {
   "id": "q1_3",
   "group": "Unit Quiz 1",
   "label": "Question 3",
   "prompt": "Which description of the flight controller and the ESC is correct?",
   "type": "mc",
   "options": [
    "The ESC reads the gyroscope and the flight controller spins the motor directly",
    "The ESC decides how fast each motor should turn, and the flight controller delivers the power",
    "The flight controller decides how fast each motor should turn, and the ESC switches the power to make it happen",
    "Both decide the speeds together, then ask the battery"
   ],
   "correct": 2,
   "explain": "The flight controller runs the control loop. The ESC is the power stage that obeys it.",
   "topics": [
    "T7",
    "T4"
   ],
   "conn": false
  },
  {
   "id": "q1_4",
   "group": "Unit Quiz 1",
   "label": "Question 4",
   "prompt": "Why does your design connect the control link (your stick commands) to the flight controller instead of to the Raspberry Pi?",
   "type": "mc",
   "options": [
    "A radio signal can only be read by a Pico",
    "If the Pi stops or lags, the drone still obeys the pilot, because the flight controller keeps strict timing",
    "The Pi is too slow to read any signal",
    "The Pi has no way to use a radio"
   ],
   "correct": 1,
   "explain": "The Pi runs a full operating system that can pause briefly, and it is not the part you want between the pilot and the motors.",
   "topics": [
    "T8",
    "T4"
   ],
   "conn": true
  },
  {
   "id": "q1_5",
   "group": "Unit Quiz 1",
   "label": "Question 5",
   "prompt": "A 900 KV motor on a 6S battery (3.7 V per cell) spins at its unloaded speed. Give that speed in radians per second.",
   "type": "num",
   "ans": [
    2092
   ],
   "model": "6 x 3.7 = 22.2 V. 900 x 22.2 = 19,980 rpm. 19,980 x 2 pi / 60 = 2092 rad/s.",
   "topics": [
    "T6",
    "T5",
    "T10"
   ],
   "conn": true
  },
  {
   "id": "q1_6",
   "group": "Unit Quiz 1",
   "label": "Question 6",
   "prompt": "A gyroscope reading is added up over time to estimate tilt, but the answer slowly drifts away from the truth. Which sensor would you blend in to correct the drift, and why?",
   "type": "mc",
   "options": [
    "GPS, because it measures tilt directly",
    "The camera, because it is faster than the gyroscope",
    "The accelerometer, because it measures the direction of gravity, which does not drift (although it is noisy)",
    "A second gyroscope, because it drifts in the opposite direction"
   ],
   "correct": 2,
   "explain": "Each sensor has a weakness, and fusion trusts each one for what it does best.",
   "topics": [
    "T9",
    "T16"
   ],
   "conn": true
  },
  {
   "id": "q1_7",
   "group": "Unit Quiz 1",
   "label": "Question 7",
   "prompt": "A 6S battery supplies about 22 V and the Raspberry Pi 5 needs about 5 V. What is the right way to power the Pi from the battery?",
   "type": "mc",
   "options": [
    "Through a voltage regulator that steps the voltage down",
    "Through the GPS module",
    "Through the ESC motor wires",
    "Connect it directly, since both are batteries"
   ],
   "correct": 0,
   "explain": "Too high a voltage can destroy the Pi. A regulator lowers it safely.",
   "topics": [
    "T4",
    "T6"
   ],
   "conn": false
  },
  {
   "id": "q1_8",
   "group": "Unit Quiz 1",
   "label": "Question 8",
   "prompt": "Your build ends up with a thrust-to-weight ratio of 1.1. Explain two problems this causes, and one design change that would fix them. Use ideas from sections 1.1 and 1.3.",
   "type": "reflect",
   "rubric": [
    [
     "says there is almost no spare thrust, so little ability to climb or steer",
     [
      "margin",
      "climb",
      "steer",
      "spare",
      "headroom",
      "full throttle",
      "full power"
     ]
    ],
    [
     "gives a second problem such as gusts, battery sag, or no recovery",
     [
      "gust",
      "wind",
      "sag",
      "recover",
      "saturat",
      "tilt",
      "unstable"
     ]
    ],
    [
     "proposes a fix: more thrust or less weight",
     [
      "lighter",
      "less weight",
      "more thrust",
      "bigger",
      "stronger",
      "higher kv",
      "reduce",
      "lower the mass",
      "weight"
     ]
    ]
   ],
   "model": "At 1.1 the motors can barely lift the drone, so there is no spare thrust to climb or to correct a tilt, and a gust or a drop in battery voltage can push the drone out of control. Fix it by using stronger motors or cutting weight.",
   "topics": [
    "T2",
    "T3",
    "T6"
   ],
   "conn": true
  },
  {
   "id": "q2_1",
   "group": "Unit Quiz 2",
   "label": "Question 1",
   "prompt": "A pack is 1300 mAh at 14.8 V. Give (a) its stored energy in joules and (b) how many minutes it could supply 200 W (power is energy per second). Separate the answers with a comma.",
   "type": "num",
   "ans": [
    69264,
    5.77
   ],
   "model": "(a) 1.3 Ah x 3600 = 4680 C; 14.8 x 4680 = 69,264 J. (b) 69,264 / 200 = 346 s = 5.77 minutes.",
   "topics": [
    "T11",
    "T10"
   ],
   "conn": true
  },
  {
   "id": "q2_2",
   "group": "Unit Quiz 2",
   "label": "Question 2",
   "prompt": "A student claims that the energy stored in a battery is E = V x I (volts times amps). What does dimensional analysis show?",
   "type": "mc",
   "options": [
    "V x I has units of watts (power), not joules, so a time is missing",
    "It has units of coulombs",
    "It has units of newtons",
    "It has units of joules, so it is correct"
   ],
   "correct": 0,
   "explain": "Volt x ampere = (J/C)(C/s) = J/s = watt. Multiplying by time gives energy.",
   "topics": [
    "T14",
    "T11"
   ],
   "conn": true
  },
  {
   "id": "q2_3",
   "group": "Unit Quiz 2",
   "label": "Question 3",
   "prompt": "A 5-inch propeller (5 in is its diameter) spins at 24,000 rpm. What is its tip speed in m/s?",
   "type": "num",
   "ans": [
    160
   ],
   "model": "Radius = 2.5 in = 0.0635 m. 24,000 rpm = 2513 rad/s. 2513 x 0.0635 = 159.6, about 160 m/s.",
   "topics": [
    "T12",
    "T5",
    "T10"
   ],
   "conn": true
  },
  {
   "id": "q2_4",
   "group": "Unit Quiz 2",
   "label": "Question 4",
   "prompt": "A gyroscope reports 573 degrees per second. About how many radians per second is that?",
   "type": "mc",
   "options": [
    "0.175",
    "573",
    "10",
    "32,832"
   ],
   "correct": 2,
   "explain": "573 / 57.3 is about 10. Equivalently 573 x pi / 180.",
   "topics": [
    "T5"
   ],
   "conn": false
  },
  {
   "id": "q2_5",
   "group": "Unit Quiz 2",
   "label": "Question 5",
   "prompt": "A thrust reading is 1.85 kg of force and g = 9.81. The product is 18.1485 N. With 3 significant figures in the input, how should you report it?",
   "type": "mc",
   "options": [
    "18 N",
    "18.1485 N",
    "18.15 N",
    "18.1 N"
   ],
   "correct": 3,
   "explain": "Keep as many significant figures as the input with the fewest, here 3.",
   "topics": [
    "T15",
    "T1"
   ],
   "conn": false
  },
  {
   "id": "q2_6",
   "group": "Unit Quiz 2",
   "label": "Question 6",
   "prompt": "A mass of 0.912 kg has an uncertainty of 0.001 kg, and a thrust reading of 11.8 N has an uncertainty of 0.1 N. About what is the percent uncertainty of the thrust-to-weight ratio built from them?",
   "type": "mc",
   "options": [
    "About 10%",
    "About 1%",
    "About 0.1%",
    "About 0.01%"
   ],
   "correct": 1,
   "explain": "0.11% + 0.85% is about 0.96%, so about 1%.",
   "topics": [
    "T16",
    "T2"
   ],
   "conn": true
  },
  {
   "id": "q2_7",
   "group": "Unit Quiz 2",
   "label": "Question 7",
   "prompt": "A thrust stand reads 11.8, 11.8, and 11.7 N on three runs of a motor whose true thrust is known to be 10.0 N. The stand is:",
   "type": "mc",
   "options": [
    "Both precise and accurate",
    "Accurate but not precise",
    "Neither precise nor accurate",
    "Precise but not accurate"
   ],
   "correct": 3,
   "explain": "The readings agree with each other, but all are far from the true value. More runs cannot fix this; calibration can.",
   "topics": [
    "T16"
   ],
   "conn": false
  },
  {
   "id": "q2_8",
   "group": "Unit Quiz 2",
   "label": "Question 8",
   "prompt": "A simulation predicts that a 0.900 kg drone needs 2.20 N of thrust per motor to hover. You measure 2.31 N. What is the percent error?",
   "type": "num",
   "ans": [
    5.0
   ],
   "model": "|2.31 - 2.20| / 2.20 x 100 = 5.0%.",
   "topics": [
    "T17",
    "T1"
   ],
   "conn": true
  },
  {
   "id": "q3_1",
   "group": "Unit Quiz 3",
   "label": "Question 1",
   "prompt": "What does this program print?\n\nd = {\"a\": 1, \"b\": 2}\nd[\"c\"] = d[\"a\"] + d[\"b\"]\nlst = [d[\"c\"], d[\"a\"]]\nlst.append(len(d))\nprint(lst)",
   "type": "mc",
   "options": [
    "[3, 1, 2]",
    "[3, 1, 3]",
    "[1, 2, 3]",
    "[3, 3, 1]"
   ],
   "correct": 1,
   "explain": "d[\"c\"] is 3. lst starts as [3, 1]. d now has 3 keys, so len(d) is 3.",
   "topics": [
    "T19",
    "T20"
   ],
   "conn": true
  },
  {
   "id": "q3_2",
   "group": "Unit Quiz 3",
   "label": "Question 2",
   "prompt": "Given\n\ndef thrust(mass_kg, motors=4):\n    return mass_kg * 9.81 / motors\n\nwhat is thrust(2, 6) about?",
   "type": "mc",
   "options": [
    "19.62",
    "It causes an error",
    "3.27",
    "4.905"
   ],
   "correct": 2,
   "explain": "The second argument replaces the default: 2 x 9.81 / 6 = 3.27.",
   "topics": [
    "T18"
   ],
   "conn": false
  },
  {
   "id": "q3_3",
   "group": "Unit Quiz 3",
   "label": "Question 3",
   "prompt": "What does this print?\n\na = Drone(\"A\", 1.0)\nb = Drone(\"B\", 2.0)\nb.mass_kg = 3.0\nprint(a.weight_n())",
   "type": "mc",
   "options": [
    "It causes an error",
    "9.81",
    "29.43",
    "19.62"
   ],
   "correct": 1,
   "explain": "Each object keeps its own data. Changing b does not change a.",
   "topics": [
    "T21"
   ],
   "conn": false
  },
  {
   "id": "q3_4",
   "group": "Unit Quiz 3",
   "label": "Question 4",
   "prompt": "In an async program, what is the total waiting time of this line, if spin(1) waits 1 second?\n\nawait asyncio.gather(spin(1), spin(1), spin(1))",
   "type": "mc",
   "options": [
    "It raises an error",
    "About 1 second",
    "0 seconds",
    "About 3 seconds"
   ],
   "correct": 1,
   "explain": "gather runs the three waits at the same time.",
   "topics": [
    "T22"
   ],
   "conn": false
  },
  {
   "id": "q3_5",
   "group": "Unit Quiz 3",
   "label": "Question 5",
   "prompt": "Which change most improves  def f(a, b): return a * 9.81 / b ?",
   "type": "mc",
   "options": [
    "Make the names shorter",
    "Remove the division",
    "Name the function and parameters clearly with units, name the constant G, and add a docstring",
    "Add a comment on every line saying what it does"
   ],
   "correct": 2,
   "explain": "Good names, named constants, and a docstring make the code readable and safe to change.",
   "topics": [
    "T24",
    "T18"
   ],
   "conn": false
  },
  {
   "id": "q3_6",
   "group": "Unit Quiz 3",
   "label": "Question 6",
   "prompt": "What happens when Python runs  assert abs(f(2) - 4) < 1e-6  and f(2) returns 4.5?",
   "type": "mc",
   "options": [
    "Nothing, asserts are ignored",
    "It stops with an AssertionError",
    "It prints False and continues",
    "It rounds 4.5 to 4 and continues"
   ],
   "correct": 1,
   "explain": "assert stops the program when its condition is false.",
   "topics": [
    "T23"
   ],
   "conn": false
  },
  {
   "id": "q3_7",
   "group": "Unit Quiz 3",
   "label": "Question 7",
   "prompt": "thrust_n = [2.1, 2.3, 2.2, 2.6]. Using a loop that adds each value to a running total, find the average and report it with 2 significant figures.",
   "type": "num",
   "ans": [
    2.3
   ],
   "model": "Total 9.2; 9.2 / 4 = 2.3.",
   "topics": [
    "T19",
    "T15",
    "T23"
   ],
   "conn": true
  },
  {
   "id": "q3_8",
   "group": "Unit Quiz 3",
   "label": "Question 8",
   "prompt": "You need to store each part's name, mass in grams, and quantity, then compute total mass and the thrust-to-weight ratio. Which Python structures would you use, and which good habits would you follow?",
   "type": "reflect",
   "rubric": [
    [
     "uses a list of dictionaries (or a class)",
     [
      "list",
      "dictionar",
      "dict",
      "class"
     ]
    ],
    [
     "uses a loop or a function to total",
     [
      "loop",
      "sum",
      "function",
      "total",
      "for "
     ]
    ],
    [
     "names a habit such as units in names, a named constant, a docstring, or an assert",
     [
      "unit",
      "_g",
      "constant",
      "assert",
      "test",
      "docstring",
      "name"
     ]
    ]
   ],
   "model": "A list of dictionaries, one per part, or a class. A function loops over them and adds mass_g times count. Name variables with units, keep G as a constant, add a docstring, and test with an assert.",
   "topics": [
    "T19",
    "T20",
    "T21",
    "T24"
   ],
   "conn": true
  },
  {
   "id": "t_1",
   "group": "Chapter Test",
   "label": "Question 1",
   "prompt": "What is the weight in newtons of a 0.5 kg mass (g = 9.81 m/s2)?",
   "type": "mc",
   "options": [
    "4.905 N",
    "0.5 N",
    "9.81 N",
    "49.05 N"
   ],
   "correct": 0,
   "explain": "W = m x g = 0.5 x 9.81.",
   "topics": [
    "T1"
   ],
   "conn": false
  },
  {
   "id": "t_2",
   "group": "Chapter Test",
   "label": "Question 2",
   "prompt": "A drone has a thrust-to-weight ratio of exactly 1. What does that mean?",
   "type": "mc",
   "options": [
    "It can climb very quickly",
    "It cannot be controlled at all, even at full power, because it is too light",
    "It can hover at half power",
    "At full power the motors can just hold it in a hover, with nothing spare to climb or steer"
   ],
   "correct": 3,
   "explain": "TWR is maximum thrust divided by weight.",
   "topics": [
    "T2"
   ],
   "conn": false
  },
  {
   "id": "t_3",
   "group": "Chapter Test",
   "label": "Question 3",
   "prompt": "How does a quadcopter roll (tilt left or right)?",
   "type": "mc",
   "options": [
    "It speeds up all four motors equally",
    "It speeds up the front two motors only",
    "It speeds up the two motors on one side and slows the two on the other",
    "It uses a rudder"
   ],
   "correct": 2,
   "explain": "Tilting the thrust sideways moves the drone sideways.",
   "topics": [
    "T3"
   ],
   "conn": false
  },
  {
   "id": "t_4",
   "group": "Chapter Test",
   "label": "Question 4",
   "prompt": "Which part measures how fast the drone is rotating?",
   "type": "mc",
   "options": [
    "The GPS receiver",
    "The voltage regulator",
    "The gyroscope in the IMU",
    "The ESC"
   ],
   "correct": 2,
   "explain": "A gyroscope measures rotation rate.",
   "topics": [
    "T4",
    "T9"
   ],
   "conn": false
  },
  {
   "id": "t_5",
   "group": "Chapter Test",
   "label": "Question 5",
   "prompt": "Convert 270 degrees to radians.",
   "type": "mc",
   "options": [
    "pi / 270",
    "3 pi / 2, about 4.71",
    "270 pi",
    "pi / 2, about 1.57"
   ],
   "correct": 1,
   "explain": "270 x pi / 180 = 3pi/2.",
   "topics": [
    "T5"
   ],
   "conn": false
  },
  {
   "id": "t_6",
   "group": "Chapter Test",
   "label": "Question 6",
   "prompt": "A 1000 KV motor runs on a 4S pack (3.7 V per cell). What is its unloaded speed?",
   "type": "mc",
   "options": [
    "3,700 rpm",
    "4,000 rpm",
    "1,000 rpm",
    "14,800 rpm"
   ],
   "correct": 3,
   "explain": "4 x 3.7 = 14.8 V; 1000 x 14.8.",
   "topics": [
    "T6"
   ],
   "conn": false
  },
  {
   "id": "t_7",
   "group": "Chapter Test",
   "label": "Question 7",
   "prompt": "What does \"6S\" mean on a battery?",
   "type": "mc",
   "options": [
    "Six minutes of flight time",
    "Six times the capacity",
    "Six amps of current",
    "Six cells in a row, about 22.2 V"
   ],
   "correct": 3,
   "explain": "Each cell is about 3.7 V.",
   "topics": [
    "T6"
   ],
   "conn": false
  },
  {
   "id": "t_8",
   "group": "Chapter Test",
   "label": "Question 8",
   "prompt": "What is a \"4-in-1 ESC\"?",
   "type": "mc",
   "options": [
    "Four ESC circuits, one per motor, on a single board",
    "Four batteries on one board",
    "An ESC that drives four propellers from one motor",
    "An ESC with four sensors built in"
   ],
   "correct": 0,
   "explain": "It saves weight and wiring.",
   "topics": [
    "T7"
   ],
   "conn": false
  },
  {
   "id": "t_9",
   "group": "Chapter Test",
   "label": "Question 9",
   "prompt": "Why is a small microcontroller a good choice for running the control loop?",
   "type": "mc",
   "options": [
    "It has more memory than a Pi",
    "It is faster than a Raspberry Pi 5",
    "It can run a full operating system",
    "It can keep a strict, predictable schedule"
   ],
   "correct": 3,
   "explain": "Predictable timing matters more than raw speed.",
   "topics": [
    "T8"
   ],
   "conn": false
  },
  {
   "id": "t_10",
   "group": "Chapter Test",
   "label": "Question 10",
   "prompt": "What is sensor fusion?",
   "type": "mc",
   "options": [
    "Blending several sensors, trusting each for what it does best",
    "Averaging the same sensor many times",
    "Gluing sensors together",
    "Using one very expensive sensor"
   ],
   "correct": 0,
   "explain": "Gyroscope, accelerometer, and GPS each have different strengths and weaknesses.",
   "topics": [
    "T9"
   ],
   "conn": false
  },
  {
   "id": "t_11",
   "group": "Chapter Test",
   "label": "Question 11",
   "prompt": "1500 mAh is equal to:",
   "type": "mc",
   "options": [
    "1500 Ah",
    "0.15 Ah",
    "1.5 Ah",
    "15 Ah"
   ],
   "correct": 2,
   "explain": "milli means 1/1000.",
   "topics": [
    "T10"
   ],
   "conn": false
  },
  {
   "id": "t_12",
   "group": "Chapter Test",
   "label": "Question 12",
   "prompt": "How many millimeters are in 0.25 m?",
   "type": "mc",
   "options": [
    "2.5",
    "250",
    "0.25",
    "25"
   ],
   "correct": 1,
   "explain": "1 m = 1000 mm.",
   "topics": [
    "T10"
   ],
   "conn": false
  },
  {
   "id": "t_13",
   "group": "Chapter Test",
   "label": "Question 13",
   "prompt": "How much energy is stored in a 2000 mAh battery at a nominal 14.8 V?",
   "type": "mc",
   "options": [
    "2.96 Wh",
    "148 Wh",
    "29,600 Wh",
    "29.6 Wh"
   ],
   "correct": 3,
   "explain": "14.8 V x 2.0 Ah.",
   "topics": [
    "T11"
   ],
   "conn": false
  },
  {
   "id": "t_14",
   "group": "Chapter Test",
   "label": "Question 14",
   "prompt": "To find the speed of a propeller tip you multiply:",
   "type": "mc",
   "options": [
    "the rpm by the diameter in inches",
    "the angular speed in degrees per second by the radius",
    "the KV by the voltage",
    "the angular speed in rad/s by the radius in meters"
   ],
   "correct": 3,
   "explain": "Speed = angular speed x radius, with radians.",
   "topics": [
    "T12",
    "T5"
   ],
   "conn": false
  },
  {
   "id": "t_15",
   "group": "Chapter Test",
   "label": "Question 15",
   "prompt": "What is (6.3 x 10^-4) x (2 x 10^3)?",
   "type": "mc",
   "options": [
    "126",
    "1.26",
    "12.6",
    "0.126"
   ],
   "correct": 1,
   "explain": "6.3 x 2 = 12.6 and 10^-4 x 10^3 = 10^-1.",
   "topics": [
    "T13"
   ],
   "conn": false
  },
  {
   "id": "t_16",
   "group": "Chapter Test",
   "label": "Question 16",
   "prompt": "Which formula for the distance d traveled at speed v for time t is dimensionally correct?",
   "type": "mc",
   "options": [
    "d = v + t",
    "d = v t",
    "d = v t squared",
    "d = v / t"
   ],
   "correct": 1,
   "explain": "(m/s) x s = m.",
   "topics": [
    "T14"
   ],
   "conn": false
  },
  {
   "id": "t_17",
   "group": "Chapter Test",
   "label": "Question 17",
   "prompt": "How many significant figures are in 0.04050?",
   "type": "mc",
   "options": [
    "2",
    "5",
    "3",
    "4"
   ],
   "correct": 3,
   "explain": "Leading zeros do not count; the trailing zero after the decimal point does.",
   "topics": [
    "T15"
   ],
   "conn": false
  },
  {
   "id": "t_18",
   "group": "Chapter Test",
   "label": "Question 18",
   "prompt": "About what is the percent uncertainty of 11.8 +/- 0.1 N?",
   "type": "mc",
   "options": [
    "8.5%",
    "1.18%",
    "0.1%",
    "0.85%"
   ],
   "correct": 3,
   "explain": "0.1 / 11.8 x 100.",
   "topics": [
    "T16"
   ],
   "conn": false
  },
  {
   "id": "t_19",
   "group": "Chapter Test",
   "label": "Question 19",
   "prompt": "You measured 9.5 and predicted 10.0. What is the percent error?",
   "type": "mc",
   "options": [
    "50%",
    "0.5%",
    "5%",
    "9.5%"
   ],
   "correct": 2,
   "explain": "|9.5 - 10.0| / 10.0 x 100.",
   "topics": [
    "T17"
   ],
   "conn": false
  },
  {
   "id": "t_20",
   "group": "Chapter Test",
   "label": "Question 20",
   "prompt": "What does a default parameter value, as in def f(x, n=4), do?",
   "type": "mc",
   "options": [
    "It raises an error if n is given",
    "It makes n optional but ignores it",
    "It forces n to always be 4",
    "It is used whenever the caller leaves that argument out"
   ],
   "correct": 3,
   "explain": "Defaults make common calls short.",
   "topics": [
    "T18"
   ],
   "conn": false
  },
  {
   "id": "t_21",
   "group": "Chapter Test",
   "label": "Question 21",
   "prompt": "If thrust = [5, 6, 7, 8], what is thrust[-1]?",
   "type": "mc",
   "options": [
    "8",
    "7",
    "5",
    "An error"
   ],
   "correct": 0,
   "explain": "Index -1 is the last item.",
   "topics": [
    "T19"
   ],
   "conn": false
  },
  {
   "id": "t_22",
   "group": "Chapter Test",
   "label": "Question 22",
   "prompt": "If d = {\"a\": 1}, what does d.get(\"z\", 0) return?",
   "type": "mc",
   "options": [
    "0",
    "None",
    "1",
    "An error"
   ],
   "correct": 0,
   "explain": ".get returns the fallback when the key is missing.",
   "topics": [
    "T20"
   ],
   "conn": false
  },
  {
   "id": "t_23",
   "group": "Chapter Test",
   "label": "Question 23",
   "prompt": "In a method of a class, self refers to:",
   "type": "mc",
   "options": [
    "the first argument of the program",
    "the particular object the method was called on",
    "a global variable",
    "the class itself"
   ],
   "correct": 1,
   "explain": "quad.weight_n() runs with self = quad.",
   "topics": [
    "T21"
   ],
   "conn": false
  },
  {
   "id": "t_24",
   "group": "Chapter Test",
   "label": "Question 24",
   "prompt": "What does await do inside an async function?",
   "type": "mc",
   "options": [
    "It skips the task",
    "It makes the task run faster",
    "It pauses that function until the awaited task finishes, while other work can continue",
    "It repeats the task forever"
   ],
   "correct": 2,
   "explain": "Waiting does not freeze everything.",
   "topics": [
    "T22"
   ],
   "conn": false
  },
  {
   "id": "t_25",
   "group": "Chapter Test",
   "label": "Question 25",
   "prompt": "x = -1 and the program runs assert x > 0. What happens?",
   "type": "mc",
   "options": [
    "Nothing",
    "It stops with an AssertionError",
    "It prints False",
    "x becomes 1"
   ],
   "correct": 1,
   "explain": "assert checks a condition.",
   "topics": [
    "T23"
   ],
   "conn": false
  },
  {
   "id": "t_26",
   "group": "Chapter Test",
   "label": "Question 26",
   "prompt": "Why write G = 9.81 once at the top of a program instead of typing 9.81 everywhere?",
   "type": "mc",
   "options": [
    "Python requires it",
    "It makes the number more accurate",
    "The meaning is clear and you only change one line if it needs to change",
    "The program runs faster"
   ],
   "correct": 2,
   "explain": "This avoids magic numbers.",
   "topics": [
    "T24"
   ],
   "conn": false
  },
  {
   "id": "t_27",
   "group": "Chapter Test",
   "label": "Question 27",
   "prompt": "A 6S battery is 2200 mAh (nominal 3.7 V per cell). The drone draws an average of 220 W. Using all the stored energy, how many minutes can it fly?",
   "type": "num",
   "ans": [
    13.3
   ],
   "model": "22.2 V x 2.2 Ah = 48.84 Wh. 48.84 / 220 = 0.222 h = 13.3 min.",
   "topics": [
    "T6",
    "T11",
    "T10"
   ],
   "conn": true
  },
  {
   "id": "t_28",
   "group": "Chapter Test",
   "label": "Question 28",
   "prompt": "Four motors each give 1850 g of thrust (grams-force) on a 1.3 kg drone. What is the thrust-to-weight ratio?",
   "type": "num",
   "ans": [
    5.69
   ],
   "model": "Total thrust 7.4 kg-force against a weight of 1.3 kg-force: 7.4 / 1.3 = 5.69.",
   "topics": [
    "T1",
    "T2",
    "T10"
   ],
   "conn": true
  },
  {
   "id": "t_29",
   "group": "Chapter Test",
   "label": "Question 29",
   "prompt": "A gyroscope reads 2200 degrees per second during a flip. Convert that to revolutions per minute.",
   "type": "num",
   "ans": [
    367
   ],
   "model": "2200 / 360 = 6.11 rev/s; x 60 = 367 rpm.",
   "topics": [
    "T5",
    "T10"
   ],
   "conn": true
  },
  {
   "id": "t_30",
   "group": "Chapter Test",
   "label": "Question 30",
   "prompt": "A propeller tip moves at 190 m/s and the radius is 0.0889 m. Give (a) the angular speed in rad/s and (b) the speed in rpm. Separate the answers with a comma.",
   "type": "num",
   "ans": [
    2137,
    20409
   ],
   "model": "190 / 0.0889 = 2137 rad/s; x 60 / (2 pi) = 20,409 rpm.",
   "topics": [
    "T12",
    "T5"
   ],
   "conn": true
  },
  {
   "id": "t_31",
   "group": "Chapter Test",
   "label": "Question 31",
   "prompt": "A model predicts 2.207 N per motor to hover. You measure 2.35 N with an uncertainty of 0.05 N. Give (a) the percent error and (b) 1 if the prediction lies within the measurement's uncertainty range, otherwise 0. Separate with a comma.",
   "type": "num",
   "ans": [
    6.48,
    0
   ],
   "model": "|2.35 - 2.207| / 2.207 = 6.48%. The measured range is 2.30 to 2.40 N, so 2.207 is outside it: 0.",
   "topics": [
    "T17",
    "T16"
   ],
   "conn": true
  },
  {
   "id": "t_32",
   "group": "Chapter Test",
   "label": "Question 32",
   "prompt": "A parts list is [{\"mass_g\": 52, \"count\": 4}, {\"mass_g\": 38, \"count\": 1}, {\"mass_g\": 150, \"count\": 1}]. Give (a) the total mass in grams and (b) the weight in newtons. Separate with a comma.",
   "type": "num",
   "ans": [
    396,
    3.88
   ],
   "model": "(a) 208 + 38 + 150 = 396 g. (b) 0.396 x 9.81 = 3.88 N.",
   "topics": [
    "T19",
    "T20",
    "T1",
    "T10"
   ],
   "conn": true
  },
  {
   "id": "t_33",
   "group": "Chapter Test",
   "label": "Question 33",
   "prompt": "A function returns mass_kg * v_ms ** 2 / 2. What unit is the result?",
   "type": "mc",
   "options": [
    "watts",
    "joules",
    "newtons",
    "meters per second"
   ],
   "correct": 1,
   "explain": "kg x (m/s)^2 = kg m^2/s^2 = J.",
   "topics": [
    "T14",
    "T18",
    "T11"
   ],
   "conn": true
  },
  {
   "id": "t_34",
   "group": "Chapter Test",
   "label": "Question 34",
   "prompt": "The mass is 0.50 kg (2 significant figures) and g = 9.81. The thrust per motor on 4 motors is 1.22625 N. How should you report it?",
   "type": "mc",
   "options": [
    "1.2 N",
    "1.23 N",
    "1 N",
    "1.226 N"
   ],
   "correct": 0,
   "explain": "The input with the fewest significant figures has 2.",
   "topics": [
    "T15",
    "T1",
    "T2"
   ],
   "conn": true
  },
  {
   "id": "t_35",
   "group": "Chapter Test",
   "label": "Question 35",
   "prompt": "In Python, math.cos(60) prints about -0.952, not 0.5. Why?",
   "type": "mc",
   "options": [
    "cos expects radians, so 60 was treated as 60 radians",
    "60 is out of range for cos",
    "cos only works on whole numbers",
    "Python rounds cos wrongly"
   ],
   "correct": 0,
   "explain": "Use math.cos(math.radians(60)).",
   "topics": [
    "T5",
    "T18"
   ],
   "conn": true
  },
  {
   "id": "t_36",
   "group": "Chapter Test",
   "label": "Question 36",
   "prompt": "The ESC is rated for 6S to 8S and the Pi needs about 5 V. Why do you need a voltage regulator in this design?",
   "type": "mc",
   "options": [
    "The ESC cannot be connected to a battery",
    "The regulator makes the motors faster",
    "The Pi cannot run on batteries",
    "The same battery feeds both, but they need very different voltages"
   ],
   "correct": 3,
   "explain": "High-voltage power goes to the ESC, and a regulator lowers it for the computers.",
   "topics": [
    "T4",
    "T6",
    "T7"
   ],
   "conn": true
  },
  {
   "id": "t_37",
   "group": "Chapter Test",
   "label": "Question 37",
   "prompt": "Explain, naming every part, what happens from the moment you push a stick to the moment a motor changes speed. Which link would you protect with a failsafe, and why?",
   "type": "reflect",
   "rubric": [
    [
     "names the control link or radio",
     [
      "radio",
      "control link",
      "receiver"
     ]
    ],
    [
     "names the flight controller and the ESC",
     [
      "flight controller"
     ]
    ],
    [
     "names the motor and the ESC",
     [
      "esc",
      "speed controller"
     ]
    ],
    [
     "explains the failsafe: losing the control link must trigger a safe action",
     [
      "fail",
      "lose",
      "loss",
      "signal",
      "safe",
      "land",
      "link"
     ]
    ]
   ],
   "model": "The controller sends commands over the control link to the flight controller, which tells the ESC, which changes the power to the motor. Protect the control link, since losing it must trigger a safe response such as landing.",
   "topics": [
    "T4",
    "T7",
    "T8",
    "T3"
   ],
   "conn": true
  },
  {
   "id": "t_38",
   "group": "Chapter Test",
   "label": "Question 38",
   "prompt": "You measure thrust on a stand, and your simulation disagrees by 8%. Give three possible sources of the difference, connecting ideas about measurement quality, units, and model simplifications.",
   "type": "reflect",
   "rubric": [
    [
     "mentions measurement uncertainty, calibration, precision or accuracy",
     [
      "uncertain",
      "calibrat",
      "accura",
      "precis",
      "scale",
      "noise"
     ]
    ],
    [
     "mentions a units or conversion mix-up such as grams-force and newtons",
     [
      "unit",
      "conver",
      "gram",
      "newton",
      "gf"
     ]
    ],
    [
     "mentions a model simplification such as air, battery sag, or propeller details",
     [
      "air",
      "drag",
      "sag",
      "simplif",
      "assum",
      "propeller",
      "voltage"
     ]
    ]
   ],
   "model": "The thrust stand could be uncertain or miscalibrated, a units mix-up such as grams-force against newtons could be hiding in the calculation, or the model may leave out real effects such as battery voltage sag and airflow around the propeller.",
   "topics": [
    "T16",
    "T17",
    "T10",
    "T1"
   ],
   "conn": true
  },
  {
   "id": "t_39",
   "group": "Chapter Test",
   "label": "Question 39",
   "prompt": "Design a Python data structure and two functions that compute the total mass and the thrust-to-weight ratio of any parts list. Name the good habits you follow.",
   "type": "reflect",
   "rubric": [
    [
     "uses a list of dictionaries or a class",
     [
      "list",
      "dictionar",
      "dict",
      "class"
     ]
    ],
    [
     "describes functions that loop and total",
     [
      "loop",
      "sum",
      "function",
      "total",
      "for "
     ]
    ],
    [
     "names a habit: units in names, a named constant, a docstring, or an assert",
     [
      "unit",
      "_g",
      "constant",
      "assert",
      "test",
      "docstring",
      "name"
     ]
    ]
   ],
   "model": "A list of dictionaries with name, mass_g, and count. total_mass_g loops and adds mass_g times count. thrust_to_weight divides total thrust by weight using G. Names carry units, G is a constant, each function has a docstring, and asserts test hand-worked cases.",
   "topics": [
    "T19",
    "T20",
    "T21",
    "T24",
    "T2"
   ],
   "conn": true
  },
  {
   "id": "t_40",
   "group": "Chapter Test",
   "label": "Question 40",
   "prompt": "A teammate says: \"The Pi 5 is far faster than a Pico, so use it as the flight controller.\" Respond using ideas from this chapter.",
   "type": "reflect",
   "rubric": [
    [
     "says speed is not the issue; strict, predictable timing is",
     [
      "timing",
      "real-time",
      "real time",
      "strict",
      "predictable",
      "operating system",
      "pause",
      "schedule"
     ]
    ],
    [
     "mentions safety or what happens if the Pi stops",
     [
      "crash",
      "fail",
      "safety",
      "stops",
      "safe",
      "pilot",
      "control link"
     ]
    ],
    [
     "gives the Pi a better role: camera, telemetry, logging, heavy jobs",
     [
      "telemetry",
      "camera",
      "heavy",
      "companion",
      "vision",
      "logging"
     ]
    ]
   ],
   "model": "The Pi is much faster but runs an operating system that can pause, so it cannot guarantee strict timing. If it stopped, the drone would be uncontrolled. It is better used as a companion computer for the camera, telemetry, and logging.",
   "topics": [
    "T8",
    "T4",
    "T2"
   ],
   "conn": true
  },
  {
   "id": "a1",
   "group": "Assignment 1: Tier 1",
   "label": "Assignment 1, problem 1",
   "prompt": "Convert 72 km/h to m/s.",
   "type": "num",
   "ans": [
    20
   ]
  },
  {
   "id": "a2",
   "group": "Assignment 1: Tier 1",
   "label": "Assignment 1, problem 2",
   "prompt": "A motor test lists 980 g of thrust. How many newtons is that?",
   "type": "num",
   "ans": [
    9.614
   ]
  },
  {
   "id": "a3",
   "group": "Assignment 1: Tier 1",
   "label": "Assignment 1, problem 3",
   "prompt": "A 6S battery is rated 2200 mAh. How many coulombs is that?",
   "type": "num",
   "ans": [
    7920
   ]
  },
  {
   "id": "a4",
   "group": "Assignment 1: Tier 1",
   "label": "Assignment 1, problem 4",
   "prompt": "A propeller has a diameter of 6 inches. What is its radius in meters?",
   "type": "num",
   "ans": [
    0.0762
   ]
  },
  {
   "id": "a5",
   "group": "Assignment 1: Tier 1",
   "label": "Assignment 1, problem 5",
   "prompt": "Write 0.000032 and 7,500,000 in scientific notation.",
   "type": "reflect",
   "rubric": [
    [
     "3.2 x 10^-5",
     [
      "/3\\.2/",
      "/-5/"
     ]
    ],
    [
     "7.5 x 10^6",
     [
      "/7\\.5/",
      "/(10\\^?6|10\u2076|e6)/"
     ]
    ]
   ],
   "model": "0.000032 = 3.2 x 10^-5 and 7,500,000 = 7.5 x 10^6."
  },
  {
   "id": "c_kmh_to_ms",
   "group": "Assignment 1: Tier 2 (Python)",
   "label": "kmh_to_ms",
   "prompt": "Speed in m/s from km/h",
   "type": "code",
   "fn": "kmh_to_ms",
   "cases": [
    [
     [
      90
     ],
     25
    ],
    [
     [
      36
     ],
     10
    ],
    [
     [
      0
     ],
     0
    ]
   ],
   "starter": "def kmh_to_ms(v_kmh):\n    # your code here\n    pass\n"
  },
  {
   "id": "c_grams_force_to_newtons",
   "group": "Assignment 1: Tier 2 (Python)",
   "label": "grams_force_to_newtons",
   "prompt": "Grams-force to newtons, g = 9.81",
   "type": "code",
   "fn": "grams_force_to_newtons",
   "cases": [
    [
     [
      1200
     ],
     11.772
    ],
    [
     [
      1000
     ],
     9.81
    ]
   ],
   "starter": "def grams_force_to_newtons(g_force):\n    # your code here\n    pass\n"
  },
  {
   "id": "c_mah_to_coulombs",
   "group": "Assignment 1: Tier 2 (Python)",
   "label": "mah_to_coulombs",
   "prompt": "Milliamp-hours to coulombs",
   "type": "code",
   "fn": "mah_to_coulombs",
   "cases": [
    [
     [
      1500
     ],
     5400
    ],
    [
     [
      1000
     ],
     3600
    ]
   ],
   "starter": "def mah_to_coulombs(mah):\n    # your code here\n    pass\n"
  },
  {
   "id": "c_battery_energy_wh",
   "group": "Assignment 1: Tier 2 (Python)",
   "label": "battery_energy_wh",
   "prompt": "Energy in Wh, 3.7 V per cell",
   "type": "code",
   "fn": "battery_energy_wh",
   "cases": [
    [
     [
      1500,
      6
     ],
     33.3
    ],
    [
     [
      1300,
      4
     ],
     19.24
    ]
   ],
   "starter": "def battery_energy_wh(mah, cells):\n    # your code here\n    pass\n"
  },
  {
   "id": "c_unloaded_rpm",
   "group": "Assignment 1: Tier 2 (Python)",
   "label": "unloaded_rpm",
   "prompt": "Unloaded rpm at 3.7 V per cell",
   "type": "code",
   "fn": "unloaded_rpm",
   "cases": [
    [
     [
      900,
      6
     ],
     19980
    ],
    [
     [
      900,
      4
     ],
     13320
    ]
   ],
   "starter": "def unloaded_rpm(kv, cells):\n    # your code here\n    pass\n"
  },
  {
   "id": "c_hover_thrust_per_motor_n",
   "group": "Assignment 1: Tier 2 (Python)",
   "label": "hover_thrust_per_motor_n",
   "prompt": "Hover thrust per motor in newtons, g = 9.81",
   "type": "code",
   "fn": "hover_thrust_per_motor_n",
   "cases": [
    [
     [
      0.9
     ],
     2.20725
    ],
    [
     [
      1.5,
      6
     ],
     2.4525
    ]
   ],
   "starter": "def hover_thrust_per_motor_n(mass_kg, motors=4):\n    # your code here\n    pass\n"
  },
  {
   "id": "c_round_sig",
   "group": "Assignment 1: Tier 2 (Python)",
   "label": "round_sig",
   "prompt": "Round x to n significant figures; return 0 for 0, keep the sign",
   "type": "code",
   "fn": "round_sig",
   "cases": [
    [
     [
      2.2366800000000002,
      3
     ],
     2.24
    ],
    [
     [
      0.00123456,
      2
     ],
     0.0012
    ],
    [
     [
      12345,
      2
     ],
     12000
    ],
    [
     [
      -2.2366800000000002,
      3
     ],
     -2.24
    ],
    [
     [
      0,
      3
     ],
     0
    ]
   ],
   "starter": "def round_sig(x, n):\n    # your code here\n    pass\n"
  },
  {
   "id": "c_tip_speed_ms",
   "group": "Assignment 1: Tier 3 (Python)",
   "label": "tip_speed_ms",
   "prompt": "Propeller tip speed in m/s (1 in = 0.0254 m)",
   "type": "code",
   "fn": "tip_speed_ms",
   "cases": [
    [
     [
      19980,
      7
     ],
     186.0055328781523
    ],
    [
     [
      0,
      7
     ],
     0
    ]
   ],
   "starter": "def tip_speed_ms(rpm, prop_diameter_in):\n    # your code here\n    pass\n"
  },
  {
   "id": "c_percent_error",
   "group": "Assignment 1: Tier 3 (Python)",
   "label": "percent_error",
   "prompt": "|measured - predicted| / |predicted| * 100",
   "type": "code",
   "fn": "percent_error",
   "cases": [
    [
     [
      2.4,
      2.2
     ],
     9.09090909090908
    ],
    [
     [
      2.0,
      2.0
     ],
     0
    ],
    [
     [
      1.8,
      2.0
     ],
     10
    ]
   ],
   "starter": "def percent_error(measured, predicted):\n    # your code here\n    pass\n"
  },
  {
   "id": "c_total_mass_g",
   "group": "Assignment 1: Tier 3 (Python)",
   "label": "total_mass_g",
   "prompt": "Total grams of a list of {\"name\",\"mass_g\",\"count\"} dicts",
   "type": "code",
   "fn": "total_mass_g",
   "cases": [
    [
     [
      [
       {
        "name": "motor",
        "mass_g": 52,
        "count": 4
       },
       {
        "name": "esc",
        "mass_g": 38,
        "count": 1
       }
      ]
     ],
     246
    ],
    [
     [
      []
     ],
     0
    ]
   ],
   "starter": "def total_mass_g(parts):\n    # your code here\n    pass\n"
  },
  {
   "id": "c_mass_by_name",
   "group": "Assignment 1: Tier 3 (Python)",
   "label": "mass_by_name",
   "prompt": "Dict of name -> mass_g * count",
   "type": "code",
   "fn": "mass_by_name",
   "cases": [
    [
     [
      [
       {
        "name": "motor",
        "mass_g": 52,
        "count": 4
       },
       {
        "name": "esc",
        "mass_g": 38,
        "count": 1
       }
      ]
     ],
     {
      "motor": 208,
      "esc": 38
     }
    ],
    [
     [
      []
     ],
     {}
    ]
   ],
   "starter": "def mass_by_name(parts):\n    # your code here\n    pass\n"
  },
  {
   "id": "a16",
   "group": "Assignment 1: Tier 3 (paper)",
   "label": "Assignment 1, problem 16",
   "prompt": "Bug hunt: find the bug in each of the three snippets in the book (avg_thrust, kmh_to_ms, part_mass_g lookup), say what each does instead of what was intended, and write the fix.",
   "type": "reflect",
   "rubric": [
    [
     "first bug: = instead of +=",
     [
      "+=",
      "accumulate",
      "sum",
      "add"
     ]
    ],
    [
     "second bug: 3600 and 1000 swapped",
     [
      "3600",
      "1000",
      "swap",
      "invers",
      "reverse"
     ]
    ],
    [
     "third bug: missing key / KeyError, use .get",
     [
      "keyerror",
      "missing",
      ".get",
      "not in"
     ]
    ]
   ],
   "model": "1) total = v should be total += v. 2) kmh to m/s must be v * 1000 / 3600. 3) \"gps\" is not a key, so it raises KeyError; use .get(\"gps\", 0)."
  },
  {
   "id": "a17",
   "group": "Assignment 1: Tier 3 (paper)",
   "label": "Assignment 1, problem 17",
   "prompt": "Trace by hand: what does the data/lookup program in the book print? Write your prediction, then run it.",
   "type": "reflect",
   "rubric": [
    [
     "final list [3, 5, 8, 11]",
     [
      "/\\[3, ?5, ?8, ?11\\]/"
     ]
    ],
    [
     "lookup has c = 4",
     [
      "/c.{1,4}4/"
     ]
    ]
   ],
   "model": "[3, 5, 8, 11] {'a': 3, 'b': 8, 'c': 4}"
  },
  {
   "id": "a18",
   "group": "Assignment 1: Tier 3 (paper)",
   "label": "Assignment 1, problem 18",
   "prompt": "Dimensional analysis: show that angular speed (rad/s) times radius (m) has units m/s. What happens to the unit radian and why is that allowed?",
   "type": "reflect",
   "rubric": [
    [
     "ends with m/s",
     [
      "m/s"
     ]
    ],
    [
     "explains the radian is a ratio of lengths / has no unit",
     [
      "ratio",
      "dimensionless",
      "no unit",
      "cancel",
      "length divided"
     ]
    ]
   ],
   "model": "rad/s x m = m/s. A radian is arc length divided by radius, a ratio of lengths, so it has no true unit and drops out."
  }
 ],
 "projectTasks": [
  "Install Python and VS Code, and run your first program.",
  "Read the EM3115 datasheet: max thrust, recommended battery cell count, motor mass.",
  "Read the ESC datasheet: max current and supported battery voltages.",
  "Find the ICM-42688-P datasheet: how it connects to a computer and how fast it updates.",
  "Weigh every part you own and record the masses in a Python list of dictionaries.",
  "Write down two or three battery candidates (cell count and mAh) and compute each one's energy in Wh."
 ]
};
