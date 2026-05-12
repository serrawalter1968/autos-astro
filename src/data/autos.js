export const autos = [
  {
    id: 1,
    nombre: "BMW Serie 7",
    marca: "BMW",
    precio: 125000,
    imagen: "/images/autos 01.jpg",
    descripcion: "El BMW Serie 7 representa la máxima expresión de lujo y tecnología en la línea de sedanes ejecutivos. Con su diseño elegante y líneas fluidas, este vehículo ofrece una experiencia de conducción incomparable.",
    especificaciones: {
      motor: "3.0L TwinPower Turbo inline-6",
      potencia: "340 HP",
      torque: "450 Nm",
      transmision: "Automática de 8 velocidades",
      traccion: "Integral xDrive",
      velocidadMax: "250 km/h",
      aceleracion: "5.1 s (0-100 km/h)"
    },
    tecnologia: [
      "Sistema de infoentretenimiento iDrive 8",
      "Pantalla curva de 12.3\"",
      "Asistente de voz inteligente",
      "Carga inalámbrica para smartphone",
      "Sistema de sonido premium Bowers & Wilkins",
      "Head-Up Display",
      "Cámara de visión 360°",
      "Asientos con calefacción y ventilación"
    ],
    seguridad: [
      "Control de distancia ACC",
      "Asistente de mantenimiento de carril",
      "Frenado automático de emergencia",
      "Detección de tráfico cruzado",
      "Airbags múltiples",
      "Sistema de monitoreo de presión de neumáticos"
    ],
    colores: ["Negro Metálico", "Plata Glacier", "Azul Alpine", "Blanco Mineral"]
  },
  {
    id: 2,
    nombre: "Mercedes-Benz S-Class",
    marca: "Mercedes-Benz",
    precio: 142000,
    imagen: "/images/autos 02.jpg",
    descripcion: "El Mercedes-Benz S-Class es el vehículo más sofisticado de la marca alemana, estableciendo estándares en comodidad, tecnología y seguridad para el segmento de lujo.",
    especificaciones: {
      motor: "3.0L Inline-6 Turbo con EQ Boost",
      potencia: "362 HP",
      torque: "500 Nm",
      transmision: "Automática 9G-TRONIC",
      traccion: "Integral 4MATIC",
      velocidadMax: "250 km/h",
      aceleracion: "5.0 s (0-100 km/h)"
    },
    tecnologia: [
      "MBUX Hyperscreen",
      "Pantallas OLED de 12.3\"",
      "Asistente de realidad aumentada",
      "Control gestual",
      "Sistema de sonido 4D Burmester",
      "Iluminación ambiental 64 colores",
      "Climatizador automático Thermotronic",
      "Portón trasero eléctrico"
    ],
    seguridad: [
      "Paquete de asistencia a la conducción",
      "Frenado activo con cross-traffic",
      "Asistente de ángulo muerto",
      "Pre-Safe system",
      "Airbags de última generación",
      "Suspensión AIRMATIC"
    ],
    colores: ["Negro Obsidiana", "Plata Diamond", "Azul Nautical", "Blanco Diamond"]
  },
  {
    id: 3,
    nombre: "Audi A8",
    marca: "Audi",
    precio: 118000,
    imagen: "/images/autos 03.jpg",
    descripcion: "El Audi A8 combina diseño progresivo con tecnología innovadora, ofreciendo la experiencia de lujo más avanzada de la marca de los cuatro aros.",
    especificaciones: {
      motor: "3.0L V6 Turbo",
      potencia: "335 HP",
      torque: "500 Nm",
      transmision: "Tiptronic de 8 velocidades",
      traccion: "Integral quattro",
      velocidadMax: "250 km/h",
      aceleracion: "5.6 s (0-100 km/h)"
    },
    tecnologia: [
      "MMI touch response",
      "Pantalla superior de 10.1\"",
      "Audi virtual cockpit plus",
      "Sistema de audio 3D Bang & Olufsen",
      "Iluminación Matrix LED",
      "Techo panorámico",
      "Asientos delanteros climatizados",
      "Ambient LED"
    ],
    seguridad: [
      "Audi pre sense city",
      "Asistente de tráfico",
      "Cámara de visión periférica",
      "Park assist plus",
      "Airbags frontales y laterales",
      "Sistema de alarma"
    ],
    colores: ["Negro Mythos", "Plata Florette", "Azul firmamento", "Blanco Glacier"]
  },
  {
    id: 4,
    nombre: "Porsche 911 Carrera",
    marca: "Porsche",
    precio: 165000,
    imagen: "/images/autos 04.jpg",
    descripcion: "El Porsche 911 es el ícono deportivo por excelencia, combinando herencia histórica con tecnología de vanguardia para ofrecer una experiencia de conducción pura.",
    especificaciones: {
      motor: "3.0L Twin-Turbo Flat-6",
      potencia: "380 HP",
      torque: "450 Nm",
      transmision: "PDK de 8 velocidades",
      traccion: "Trasera",
      velocidadMax: "291 km/h",
      aceleracion: "4.0 s (0-100 km/h)"
    },
    tecnologia: [
      "Porsche Communication Management",
      "Pantalla táctil de 10.9\"",
      "Apple CarPlay",
      "Sistema de sonido Bose",
      "Connect Plus",
      "Control de modos de conducción",
      "Suspensión adaptativa PASM",
      "Volante deportivo GT"
    ],
    seguridad: [
      "Sistema de estabilidad PSM",
      "Airbags frontales y laterales",
      "Cámara de reversa",
      "Park assist",
      "Control de tracción",
      "Frenos de cerámica PCCB"
    ],
    colores: ["Rojo Guards", "Negro Jet", "Plata GT", "Azul Miami", "Blanco Carrara"]
  },
  {
    id: 5,
    nombre: "Lexus LS",
    marca: "Lexus",
    precio: 98000,
    imagen: "/images/autos 05.jpg",
    descripcion: "El Lexus LS representa la máxima expresión de Hospitalidad Japonesa (Omotenashi) en el segmento de lujo, combinando artesanía excepcional con innovación tecnológica.",
    especificaciones: {
      motor: "3.5L V6 Dual VVT-i",
      potencia: "416 HP",
      torque: "442 Nm",
      transmision: "Automática de 10 velocidades",
      traccion: "Integral",
      velocidadMax: "250 km/h",
      aceleracion: "4.6 s (0-100 km/h)"
    },
    tecnologia: [
      "Sistema multimedia Lexus Interface",
      "Pantalla de 12.3\"",
      "Audio Mark Levinson",
      "Head-Up Display",
      "Cámara de visión全景",
      "Techo panorámico",
      "Asientos con función de relajación",
      "Climatizador automático"
    ],
    seguridad: [
      "Lexus Safety System +",
      "Sistema pre-colisión",
      "Control de velocidad adaptativo",
      "Asistente de mantenimiento de carril",
      "Monitoreo de punto ciego",
      "Airbags múltiples"
    ],
    colores: ["Negro Onyx", "Plata Mercury", "Rojo Crimson", "Blanco Pearl"]
  },
  {
    id: 6,
    nombre: "Jaguar XJ",
    marca: "Jaguar",
    precio: 105000,
    imagen: "/images/autos 06.jpg",
    descripcion: "El Jaguar XJ combina elegancia british con rendimiento deportivo, ofreciendo un Sedan de lujo que impresiona tanto por su presencia como por su dinámica de conducción.",
    especificaciones: {
      motor: "3.0L V6 Supercharged",
      potencia: "340 HP",
      torque: "450 Nm",
      transmision: "Automática de 8 velocidades",
      traccion: "Trasera",
      velocidadMax: "250 km/h",
      aceleracion: "5.9 s (0-100 km/h)"
    },
    tecnologia: [
      "InControl Touch Pro",
      "Pantalla de 10.2\"",
      "Meridian Sound System",
      "Connect Pro",
      "Wi-Fi热点",
      "Control por voz",
      "Asientos de piel semianilina",
      "Techo panorámico"
    ],
    seguridad: [
      "Emergency Braking",
      "Lane Keep Assist",
      "Traffic Sign Recognition",
      "Blind Spot Monitor",
      "Cámara surround",
      "Airbags frontales y laterales"
    ],
    colores: ["Negro Santorini", "Plata Modern", "Azul Portofino", "Verde British Racing"]
  },
  {
    id: 7,
    nombre: "Bentley Continental",
    marca: "Bentley",
    precio: 235000,
    imagen: "/images/autos 07.jpg",
    descripcion: "El Bentley Continental GT representa elPináculo del lujo británico, combinando artesanía manual精湛 con potencia exceptional y comportamiento refinado.",
    especificaciones: {
      motor: "4.0L V8 Twin-Turbo",
      potencia: "550 HP",
      torque: "770 Nm",
      transmision: "DCT de 8 velocidades",
      traccion: "Integral",
      velocidadMax: "318 km/h",
      aceleracion: "3.7 s (0-100 km/h)"
    },
    tecnologia: [
      "MMI touch pro",
      "Pantalla rotativa de 12.3\"",
      "Audio Naim",
      "Head-Up Display",
      "Asientos con massage",
      "Climatizador de 4 zonas",
      "Cámara de visión 360°",
      "Portón trasero eléctrico"
    ],
    seguridad: [
      "City Assist",
      "Touring Assist",
      "Night Vision",
      "Pre-Sense Basic",
      "Airbags completos",
      "ABS con EBD"
    ],
    colores: ["Negro Onyx", "Azul Glacier", "Verde Wind", "Rojo Havana", "Plata Moon"]
  },
  {
    id: 8,
    nombre: "Rolls-Royce Ghost",
    marca: "Rolls-Royce",
    precio: 320000,
    imagen: "/images/autos 08.jpg",
    descripcion: "El Rolls-Royce Ghost es la definición última de lujo discreto, ofreciendo una experiencia de viaje donde cada detalle ha sido cuidadosamente considerado para el máximo confort.",
    especificaciones: {
      motor: "6.75L V12 Twin-Turbo",
      potencia: "571 HP",
      torque: "850 Nm",
      transmision: "Automática de 8 velocidades",
      traccion: "Trasera",
      velocidadMax: "250 km/h",
      aceleracion: "4.8 s (0-100 km/h)"
    },
    tecnologia: [
      "Spirit Architecture",
      "Pantalla de infoentretenimiento",
      "Audio Bespoke",
      "Techo Starlight",
      "Asientos con función de gravedad",
      "Climatizador de 5 zonas",
      "Portón trasero de apertura automática",
      "Paragolpes iluminados"
    ],
    seguridad: [
      "Collision Avoidance",
      "Lane Departure Warning",
      "Cruise Control adaptativo",
      "Cámara surround",
      "Airbags completos",
      "Sistema de alarma"
    ],
    colores: ["Negro Phantom", "Plata Jubilee", "Azul Jubilee", "Blanco Arctic"]
  },
  {
    id: 9,
    nombre: "Ferrari Roma",
    marca: "Ferrari",
    precio: 245000,
    imagen: "/images/autos 09.jpg",
    descripcion: "El Ferrari Roma es un coupè 2+2 que encarna la esencia del lifestyle italiano, combinando rendimiento excepcional con elegancia atemporal y confort cotidiano.",
    especificaciones: {
      motor: "3.9L V8 Twin-Turbo",
      potencia: "620 HP",
      torque: "760 Nm",
      transmision: "DCT de 8 velocidades",
      traccion: "Trasera",
      velocidadMax: "320 km/h",
      aceleracion: "3.4 s (0-100 km/h)"
    },
    tecnologia: [
      "Infotainment con Apple CarPlay",
      "Pantalla de 8.4\"",
      "Sonido premium JBL",
      "Control de modosmanettino",
      "Suspensión magnetorreológica",
      "Volante con mandos táctiles",
      "Cámara de visión posterior",
      "Keyless start"
    ],
    seguridad: [
      "Freno de emergencia automático",
      "Control de estabilidad",
      "Airbags frontales",
      "Cámara de reversa",
      "Sensor de presión de neumáticos",
      "ABS optimizado"
    ],
    colores: ["Rojo Corsa", "Negro", "Gris Alloy", "Azul Corsa", "Bianco Avus"]
  },
  {
    id: 10,
    nombre: "Maserati Quattroporte",
    marca: "Maserati",
    precio: 145000,
    imagen: "/images/autos 10.jpg",
    descripcion: "El Maserati Quattroporte fusiona tradición italiana con ingeniería de vanguardia, ofreciendo un Sedan deportivo que combina lujo, rendimiento y personalidad única.",
    especificaciones: {
      motor: "3.8L V8 Twin-Turbo",
      potencia: "580 HP",
      torque: "730 Nm",
      transmision: "Automática de 8 velocidades",
      traccion: "Trasera",
      velocidadMax: "310 km/h",
      aceleracion: "4.1 s (0-100 km/h)"
    },
    tecnologia: [
      "Maserati Touch Control Plus",
      "Pantalla de 10.1\"",
      "Audio Harman Kardon",
      "Apple CarPlay/Android Auto",
      "Techo panorámico",
      "Asientos de piel premium",
      "Cámara surround",
      "Portón eléctrico"
    ],
    seguridad: [
      "Sistema de frenado integrado",
      "Lane Keeping Assist",
      "Blind Spot Alert",
      "Traffic Sign Recognition",
      "Airbags múltiples",
      "Control de tracción"
    ],
    colores: ["Negro Nero", "Azul Blu", "Rojo Rosso", "Gris Grigio", "Blanco Bianco"]
  },
  {
    id: 11,
    nombre: "Aston Martin DB11",
    marca: "Aston Martin",
    precio: 198000,
    imagen: "/images/autos 11.jpg",
    descripcion: "El Aston Martin DB11 es un GT de lujo que combina belleza escultórica con potencia bruta, representando la máxima expresión de ingeniería británica.",
    especificaciones: {
      motor: "4.0L V8 Twin-Turbo",
      potencia: "510 HP",
      torque: "675 Nm",
      transmision: "Automática de 8 velocidades",
      traccion: "Trasera",
      velocidadMax: "301 km/h",
      aceleracion: "4.0 s (0-100 km/h)"
    },
    tecnologia: [
      "AM Infotainment System",
      "Pantalla de 10.25\"",
      "Audio Aston Martin",
      "Navegación premium",
      "Cámara de visión 360°",
      "Asientos sport climatizados",
      "Volante de piel",
      "Iluminación LED adaptativa"
    ],
    seguridad: [
      "ABS con EBD",
      "Control de estabilidad",
      "Airbags frontales y laterales",
      "Cámara de reversa",
      "Sensores de estacionamiento",
      "Tyre Pressure Monitoring"
    ],
    colores: ["Azul Aston Martin", "Negro Onyx", "Plata Lightning", "Verde Racing Green", "Rojo Rosso"]
  },
  {
    id: 12,
    nombre: "Lamborghini Huracán",
    marca: "Lamborghini",
    precio: 225000,
    imagen: "/images/autos 12.jpg",
    descripcion: "El Lamborghini Huracán es un superdeportivo que combina diseño agresivo con tecnología de vanguardia, ofreciendo una experiencia de conducción extrema y emocional.",
    especificaciones: {
      motor: "5.2L V10 Naturally Aspirated",
      potencia: "631 HP",
      torque: "565 Nm",
      transmision: "DCT de 7 velocidades",
      traccion: "Trasera",
      velocidadMax: "325 km/h",
      aceleracion: "2.9 s (0-100 km/h)"
    },
    tecnologia: [
      " Lamborghini Infotainment System",
      "Pantalla táctil de 8.4\"",
      "Apple CarPlay",
      "Telemetry system",
      "Suspensión magnética",
      "Dirección asistida variable",
      "Climatizador automático",
      "Sistema de escape variabile"
    ],
    seguridad: [
      "Frenos de carbono cerámica",
      "Control de estabilidad",
      "Airbags completos",
      "Cámara de reversa",
      "Sensor de presión de neumáticos",
      "ABS con asistencia"
    ],
    colores: ["Amarillo Giallo", "Naranja Arancione", "Verde Verde", "Negro Nero", "Bianco Bianco"]
  },
  {
    id: 13,
    nombre: "Range Rover Autobiography",
    marca: "Land Rover",
    precio: 155000,
    imagen: "/images/autos 13.jpg",
    descripcion: "El Range Rover Autobiography representa la máxima expresión del lujo todoterreno, combinando capacidades off-road excepcionales con un interior de refinamiento sin igual.",
    especificaciones: {
      motor: "4.4L V8 Twin-Turbo",
      potencia: "530 HP",
      torque: "750 Nm",
      transmision: "Automática de 8 velocidades",
      traccion: "Integral 4WD",
      velocidadMax: "250 km/h",
      aceleracion: "4.6 s (0-100 km/h)"
    },
    tecnologia: [
      "Pivi Pro",
      "Pantallas táctiles duales",
      "Audio Meridian Signature",
      "Head-Up Display",
      "Techo panorámico de 3 paneles",
      "Asientos de máxima configuración",
      "Cámara 3D Terrain Response",
      "Control de aire de suspensión"
    ],
    seguridad: [
      "Emergency Braking",
      "Lane Keep Assist",
      "Blind Spot Assist",
      "Clear Exit Monitor",
      "Airbags completos",
      "Cámara 360°"
    ],
    colores: ["Negro Santorini", "Plata Indus", "Azul Portofino", "Verde Otago", "Blanco Fuji"]
  },
  {
    id: 14,
    nombre: "Cadillac Escalade",
    marca: "Cadillac",
    precio: 95000,
    imagen: "/images/autos 14.jpg",
    descripcion: "El Cadillac Escalade es el旗舰 de los SUV de lujo americanos, ofreciendo espacio, potencia y tecnología en un paquete imponente y refinado.",
    especificaciones: {
      motor: "6.2L V8 VVT",
      potencia: "420 HP",
      torque: "624 Nm",
      transmision: "Automática de 10 velocidades",
      traccion: "Integral 4WD",
      velocidadMax: "180 km/h",
      aceleracion: "5.8 s (0-100 km/h)"
    },
    tecnologia: [
      "CUE Infotainment",
      "Pantalla OLED de 16.9\"",
      "Audio AKG Studio Reference",
      "Super Cruise",
      "Cámara de visión夜视",
      "Techo panorámico",
      "Asientos ejecutivos segunda fila",
      "Sistema de cine en el vehículo"
    ],
    seguridad: [
      "Safety Alert Seat",
      "Automatic Parking Assist",
      "Lane Keep Assist",
      "Forward Collision Alert",
      "Airbags de cortina",
      "Teen Driver"
    ],
    colores: ["Negro Crystal", "Plata Radiant", "Rojo Velocity", "Blanco Pearl"]
  },
  {
    id: 15,
    nombre: "Volvo XC90 Recharge",
    marca: "Volvo",
    precio: 78000,
    imagen: "/images/autos 15.jpg",
    descripcion: "El Volvo XC90 Recharge es un SUV híbrido recargable que combina seguridad excepcional con sostenibilidad y diseño escandinavo minimalista.",
    especificaciones: {
      motor: "2.0L Turbo Supercharged + Eléctrico",
      potencia: "455 HP (combinado)",
      torque: "709 Nm",
      transmision: "Automática de 8 velocidades",
      traccion: "Integral AWD",
      velocidadMax: "180 km/h",
      aceleracion: "5.1 s (0-100 km/h)"
    },
    tecnologia: [
      "Sensus Connect",
      "Pantalla de 9\"",
      "Audio Bowers & Wilkins",
      "Google Built-in",
      "Head-Up Display",
      "Asientos de piel Nappa",
      "Climatizador de 4 zonas",
      "Cámara 360°"
    ],
    seguridad: [
      "Pilot Assist",
      "City Safety",
      "BLIS",
      "Run-off Road Mitigation",
      "Airbags completos",
      "Cinturones de seguridad inflables"
    ],
    colores: ["Negro Onyx", "Plata Silver", "Azul Denim", "Blanco Crystal", "Rojo Fusion"]
  },
  {
    id: 16,
    nombre: "Porsche Cayenne Turbo",
    marca: "Porsche",
    precio: 185000,
    imagen: "/images/autos 16.jpg",
    descripcion: "El Porsche Cayenne Turbo combina el rendimiento de un deportivo con la versatilidad de un SUV premium, estableciendo nuevos estándares en su segmento.",
    especificaciones: {
      motor: "4.0L V8 Twin-Turbo",
      potencia: "550 HP",
      torque: "770 Nm",
      transmision: "Tiptronic S de 8 velocidades",
      traccion: "Integral PTM",
      velocidadMax: "286 km/h",
      aceleracion: "3.9 s (0-100 km/h)"
    },
    tecnologia: [
      "Porsche Communication Management",
      "Pantalla de 12.3\"",
      "Audio Burmester",
      "Apple CarPlay",
      "Suspensión neumática adaptativa",
      "Sport Chrono Package",
      "Asientos sport con memoria",
      "Portón trasero automático"
    ],
    seguridad: [
      "Porsche Stability Management",
      "Frenos de cerámica PCCB",
      "Cámara de visión surround",
      "Asistente de mantenimiento de carril",
      "Airbags completos",
      "Sistema de monitoreo de presión"
    ],
    colores: ["Negro Jet", "Plata GT", "Azul Carrara", "Rojo Carrara", "Blanco Carrara"]
  }
];