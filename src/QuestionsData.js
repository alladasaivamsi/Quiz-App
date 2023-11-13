import bike from "../src/Images/Vehicle-Images/bike.jpg";
import bus from "../src/Images/Vehicle-Images/bus.jpeg";
import car from "../src/Images/Vehicle-Images/car.jpeg";
import cycle from "../src/Images/Vehicle-Images/cycle.jpg";
import HTML from "../src/Images/Logos/HTML.png";
import CSS from "../src/Images/Logos/CSS.png";
import JavaScript from "../src/Images/Logos/JavaScript.png";
import React from "../src/Images/Logos/React.png";
import Dog from "../src/Images/Animals/Dog.jpg";
import Cat from "../src/Images/Animals/Cat.jpg";
import Tiger from "../src/Images/Animals/Tiger.jpg";
import Lion from "../src/Images/Animals/Lion.jpg";
import A from "../src/Images/Letters/A.png";
import B from "../src/Images/Letters/B.png";
import C from "../src/Images/Letters/C.png";
import D from "../src/Images/Letters/D.png";
import CPU from "../src/Images/Electronics/CPU.jpg";
import Laptop from "../src/Images/Electronics/Laptop.jpg";
import Monitor from "../src/Images/Electronics/Monitor.jpg";
import Phone from "../src/Images/Electronics/Phone.jpg";

export const QuestionsData = [
  {
    id: 1,
    question: "234 + 349 = ?",
    options: ["578", "573", "563", "583"],
    answer: 4,
    type: "Multiple Choice Questions",
  },
  {
    id: 2,
    question: <span>&#8731;103823</span>,
    options: ["43", "41", "53", "47"],
    answer: 4,
    type: "Multiple Choice Questions",
  },
  {
    id: 3,
    question: (
      <span>
        1<sup>1</sup>&frasl;<sub>2</sub> + 9 = ?
      </span>
    ),
    options: [
      <span>
        10<sup>1</sup>&frasl;<sub>2</sub>
      </span>,
      <span>
        12<sup>1</sup>&frasl;<sub>2</sub>
      </span>,
      <span>
        14<sup>1</sup>&frasl;<sub>2</sub>
      </span>,
      <span>
        15<sup>1</sup>&frasl;<sub>2</sub>
      </span>,
    ],
    answer: 1,
    type: "Multiple Choice Questions",
  },
  {
    id: 4,
    question: <span>&#x221A;1296</span>,
    options: ["32", "34", "36", "38"],
    answer: 3,
    type: "Multiple Choice Questions",
  },
  {
    id: 5,
    question: <span>Solve the quadratic equation 2x&#178; + x – 528 = 0</span>,
    options: [
      "x = 16 or x = -33/2",
      "x = 18 or x = -31/2",
      "x = 20 or x = -31/2",
      "x = 16 or x = -35/2",
    ],
    answer: 1,
    type: "Multiple Choice Questions",
  },
  {
    id: 6,
    question: "I ____ (play / love / hate) soccer.",
    options: ["play", "love", "hate"],
    answer: "play",
    type: "Fill In The Blanks",
  },
  {
    id: 7,
    question:
      "Children enjoy _____ (to look at / watching / to see / to watch) the TV programs.",
    options: ["to look at", "watching", "to see", "to watch"],
    answer: "watching",
    type: "Fill In The Blanks",
  },
  {
    id: 8,
    question:
      "Today student should be reconciled _____ (for / at / with / to) the way things are changing.",
    options: ["for", "at", "with", "to"],
    answer: "to",
    type: "Fill In The Blanks",
  },
  {
    id: 9,
    question:
      " In a classroom student are to be trained to love _____ (one another / altogether / each other / all others)",
    options: ["one another", "altogether", "each other", "all others"],
    answer: "one another",
    type: "Fill In The Blanks",
  },
  {
    id: 10,
    question:
      "You have all come well prepared. I ____ (hope / expect / wish / except) you to pass this exam. ",
    options: ["hope", "expect", "wish", "except"],
    answer: "expect",
    type: "Fill In The Blanks",
  },
  {
    id: 11,
    question: "HCF of 26 and 91 is :",
    answer: "13",
    type: "Free Choice / Free Answer",
  },
  {
    id: 12,
    question: "____ x ( -12 ) = 144",
    answer: "-12",
    type: "Free Choice / Free Answer",
  },
  {
    id: 13,
    question: "20 / ____ = ( -10 )",
    answer: "-2",
    type: "Free Choice / Free Answer",
  },
  {
    id: 14,
    question: "____  X  4 = ( -84 )",
    answer: "-21",
    type: "Free Choice / Free Answer",
  },
  {
    id: 15,
    question: "If k + 7 = 16 , then the value of 8k - 72 is ",
    answer: "0",
    type: "Free Choice / Free Answer",
  },
  {
    id: 16,
    question: "(4 – 5) – (13 – 18 + 2) = 2",
    options: ["correct", "InCorrect"],
    answer: 1,
    type: "Choose Right Option",
  },
  {
    id: 17,
    question: <span>(x – 4)(x + 5) = x&#178; + x - 20</span>,
    options: ["correct", "InCorrect"],
    answer: 1,
    type: "Choose Right Option",
  },
  {
    id: 18,
    question: <span>(4&#178; - 2x) - (-5&#178; - 8x) = 3x(3x - 2)</span>,
    options: ["correct", "InCorrect"],
    answer: 2,
    type: "Choose Right Option",
  },
  {
    id: 19,
    question: "130 + 125 + 191 = 436",
    options: ["correct", "InCorrect"],
    answer: 2,
    type: "Choose Right Option",
  },
  {
    id: 20,
    question: "50 x 8 = 400",
    options: ["correct", "InCorrect"],
    answer: 1,
    type: "Choose Right Option",
  },
  {
    id: 21,
    question: "Sort the Options Data",
    options: ["B", "C", "A", "E", "D"],
    answer: ["A", "B", "C", "D", "E"],
    type: "Option Sorting",
  },
  {
    id: 22,
    question: "Sort the Options Data in Ascending Order",
    options: ["3", "5", "2", "4", "1"],
    answer: ["1", "2", "3", "4", "5"],
    type: "Option Sorting",
  },
  {
    id: 23,
    question: "Sort the Options Data in Descending Order",
    options: ["2", "5", "1", "3", "4"],
    answer: ["5", "4", "3", "2", "1"],
    type: "Option Sorting",
  },
  {
    id: 24,
    question: "Sort the Even Numbers in Ascending Order",
    options: ["4", "8", "2", "10", "6"],
    answer: ["2", "4", "6", "8", "10"],
    type: "Option Sorting",
  },
  {
    id: 25,
    question: "Sort the Odd Numbers in Ascending Order",
    options: ["5", "9", "1", "7", "3"],
    answer: ["1", "3", "5", "7", "9"],
    type: "Option Sorting",
  },
  {
    id: 26,
    question: "Match the Vehicles",
    images: [car, cycle, bus, bike],
    options: ["bus", "bike", "cycle", "car"],
    answer: ["car", "cycle", "bus", "bike"],
    type: "Table Matching",
  },
  {
    id: 27,
    question: "Match the Symbols",
    images: [HTML, CSS, JavaScript, React],
    options: ["JavaScript", "React", "CSS", "HTML"],
    answer: ["HTML", "CSS", "JavaScript", "React"],
    type: "Table Matching",
  },
  {
    id: 28,
    question: "Match the Animals",
    images: [Dog, Cat, Lion, Tiger],
    options: ["Lion", "Tiger", "Cat", "Dog"],
    answer: ["Dog", "Cat", "Lion", "Tiger"],
    type: "Table Matching",
  },
  {
    id: 29,
    question: "Match the Letters",
    images: [A, B, C, D],
    options: ["C", "A", "D", "B"],
    answer: ["A", "B", "C", "D"],
    type: "Table Matching",
  },
  {
    id: 30,
    question: "Match the Electronics",
    images: [CPU, Laptop, Monitor, Phone],
    options: ["Monitor", "Phone", "CPU", "Laptop"],
    answer: ["CPU", "Laptop", "Monitor", "Phone"],
    type: "Table Matching",
  },
  {
    id: 31,
    question: "Complete The Pattern",
    options: ["10", "20", "30", "", "50"],
    answer: "40",
    type: "Complete The Pattern",
  },
  {
    id: 32,
    question: "Complete The Pattern",
    options: ["345", "346", "347", "", "349"],
    answer: "348",
    type: "Complete The Pattern",
  },
  {
    id: 33,
    question: "Complete The Pattern",
    options: ["2", "", "6", "8", "10"],
    answer: "4",
    type: "Complete The Pattern",
  },
  {
    id: 34,
    question: "Complete The Pattern",
    options: ["1", "3", "", "7", "9"],
    answer: "5",
    type: "Complete The Pattern",
  },
  {
    id: 35,
    question: "Complete The Pattern",
    options: ["5", "10", "15", "20", ""],
    answer: "25",
    type: "Complete The Pattern",
  },
];
