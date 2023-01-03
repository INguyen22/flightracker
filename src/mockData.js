const data = [
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Nursultan Nazarbayev International Airport",
            "timezone": null,
            "iata": "NQZ",
            "icao": "UACC",
            "terminal": "2",
            "gate": null,
            "delay": 35,
            "scheduled": "2023-01-04T03:05:00+00:00",
            "estimated": "2023-01-04T03:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Almaty",
            "timezone": "Asia/Almaty",
            "iata": "ALA",
            "icao": "UAAA",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T04:55:00+00:00",
            "estimated": "2023-01-04T04:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Astana",
            "iata": "KC",
            "icao": "KZR"
        },
        "flight": {
            "number": "956",
            "iata": "KC956",
            "icao": "KZR956",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Barajas",
            "timezone": "Europe/Madrid",
            "iata": "MAD",
            "icao": "LEMD",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T02:50:00+00:00",
            "estimated": "2023-01-04T02:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Son Sant Joan Airport",
            "timezone": "Europe/Madrid",
            "iata": "PMI",
            "icao": "LEPA",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T04:35:00+00:00",
            "estimated": "2023-01-04T04:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Swiftair",
            "iata": "WT",
            "icao": "SWT"
        },
        "flight": {
            "number": "102",
            "iata": "WT102",
            "icao": "SWT102",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Taipei Songshan (Sung Shan)",
            "timezone": "Asia/Taipei",
            "iata": "TSA",
            "icao": "RCSS",
            "terminal": "2",
            "gate": "2,3",
            "delay": null,
            "scheduled": "2023-01-04T06:30:00+00:00",
            "estimated": "2023-01-04T06:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Nangan",
            "timezone": "Asia/Taipei",
            "iata": "LZN",
            "icao": "RCFG",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T07:25:00+00:00",
            "estimated": "2023-01-04T07:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "UNI Air",
            "iata": "B7",
            "icao": "UIA"
        },
        "flight": {
            "number": "8751",
            "iata": "B78751",
            "icao": "UIA8751",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Fuzhou",
            "timezone": "Asia/Shanghai",
            "iata": "FOC",
            "icao": "ZSFZ",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:30:00+00:00",
            "estimated": "2023-01-04T09:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Hong Kong International",
            "timezone": "Asia/Hong_Kong",
            "iata": "HKG",
            "icao": "VHHH",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:10:00+00:00",
            "estimated": "2023-01-04T11:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Xiamen Airlines",
            "iata": "MF",
            "icao": "CXA"
        },
        "flight": {
            "number": "8695",
            "iata": "MF8695",
            "icao": "CXA8695",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Darwin",
            "timezone": "Australia/Darwin",
            "iata": "DRW",
            "icao": "YPDN",
            "terminal": null,
            "gate": "4",
            "delay": 14,
            "scheduled": "2023-01-04T06:05:00+00:00",
            "estimated": "2023-01-04T06:05:00+00:00",
            "actual": "2023-01-04T06:18:00+00:00",
            "estimated_runway": "2023-01-04T06:18:00+00:00",
            "actual_runway": "2023-01-04T06:18:00+00:00"
        },
        "arrival": {
            "airport": "Adelaide International Airport",
            "timezone": "Australia/Adelaide",
            "iata": "ADL",
            "icao": "YPAD",
            "terminal": "1",
            "gate": "14",
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T10:55:00+00:00",
            "estimated": "2023-01-04T10:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Singapore Airlines",
            "iata": "SQ",
            "icao": "SIA"
        },
        "flight": {
            "number": "6367",
            "iata": "SQ6367",
            "icao": "SIA6367",
            "codeshared": {
                "airline_name": "virgin australia",
                "airline_iata": "va",
                "airline_icao": "voz",
                "flight_number": "1782",
                "flight_iata": "va1782",
                "flight_icao": "voz1782"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": null,
            "timezone": null,
            "iata": "DWC",
            "icao": "OMDW",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T02:55:00+00:00",
            "estimated": "2023-01-04T02:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Suvarnabhumi International",
            "timezone": "Asia/Bangkok",
            "iata": "BKK",
            "icao": "VTBS",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:55:00+00:00",
            "estimated": "2023-01-04T11:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Cargolux",
            "iata": "CV",
            "icao": "CLX"
        },
        "flight": {
            "number": "7332",
            "iata": "CV7332",
            "icao": "CLX7332",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "active",
        "departure": {
            "airport": "Lanzhou Zhongchuan Airport",
            "timezone": null,
            "iata": "LHW",
            "icao": "ZLLL",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T03:20:00+00:00",
            "estimated": "2023-01-04T03:20:00+00:00",
            "actual": "2023-01-03T22:53:00+00:00",
            "estimated_runway": "2023-01-03T22:53:00+00:00",
            "actual_runway": "2023-01-03T22:53:00+00:00"
        },
        "arrival": {
            "airport": "Tianjin Binhai International",
            "timezone": "Asia/Shanghai",
            "iata": "TSN",
            "icao": "ZBTJ",
            "terminal": "T2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T05:25:00+00:00",
            "estimated": "2023-01-04T05:25:00+00:00",
            "actual": "2023-01-04T00:39:00+00:00",
            "estimated_runway": "2023-01-04T00:39:00+00:00",
            "actual_runway": "2023-01-04T00:39:00+00:00"
        },
        "airline": {
            "name": "China Postal Airlines",
            "iata": "CF",
            "icao": "CYZ"
        },
        "flight": {
            "number": "9111",
            "iata": "CF9111",
            "icao": "CYZ9111",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "active",
        "departure": {
            "airport": "Singapore Changi",
            "timezone": "Asia/Singapore",
            "iata": "SIN",
            "icao": "WSSS",
            "terminal": "3",
            "gate": "A15",
            "delay": 16,
            "scheduled": "2023-01-04T01:30:00+00:00",
            "estimated": "2023-01-04T01:30:00+00:00",
            "actual": "2023-01-04T01:46:00+00:00",
            "estimated_runway": "2023-01-04T01:46:00+00:00",
            "actual_runway": "2023-01-04T01:46:00+00:00"
        },
        "arrival": {
            "airport": "Oliver Reginald Tambo International (Jan Smuts International)",
            "timezone": "Africa/Johannesburg",
            "iata": "JNB",
            "icao": "FAOR",
            "terminal": "A",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T06:10:00+00:00",
            "estimated": "2023-01-04T06:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "6274",
            "iata": "NH6274",
            "icao": "ANA6274",
            "codeshared": {
                "airline_name": "singapore airlines",
                "airline_iata": "sq",
                "airline_icao": "sia",
                "flight_number": "478",
                "flight_iata": "sq478",
                "flight_icao": "sia478"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Soekarno-Hatta International",
            "timezone": "Asia/Jakarta",
            "iata": "CGK",
            "icao": "WIII",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T04:30:00+00:00",
            "estimated": "2023-01-04T04:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Ngurah Rai International",
            "timezone": "Asia/Makassar",
            "iata": "DPS",
            "icao": "WADD",
            "terminal": "D",
            "gate": null,
            "baggage": "D.4",
            "delay": null,
            "scheduled": "2023-01-04T07:20:00+00:00",
            "estimated": "2023-01-04T07:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Emirates",
            "iata": "EK",
            "icao": "UAE"
        },
        "flight": {
            "number": "3562",
            "iata": "EK3562",
            "icao": "UAE3562",
            "codeshared": {
                "airline_name": "batik air",
                "airline_iata": "id",
                "airline_icao": "btk",
                "flight_number": "6500",
                "flight_iata": "id6500",
                "flight_icao": "btk6500"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Almaty",
            "timezone": "Asia/Almaty",
            "iata": "ALA",
            "icao": "UAAA",
            "terminal": null,
            "gate": "005",
            "delay": null,
            "scheduled": "2023-01-04T02:50:00+00:00",
            "estimated": "2023-01-04T02:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Nursultan Nazarbayev International Airport",
            "timezone": null,
            "iata": "NQZ",
            "icao": "UACC",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T04:50:00+00:00",
            "estimated": "2023-01-04T04:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Astana",
            "iata": "KC",
            "icao": "KZR"
        },
        "flight": {
            "number": "1649",
            "iata": "KC1649",
            "icao": "KZR1649",
            "codeshared": {
                "airline_name": "lufthansa",
                "airline_iata": "lh",
                "airline_icao": "dlh",
                "flight_number": "649",
                "flight_iata": "lh649",
                "flight_icao": "dlh649"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Doha International",
            "timezone": "Asia/Qatar",
            "iata": "DOH",
            "icao": "OTHH",
            "terminal": null,
            "gate": "C18",
            "delay": null,
            "scheduled": "2023-01-04T02:00:00+00:00",
            "estimated": "2023-01-04T02:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Narita International Airport",
            "timezone": "Asia/Tokyo",
            "iata": "NRT",
            "icao": "RJAA",
            "terminal": "2",
            "gate": "72",
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T17:55:00+00:00",
            "estimated": "2023-01-04T17:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Qatar Airways",
            "iata": "QR",
            "icao": "QTR"
        },
        "flight": {
            "number": "806",
            "iata": "QR806",
            "icao": "QTR806",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "cancelled",
        "departure": {
            "airport": "Ninoy Aquino International",
            "timezone": "Asia/Manila",
            "iata": "MNL",
            "icao": "RPLL",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T04:30:00+00:00",
            "estimated": "2023-01-04T04:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Iloilo International",
            "timezone": "Asia/Manila",
            "iata": "ILO",
            "icao": "RPVI",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T05:45:00+00:00",
            "estimated": "2023-01-04T05:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Philippine Airlines",
            "iata": "PR",
            "icao": "PAL"
        },
        "flight": {
            "number": "2139",
            "iata": "PR2139",
            "icao": "PAL2139",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Hangzhou",
            "timezone": "Asia/Shanghai",
            "iata": "HGH",
            "icao": "ZSHC",
            "terminal": "3",
            "gate": "G01-",
            "delay": null,
            "scheduled": "2023-01-04T07:00:00+00:00",
            "estimated": "2023-01-04T07:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Qingdao",
            "timezone": "Asia/Shanghai",
            "iata": "TAO",
            "icao": "ZSQD",
            "terminal": "1",
            "gate": null,
            "baggage": "7",
            "delay": null,
            "scheduled": "2023-01-04T08:50:00+00:00",
            "estimated": "2023-01-04T08:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Xiamen Airlines",
            "iata": "MF",
            "icao": "CXA"
        },
        "flight": {
            "number": "3621",
            "iata": "MF3621",
            "icao": "CXA3621",
            "codeshared": {
                "airline_name": "china eastern airlines",
                "airline_iata": "mu",
                "airline_icao": "ces",
                "flight_number": "5671",
                "flight_iata": "mu5671",
                "flight_icao": "ces5671"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Abu Dhabi International",
            "timezone": "Asia/Dubai",
            "iata": "AUH",
            "icao": "OMAA",
            "terminal": "3",
            "gate": "57",
            "delay": 20,
            "scheduled": "2023-01-04T03:00:00+00:00",
            "estimated": "2023-01-04T03:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Leonardo Da Vinci (Fiumicino)",
            "timezone": "Europe/Rome",
            "iata": "FCO",
            "icao": "LIRF",
            "terminal": "3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T06:20:00+00:00",
            "estimated": "2023-01-04T06:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Etihad Airways",
            "iata": "EY",
            "icao": "ETD"
        },
        "flight": {
            "number": "85",
            "iata": "EY85",
            "icao": "ETD85",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Kuching",
            "timezone": "Asia/Kuching",
            "iata": "KCH",
            "icao": "WBGG",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T10:15:00+00:00",
            "estimated": "2023-01-04T10:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Kuala Lumpur International Airport (klia)",
            "timezone": "Asia/Kuala_Lumpur",
            "iata": "KUL",
            "icao": "WMKK",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:05:00+00:00",
            "estimated": "2023-01-04T12:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Oman Air",
            "iata": "WY",
            "icao": "OMA"
        },
        "flight": {
            "number": "5256",
            "iata": "WY5256",
            "icao": "OMA5256",
            "codeshared": {
                "airline_name": "malaysia airlines",
                "airline_iata": "mh",
                "airline_icao": "mas",
                "flight_number": "2543",
                "flight_iata": "mh2543",
                "flight_icao": "mas2543"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Salalah",
            "timezone": "Asia/Muscat",
            "iata": "SLL",
            "icao": "OOSA",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T05:30:00+00:00",
            "estimated": "2023-01-04T05:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Seeb",
            "timezone": "Asia/Muscat",
            "iata": "MCT",
            "icao": "OOMS",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T07:05:00+00:00",
            "estimated": "2023-01-04T07:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Oman Air",
            "iata": "WY",
            "icao": "OMA"
        },
        "flight": {
            "number": "902",
            "iata": "WY902",
            "icao": "OMA902",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Perth International",
            "timezone": "Australia/Perth",
            "iata": "PER",
            "icao": "YPPH",
            "terminal": "4",
            "gate": "12",
            "delay": null,
            "scheduled": "2023-01-04T06:00:00+00:00",
            "estimated": "2023-01-04T06:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Sydney Kingsford Smith Airport",
            "timezone": "Australia/Sydney",
            "iata": "SYD",
            "icao": "YSSY",
            "terminal": "3",
            "gate": "T3G",
            "baggage": "QFR",
            "delay": null,
            "scheduled": "2023-01-04T13:10:00+00:00",
            "estimated": "2023-01-04T13:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Jetstar",
            "iata": "JQ",
            "icao": "JST"
        },
        "flight": {
            "number": "6642",
            "iata": "JQ6642",
            "icao": "JST6642",
            "codeshared": {
                "airline_name": "qantas",
                "airline_iata": "qf",
                "airline_icao": "qfa",
                "flight_number": "642",
                "flight_iata": "qf642",
                "flight_icao": "qfa642"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Daegu",
            "timezone": "Asia/Seoul",
            "iata": "TAE",
            "icao": "RKTN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:20:00+00:00",
            "estimated": "2023-01-04T09:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Jeju Airport",
            "timezone": "Asia/Seoul",
            "iata": "CJU",
            "icao": "RKPC",
            "terminal": "D",
            "gate": "5",
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T10:20:00+00:00",
            "estimated": "2023-01-04T10:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Asiana Airlines",
            "iata": "OZ",
            "icao": "AAR"
        },
        "flight": {
            "number": "8121",
            "iata": "OZ8121",
            "icao": "AAR8121",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Madras International (Meenambakkam)",
            "timezone": "Asia/Kolkata",
            "iata": "MAA",
            "icao": "VOMM",
            "terminal": "1",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T06:40:00+00:00",
            "estimated": "2023-01-04T06:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Vishakhapatnam",
            "timezone": "Asia/Kolkata",
            "iata": "VTZ",
            "icao": "VOVZ",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T07:55:00+00:00",
            "estimated": "2023-01-04T07:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air France",
            "iata": "AF",
            "icao": "AFR"
        },
        "flight": {
            "number": "3091",
            "iata": "AF3091",
            "icao": "AFR3091",
            "codeshared": {
                "airline_name": "indigo",
                "airline_iata": "6e",
                "airline_icao": "igo",
                "flight_number": "557",
                "flight_iata": "6e557",
                "flight_icao": "igo557"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Obihiro",
            "timezone": "Asia/Tokyo",
            "iata": "OBO",
            "icao": "RJCB",
            "terminal": null,
            "gate": "3",
            "delay": null,
            "scheduled": "2023-01-04T10:05:00+00:00",
            "estimated": "2023-01-04T10:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:50:00+00:00",
            "estimated": "2023-01-04T11:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Hawaiian Airlines",
            "iata": "HA",
            "icao": "HAL"
        },
        "flight": {
            "number": "5281",
            "iata": "HA5281",
            "icao": "HAL5281",
            "codeshared": {
                "airline_name": "jal",
                "airline_iata": "jl",
                "airline_icao": "jal",
                "flight_number": "570",
                "flight_iata": "jl570",
                "flight_icao": "jal570"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Raipur",
            "timezone": "Asia/Kolkata",
            "iata": "RPR",
            "icao": "VARP",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T08:10:00+00:00",
            "estimated": "2023-01-04T08:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Bamrauli",
            "timezone": "Asia/Kolkata",
            "iata": "IXD",
            "icao": "VEAB",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T09:55:00+00:00",
            "estimated": "2023-01-04T09:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "IndiGo",
            "iata": "6E",
            "icao": "IGO"
        },
        "flight": {
            "number": "7604",
            "iata": "6E7604",
            "icao": "IGO7604",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Nouakchott",
            "timezone": "Africa/Nouakchott",
            "iata": "NKC",
            "icao": "GQNO",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T02:45:00+00:00",
            "estimated": "2023-01-04T02:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Mohamed V",
            "timezone": "Africa/Casablanca",
            "iata": "CMN",
            "icao": "GMMN",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T06:20:00+00:00",
            "estimated": "2023-01-04T06:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Qatar Airways",
            "iata": "QR",
            "icao": "QTR"
        },
        "flight": {
            "number": "4581",
            "iata": "QR4581",
            "icao": "QTR4581",
            "codeshared": {
                "airline_name": "royal air maroc",
                "airline_iata": "at",
                "airline_icao": "ram",
                "flight_number": "510",
                "flight_iata": "at510",
                "flight_icao": "ram510"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Shanghai Pudong International",
            "timezone": "Asia/Shanghai",
            "iata": "PVG",
            "icao": "ZSPD",
            "terminal": "2",
            "gate": "J",
            "delay": null,
            "scheduled": "2023-01-04T08:15:00+00:00",
            "estimated": "2023-01-04T08:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Xianyang",
            "timezone": "Asia/Shanghai",
            "iata": "XIY",
            "icao": "ZLXY",
            "terminal": "3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:00:00+00:00",
            "estimated": "2023-01-04T11:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Eastern Airlines",
            "iata": "MU",
            "icao": "CES"
        },
        "flight": {
            "number": "3505",
            "iata": "MU3505",
            "icao": "CES3505",
            "codeshared": {
                "airline_name": "juneyao airlines",
                "airline_iata": "ho",
                "airline_icao": "dkh",
                "flight_number": "1007",
                "flight_iata": "ho1007",
                "flight_icao": "dkh1007"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Doha International",
            "timezone": "Asia/Qatar",
            "iata": "DOH",
            "icao": "OTHH",
            "terminal": null,
            "gate": "C57",
            "delay": null,
            "scheduled": "2023-01-04T01:45:00+00:00",
            "estimated": "2023-01-04T01:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Seeb",
            "timezone": "Asia/Muscat",
            "iata": "MCT",
            "icao": "OOMS",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T04:25:00+00:00",
            "estimated": "2023-01-04T04:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JetBlue Airways",
            "iata": "B6",
            "icao": "JBU"
        },
        "flight": {
            "number": "6546",
            "iata": "B66546",
            "icao": "JBU6546",
            "codeshared": {
                "airline_name": "qatar airways",
                "airline_iata": "qr",
                "airline_icao": "qtr",
                "flight_number": "1148",
                "flight_iata": "qr1148",
                "flight_icao": "qtr1148"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Gimpo Airport",
            "timezone": "Asia/Seoul",
            "iata": "GMP",
            "icao": "RKSS",
            "terminal": "D",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T10:50:00+00:00",
            "estimated": "2023-01-04T10:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Gimhae",
            "timezone": "Asia/Seoul",
            "iata": "PUS",
            "icao": "RKPK",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:00:00+00:00",
            "estimated": "2023-01-04T12:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Busan",
            "iata": "BX",
            "icao": "ABL"
        },
        "flight": {
            "number": "8809",
            "iata": "BX8809",
            "icao": "ABL8809",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Korla",
            "timezone": "Asia/Shanghai",
            "iata": "KRL",
            "icao": "ZWKL",
            "terminal": null,
            "gate": "1",
            "delay": null,
            "scheduled": "2023-01-04T10:00:00+00:00",
            "estimated": "2023-01-04T10:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Urumqi",
            "timezone": "Asia/Shanghai",
            "iata": "URC",
            "icao": "ZWWW",
            "terminal": "3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T10:55:00+00:00",
            "estimated": "2023-01-04T10:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Southern Airlines",
            "iata": "CZ",
            "icao": "CSN"
        },
        "flight": {
            "number": "6925",
            "iata": "CZ6925",
            "icao": "CSN6925",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Korla",
            "timezone": "Asia/Shanghai",
            "iata": "KRL",
            "icao": "ZWKL",
            "terminal": null,
            "gate": "2",
            "delay": null,
            "scheduled": "2023-01-04T09:15:00+00:00",
            "estimated": "2023-01-04T09:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Tumxuk Tangwangcheng Airport",
            "timezone": null,
            "iata": "TWC",
            "icao": null,
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T10:40:00+00:00",
            "estimated": "2023-01-04T10:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Express Air",
            "iata": "G5",
            "icao": "HXA"
        },
        "flight": {
            "number": "4403",
            "iata": "G54403",
            "icao": "HXA4403",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Daru",
            "timezone": "Pacific/Port_Moresby",
            "iata": "DAU",
            "icao": "AYDU",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T07:55:00+00:00",
            "estimated": "2023-01-04T07:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Jackson Field",
            "timezone": "Pacific/Port_Moresby",
            "iata": "POM",
            "icao": "AYPY",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T09:05:00+00:00",
            "estimated": "2023-01-04T09:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Niugini",
            "iata": "PX",
            "icao": "ANG"
        },
        "flight": {
            "number": "801",
            "iata": "PX801",
            "icao": "ANG801",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": "1",
            "delay": null,
            "scheduled": "2023-01-04T10:00:00+00:00",
            "estimated": "2023-01-04T10:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Yinchuan",
            "timezone": "Asia/Shanghai",
            "iata": "INC",
            "icao": "ZLIC",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:15:00+00:00",
            "estimated": "2023-01-04T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air China LTD",
            "iata": "CA",
            "icao": "CCA"
        },
        "flight": {
            "number": "8701",
            "iata": "CA8701",
            "icao": "CCA8701",
            "codeshared": {
                "airline_name": "shandong airlines",
                "airline_iata": "sc",
                "airline_icao": "cdg",
                "flight_number": "8721",
                "flight_iata": "sc8721",
                "flight_icao": "cdg8721"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": "1",
            "delay": null,
            "scheduled": "2023-01-04T10:00:00+00:00",
            "estimated": "2023-01-04T10:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Yinchuan",
            "timezone": "Asia/Shanghai",
            "iata": "INC",
            "icao": "ZLIC",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:15:00+00:00",
            "estimated": "2023-01-04T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Tibet Airlines",
            "iata": "TV",
            "icao": "TBA"
        },
        "flight": {
            "number": "6855",
            "iata": "TV6855",
            "icao": "TBA6855",
            "codeshared": {
                "airline_name": "shandong airlines",
                "airline_iata": "sc",
                "airline_icao": "cdg",
                "flight_number": "8721",
                "flight_iata": "sc8721",
                "flight_icao": "cdg8721"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T10:00:00+00:00",
            "estimated": "2023-01-04T10:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Wuyishan",
            "timezone": "Asia/Shanghai",
            "iata": "WUS",
            "icao": "ZSWY",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:05:00+00:00",
            "estimated": "2023-01-04T12:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Shandong Airlines",
            "iata": "SC",
            "icao": "CDG"
        },
        "flight": {
            "number": "8767",
            "iata": "SC8767",
            "icao": "CDG8767",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "cancelled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:55:00+00:00",
            "estimated": "2023-01-04T09:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Shanghai Hongqiao International",
            "timezone": "Asia/Shanghai",
            "iata": "SHA",
            "icao": "ZSSS",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:40:00+00:00",
            "estimated": "2023-01-04T11:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Eastern Airlines",
            "iata": "MU",
            "icao": "CES"
        },
        "flight": {
            "number": "5572",
            "iata": "MU5572",
            "icao": "CES5572",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "cancelled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:50:00+00:00",
            "estimated": "2023-01-04T09:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "T2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:15:00+00:00",
            "estimated": "2023-01-04T12:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Xiamen Airlines",
            "iata": "MF",
            "icao": "CXA"
        },
        "flight": {
            "number": "5394",
            "iata": "MF5394",
            "icao": "CXA5394",
            "codeshared": {
                "airline_name": "sichuan airlines",
                "airline_iata": "3u",
                "airline_icao": "csc",
                "flight_number": "8054",
                "flight_iata": "3u8054",
                "flight_icao": "csc8054"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:40:00+00:00",
            "estimated": "2023-01-04T09:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Xianyang",
            "timezone": "Asia/Shanghai",
            "iata": "XIY",
            "icao": "ZLXY",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:30:00+00:00",
            "estimated": "2023-01-04T11:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Shandong Airlines",
            "iata": "SC",
            "icao": "CDG"
        },
        "flight": {
            "number": "8733",
            "iata": "SC8733",
            "icao": "CDG8733",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:35:00+00:00",
            "estimated": "2023-01-04T09:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Harbin",
            "timezone": "Asia/Shanghai",
            "iata": "HRB",
            "icao": "ZYHB",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:45:00+00:00",
            "estimated": "2023-01-04T11:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Sichuan Airlines",
            "iata": "3U",
            "icao": "CSC"
        },
        "flight": {
            "number": "3293",
            "iata": "3U3293",
            "icao": "CSC3293",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:35:00+00:00",
            "estimated": "2023-01-04T09:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Harbin",
            "timezone": "Asia/Shanghai",
            "iata": "HRB",
            "icao": "ZYHB",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:45:00+00:00",
            "estimated": "2023-01-04T11:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Xiamen Airlines",
            "iata": "MF",
            "icao": "CXA"
        },
        "flight": {
            "number": "5095",
            "iata": "MF5095",
            "icao": "CXA5095",
            "codeshared": {
                "airline_name": "sichuan airlines",
                "airline_iata": "3u",
                "airline_icao": "csc",
                "flight_number": "3293",
                "flight_iata": "3u3293",
                "flight_icao": "csc3293"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:35:00+00:00",
            "estimated": "2023-01-04T09:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Harbin",
            "timezone": "Asia/Shanghai",
            "iata": "HRB",
            "icao": "ZYHB",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:45:00+00:00",
            "estimated": "2023-01-04T11:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Eastern Airlines",
            "iata": "MU",
            "icao": "CES"
        },
        "flight": {
            "number": "3787",
            "iata": "MU3787",
            "icao": "CES3787",
            "codeshared": {
                "airline_name": "sichuan airlines",
                "airline_iata": "3u",
                "airline_icao": "csc",
                "flight_number": "3293",
                "flight_iata": "3u3293",
                "flight_icao": "csc3293"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:30:00+00:00",
            "estimated": "2023-01-04T09:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Xiamen",
            "timezone": "Asia/Shanghai",
            "iata": "XMN",
            "icao": "ZSAM",
            "terminal": "4",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:50:00+00:00",
            "estimated": "2023-01-04T11:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Shandong Airlines",
            "iata": "SC",
            "icao": "CDG"
        },
        "flight": {
            "number": "8401",
            "iata": "SC8401",
            "icao": "CDG8401",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Jinan",
            "timezone": "Asia/Shanghai",
            "iata": "TNA",
            "icao": "ZSJN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:30:00+00:00",
            "estimated": "2023-01-04T09:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Xiamen",
            "timezone": "Asia/Shanghai",
            "iata": "XMN",
            "icao": "ZSAM",
            "terminal": "4",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:50:00+00:00",
            "estimated": "2023-01-04T11:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Tibet Airlines",
            "iata": "TV",
            "icao": "TBA"
        },
        "flight": {
            "number": "6837",
            "iata": "TV6837",
            "icao": "TBA6837",
            "codeshared": {
                "airline_name": "shandong airlines",
                "airline_iata": "sc",
                "airline_icao": "cdg",
                "flight_number": "8401",
                "flight_iata": "sc8401",
                "flight_icao": "cdg8401"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Fukuoka",
            "timezone": "Asia/Tokyo",
            "iata": "FUK",
            "icao": "RJFF",
            "terminal": "D",
            "gate": "9",
            "delay": null,
            "scheduled": "2023-01-04T07:00:00+00:00",
            "estimated": "2023-01-04T07:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:30:00+00:00",
            "estimated": "2023-01-04T08:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Garuda Indonesia",
            "iata": "GA",
            "icao": "GIA"
        },
        "flight": {
            "number": "9165",
            "iata": "GA9165",
            "icao": "GIA9165",
            "codeshared": {
                "airline_name": "jal",
                "airline_iata": "jl",
                "airline_icao": "jal",
                "flight_number": "300",
                "flight_iata": "jl300",
                "flight_icao": "jal300"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Fukuoka",
            "timezone": "Asia/Tokyo",
            "iata": "FUK",
            "icao": "RJFF",
            "terminal": "D",
            "gate": "9",
            "delay": null,
            "scheduled": "2023-01-04T07:00:00+00:00",
            "estimated": "2023-01-04T07:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:30:00+00:00",
            "estimated": "2023-01-04T08:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Hawaiian Airlines",
            "iata": "HA",
            "icao": "HAL"
        },
        "flight": {
            "number": "5134",
            "iata": "HA5134",
            "icao": "HAL5134",
            "codeshared": {
                "airline_name": "jal",
                "airline_iata": "jl",
                "airline_icao": "jal",
                "flight_number": "300",
                "flight_iata": "jl300",
                "flight_icao": "jal300"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Invercargill",
            "timezone": "Pacific/Auckland",
            "iata": "IVC",
            "icao": "NZNV",
            "terminal": null,
            "gate": "2",
            "delay": null,
            "scheduled": "2023-01-04T12:00:00+00:00",
            "estimated": "2023-01-04T12:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Christchurch International",
            "timezone": "Pacific/Auckland",
            "iata": "CHC",
            "icao": "NZCH",
            "terminal": null,
            "gate": "D12",
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T13:15:00+00:00",
            "estimated": "2023-01-04T13:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air New Zealand",
            "iata": "NZ",
            "icao": "ANZ"
        },
        "flight": {
            "number": "8710",
            "iata": "NZ8710",
            "icao": "ANZ8710",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Invercargill",
            "timezone": "Pacific/Auckland",
            "iata": "IVC",
            "icao": "NZNV",
            "terminal": null,
            "gate": "2",
            "delay": null,
            "scheduled": "2023-01-04T10:40:00+00:00",
            "estimated": "2023-01-04T10:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Christchurch International",
            "timezone": "Pacific/Auckland",
            "iata": "CHC",
            "icao": "NZCH",
            "terminal": "D",
            "gate": "D15",
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:55:00+00:00",
            "estimated": "2023-01-04T11:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air New Zealand",
            "iata": "NZ",
            "icao": "ANZ"
        },
        "flight": {
            "number": "5702",
            "iata": "NZ5702",
            "icao": "ANZ5702",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": "3",
            "delay": null,
            "scheduled": "2023-01-04T07:10:00+00:00",
            "estimated": "2023-01-04T07:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Izumo",
            "timezone": "Asia/Tokyo",
            "iata": "IZO",
            "icao": "RJOC",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:40:00+00:00",
            "estimated": "2023-01-04T08:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JAL",
            "iata": "JL",
            "icao": "JAL"
        },
        "flight": {
            "number": "277",
            "iata": "JL277",
            "icao": "JAL277",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Sendai",
            "timezone": "Asia/Tokyo",
            "iata": "SDJ",
            "icao": "RJSS",
            "terminal": null,
            "gate": "8",
            "delay": null,
            "scheduled": "2023-01-04T07:35:00+00:00",
            "estimated": "2023-01-04T07:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Fukuoka",
            "timezone": "Asia/Tokyo",
            "iata": "FUK",
            "icao": "RJFF",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T09:55:00+00:00",
            "estimated": "2023-01-04T09:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "IBEX Airlines",
            "iata": "FW",
            "icao": "IBX"
        },
        "flight": {
            "number": "10",
            "iata": "FW10",
            "icao": "IBX10",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Moranbah",
            "timezone": "Australia/Brisbane",
            "iata": "MOV",
            "icao": "YMRB",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T07:55:00+00:00",
            "estimated": "2023-01-04T07:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Brisbane International",
            "timezone": "Australia/Brisbane",
            "iata": "BNE",
            "icao": "YBBN",
            "terminal": "D",
            "gate": "49",
            "baggage": "D04",
            "delay": null,
            "scheduled": "2023-01-04T09:25:00+00:00",
            "estimated": "2023-01-04T09:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Alliance Airlines",
            "iata": "QQ",
            "icao": "UTY"
        },
        "flight": {
            "number": "2833",
            "iata": "QQ2833",
            "icao": "UTY2833",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Beijing Capital International",
            "timezone": "Asia/Shanghai",
            "iata": "PEK",
            "icao": "ZBAA",
            "terminal": "3",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T07:30:00+00:00",
            "estimated": "2023-01-04T07:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Yantai",
            "timezone": "Asia/Shanghai",
            "iata": "YNT",
            "icao": "ZSYT",
            "terminal": "T1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T09:00:00+00:00",
            "estimated": "2023-01-04T09:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Express Air",
            "iata": "G5",
            "icao": "HXA"
        },
        "flight": {
            "number": "8416",
            "iata": "G58416",
            "icao": "HXA8416",
            "codeshared": {
                "airline_name": "shandong airlines",
                "airline_iata": "sc",
                "airline_icao": "cdg",
                "flight_number": "7604",
                "flight_iata": "sc7604",
                "flight_icao": "cdg7604"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "cancelled",
        "departure": {
            "airport": "Lishe International Airport",
            "timezone": "Asia/Shanghai",
            "iata": "NGB",
            "icao": "ZSNB",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T07:45:00+00:00",
            "estimated": "2023-01-04T07:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Dalian",
            "timezone": "Asia/Shanghai",
            "iata": "DLC",
            "icao": "ZYTL",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T09:40:00+00:00",
            "estimated": "2023-01-04T09:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Eastern Airlines",
            "iata": "MU",
            "icao": "CES"
        },
        "flight": {
            "number": "5649",
            "iata": "MU5649",
            "icao": "CES5649",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "active",
        "departure": {
            "airport": "Vanimo",
            "timezone": "Pacific/Port_Moresby",
            "iata": "VAI",
            "icao": "AYVN",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T06:30:00+00:00",
            "estimated": "2023-01-04T06:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Boram",
            "timezone": "Pacific/Port_Moresby",
            "iata": "WWK",
            "icao": "AYWK",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T07:10:00+00:00",
            "estimated": "2023-01-04T07:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Niugini",
            "iata": "PX",
            "icao": "ANG"
        },
        "flight": {
            "number": "141",
            "iata": "PX141",
            "icao": "ANG141",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "cancelled",
        "departure": {
            "airport": "Yiwu",
            "timezone": "Asia/Shanghai",
            "iata": "YIW",
            "icao": "ZSYW",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T08:00:00+00:00",
            "estimated": "2023-01-04T08:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Yinchuan",
            "timezone": "Asia/Shanghai",
            "iata": "INC",
            "icao": "ZLIC",
            "terminal": "T3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:05:00+00:00",
            "estimated": "2023-01-04T11:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Xiamen Airlines",
            "iata": "MF",
            "icao": "CXA"
        },
        "flight": {
            "number": "1744",
            "iata": "MF1744",
            "icao": "CXA1744",
            "codeshared": {
                "airline_name": "china southern airlines",
                "airline_iata": "cz",
                "airline_icao": "csn",
                "flight_number": "5105",
                "flight_iata": "cz5105",
                "flight_icao": "csn5105"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "cancelled",
        "departure": {
            "airport": "Yun Cheng",
            "timezone": "Asia/Shanghai",
            "iata": "YCU",
            "icao": "ZBYC",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T10:00:00+00:00",
            "estimated": "2023-01-04T10:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Changsha",
            "timezone": "Asia/Shanghai",
            "iata": "CSX",
            "icao": "ZGHA",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:00:00+00:00",
            "estimated": "2023-01-04T12:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Express Air",
            "iata": "G5",
            "icao": "HXA"
        },
        "flight": {
            "number": "8768",
            "iata": "G58768",
            "icao": "HXA8768",
            "codeshared": {
                "airline_name": "kunming airlines",
                "airline_iata": "ky",
                "airline_icao": "kna",
                "flight_number": "3048",
                "flight_iata": "ky3048",
                "flight_icao": "kna3048"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Auckland International",
            "timezone": "Pacific/Auckland",
            "iata": "AKL",
            "icao": "NZAA",
            "terminal": "I",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T11:40:00+00:00",
            "estimated": "2023-01-04T11:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Seoul (Incheon)",
            "timezone": "Asia/Seoul",
            "iata": "ICN",
            "icao": "RKSI",
            "terminal": "2",
            "gate": "254",
            "baggage": "7",
            "delay": null,
            "scheduled": "2023-01-04T20:00:00+00:00",
            "estimated": "2023-01-04T20:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Korean Air",
            "iata": "KE",
            "icao": "KAL"
        },
        "flight": {
            "number": "412",
            "iata": "KE412",
            "icao": "KAL412",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Auckland International",
            "timezone": "Pacific/Auckland",
            "iata": "AKL",
            "icao": "NZAA",
            "terminal": "I",
            "gate": "8",
            "delay": null,
            "scheduled": "2023-01-04T11:45:00+00:00",
            "estimated": "2023-01-04T11:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Faleolo",
            "timezone": "Pacific/Apia",
            "iata": "APW",
            "icao": "NSFA",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T15:30:00+00:00",
            "estimated": "2023-01-04T15:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air New Zealand",
            "iata": "NZ",
            "icao": "ANZ"
        },
        "flight": {
            "number": "994",
            "iata": "NZ994",
            "icao": "ANZ994",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Auckland International",
            "timezone": "Pacific/Auckland",
            "iata": "AKL",
            "icao": "NZAA",
            "terminal": "D",
            "gate": "47",
            "delay": null,
            "scheduled": "2023-01-04T11:45:00+00:00",
            "estimated": "2023-01-04T11:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Nelson",
            "timezone": "Pacific/Auckland",
            "iata": "NSN",
            "icao": "NZNS",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T13:10:00+00:00",
            "estimated": "2023-01-04T13:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air New Zealand",
            "iata": "NZ",
            "icao": "ANZ"
        },
        "flight": {
            "number": "8459",
            "iata": "NZ8459",
            "icao": "ANZ8459",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Sydney Kingsford Smith Airport",
            "timezone": "Australia/Sydney",
            "iata": "SYD",
            "icao": "YSSY",
            "terminal": "2",
            "gate": "A58",
            "delay": null,
            "scheduled": "2023-01-04T07:15:00+00:00",
            "estimated": "2023-01-04T07:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Gold Coast (coolangatta)",
            "timezone": "Australia/Brisbane",
            "iata": "OOL",
            "icao": "YBCG",
            "terminal": "1",
            "gate": "13",
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T07:35:00+00:00",
            "estimated": "2023-01-04T07:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Jetstar",
            "iata": "JQ",
            "icao": "JST"
        },
        "flight": {
            "number": "402",
            "iata": "JQ402",
            "icao": "JST402",
            "codeshared": null
        },
        "aircraft": {
            "registration": "VH-VQK",
            "iata": "A320",
            "icao": "A320",
            "icao24": "7C6C9A"
        },
        "live": {
            "updated": "2023-01-03T20:57:56+00:00",
            "latitude": -33.94,
            "longitude": 151.18,
            "altitude": 1889.76,
            "direction": 63.43,
            "speed_horizontal": 538.344,
            "speed_vertical": 47.988,
            "is_ground": true
        }
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Fuzhou",
            "timezone": "Asia/Shanghai",
            "iata": "FOC",
            "icao": "ZSFZ",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T08:10:00+00:00",
            "estimated": "2023-01-04T08:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Yinchuan",
            "timezone": "Asia/Shanghai",
            "iata": "INC",
            "icao": "ZLIC",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:30:00+00:00",
            "estimated": "2023-01-04T11:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Loong Air",
            "iata": "GJ",
            "icao": "CDC"
        },
        "flight": {
            "number": "5463",
            "iata": "GJ5463",
            "icao": "CDC5463",
            "codeshared": {
                "airline_name": "xiamen airlines",
                "airline_iata": "mf",
                "airline_icao": "cxa",
                "flight_number": "8219",
                "flight_iata": "mf8219",
                "flight_icao": "cxa8219"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Fuzhou",
            "timezone": "Asia/Shanghai",
            "iata": "FOC",
            "icao": "ZSFZ",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T08:10:00+00:00",
            "estimated": "2023-01-04T08:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Yinchuan",
            "timezone": "Asia/Shanghai",
            "iata": "INC",
            "icao": "ZLIC",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:30:00+00:00",
            "estimated": "2023-01-04T11:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Southern Airlines",
            "iata": "CZ",
            "icao": "CSN"
        },
        "flight": {
            "number": "4163",
            "iata": "CZ4163",
            "icao": "CSN4163",
            "codeshared": {
                "airline_name": "xiamen airlines",
                "airline_iata": "mf",
                "airline_icao": "cxa",
                "flight_number": "8219",
                "flight_iata": "mf8219",
                "flight_icao": "cxa8219"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Aktyubinsk",
            "timezone": "Asia/Aqtobe",
            "iata": "AKX",
            "icao": "UATT",
            "terminal": null,
            "gate": null,
            "delay": 30,
            "scheduled": "2023-01-04T00:50:00+00:00",
            "estimated": "2023-01-04T00:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Nursultan Nazarbayev International Airport",
            "timezone": null,
            "iata": "NQZ",
            "icao": "UACC",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T03:35:00+00:00",
            "estimated": "2023-01-04T03:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Astana",
            "iata": "KC",
            "icao": "KZR"
        },
        "flight": {
            "number": "9780",
            "iata": "KC9780",
            "icao": "KZR9780",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": "2E",
            "delay": null,
            "scheduled": "2023-01-04T07:00:00+00:00",
            "estimated": "2023-01-04T07:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Ganzhou",
            "timezone": "Asia/Shanghai",
            "iata": "KOW",
            "icao": "ZSGZ",
            "terminal": "T2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:50:00+00:00",
            "estimated": "2023-01-04T08:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "West Air (China)",
            "iata": "PN",
            "icao": "CHB"
        },
        "flight": {
            "number": "6221",
            "iata": "PN6221",
            "icao": "CHB6221",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Gonggar/Lhasa",
            "timezone": "Asia/Shanghai",
            "iata": "LXA",
            "icao": "ZULS",
            "terminal": "T3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T10:05:00+00:00",
            "estimated": "2023-01-04T10:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Eastern Airlines",
            "iata": "MU",
            "icao": "CES"
        },
        "flight": {
            "number": "4023",
            "iata": "MU4023",
            "icao": "CES4023",
            "codeshared": {
                "airline_name": "sichuan airlines",
                "airline_iata": "3u",
                "airline_icao": "csc",
                "flight_number": "8635",
                "flight_iata": "3u8635",
                "flight_icao": "csc8635"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Gonggar/Lhasa",
            "timezone": "Asia/Shanghai",
            "iata": "LXA",
            "icao": "ZULS",
            "terminal": "T3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T10:05:00+00:00",
            "estimated": "2023-01-04T10:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Southern Airlines",
            "iata": "CZ",
            "icao": "CSN"
        },
        "flight": {
            "number": "9531",
            "iata": "CZ9531",
            "icao": "CSN9531",
            "codeshared": {
                "airline_name": "sichuan airlines",
                "airline_iata": "3u",
                "airline_icao": "csc",
                "flight_number": "8635",
                "flight_iata": "3u8635",
                "flight_icao": "csc8635"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Nanning",
            "timezone": "Asia/Shanghai",
            "iata": "NNG",
            "icao": "ZGNN",
            "terminal": "T2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:45:00+00:00",
            "estimated": "2023-01-04T08:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Sichuan Airlines",
            "iata": "3U",
            "icao": "CSC"
        },
        "flight": {
            "number": "8137",
            "iata": "3U8137",
            "icao": "CSC8137",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Nanning",
            "timezone": "Asia/Shanghai",
            "iata": "NNG",
            "icao": "ZGNN",
            "terminal": "T2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:45:00+00:00",
            "estimated": "2023-01-04T08:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Express Air",
            "iata": "G5",
            "icao": "HXA"
        },
        "flight": {
            "number": "8641",
            "iata": "G58641",
            "icao": "HXA8641",
            "codeshared": {
                "airline_name": "sichuan airlines",
                "airline_iata": "3u",
                "airline_icao": "csc",
                "flight_number": "8137",
                "flight_iata": "3u8137",
                "flight_icao": "csc8137"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haikou",
            "timezone": "Asia/Shanghai",
            "iata": "HAK",
            "icao": "ZJHK",
            "terminal": "2",
            "gate": "39",
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Xiamen",
            "timezone": "Asia/Shanghai",
            "iata": "XMN",
            "icao": "ZSAM",
            "terminal": "4",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:50:00+00:00",
            "estimated": "2023-01-04T08:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Hainan Airlines",
            "iata": "HU",
            "icao": "CHH"
        },
        "flight": {
            "number": "7047",
            "iata": "HU7047",
            "icao": "CHH7047",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "cancelled",
        "departure": {
            "airport": "Haikou",
            "timezone": "Asia/Shanghai",
            "iata": "HAK",
            "icao": "ZJHK",
            "terminal": "T2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Guangzhou Baiyun International",
            "timezone": "Asia/Shanghai",
            "iata": "CAN",
            "icao": "ZGGG",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:10:00+00:00",
            "estimated": "2023-01-04T08:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Southern Airlines",
            "iata": "CZ",
            "icao": "CSN"
        },
        "flight": {
            "number": "6773",
            "iata": "CZ6773",
            "icao": "CSN6773",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Nanning",
            "timezone": "Asia/Shanghai",
            "iata": "NNG",
            "icao": "ZGNN",
            "terminal": "T2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:45:00+00:00",
            "estimated": "2023-01-04T08:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Eastern Airlines",
            "iata": "MU",
            "icao": "CES"
        },
        "flight": {
            "number": "3971",
            "iata": "MU3971",
            "icao": "CES3971",
            "codeshared": {
                "airline_name": "sichuan airlines",
                "airline_iata": "3u",
                "airline_icao": "csc",
                "flight_number": "8137",
                "flight_iata": "3u8137",
                "flight_icao": "csc8137"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "3",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:20:00+00:00",
            "estimated": "2023-01-04T09:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Taipei Songshan (Sung Shan)",
            "timezone": "Asia/Taipei",
            "iata": "TSA",
            "icao": "RCSS",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:30:00+00:00",
            "estimated": "2023-01-04T12:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "EVA Air",
            "iata": "BR",
            "icao": "EVA"
        },
        "flight": {
            "number": "2175",
            "iata": "BR2175",
            "icao": "EVA2175",
            "codeshared": {
                "airline_name": "ana",
                "airline_iata": "nh",
                "airline_icao": "ana",
                "flight_number": "851",
                "flight_iata": "nh851",
                "flight_icao": "ana851"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "3",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:20:00+00:00",
            "estimated": "2023-01-04T09:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Taipei Songshan (Sung Shan)",
            "timezone": "Asia/Taipei",
            "iata": "TSA",
            "icao": "RCSS",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:30:00+00:00",
            "estimated": "2023-01-04T12:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "851",
            "iata": "NH851",
            "icao": "ANA851",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "2",
            "gate": "67B",
            "delay": null,
            "scheduled": "2023-01-04T09:20:00+00:00",
            "estimated": "2023-01-04T09:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Saga",
            "timezone": "Asia/Tokyo",
            "iata": "HSG",
            "icao": "RJFS",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:25:00+00:00",
            "estimated": "2023-01-04T11:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "981",
            "iata": "NH981",
            "icao": "ANA981",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "3",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:25:00+00:00",
            "estimated": "2023-01-04T09:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Heathrow",
            "timezone": "Europe/London",
            "iata": "LHR",
            "icao": "EGLL",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T15:35:00+00:00",
            "estimated": "2023-01-04T15:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "211",
            "iata": "NH211",
            "icao": "ANA211",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "2",
            "gate": "63",
            "delay": null,
            "scheduled": "2023-01-04T09:25:00+00:00",
            "estimated": "2023-01-04T09:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Naha",
            "timezone": "Asia/Tokyo",
            "iata": "OKA",
            "icao": "ROAH",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:25:00+00:00",
            "estimated": "2023-01-04T12:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "995",
            "iata": "NH995",
            "icao": "ANA995",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": "18",
            "delay": null,
            "scheduled": "2023-01-04T09:30:00+00:00",
            "estimated": "2023-01-04T09:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Chitose",
            "timezone": "Asia/Tokyo",
            "iata": "CTS",
            "icao": "RJCC",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:05:00+00:00",
            "estimated": "2023-01-04T11:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "British Airways",
            "iata": "BA",
            "icao": "BAW"
        },
        "flight": {
            "number": "4641",
            "iata": "BA4641",
            "icao": "BAW4641",
            "codeshared": {
                "airline_name": "jal",
                "airline_iata": "jl",
                "airline_icao": "jal",
                "flight_number": "509",
                "flight_iata": "jl509",
                "flight_icao": "jal509"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": "18",
            "delay": null,
            "scheduled": "2023-01-04T09:30:00+00:00",
            "estimated": "2023-01-04T09:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Chitose",
            "timezone": "Asia/Tokyo",
            "iata": "CTS",
            "icao": "RJCC",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:05:00+00:00",
            "estimated": "2023-01-04T11:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Hawaiian Airlines",
            "iata": "HA",
            "icao": "HAL"
        },
        "flight": {
            "number": "5238",
            "iata": "HA5238",
            "icao": "HAL5238",
            "codeshared": {
                "airline_name": "jal",
                "airline_iata": "jl",
                "airline_icao": "jal",
                "flight_number": "509",
                "flight_iata": "jl509",
                "flight_icao": "jal509"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": "18",
            "delay": null,
            "scheduled": "2023-01-04T09:30:00+00:00",
            "estimated": "2023-01-04T09:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Chitose",
            "timezone": "Asia/Tokyo",
            "iata": "CTS",
            "icao": "RJCC",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:05:00+00:00",
            "estimated": "2023-01-04T11:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JAL",
            "iata": "JL",
            "icao": "JAL"
        },
        "flight": {
            "number": "509",
            "iata": "JL509",
            "icao": "JAL509",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Sydney Kingsford Smith Airport",
            "timezone": "Australia/Sydney",
            "iata": "SYD",
            "icao": "YSSY",
            "terminal": "3",
            "gate": "7",
            "delay": null,
            "scheduled": "2023-01-04T09:15:00+00:00",
            "estimated": "2023-01-04T09:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Hamilton Island",
            "timezone": "Australia/Lindeman",
            "iata": "HTI",
            "icao": "YBHM",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T10:40:00+00:00",
            "estimated": "2023-01-04T10:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air New Zealand",
            "iata": "NZ",
            "icao": "ANZ"
        },
        "flight": {
            "number": "7370",
            "iata": "NZ7370",
            "icao": "ANZ7370",
            "codeshared": {
                "airline_name": "qantas",
                "airline_iata": "qf",
                "airline_icao": "qfa",
                "flight_number": "578",
                "flight_iata": "qf578",
                "flight_icao": "qfa578"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "2",
            "gate": "57",
            "delay": null,
            "scheduled": "2023-01-04T09:30:00+00:00",
            "estimated": "2023-01-04T09:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Chitose",
            "timezone": "Asia/Tokyo",
            "iata": "CTS",
            "icao": "RJCC",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:05:00+00:00",
            "estimated": "2023-01-04T11:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "57",
            "iata": "NH57",
            "icao": "ANA57",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "3",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:35:00+00:00",
            "estimated": "2023-01-04T09:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Heathrow",
            "timezone": "Europe/London",
            "iata": "LHR",
            "icao": "EGLL",
            "terminal": "3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T15:00:00+00:00",
            "estimated": "2023-01-04T15:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "British Airways",
            "iata": "BA",
            "icao": "BAW"
        },
        "flight": {
            "number": "4603",
            "iata": "BA4603",
            "icao": "BAW4603",
            "codeshared": {
                "airline_name": "jal",
                "airline_iata": "jl",
                "airline_icao": "jal",
                "flight_number": "43",
                "flight_iata": "jl43",
                "flight_icao": "jal43"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "3",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:35:00+00:00",
            "estimated": "2023-01-04T09:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Heathrow",
            "timezone": "Europe/London",
            "iata": "LHR",
            "icao": "EGLL",
            "terminal": "3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T15:00:00+00:00",
            "estimated": "2023-01-04T15:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "LATAM Airlines",
            "iata": "LA",
            "icao": "LAN"
        },
        "flight": {
            "number": "8911",
            "iata": "LA8911",
            "icao": "LAN8911",
            "codeshared": {
                "airline_name": "jal",
                "airline_iata": "jl",
                "airline_icao": "jal",
                "flight_number": "43",
                "flight_iata": "jl43",
                "flight_icao": "jal43"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "3",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:35:00+00:00",
            "estimated": "2023-01-04T09:35:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Heathrow",
            "timezone": "Europe/London",
            "iata": "LHR",
            "icao": "EGLL",
            "terminal": "3",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T15:00:00+00:00",
            "estimated": "2023-01-04T15:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JAL",
            "iata": "JL",
            "icao": "JAL"
        },
        "flight": {
            "number": "43",
            "iata": "JL43",
            "icao": "JAL43",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": "88",
            "delay": null,
            "scheduled": "2023-01-04T09:40:00+00:00",
            "estimated": "2023-01-04T09:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Oita",
            "timezone": "Asia/Tokyo",
            "iata": "OIT",
            "icao": "RJFO",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:25:00+00:00",
            "estimated": "2023-01-04T11:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Aeromexico",
            "iata": "AM",
            "icao": "AMX"
        },
        "flight": {
            "number": "7770",
            "iata": "AM7770",
            "icao": "AMX7770",
            "codeshared": {
                "airline_name": "jal",
                "airline_iata": "jl",
                "airline_icao": "jal",
                "flight_number": "663",
                "flight_iata": "jl663",
                "flight_icao": "jal663"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Horn Island",
            "timezone": "Australia/Brisbane",
            "iata": "HID",
            "icao": "YHID",
            "terminal": null,
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T08:45:00+00:00",
            "estimated": "2023-01-04T08:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Yorke Island",
            "timezone": "Australia/Brisbane",
            "iata": "OKR",
            "icao": "YYKI",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T09:30:00+00:00",
            "estimated": "2023-01-04T09:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Skytrans",
            "iata": "Q6",
            "icao": "SKP"
        },
        "flight": {
            "number": "147",
            "iata": "Q6147",
            "icao": "SKP147",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Soekarno-Hatta International",
            "timezone": "Asia/Jakarta",
            "iata": "CGK",
            "icao": "WIII",
            "terminal": "1",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T10:00:00+00:00",
            "estimated": "2023-01-04T10:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Hasanudin",
            "timezone": "Asia/Makassar",
            "iata": "UPG",
            "icao": "WAAA",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T13:25:00+00:00",
            "estimated": "2023-01-04T13:25:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Lion Air",
            "iata": "JT",
            "icao": "LNI"
        },
        "flight": {
            "number": "3890",
            "iata": "JT3890",
            "icao": "LNI3890",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:40:00+00:00",
            "estimated": "2023-01-04T09:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Oita",
            "timezone": "Asia/Tokyo",
            "iata": "OIT",
            "icao": "RJFO",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:30:00+00:00",
            "estimated": "2023-01-04T11:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Solaseed Air",
            "iata": "6J",
            "icao": "SNJ"
        },
        "flight": {
            "number": "93",
            "iata": "6J93",
            "icao": "SNJ93",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "2",
            "gate": "60",
            "delay": null,
            "scheduled": "2023-01-04T09:45:00+00:00",
            "estimated": "2023-01-04T09:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Fukuoka",
            "timezone": "Asia/Tokyo",
            "iata": "FUK",
            "icao": "RJFF",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:50:00+00:00",
            "estimated": "2023-01-04T11:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "247",
            "iata": "NH247",
            "icao": "ANA247",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "2",
            "gate": "65",
            "delay": null,
            "scheduled": "2023-01-04T09:45:00+00:00",
            "estimated": "2023-01-04T09:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Kumamoto",
            "timezone": "Asia/Tokyo",
            "iata": "KMJ",
            "icao": "RJFT",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:40:00+00:00",
            "estimated": "2023-01-04T11:40:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "643",
            "iata": "NH643",
            "icao": "ANA643",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": "5A",
            "delay": null,
            "scheduled": "2023-01-04T09:50:00+00:00",
            "estimated": "2023-01-04T09:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Hiroshima Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HIJ",
            "icao": "RJOA",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:20:00+00:00",
            "estimated": "2023-01-04T11:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JAL",
            "iata": "JL",
            "icao": "JAL"
        },
        "flight": {
            "number": "257",
            "iata": "JL257",
            "icao": "JAL257",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:50:00+00:00",
            "estimated": "2023-01-04T09:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Miyazaki",
            "timezone": "Asia/Tokyo",
            "iata": "KMI",
            "icao": "RJFM",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:50:00+00:00",
            "estimated": "2023-01-04T11:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Solaseed Air",
            "iata": "6J",
            "icao": "SNJ"
        },
        "flight": {
            "number": "55",
            "iata": "6J55",
            "icao": "SNJ55",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": "15",
            "delay": null,
            "scheduled": "2023-01-04T09:55:00+00:00",
            "estimated": "2023-01-04T09:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Takamatsu",
            "timezone": "Asia/Tokyo",
            "iata": "TAK",
            "icao": "RJOT",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:20:00+00:00",
            "estimated": "2023-01-04T11:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JAL",
            "iata": "JL",
            "icao": "JAL"
        },
        "flight": {
            "number": "477",
            "iata": "JL477",
            "icao": "JAL477",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": "4",
            "delay": null,
            "scheduled": "2023-01-04T09:55:00+00:00",
            "estimated": "2023-01-04T09:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Kumamoto",
            "timezone": "Asia/Tokyo",
            "iata": "KMJ",
            "icao": "RJFT",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:50:00+00:00",
            "estimated": "2023-01-04T11:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JAL",
            "iata": "JL",
            "icao": "JAL"
        },
        "flight": {
            "number": "627",
            "iata": "JL627",
            "icao": "JAL627",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "3",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T09:55:00+00:00",
            "estimated": "2023-01-04T09:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Frankfurt International Airport",
            "timezone": "Europe/Berlin",
            "iata": "FRA",
            "icao": "EDDF",
            "terminal": "1",
            "gate": "B44A",
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T17:30:00+00:00",
            "estimated": "2023-01-04T17:30:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "223",
            "iata": "NH223",
            "icao": "ANA223",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": "10",
            "delay": null,
            "scheduled": "2023-01-04T10:00:00+00:00",
            "estimated": "2023-01-04T10:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Fukuoka",
            "timezone": "Asia/Tokyo",
            "iata": "FUK",
            "icao": "RJFF",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:05:00+00:00",
            "estimated": "2023-01-04T12:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JAL",
            "iata": "JL",
            "icao": "JAL"
        },
        "flight": {
            "number": "313",
            "iata": "JL313",
            "icao": "JAL313",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "1",
            "gate": "8",
            "delay": null,
            "scheduled": "2023-01-04T10:00:00+00:00",
            "estimated": "2023-01-04T10:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Kagoshima",
            "timezone": "Asia/Tokyo",
            "iata": "KOJ",
            "icao": "RJFK",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T12:00:00+00:00",
            "estimated": "2023-01-04T12:00:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "JAL",
            "iata": "JL",
            "icao": "JAL"
        },
        "flight": {
            "number": "645",
            "iata": "JL645",
            "icao": "JAL645",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "2",
            "gate": "67A",
            "delay": null,
            "scheduled": "2023-01-04T10:05:00+00:00",
            "estimated": "2023-01-04T10:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Ube",
            "timezone": "Asia/Tokyo",
            "iata": "UBJ",
            "icao": "RJDC",
            "terminal": "2",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:50:00+00:00",
            "estimated": "2023-01-04T11:50:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "ANA",
            "iata": "NH",
            "icao": "ANA"
        },
        "flight": {
            "number": "693",
            "iata": "NH693",
            "icao": "ANA693",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "2",
            "gate": "55",
            "delay": null,
            "scheduled": "2023-01-04T10:15:00+00:00",
            "estimated": "2023-01-04T10:15:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Chitose",
            "timezone": "Asia/Tokyo",
            "iata": "CTS",
            "icao": "RJCC",
            "terminal": "D",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T11:45:00+00:00",
            "estimated": "2023-01-04T11:45:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Air Do",
            "iata": "HD",
            "icao": "ADO"
        },
        "flight": {
            "number": "19",
            "iata": "HD19",
            "icao": "ADO19",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Haneda Airport",
            "timezone": "Asia/Tokyo",
            "iata": "HND",
            "icao": "RJTT",
            "terminal": "3",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T10:10:00+00:00",
            "estimated": "2023-01-04T10:10:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Hong Kong International",
            "timezone": "Asia/Hong_Kong",
            "iata": "HKG",
            "icao": "VHHH",
            "terminal": "1",
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T14:20:00+00:00",
            "estimated": "2023-01-04T14:20:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Cathay Pacific",
            "iata": "CX",
            "icao": "CPA"
        },
        "flight": {
            "number": "543",
            "iata": "CX543",
            "icao": "CPA543",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Wuxi",
            "timezone": "Asia/Shanghai",
            "iata": "WUX",
            "icao": "ZSWX",
            "terminal": "T2",
            "gate": null,
            "baggage": "9",
            "delay": null,
            "scheduled": "2023-01-04T09:05:00+00:00",
            "estimated": "2023-01-04T09:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Xiamen Airlines",
            "iata": "MF",
            "icao": "CXA"
        },
        "flight": {
            "number": "5375",
            "iata": "MF5375",
            "icao": "CXA5375",
            "codeshared": {
                "airline_name": "sichuan airlines",
                "airline_iata": "3u",
                "airline_icao": "csc",
                "flight_number": "8025",
                "flight_iata": "3u8025",
                "flight_icao": "csc8025"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": null,
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Wuxi",
            "timezone": "Asia/Shanghai",
            "iata": "WUX",
            "icao": "ZSWX",
            "terminal": "T2",
            "gate": null,
            "baggage": "9",
            "delay": null,
            "scheduled": "2023-01-04T09:05:00+00:00",
            "estimated": "2023-01-04T09:05:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Southern Airlines",
            "iata": "CZ",
            "icao": "CSN"
        },
        "flight": {
            "number": "9375",
            "iata": "CZ9375",
            "icao": "CSN9375",
            "codeshared": {
                "airline_name": "sichuan airlines",
                "airline_iata": "3u",
                "airline_icao": "csc",
                "flight_number": "8025",
                "flight_iata": "3u8025",
                "flight_icao": "csc8025"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": "2B",
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Shaxian Airport",
            "timezone": null,
            "iata": "SQJ",
            "icao": "ZSSM",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:55:00+00:00",
            "estimated": "2023-01-04T08:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "China Express Air",
            "iata": "G5",
            "icao": "HXA"
        },
        "flight": {
            "number": "2847",
            "iata": "G52847",
            "icao": "HXA2847",
            "codeshared": null
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": "2B",
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Shaxian Airport",
            "timezone": null,
            "iata": "SQJ",
            "icao": "ZSSM",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:55:00+00:00",
            "estimated": "2023-01-04T08:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Sichuan Airlines",
            "iata": "3U",
            "icao": "CSC"
        },
        "flight": {
            "number": "4541",
            "iata": "3U4541",
            "icao": "CSC4541",
            "codeshared": {
                "airline_name": "china express air",
                "airline_iata": "g5",
                "airline_icao": "hxa",
                "flight_number": "2847",
                "flight_iata": "g52847",
                "flight_icao": "hxa2847"
            }
        },
        "aircraft": null,
        "live": null
    },
    {
        "flight_date": "2023-01-04",
        "flight_status": "scheduled",
        "departure": {
            "airport": "Chongqing Jiangbei International",
            "timezone": "Asia/Shanghai",
            "iata": "CKG",
            "icao": "ZUCK",
            "terminal": "2",
            "gate": "2B",
            "delay": null,
            "scheduled": "2023-01-04T06:55:00+00:00",
            "estimated": "2023-01-04T06:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "arrival": {
            "airport": "Shaxian Airport",
            "timezone": null,
            "iata": "SQJ",
            "icao": "ZSSM",
            "terminal": null,
            "gate": null,
            "baggage": null,
            "delay": null,
            "scheduled": "2023-01-04T08:55:00+00:00",
            "estimated": "2023-01-04T08:55:00+00:00",
            "actual": null,
            "estimated_runway": null,
            "actual_runway": null
        },
        "airline": {
            "name": "Loong Air",
            "iata": "GJ",
            "icao": "CDC"
        },
        "flight": {
            "number": "5833",
            "iata": "GJ5833",
            "icao": "CDC5833",
            "codeshared": {
                "airline_name": "china express air",
                "airline_iata": "g5",
                "airline_icao": "hxa",
                "flight_number": "2847",
                "flight_iata": "g52847",
                "flight_icao": "hxa2847"
            }
        },
        "aircraft": null,
        "live": null
    }
]

export default data