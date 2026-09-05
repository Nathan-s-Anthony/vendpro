export const models = [
    {
        id: 0,
        name: "VendPro V-200",
        model: "V-200",
        serialNumber: "VPV200-001842",
        status: "online",
        image: "https://images.pexels.com/photos/9395586/pexels-photo-9395586.jpeg",
        location: {
            name: "Sandton City Mall",
            address: "83 Rivonia Road, Sandton",
        },

        telemetry: {
            temperature: 4.8,
            temperatureUnit: "°C",

            humidity: 42,

            power: {
                voltage: 231,
                current: 2.4,
                powerWatts: 554,
            },

            door: {
                status: "closed",
                lastOpened: "2026-09-05T11:42:18",
            },

            compressor: {
                status: "running",
                runtimeMinutesToday: 187,
            },

            cooling: {
                targetTemperature: 4,
                currentTemperature: 4.8,
            },

            inventory: {
                totalSlots: 48,
                occupiedSlots: 41,
                emptySlots: 7,
                lowStockSlots: 5,
            },

            sales: {
                today: 84,
                revenueToday: 1260.50,
                transactionsToday: 84,
            },

            connectivity: {
                signalStrength: 87,
                network: "4G",
                lastHeartbeat: "2026-09-05T14:43:21",
            },

            payment: {
                cash: true,
                card: true,
                contactless: true,
                mobilePayment: true,
            },

            faults: [],
        },

        lastMaintenance: "2026-08-21",
        nextMaintenance: "2026-11-21",
    },

    {
        id: 1,
        name: "VendPro V-350",
        model: "V-350",
        serialNumber: "VPV350-003921",
        status: "warning",
        image: "https://images.pexels.com/photos/39083422/pexels-photo-39083422.jpeg",

        location: {
            name: "Rosebank Office Park",
            address: "191 Jan Smuts Avenue, Rosebank",
        },

        telemetry: {
            temperature: 7.6,
            temperatureUnit: "°C",

            humidity: 58,

            power: {
                voltage: 229,
                current: 3.1,
                powerWatts: 710,
            },

            door: {
                status: "closed",
                lastOpened: "2026-09-05T09:17:44",
            },

            compressor: {
                status: "running",
                runtimeMinutesToday: 312,
            },

            cooling: {
                targetTemperature: 4,
                currentTemperature: 7.6,
            },

            inventory: {
                totalSlots: 60,
                occupiedSlots: 23,
                emptySlots: 37,
                lowStockSlots: 9,
            },

            sales: {
                today: 51,
                revenueToday: 742.00,
                transactionsToday: 51,
            },

            connectivity: {
                signalStrength: 61,
                network: "4G",
                lastHeartbeat: "2026-09-05T14:41:09",
            },

            payment: {
                cash: true,
                card: true,
                contactless: true,
                mobilePayment: false,
            },

            faults: [
                {
                    code: "TEMP_HIGH",
                    message: "Cabinet temperature above target",
                    severity: "warning",
                },
            ],
        },

        lastMaintenance: "2026-07-12",
        nextMaintenance: "2026-10-12",
    },

    {
        id: 2,
        name: "VendPro Mini 100",
        model: "MINI-100",
        serialNumber: "VPM100-008721",
        status: "offline",
        image: "https://images.pexels.com/photos/39083422/pexels-photo-39083422.jpeg",

        location: {
            name: "Cape Town Station",
            address: "Adderley Street, Cape Town",
        },

        telemetry: {
            temperature: 12.4,
            temperatureUnit: "°C",

            humidity: 71,

            power: {
                voltage: 0,
                current: 0,
                powerWatts: 0,
            },

            door: {
                status: "closed",
                lastOpened: "2026-09-04T18:23:11",
            },

            compressor: {
                status: "offline",
                runtimeMinutesToday: 0,
            },

            cooling: {
                targetTemperature: 4,
                currentTemperature: 12.4,
            },

            inventory: {
                totalSlots: 24,
                occupiedSlots: 19,
                emptySlots: 5,
                lowStockSlots: 3,
            },

            sales: {
                today: 0,
                revenueToday: 0,
                transactionsToday: 0,
            },

            connectivity: {
                signalStrength: 0,
                network: "offline",
                lastHeartbeat: "2026-09-04T18:24:02",
            },

            payment: {
                cash: true,
                card: false,
                contactless: false,
                mobilePayment: false,
            },

            faults: [
                {
                    code: "POWER_LOSS",
                    message: "Machine has lost mains power",
                    severity: "critical",
                },
                {
                    code: "OFFLINE",
                    message: "No telemetry heartbeat received",
                    severity: "critical",
                },
            ],
        },

        lastMaintenance: "2026-06-18",
        nextMaintenance: "2026-09-18",
    },

    {
        id: 3,
        name: "VendPro V-500",
        model: "V-500",
        serialNumber: "VPV500-004612",
        status: "online",
        image: "https://images.pexels.com/photos/36545793/pexels-photo-36545793.jpeg",
        location: {
            name: "Menlyn Maine",
            address: "Menlyn, Pretoria",
        },

        telemetry: {
            temperature: 3.9,
            temperatureUnit: "°C",

            humidity: 38,

            power: {
                voltage: 232,
                current: 2.1,
                powerWatts: 487,
            },

            door: {
                status: "closed",
                lastOpened: "2026-09-05T13:51:32",
            },

            compressor: {
                status: "idle",
                runtimeMinutesToday: 142,
            },

            cooling: {
                targetTemperature: 4,
                currentTemperature: 3.9,
            },

            inventory: {
                totalSlots: 72,
                occupiedSlots: 68,
                emptySlots: 4,
                lowStockSlots: 2,
            },

            sales: {
                today: 126,
                revenueToday: 2185.00,
                transactionsToday: 126,
            },

            connectivity: {
                signalStrength: 94,
                network: "5G",
                lastHeartbeat: "2026-09-05T14:46:51",
            },

            payment: {
                cash: true,
                card: true,
                contactless: true,
                mobilePayment: true,
            },

            faults: [],
        },

        lastMaintenance: "2026-08-03",
        nextMaintenance: "2026-11-03",
    },
    {
        id: 4,
        name: "VendPro V-420",
        model: "V-420",
        serialNumber: "VPV420-006735",
        status: "online",
        image: "https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg",

        location: {
            name: "Rosebank Mall",
            address: "15A Cradock Avenue, Rosebank",
        },

        telemetry: {
            temperature: 4.2,
            temperatureUnit: "°C",

            humidity: 41,

            power: {
                voltage: 230,
                current: 2.3,
                powerWatts: 529,
            },

            door: {
                status: "closed",
                lastOpened: "2026-09-05T12:28:41",
            },

            compressor: {
                status: "running",
                runtimeMinutesToday: 176,
            },

            cooling: {
                targetTemperature: 4,
                currentTemperature: 4.2,
            },

            inventory: {
                totalSlots: 54,
                occupiedSlots: 47,
                emptySlots: 7,
                lowStockSlots: 4,
            },

            sales: {
                today: 93,
                revenueToday: 1548.50,
                transactionsToday: 93,
            },

            connectivity: {
                signalStrength: 88,
                network: "4G",
                lastHeartbeat: "2026-09-05T14:44:17",
            },

            payment: {
                cash: true,
                card: true,
                contactless: true,
                mobilePayment: true,
            },

            faults: [],
        },

        lastMaintenance: "2026-07-29",
        nextMaintenance: "2026-10-29",
    },

    {
        id: 5,
        name: "VendPro V-280",
        model: "V-280",
        serialNumber: "VPV280-009184",
        status: "warning",
        image: "https://images.pexels.com/photos/3735168/pexels-photo-3735168.jpeg",

        location: {
            name: "Gateway Theatre of Shopping",
            address: "1 Palm Boulevard, Umhlanga",
        },

        telemetry: {
            temperature: 6.8,
            temperatureUnit: "°C",

            humidity: 53,

            power: {
                voltage: 228,
                current: 2.8,
                powerWatts: 638,
            },

            door: {
                status: "closed",
                lastOpened: "2026-09-05T10:36:22",
            },

            compressor: {
                status: "running",
                runtimeMinutesToday: 289,
            },

            cooling: {
                targetTemperature: 4,
                currentTemperature: 6.8,
            },

            inventory: {
                totalSlots: 40,
                occupiedSlots: 29,
                emptySlots: 11,
                lowStockSlots: 6,
            },

            sales: {
                today: 67,
                revenueToday: 982.00,
                transactionsToday: 67,
            },

            connectivity: {
                signalStrength: 73,
                network: "4G",
                lastHeartbeat: "2026-09-05T14:39:52",
            },

            payment: {
                cash: true,
                card: true,
                contactless: true,
                mobilePayment: false,
            },

            faults: [
                {
                    code: "TEMP_HIGH",
                    message: "Cabinet temperature above target",
                    severity: "warning",
                },
            ],
        },

        lastMaintenance: "2026-08-14",
        nextMaintenance: "2026-11-14",
    },
];