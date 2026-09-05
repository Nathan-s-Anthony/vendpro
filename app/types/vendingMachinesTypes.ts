type MachineTelemetry = {
    temperature: number;
    temperatureUnit: "°C" | "°F";
    humidity: number;

    power: {
        voltage: number;
        current: number;
        powerWatts: number;
    };

    door: {
        status: "open" | "closed";
        lastOpened: string;
    };

    compressor: {
        status: "running" | "idle" | "offline";
        runtimeMinutesToday: number;
    };

    cooling: {
        targetTemperature: number;
        currentTemperature: number;
    };

    inventory: {
        totalSlots: number;
        occupiedSlots: number;
        emptySlots: number;
        lowStockSlots: number;
    };

    sales: {
        today: number;
        revenueToday: number;
        transactionsToday: number;
    };

    connectivity: {
        signalStrength: number;
        network: "3G" | "4G" | "5G" | "WiFi" | "offline";
        lastHeartbeat: string;
    };

    payment: {
        cash: boolean;
        card: boolean;
        contactless: boolean;
        mobilePayment: boolean;
    };

    faults: {
        code: string;
        message: string;
        severity: "info" | "warning" | "critical";
    }[];
};

type VendingMachine = {
    id: number;
    name: string;
    model: string;
    serialNumber: string;

    status: "online" | "offline" | "warning";

    image: string;

    location: {
        name: string;
        address: string;
    };

    telemetry: MachineTelemetry;

    lastMaintenance: string;
    nextMaintenance: string;
};

export type { VendingMachine, MachineTelemetry };