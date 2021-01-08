const ARN = {
  position: [59.64983930045443, 17.92377393645848],
};
const ATL = {
  position: [33.640714782639975, -84.42773228879234],
};
const BCN = {
  position: [41.29743691876674, 2.0831224365606666],
};
const BOG = {
  position: [4.7008327908994305, -74.14597918553338],
};
const CAN = {
  position: [23.39598665868608, 113.30795916864923],
};
const CLT = {
  position: [35.21427986379264, -80.94719658504825],
};
const CMN = {
  position: [33.36997934083649, -7.585776746471137],
};
const CNX = {
  position: [18.767738828876166, 98.9640087974066],
};
const CPH = {
  position: [55.61802358051753, 12.650870086796933],
};
const CUZ = {
  position: [-13.538369729051412, -71.94328091985649],
};
const DMK = {
  position: [13.91341640110565, 100.60408068014777],
};
const DPS = {
  position: [-8.746908066782288, 115.16675481078677],
};
const DXB = {
  position: [25.253135669875157, 55.36562988217766],
};
const EWR = {
  position: [40.68952324415682, -74.17452677509945],
};
const FCO = {
  position: [41.799974758309375, 12.246367143980644],
};
const FLR = {
  position: [43.8086456365904, 11.201235426850486],
};
const FNC = {
  position: [32.69570799239018, -16.775938075324323],
};
const FRA = {
  position: [50.03800148857139, 8.5622161712441],
};
const HAN = {
  position: [21.218654876996336, 105.8041601686102],
};
const HAV = {
  position: [22.998155482468658, -82.40761061507573],
};
const HEL = {
  position: [60.32100970837004, 24.952549262385855],
};
const HKT = {
  position: [8.111275659762681, 98.30650751263352],
};
const JFK = {
  position: [40.64125409188863, -73.77813910208569],
};
const KIX = {
  position: [34.43203777697809, 135.23040462657198],
};
const KUL = {
  position: [2.7347684312416196, 101.7050241665792],
};
const LAX = {
  position: [33.94156217847295, -118.4085621887845],
};
const LGA = {
  position: [40.773566302441196, -73.87257107481794],
};
const LIM = {
  position: [-12.024046688640858, -77.11202831697234],
};
const LIS = {
  position: [38.77557685108355, -9.135345244470109],
};
const MDE = {
  position: [6.1713319802469595, -75.428693000198],
};
const MEX = {
  position: [19.43590419039313, -99.07194048909071],
};
const MSY = {
  position: [29.99097897449772, -90.25922990237541],
};
const MUC = {
  position: [48.35367579032662, 11.775132455840561],
};
const MYR = {
  position: [33.68101469826784, -78.92848491668701],
};
const OSL = {
  position: [60.19755008197109, 11.100383012113422],
};
const PRG = {
  position: [50.10177033417286, 14.26324547124641],
};
const PTY = {
  position: [9.066899924906012, -79.38713656333141],
};
const RAK = {
  position: [31.601670458844588, -8.024454658816497],
};
const SCL = {
  position: [-33.389744048787875, -70.79433074276848],
};
const SPU = {
  position: [43.53660326907235, 16.2990572845134],
};
const TOS = {
  position: [69.68191303404768, 18.916317343204557],
};
const TSL = {
  position: [43.62932415328791, 1.3677141845163419],
};

const myFlights = [
  {
    id: 1,
    origin: MYR,
    destination: LGA,
  },
  {
    id: 2,
    origin: JFK,
    destination: HEL,
  },
  {
    id: 3,
    origin: HEL,
    destination: ARN,
  },
  {
    id: 4,
    origin: CPH,
    destination: OSL,
  },
  {
    id: 5,
    origin: OSL,
    destination: TOS,
  },
  {
    id: 6,
    origin: TOS,
    destination: OSL,
  },
  {
    id: 7,
    origin: OSL,
    destination: ARN,
  },
  {
    id: 8,
    origin: ARN,
    destination: HEL,
  },
  {
    id: 9,
    origin: HEL,
    destination: JFK,
  },
  {
    id: 10,
    origin: LGA,
    destination: MYR,
  },
  {
    id: 11,
    origin: MYR,
    destination: ATL,
  },
  {
    id: 12,
    origin: ATL,
    destination: JFK,
  },
  {
    id: 13,
    origin: JFK,
    destination: LIS,
  },
  {
    id: 14,
    origin: LIS,
    destination: FNC,
  },
  {
    id: 15,
    origin: FNC,
    destination: LIS,
  },
  {
    id: 16,
    origin: LIS,
    destination: FCO,
  },
  {
    id: 17,
    origin: FCO,
    destination: SPU,
  },
  {
    id: 18,
    origin: SPU,
    destination: MUC,
  },
  {
    id: 19,
    origin: MUC,
    destination: JFK,
  },
  {
    id: 20,
    origin: EWR,
    destination: FRA,
  },
  {
    id: 21,
    origin: FRA,
    destination: SPU,
  },
  {
    id: 22,
    origin: SPU,
    destination: FRA,
  },
  {
    id: 23,
    origin: FRA,
    destination: PRG,
  },
  {
    id: 24,
    origin: PRG,
    destination: TSL,
  },
  {
    id: 25,
    origin: TSL,
    destination: BCN,
  },
  {
    id: 26,
    origin: BCN,
    destination: FLR,
  },
  {
    id: 27,
    origin: FCO,
    destination: LIS,
  },
  {
    id: 28,
    origin: LIS,
    destination: RAK,
  },
  {
    id: 29,
    origin: CMN,
    destination: DXB,
  },
  {
    id: 30,
    origin: DXB,
    destination: HAN,
  },
  {
    id: 31,
    origin: HAN,
    destination: DMK,
  },
  {
    id: 32,
    origin: DMK,
    destination: HKT,
  },
  {
    id: 33,
    origin: HKT,
    destination: CNX,
  },
  {
    id: 34,
    origin: CNX,
    destination: DMK,
  },
  {
    id: 35,
    origin: DMK,
    destination: KIX,
  },
  {
    id: 36,
    origin: KIX,
    destination: KUL,
  },
  {
    id: 37,
    origin: KUL,
    destination: DPS,
  },
  {
    id: 38,
    origin: DPS,
    destination: KUL,
  },
  {
    id: 39,
    origin: KUL,
    destination: CAN,
  },
  {
    id: 40,
    origin: CAN,
    destination: JFK,
  },
  {
    id: 41,
    origin: JFK,
    destination: LAX,
  },
  {
    id: 42,
    origin: LAX,
    destination: CLT,
  },
  {
    id: 43,
    origin: CLT,
    destination: LAX,
  },
  {
    id: 44,
    origin: LAX,
    destination: SCL,
  },
  {
    id: 45,
    origin: SCL,
    destination: LIM,
  },
  {
    id: 46,
    origin: LIM,
    destination: CUZ,
  },
  {
    id: 47,
    origin: CUZ,
    destination: LIM,
  },
  {
    id: 48,
    origin: LIM,
    destination: BOG,
  },
  {
    id: 49,
    origin: BOG,
    destination: MDE,
  },
  {
    id: 50,
    origin: MDE,
    destination: PTY,
  },
  {
    id: 51,
    origin: PTY,
    destination: HAV,
  },
  {
    id: 52,
    origin: HAV,
    destination: MEX,
  },
  {
    id: 53,
    origin: MEX,
    destination: ATL,
  },
  {
    id: 54,
    origin: ATL,
    destination: MYR,
  },
  {
    id: 55,
    origin: MYR,
    destination: CLT,
  },
  {
    id: 56,
    origin: CLT,
    destination: LAX,
  },
  {
    id: 57,
    origin: LAX,
    destination: CLT,
  },
  {
    id: 58,
    origin: CLT,
    destination: MYR,
  },
  {
    id: 59,
    origin: MYR,
    destination: EWR,
  },
  {
    id: 60,
    origin: LGA,
    destination: MYR,
  },
  {
    id: 61,
    origin: MYR,
    destination: CLT,
  },
  {
    id: 62,
    origin: CLT,
    destination: MSY,
  },
];
/*
MYR-LGA
JFK-HEL
HEL-ARN
CPH-OSL
OSL-TOS
TOS-OSL
OSL-ARN
ARN-HEL
HEL-JFK
LGA-MYR

MYR-ATL
ATL-JFK
JFK-LIS

LIS-FNC
FNC-LIS

LIS-FCO
FCO-SPU

SPU-MUC
MUC-JFK
EWR-FRA
FRA-SPU

SPU-FRA
FRA-PRG

PRG-TSL
TSL-BCN
BCN-FLR

*/
/*
2018 total:
26 flights
29,953 miles
*/
/*
FCO-LIS
LIS-RAK

CMN-DXB
DXB-HAN

HAN-DMK
DMK-HKT
HKT-CNX

CNX-DMK
DMK-KIX

KIX-KUL

// 16,410 miles

KUL-DPS
DPS-KUL

KUL-CAN
CAN-JFK
JFK-LAX

//30,960 miles

LAX-CLT

//33,080 miles

CLT-LAX
LAX-SCL

SCL-LIM
LIM-CUZ
CUZ-LIM
LIM-BOG
BOG-MDE

MDE-PTY
PTY-HAV
HAV-MEX

MEX-ATL
ATL-MYR

//54,983 miles

MYR-CLT
CLT-LAX
LAX-CLT
CLT-MYR

//59,535 miles

MYR-EWR

//33 flights
//60,085 miles

//2020

LGA-MYR
MYR-CLT
CLT-MSY
//3 flights
//1369 miles

/*
COUNTRIES
1. Portugal
2. Croatia
3. Czech Republic
4. Slovakia
5. Hungary
6. France
7. Spain
8. Italy
9. Vatican City
10. Morocco
11. Vietnam
12. Thailand
13. Myanmar
14. Japan
15. Malaysia
16. Indonesia
17. Chile
18. Peru
19. Colombia
20. Cuba
21. Mexico
*/

export default myFlights;
