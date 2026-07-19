(function () {
	const api = window.SubwayBuilderAPI;
	if (!api) console.error(`${TAG} SubwayBuilderAPI not found.`);
	console.log(Object.keys(api.trains.getTrainTypes()));
	api.hooks.onMapReady(() => {
		console.log(Object.keys(api.trains.getTrainTypes()));
		console.log("test");
		api.trains.modifyTrainType('heavy-metro', {
			name: "R211 (NYC)",
			stats: {
				maxSpeed: 24.6,
				maxAcceleration: 1.12,
				maxDeceleration: 1.34,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 40,
				parallelTrackSpacing: 3.7,
				trackClearance: 1.83,
				minStationTurnRadius: 400,
				maxSpeedLocalStation: 14,
				minCars: 5,
				maxCars: 10,
				carsPerCarSet: 5,
				capacityPerCar: 220,
				carLength: 18.35,
				trainWidth: 3.05,
				carCost: 2780000,
				minStationLength: 100,
				maxStationLength: 200,
				baseTrackCost: 50000,
				baseStationCost: 75000000,
				scissorsCrossoverCost: 15000000,
				trainOperationalCostPerHour: 195.0,
				carOperationalCostPerHour: 25.5,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 24,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 4.5,
				STANDARD_TUNNEL: 2.0,
				CUT_AND_COVER: 1.0,
				AT_GRADE: 0.30,
				ELEVATED: 0.8,
				TRENCHED: 0.5,
				RAMP: 0.5
			},
			appearance: { color: "#007EC6" }
		})

		api.trains.modifyTrainType('light-metro', {
			name: "Saint-Laurent (MTL)",
			stats: {
				maxSpeed: 27.8,
				maxAcceleration: 1.1,
				maxDeceleration: 1.3,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 40,
				parallelTrackSpacing: 3.58,
				trackClearance: 1.77,
				minStationTurnRadius: 800,
				maxSpeedLocalStation: 18,
				minCars: 2,
				maxCars: 4,
				carsPerCarSet: 2,
				capacityPerCar: 195,
				carLength: 19.05,
				trainWidth: 2.94,
				carCost: 2474334,
				minStationLength: 60,
				maxStationLength: 100,
				baseTrackCost: 48875,
				baseStationCost: 82500000,
				scissorsCrossoverCost: 15937500,
				trainOperationalCostPerHour: 120.0,
				carOperationalCostPerHour: 18.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 400,
				stopTimeSeconds: 21,
				tphLimit: 42,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 4.9,
				STANDARD_TUNNEL: 2.25,
				CUT_AND_COVER: 1.13,
				AT_GRADE: 0.30,
				ELEVATED: 0.78,
				TRENCHED: 0.49,
				RAMP: 0.49
			},
			appearance: { color: "#82C341" }
		})


		api.trains.registerTrainType({
			id: "NYC-B",
			name: "R188 (NYC)",
			description: "The R188 is a subway EMU built by Kawasaki for the NYC Subway's A Division that entered service in 2013. This is the 5/10 car variant. As of 2024, they are deployed on the 7 Line.",
			stats: {
				maxSpeed: 24.6,
				maxAcceleration: 1.12,
				maxDeceleration: 1.34,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 30,
				parallelTrackSpacing: 3.22,
				trackClearance: 1.83,
				minStationTurnRadius: 400,
				maxSpeedLocalStation: 14,
				minCars: 5,
				maxCars: 10,
				carsPerCarSet: 5,
				capacityPerCar: 220,
				carLength: 15.65,
				trainWidth: 2.62,
				carCost: 2270000,
				minStationLength: 100,
				maxStationLength: 200,
				baseTrackCost: 50000,
				baseStationCost: 75000000,
				scissorsCrossoverCost: 15000000,
				trainOperationalCostPerHour: 195.0,
				carOperationalCostPerHour: 25.5,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 24,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 3.79,
				STANDARD_TUNNEL: 1.83,
				CUT_AND_COVER: 0.91,
				AT_GRADE: 0.30,
				ELEVATED: 0.73,
				TRENCHED: 0.46,
				RAMP: 0.46
			},
			compatibleTrackTypes: ["NYC-B"],
			appearance: { color: "#9A38A1" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

		api.trains.registerTrainType({
			id: "auto-1",
			name: "AnsaldoBreda Driverless Metro",
			description: "The Hitachi Rail Italy Driverless Metro (formerly AnsaldoBreda) is a fully autonomous EMU family used across the globe. This is a generic model designed to allow a wider variety of cars with one model.",
			stats: {
				maxSpeed: 29.2,
				maxAcceleration: 1.3,
				maxDeceleration: 1.3,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 30,
				parallelTrackSpacing: 3.7,
				trackClearance: 1.83,
				minStationTurnRadius: 600,
				maxSpeedLocalStation: 14,
				minCars: 2,
				maxCars: 10,
				carsPerCarSet: 1,
				capacityPerCar: 233,
				carLength: 18.23,
				trainWidth: 2.85,
				carCost: 1780788,
				minStationLength: 40,
				maxStationLength: 240,
				baseTrackCost: 50000,
				baseStationCost: 82500000,
				scissorsCrossoverCost: 18750000,
				trainOperationalCostPerHour: 120.0,
				carOperationalCostPerHour: 18.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 400,
				stopTimeSeconds: 21,
				tphLimit: 42,
				crossoverSpeed: 6.7,
			},
			elevationMultipliers: {
				DEEP_BORE: 4.5,
				STANDARD_TUNNEL: 2.0,
				CUT_AND_COVER: 1.0,
				AT_GRADE: 0.30,
				ELEVATED: 0.8,
				TRENCHED: 0.5,
				RAMP: 0.5
			},
			compatibleTrackTypes: ["auto-1"],
			appearance: { color: "#D01C10" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

		api.trains.registerTrainType({
			id: "ber-j",
			name: "J-Series (Berlin)",
			description: "The Series J is a large-profile type of EMU used by the Berlin U-Bahn manufacturered by Stadler. They entered service in 2025.",
			stats: {
				maxSpeed: 19.4,
				maxAcceleration: 1.0,
				maxDeceleration: 1.2,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 35,
				parallelTrackSpacing: 3.22,
				trackClearance: 1.59,
				minStationTurnRadius: 1300,
				maxSpeedLocalStation: 13,
				minCars: 2,
				maxCars: 8,
				carsPerCarSet: 2,
				capacityPerCar: 160,
				carLength: 16.05,
				trainWidth: 2.65,
				minStationLength: 40,
				maxStationLength: 150,
				carCost: 2257336,
				baseTrackCost: 49500,
				baseStationCost: 63750000,
				scissorsCrossoverCost: 15000000,
				trainOperationalCostPerHour: 220.0,
				carOperationalCostPerHour: 28.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 30,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 3.79,
				STANDARD_TUNNEL: 1.83,
				CUT_AND_COVER: 0.91,
				AT_GRADE: 0.30,
				ELEVATED: 0.73,
				TRENCHED: 0.51,
				RAMP: 0.51
			},
			compatibleTrackTypes: ["ber-j"],
			appearance: { color: "#009BD5" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

		api.trains.registerTrainType({
			id: "bos-rl",
			name: "RL Series 4 (BOS)",
			description: "The 4th Series of rolling stock for the MBTA Red Line is a subway EMU built by CRRC. Acceleration is guessimated.",
			stats: {
				maxSpeed: 28.2,
				maxAcceleration: 1.23,
				maxDeceleration: 1.23,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 45,
				parallelTrackSpacing: 3.7,
				trackClearance: 1.83,
				minStationTurnRadius: 800,
				maxSpeedLocalStation: 13,
				minCars: 4,
				maxCars: 6,
				carsPerCarSet: 2,
				capacityPerCar: 281,
				carLength: 21.28,
				trainWidth: 3.05,
				minStationLength: 40,
				maxStationLength: 150,
				carCost: 1996479,
				baseTrackCost: 49500,
				baseStationCost: 63750000,
				scissorsCrossoverCost: 15000000,
				trainOperationalCostPerHour: 220.0,
				carOperationalCostPerHour: 28.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 30,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 4.5,
				STANDARD_TUNNEL: 2.00,
				CUT_AND_COVER: 1.0,
				AT_GRADE: 0.30,
				ELEVATED: 0.8,
				TRENCHED: 0.5,
				RAMP: 0.5
			},
			compatibleTrackTypes: ["bos-rl"],
			appearance: { color: "#DA291C" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

		api.trains.registerTrainType({
			id: "van-v",
			name: "Mark V (VAN)",
			description: "The Innovia Metro is an automated rapid transit system family built by Alstom/Bombardier that have been in service across North America since 1985. This specific model is based on the Mark V used in Vancouver since 2025. Acceleration and decceleration are guesstimates.",
			stats: {
				maxSpeed: 22.2,
				maxAcceleration: 1.0,
				maxDeceleration: 1.0,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 35,
				parallelTrackSpacing: 3.22,
				trackClearance: 1.59,
				minStationTurnRadius: 600,
				minStationLength: 100,
				maxStationLength: 120,
				maxSpeedLocalStation: 18,
				minCars: 5,
				maxCars: 5,
				carsPerCarSet: 5,
				capacityPerCar: 241,
				carLength: 16.96,
				trainWidth: 2.65,
				carCost: 840923,
				baseTrackCost: 58075,
				baseStationCost: 82500000,
				scissorsCrossoverCost: 18937500,
				trainOperationalCostPerHour: 120.0,
				carOperationalCostPerHour: 18.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 21,
				tphLimit: 42,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 3.79,
				STANDARD_TUNNEL: 1.83,
				CUT_AND_COVER: 0.91,
				AT_GRADE: 0.30,
				ELEVATED: 0.73,
				TRENCHED: 0.46,
				RAMP: 0.46
			},
			compatibleTrackTypes: ["van-v"],
			appearance: { color: "#305AA7" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

		api.trains.registerTrainType({
			id: "par-v",
			name: "MR3V/MR6V (PAR)",
			description: "The MR3V/MR6V is an automated steel-wheeled subway EMU being developed by Alstom for the Paris Metro's future Lines 15-17 based on the Metropolis family. These three lines will built to more modern standards. Some numbers are guesstimated since this set is not out yet.",
			stats: {
				maxSpeed: 30.6,
				maxAcceleration: 1.1,
				maxDeceleration: 1.2,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 40,
				parallelTrackSpacing: 3.4,
				trackClearance: 1.68,
				minStationTurnRadius: 600,
				minStationLength: 60,
				maxStationLength: 125,
				maxSpeedLocalStation: 18,
				minCars: 3,
				maxCars: 6,
				carsPerCarSet: 3,
				capacityPerCar: 167,
				carLength: 18.00,
				trainWidth: 2.80,
				carCost: 1547752,
				baseTrackCost: 48875,
				baseStationCost: 82500000,
				scissorsCrossoverCost: 15937500,
				trainOperationalCostPerHour: 120.0,
				carOperationalCostPerHour: 18.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 400,
				stopTimeSeconds: 21,
				tphLimit: 42,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 4.68,
				STANDARD_TUNNEL: 2.18,
				CUT_AND_COVER: 1.09,
				AT_GRADE: 0.30,
				ELEVATED: 0.76,
				TRENCHED: 0.47,
				RAMP: 0.47
			},
			compatibleTrackTypes: ["par-v"],
			appearance: { color: "#B90845" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

		api.trains.registerTrainType({
			id: "bart-de",
			name: "BART D/E (SF)",
			description: "The 4th Series of rolling stock for the MBTA Red Line is a subway EMU built by CRRC. Acceleration is guessimated.",
			stats: {
				maxSpeed: 31.3,
				maxAcceleration: 1.34,
				maxDeceleration: 1.34,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 45,
				parallelTrackSpacing: 3.94,
				trackClearance: 1.95,
				minStationTurnRadius: 800,
				maxSpeedLocalStation: 13,
				minCars: 2,
				maxCars: 10,
				carsPerCarSet: 2,
				capacityPerCar: 238,
				carLength: 21.34,
				trainWidth: 3.2,
				minStationLength: 60,
				maxStationLength: 250,
				carCost: 2185366,
				baseTrackCost: 55000,
				baseStationCost: 75000000,
				scissorsCrossoverCost: 15000000,
				trainOperationalCostPerHour: 195.0,
				carOperationalCostPerHour: 25.5,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 32,
				tphLimit: 24,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 4.9,
				STANDARD_TUNNEL: 2.09,
				CUT_AND_COVER: 1.04,
				AT_GRADE: 0.30,
				ELEVATED: 0.83,
				TRENCHED: 0.52,
				RAMP: 0.52
			},
			compatibleTrackTypes: ["bart-de"],
			appearance: { color: "#0099D8" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

		api.trains.registerTrainType({
			id: "auto-sbahn",
			name: "S-Tog Gen 5 (CPH)",
			description: "The currently unnamed 5th Generation of rolling stock on the Copenhagen S-Tog is being designed by a Siemens-Stadler consortium. They will be fully automatic S-Tog / S-Bahn EMUs and are supposed to enter service in 2032.",
			stats: {
				maxSpeed: 33.3,
				maxAcceleration: 1.3,
				maxDeceleration: 1.3,
				maxLateralAcceleration: 1.89,
				maxSlopePercentage: 4,
				minTurnRadius: 25,
				parallelTrackSpacing: 3.94,
				trackClearance: 1.95,
				minStationTurnRadius: 500,
				maxSpeedLocalStation: 13,
				minCars: 4,
				maxCars: 12,
				carsPerCarSet: 4,
				capacityPerCar: 143,
				carLength: 14,
				trainWidth: 3.52,
				minStationLength: 60,
				maxStationLength: 180,
				carCost: 2665564,
				baseTrackCost: 48875,
				baseStationCost: 82500000,
				scissorsCrossoverCost: 15937500,
				trainOperationalCostPerHour: 300.0,
				carOperationalCostPerHour: 40.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 400,
				stopTimeSeconds: 32,
				tphLimit: 42,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 6.3,
				STANDARD_TUNNEL: 2.71,
				CUT_AND_COVER: 1.35,
				AT_GRADE: 0.30,
				ELEVATED: 0.88,
				TRENCHED: 0.55,
				RAMP: 0.55
			},
			compatibleTrackTypes: ["auto-sbahn"],
			appearance: { color: "#961C27" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

		api.trains.registerTrainType({
			id: "rubber-metro",
			name: "Azur (MTL)",
			description: "The MPM-10 (Azur) is a rubber-tire vehicle built by Bombardier and Alstom for the Montreal Metro that entered service in 2016.",
			stats: {
				maxSpeed: 20.1,
				maxAcceleration: 1.21,
				maxDeceleration: 1.23,
				maxLateralAcceleration: 0.9,
				maxSlopePercentage: 12,
				minTurnRadius: 35,
				parallelTrackSpacing: 3.1,
				trackClearance: 1.53,
				minStationTurnRadius: 500,
				maxSpeedLocalStation: 13,
				minCars: 9,
				maxCars: 9,
				carsPerCarSet: 9,
				capacityPerCar: 173,
				carLength: 16.93,
				trainWidth: 2.51,
				minStationLength: 60,
				maxStationLength: 180,
				carCost: 1343301,
				baseTrackCost: 28750,
				baseStationCost: 75000000,
				scissorsCrossoverCost: 16500000,
				trainOperationalCostPerHour: 225.0,
				carOperationalCostPerHour: 32.5,
				trackMaintenanceCostPerMeter: 100,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 32,
				tphLimit: 24,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 3.63,
				STANDARD_TUNNEL: 1.78,
				CUT_AND_COVER: 0.89,
				AT_GRADE: 0.30,
				ELEVATED: 0.71,
				TRENCHED: 0.45,
				RAMP: 0.45
			},
			compatibleTrackTypes: ["rubber-metro"],
			appearance: { color: "#0085CA" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

		api.trains.registerTrainType({
			id: "dk-sbahn",
			name: "Litra SA/SE (CPH)",
			description: "The Litra SA/SE is an EMU produced by Alstom and Siemens for the Copenhagen S-Tog system which entered service in 1996.",
			stats: {
				maxSpeed: 33.3,
				maxAcceleration: 1.3,
				maxDeceleration: 1.2,
				maxLateralAcceleration: 1.89,
				maxSlopePercentage: 4,
				minTurnRadius: 25,
				parallelTrackSpacing: 4.24,
				trackClearance: 2.10,
				minStationTurnRadius: 500,
				maxSpeedLocalStation: 14,
				minCars: 4,
				maxCars: 16,
				carsPerCarSet: 4,
				capacityPerCar: 136,
				carLength: 10.47,
				trainWidth: 3.52,
				minStationLength: 60,
				maxStationLength: 180,
				carCost: 2500000,
				baseTrackCost: 42500,
				baseStationCost: 75000000,
				scissorsCrossoverCost: 12750000,
				trainOperationalCostPerHour: 375.0,
				carOperationalCostPerHour: 47.5,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 36,
				tphLimit: 32,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 6.3,
				STANDARD_TUNNEL: 2.71,
				CUT_AND_COVER: 1.35,
				AT_GRADE: 0.30,
				ELEVATED: 0.88,
				TRENCHED: 0.55,
				RAMP: 0.55
			},
			compatibleTrackTypes: ["dk-sbahn"],
			appearance: { color: "#BD2D3D" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: true,
			gradeCrossingBaseCost: 300000,         // multiplied by road class, lane count, angle
			gradeCrossingMaintenancePerYear: 8000, // real-world yearly $; scaled internally by TIME_FARE_MULTIPLIER and charged per in-game day
			gradeCrossingTphLimit: {                // combined-direction TPH cap, one per road class
				highway: null,                      // null = forbidden; commuter rail can't cross highways
				major: 15,
				medium: 18,
				minor: 21,
			},
		})

		api.trains.registerTrainType({
			id: "fr-sbahn",
			name: "Z 58000 (PAR)",
			description: "The RER Next Generation is a commuter rail double-decker EMU built by Alstom based off their Adessia Max family that entered service in 2023. This is the 6-car variant used on line E.",
			stats: {
				maxSpeed: 38.9,
				maxAcceleration: 1.18,
				maxDeceleration: 1.15,
				maxLateralAcceleration: 1.89,
				maxSlopePercentage: 4,
				minTurnRadius: 25,
				parallelTrackSpacing: 4.24,
				trackClearance: 2.10,
				minStationTurnRadius: 600,
				minStationLength: 120,
				maxStationLength: 240,
				maxSpeedLocalStation: 13,
				minCars: 6,
				maxCars: 12,
				carsPerCarSet: 6,
				capacityPerCar: 240,
				carLength: 18.67,
				trainWidth: 3.00,
				carCost: 2500000,
				baseTrackCost: 42500,
				baseStationCost: 63750000,
				scissorsCrossoverCost: 12750000,
				trainOperationalCostPerHour: 400.0,
				carOperationalCostPerHour: 50.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 45,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 6.71,
				STANDARD_TUNNEL: 2.44,
				CUT_AND_COVER: 1.22,
				AT_GRADE: 0.30,
				ELEVATED: 0.8,
				TRENCHED: 0.5,
				RAMP: 0.5
			},
			compatibleTrackTypes: ["fr-sbahn"],
			appearance: { color: "#C04191" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: true,
			gradeCrossingBaseCost: 300000,         // multiplied by road class, lane count, angle
			gradeCrossingMaintenancePerYear: 8000, // real-world yearly $; scaled internally by TIME_FARE_MULTIPLIER and charged per in-game day
			gradeCrossingTphLimit: {                // combined-direction TPH cap, one per road class
				highway: null,                      // null = forbidden; commuter rail can't cross highways
				major: 15,
				medium: 18,
				minor: 21,
			},
		})

		api.trains.modifyTrainType('commuter-rail',{
			name: "M9 (LIRR)",
			stats: {
				maxSpeed: 40,
				maxAcceleration: 0.9,
				maxDeceleration: 1.33,
				maxLateralAcceleration: 1.89,
				maxSlopePercentage: 2,
				minTurnRadius: 50,
				parallelTrackSpacing: 3.94,
				trackClearance: 1.95,
				minStationTurnRadius: 1100,
				minStationLength: 120,
				maxStationLength: 400,
				maxSpeedLocalStation: 13,
				minCars: 4,
				maxCars: 14,
				carsPerCarSet: 2,
				capacityPerCar: 130,
				carLength: 25.91,
				trainWidth: 3.25,
				carCost: 3500000,
				baseTrackCost: 50000,
				baseStationCost: 63750000,
				scissorsCrossoverCost: 15000000,
				trainOperationalCostPerHour: 520.0,
				carOperationalCostPerHour: 40.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 60,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 5.26,
				STANDARD_TUNNEL: 2.23,
				CUT_AND_COVER: 1.12,
				AT_GRADE: 0.30,
				ELEVATED: 0.83,
				TRENCHED: 0.52,
				RAMP: 0.52
			},
			appearance: { color: "#0039A6"},
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: true,
			gradeCrossingBaseCost: 300000,         // multiplied by road class, lane count, angle
			gradeCrossingMaintenancePerYear: 8000, // real-world yearly $; scaled internally by TIME_FARE_MULTIPLIER and charged per in-game day
			gradeCrossingTphLimit: {                // combined-direction TPH cap, one per road class
				highway: null,                      // null = forbidden; commuter rail can't cross highways
				major: 15,
				medium: 18,
				minor: 21,
			},
		})

		api.trains.registerTrainType({
			id: "flirt-4",
			name: "Stadler FLIRT 4",
			description: "The Stadler FLIRT is a family of EMUs used around the world since 2004. They are built to specification for various agencies but this is a generic model. The number represents the number of cars per set not IRL branding.",
			stats: {
				maxSpeed: 44.4,
				maxAcceleration: 1.2,
				maxDeceleration: 1.2,
				maxLateralAcceleration: 1.89,
				maxSlopePercentage: 2,
				minTurnRadius: 40,
				parallelTrackSpacing: 3.7,
				trackClearance: 1.83,
				minStationTurnRadius: 300,
				minStationLength: 80,
				maxStationLength: 350,
				maxSpeedLocalStation: 15,
				minCars: 4,
				maxCars: 16,
				carsPerCarSet: 4,
				capacityPerCar: 115,
				carLength: 18.57,
				trainWidth: 2.88,
				carCost: 1856650,
				baseTrackCost: 42500,
				baseStationCost: 63750000,
				scissorsCrossoverCost: 12750000,
				trainOperationalCostPerHour: 520.0,
				carOperationalCostPerHour: 50.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 60,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 5.46,
				STANDARD_TUNNEL: 2.44,
				CUT_AND_COVER: 1.22,
				AT_GRADE: 0.30,
				ELEVATED: 0.8,
				TRENCHED: 0.5,
				RAMP: 0.5
			},
			compatibleTrackTypes: ["flirt-4"],
			appearance: { color: "#127905" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: true,
			gradeCrossingBaseCost: 300000,         // multiplied by road class, lane count, angle
			gradeCrossingMaintenancePerYear: 8000, // real-world yearly $; scaled internally by TIME_FARE_MULTIPLIER and charged per in-game day
			gradeCrossingTphLimit: {                // combined-direction TPH cap, one per road class
				highway: null,                      // null = forbidden; commuter rail can't cross highways
				major: 15,
				medium: 18,
				minor: 21,
			},
		})

		api.trains.registerTrainType({
			id: "mlc-iii",
			name: "MultiLevel Coach III EMU",
			description: "The MultiLevel Coach III is a commuter rail EMU built by Bombardier/Alstom that entered service in 2006. They are used on multiple networks across Eastern North America.",
			stats: {
				maxSpeed: 44.7,
				maxAcceleration: 0.8,
				maxDeceleration: 1.05,
				maxLateralAcceleration: 1.89,
				maxSlopePercentage: 2,
				minTurnRadius: 50,
				parallelTrackSpacing: 3.7,
				trackClearance: 1.83,
				minStationTurnRadius: 300,
				minStationLength: 100,
				maxStationLength: 330,
				maxSpeedLocalStation: 15,
				minCars: 3,
				maxCars: 12,
				carsPerCarSet: 1,
				capacityPerCar: 135,
				carLength: 25.91,
				trainWidth: 3.05,
				carCost: 4800000,
				baseTrackCost: 42500,
				baseStationCost: 63750000,
				scissorsCrossoverCost: 12750000,
				trainOperationalCostPerHour: 520.0,
				carOperationalCostPerHour: 50.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 60,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 5.46,
				STANDARD_TUNNEL: 2.44,
				CUT_AND_COVER: 1.22,
				AT_GRADE: 0.30,
				ELEVATED: 0.8,
				TRENCHED: 0.5,
				RAMP: 0.5
			},
			compatibleTrackTypes: ["mlc-iii"],
			appearance: { color: "#00A3E3" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: true,
			gradeCrossingBaseCost: 300000,         // multiplied by road class, lane count, angle
			gradeCrossingMaintenancePerYear: 8000, // real-world yearly $; scaled internally by TIME_FARE_MULTIPLIER and charged per in-game day
			gradeCrossingTphLimit: {                // combined-direction TPH cap, one per road class
				highway: null,                      // null = forbidden; commuter rail can't cross highways
				major: 15,
				medium: 18,
				minor: 21,
			},
		})

		api.trains.registerTrainType({
			id: "ns-dmu",
			name: "Nippon Sharyo DMU",
			description: "The Nippon Sharyo DMU is an acutely named vehicle which has been in service since 2015 in California and Toronto.",
			stats: {
				maxSpeed: 35.3,
				maxAcceleration: 0.35,
				maxDeceleration: 0.94,
				maxLateralAcceleration: 1.89,
				maxSlopePercentage: 1,
				minTurnRadius: 25,
				parallelTrackSpacing: 3.7,
				trackClearance: 1.83,
				minStationTurnRadius: 800,
				minStationLength: 40,
				maxStationLength: 300,
				maxSpeedLocalStation: 15,
				minCars: 2,
				maxCars: 6,
				carsPerCarSet: 1,
				capacityPerCar: 150,
				carLength: 12.95,
				trainWidth: 3.05,
				carCost: 1464133,
				baseTrackCost: 37500,
				baseStationCost: 63750000,
				scissorsCrossoverCost: 7500000,
				trainOperationalCostPerHour: 560.0,
				carOperationalCostPerHour: 75.0,
				trackMaintenanceCostPerMeter: 100,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 60,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 4.82,
				STANDARD_TUNNEL: 2.14,
				CUT_AND_COVER: 1.07,
				AT_GRADE: 0.30,
				ELEVATED: 0.8,
				TRENCHED: 0.5,
				RAMP: 0.5
			},
			compatibleTrackTypes: ["ns-dmu"],
			appearance: { color: "#00A3E3" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: true,
			gradeCrossingBaseCost: 300000,         // multiplied by road class, lane count, angle
			gradeCrossingMaintenancePerYear: 8000, // real-world yearly $; scaled internally by TIME_FARE_MULTIPLIER and charged per in-game day
			gradeCrossingTphLimit: {                // combined-direction TPH cap, one per road class
				highway: null,                      // null = forbidden; commuter rail can't cross highways
				major: 15,
				medium: 18,
				minor: 21,
			},
		})

		api.trains.registerTrainType({
			id: "desiro-sd",
			name: "Desiro Classic (SD)",
			description: "The Siemens Desiro Classic is a family of metro DMUs and EMUs in service across the world since 1999. This model is the DMU used by San Diego's Sprinter service.",
			stats: {
				maxSpeed: 25.0,
				maxAcceleration: 1.1,
				maxDeceleration: 1.1,
				maxLateralAcceleration: 1.89,
				maxSlopePercentage: 1,
				minTurnRadius: 40,
				parallelTrackSpacing: 3.7,
				trackClearance: 1.83,
				minStationTurnRadius: 500,
				minStationLength: 60,
				maxStationLength: 100,
				maxSpeedLocalStation: 15,
				minCars: 2,
				maxCars: 4,
				carsPerCarSet: 2,
				capacityPerCar: 109,
				carLength: 20.85,
				trainWidth: 2.83,
				carCost: 4300000,
				baseTrackCost: 37500,
				baseStationCost: 63750000,
				scissorsCrossoverCost: 7500000,
				trainOperationalCostPerHour: 560.0,
				carOperationalCostPerHour: 75.0,
				trackMaintenanceCostPerMeter: 100,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 60,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 4.82,
				STANDARD_TUNNEL: 2.14,
				CUT_AND_COVER: 1.07,
				AT_GRADE: 0.30,
				ELEVATED: 0.8,
				TRENCHED: 0.5,
				RAMP: 0.5
			},
			compatibleTrackTypes: ["desiro-sd"],
			appearance: { color: "#0055A4" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: true,
			gradeCrossingBaseCost: 300000,         // multiplied by road class, lane count, angle
			gradeCrossingMaintenancePerYear: 8000, // real-world yearly $; scaled internally by TIME_FARE_MULTIPLIER and charged per in-game day
			gradeCrossingTphLimit: {                // combined-direction TPH cap, one per road class
				highway: null,                      // null = forbidden; commuter rail can't cross highways
				major: 15,
				medium: 18,
				minor: 21,
			},
		})

		api.trains.registerTrainType({
			id: "syd-ab",
			name: "A/B Sets (SYD)",
			description: "The A and B sets / Waratahs are double-decker commuter rail EMUs built for Sydney Trains by Downer Rail and CRRC that entered service in 2011.The MultiLevel Coach III is a commuter rail EMU built by Bombardier/Alstom that entered service in 2006. They are used on multiple networks across Eastern North America.",
			stats: {
				maxSpeed: 36.1,
				maxAcceleration: 1.03,
				maxDeceleration: 1.05,
				maxLateralAcceleration: 1.89,
				maxSlopePercentage: 2,
				minTurnRadius: 50,
				parallelTrackSpacing: 3.7,
				trackClearance: 1.83,
				minStationTurnRadius: 700,
				minStationLength: 100,
				maxStationLength: 180,
				maxSpeedLocalStation: 15,
				minCars: 4,
				maxCars: 8,
				carsPerCarSet: 4,
				capacityPerCar: 150,
				carLength: 20.39,
				trainWidth: 3.04,
				carCost: 1985629,
				baseTrackCost: 42500,
				baseStationCost: 63750000,
				scissorsCrossoverCost: 12750000,
				trainOperationalCostPerHour: 520.0,
				carOperationalCostPerHour: 50.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 320,
				stopTimeSeconds: 60,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 5.46,
				STANDARD_TUNNEL: 2.44,
				CUT_AND_COVER: 1.22,
				AT_GRADE: 0.30,
				ELEVATED: 0.8,
				TRENCHED: 0.5,
				RAMP: 0.5
			},
			compatibleTrackTypes: ["syd-ab"],
			appearance: { color: "#6F818E" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: true,
			gradeCrossingBaseCost: 300000,         // multiplied by road class, lane count, angle
			gradeCrossingMaintenancePerYear: 8000, // real-world yearly $; scaled internally by TIME_FARE_MULTIPLIER and charged per in-game day
			gradeCrossingTphLimit: {                // combined-direction TPH cap, one per road class
				highway: null,                      // null = forbidden; commuter rail can't cross highways
				major: 15,
				medium: 18,
				minor: 21,
			},
		})

		api.trains.registerTrainType({
			id: "wsh",
			name: "8000 Series (WSH)",
			description: "The 8000-series is a subway EMU built by Hitachi for Washington DC's Subway that will enter service in 2028. Acceleration is a guesstimate.",
			stats: {
				maxSpeed: 33.5,
				maxAcceleration: 1.25,
				maxDeceleration: 0.98,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 45,
				parallelTrackSpacing: 3.76,
				trackClearance: 1.86,
				minStationTurnRadius: 900,
				maxSpeedLocalStation: 14,
				minCars: 4,
				maxCars: 8,
				carsPerCarSet: 2,
				capacityPerCar: 222,
				carLength: 22.86,
				trainWidth: 3.09,
				carCost: 2750000,
				minStationLength: 100,
				maxStationLength: 200,
				baseTrackCost: 57500,
				baseStationCost: 82500000,
				scissorsCrossoverCost: 18750000,
				trainOperationalCostPerHour: 120.0,
				carOperationalCostPerHour: 18,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 400,
				stopTimeSeconds: 24,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 4.6,
				STANDARD_TUNNEL: 2.02,
				CUT_AND_COVER: 1.01,
				AT_GRADE: 0.30,
				ELEVATED: 0.81,
				TRENCHED: 0.51,
				RAMP: 0.51
			},
			compatibleTrackTypes: ["wsh"],
			appearance: { color: "#9D9F9C" },
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

		api.trains.registerTrainType({
			id: "ldn",
			name: "2024 Stock (LDN)",
			description: "2024 Stock is a subway EMU built by Siemens as part of their Inspiro family. It will enter service around early 2027 on the Picadilly Line, and potentially later the Central, Waterloo & City, and Bakerloo lines.",
			stats: {
				maxSpeed: 27.5,
				maxAcceleration: 1.4,
				maxDeceleration: 1.4,
				maxLateralAcceleration: 1.63,
				maxSlopePercentage: 5.5,
				minTurnRadius: 25,
				parallelTrackSpacing: 3.22,
				trackClearance: 1.59,
				minStationTurnRadius: 390,
				maxSpeedLocalStation: 18,
				minCars: 9,
				maxCars: 9,
				carsPerCarSet: 9,
				capacityPerCar: 133,
				carLength: 12.63,
				trainWidth: 2.65,
				carCost: 2336034,
				minStationLength: 120,
				maxStationLength: 150,
				baseTrackCost: 66125,
				baseStationCost: 82500000,
				scissorsCrossoverCost: 20625000,
				trainOperationalCostPerHour: 120.0,
				carOperationalCostPerHour: 18,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 400,
				stopTimeSeconds: 24,
				tphLimit: 28,
				crossoverSpeed: 6.7, // m/s (~15 mph) — scissors-crossover speed cap
			},
			elevationMultipliers: {
				DEEP_BORE: 3.79,
				STANDARD_TUNNEL: 1.83,
				CUT_AND_COVER: 0.91,
				AT_GRADE: 0.30,
				ELEVATED: 0.73,
				TRENCHED: 0.46,
				RAMP: 0.46
			},
			compatibleTrackTypes: ["ldn"],
			appearance: { color: "#1B3F94"},
			portalCost: 10000000, // surcharge per at-grade ↔ cut-and-cover portal
			rampCost: 5000000,    // surcharge per at-grade ↔ elevated ramp
			allowGradeCrossing: false
		})

	})
})();