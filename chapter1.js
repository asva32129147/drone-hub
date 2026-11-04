export const chapter = {
 "title": "Chapter 1: Your Drone, Your Tools, and the Language of Measurement",
 "items": [
  {
   "id": "cp0",
   "group": "Checkpoints",
   "label": "Checkpoint 1.1",
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
   "label": "Checkpoint 1.2",
   "prompt": "Explain in two sentences why speeding up only Pair A makes the drone spin, but speeding up all four equally does not.",
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
   "label": "Checkpoint 1.3",
   "prompt": "Trace what happens when you push your stick forward: which parts does the command pass through before the motors change speed?",
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
   "label": "Checkpoint E1",
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
   "id": "cp4",
   "group": "Checkpoints",
   "label": "Checkpoint E2",
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
   "id": "cp5",
   "group": "Checkpoints",
   "label": "Checkpoint 1.3",
   "prompt": "For a 4S battery (nominal 3.7 V per cell), what is the unloaded speed of a 900KV motor in rpm? Show the multiplication.",
   "type": "num",
   "ans": [
    13320
   ]
  },
  {
   "id": "cp6",
   "group": "Checkpoints",
   "label": "Checkpoint 1.4",
   "prompt": "Which parts in the table would you want to confirm on a datasheet before buying? Pick two and say what number you would look for on each.",
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
   "id": "cp7",
   "group": "Checkpoints",
   "label": "Checkpoint 1.5",
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
   "id": "cp8",
   "group": "Checkpoints",
   "label": "Checkpoint 1.6",
   "prompt": "Why can't GPS alone stabilize a drone's tilt? Give two reasons from this section.",
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
   "id": "cp9",
   "group": "Checkpoints",
   "label": "Checkpoint 1.7",
   "prompt": "Convert 12 cm to meters, then 36 km/h to m/s with the fractions shown.",
   "type": "num",
   "ans": [
    0.12,
    10
   ]
  },
  {
   "id": "cp10",
   "group": "Checkpoints",
   "label": "Checkpoint 1.8",
   "prompt": "A 4S 1300 mAh battery at a nominal 14.8 V stores how many watt-hours and how many joules?",
   "type": "num",
   "ans": [
    19.24,
    69264
   ]
  },
  {
   "id": "cp11",
   "group": "Checkpoints",
   "label": "Checkpoint 1.9",
   "prompt": "A motor test listing reports 1850 g of thrust. Express it in newtons.",
   "type": "num",
   "ans": [
    18.15
   ]
  },
  {
   "id": "cp12",
   "group": "Checkpoints",
   "label": "Checkpoint S1",
   "prompt": "How many significant figures does each number have: 0.00560, 3400,",
   "type": "reflect"
  },
  {
   "id": "cp13",
   "group": "Checkpoints",
   "label": "Checkpoint S2",
   "prompt": "A plate measures 3.2 m by 1.25 m. Give its area with the correct number of significant figures.",
   "type": "num",
   "ans": [
    4.0
   ]
  },
  {
   "id": "cp14",
   "group": "Checkpoints",
   "label": "Checkpoint S3",
   "prompt": "Add 12.5 g + 0.75 g + 103 g and report the result with the correct number of decimal places.",
   "type": "num",
   "ans": [
    116
   ]
  },
  {
   "id": "cp15",
   "group": "Checkpoints",
   "label": "Checkpoint S4",
   "prompt": "A thrust stand reads 1850 g \u00b110 g. Give the thrust in newtons with its uncertainty, using Worked Example 11 as your model.",
   "type": "num",
   "ans": [
    18.1,
    0.1
   ]
  },
  {
   "id": "cp16",
   "group": "Checkpoints",
   "label": "Checkpoint S5",
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
   "id": "cp17",
   "group": "Checkpoints",
   "label": "Checkpoint 1.10",
   "prompt": "Write 0.0075 and 48,000 in scientific notation, then multiply them.",
   "type": "num",
   "ans": [
    360
   ]
  },
  {
   "id": "cp18",
   "group": "Checkpoints",
   "label": "Checkpoint 1.11",
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
   "id": "cp19",
   "group": "Checkpoints",
   "label": "Checkpoint 1.12",
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
   "id": "cp20",
   "group": "Checkpoints",
   "label": "Checkpoint 1.13",
   "prompt": "You predicted a hover thrust of 2.2 N per motor and measured 2.4 N. What is the percent error?",
   "type": "num",
   "ans": [
    9.09
   ]
  },
  {
   "id": "cp21",
   "group": "Checkpoints",
   "label": "Checkpoint 1.14",
   "prompt": "What does thrust_g[1:3] give when thrust_g = [10, 20, 30, 40] ? Then what does thrust_g[-2] give?",
   "type": "num",
   "ans": [
    20,
    30,
    30
   ],
   "model": "[20, 30] and 30"
  },
  {
   "id": "cp22",
   "group": "Checkpoints",
   "label": "Checkpoint 1.15",
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
   "id": "cp23",
   "group": "Checkpoints",
   "label": "Checkpoint 1.16",
   "prompt": "In the Drone class, what is self when you run big.hover_thrust_per_motor_n() ?",
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
   "id": "cp24",
   "group": "Checkpoints",
   "label": "Checkpoint R1",
   "prompt": "Convert 60 degrees to radians (decimal).",
   "type": "num",
   "ans": [
    1.047
   ]
  },
  {
   "id": "cp25",
   "group": "Checkpoints",
   "label": "Checkpoint R2",
   "prompt": "Convert 2 radians to degrees.",
   "type": "num",
   "ans": [
    114.6
   ]
  },
  {
   "id": "cp26",
   "group": "Checkpoints",
   "label": "Checkpoint R3",
   "prompt": "A propeller of radius 0.0889 m turns through 0.5 rad. How far does its tip travel along the circle, in meters?",
   "type": "num",
   "ans": [
    0.04445
   ]
  },
  {
   "id": "cp27",
   "group": "Checkpoints",
   "label": "Checkpoint R4",
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
