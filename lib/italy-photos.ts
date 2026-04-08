// Italy trip photo library — Heidie's Aug 2024 Rome → Tuscany → Sicily journey.
// All photos shot on iPhone 14. GPS metadata was stripped on export, so coordinates
// here are landmark approximations chosen to anchor each shot to its real location.

export type ItalyPhoto = {
  src: string
  alt: string
  location: string
  region: "Rome" | "Tuscany" | "Sicily"
  lat: number
  lon: number
  category: "landmark" | "food" | "street" | "nature" | "sea" | "people" | "craft"
  orientation: "portrait" | "landscape"
}

// Landmark coordinates used as anchors
const LOC = {
  trevi: { lat: 41.9009, lon: 12.4833, name: "Trevi Fountain, Rome" },
  rome: { lat: 41.9028, lon: 12.4964, name: "Rome" },
  figline: { lat: 43.6212, lon: 11.4708, name: "Figline Valdarno, Tuscany" },
  capalbio: { lat: 42.4524, lon: 11.4254, name: "Capalbio, Tuscany" },
  tuscanyVilla: { lat: 43.5, lon: 11.45, name: "Tuscan Hills" },
  ortigiaDuomo: { lat: 37.0594, lon: 15.2933, name: "Piazza Duomo, Ortigia" },
  ortigiaArchimede: { lat: 37.0623, lon: 15.2917, name: "Piazza Archimede, Ortigia" },
  fonteAretusa: { lat: 37.0586, lon: 15.2917, name: "Fonte Aretusa, Ortigia" },
  castelloManiace: { lat: 37.0556, lon: 15.2933, name: "Castello Maniace, Ortigia" },
  ortigiaMarket: { lat: 37.0631, lon: 15.2939, name: "Mercato di Ortigia" },
  ortigiaPort: { lat: 37.0608, lon: 15.2872, name: "Porto Grande, Syracuse" },
  ortigia: { lat: 37.0608, lon: 15.2961, name: "Ortigia, Syracuse" },
  syracuseMarina: { lat: 37.0567, lon: 15.2856, name: "Marina di Siracusa" },
  plemmirio: { lat: 37.0167, lon: 15.3167, name: "Plemmirio Sea Caves" },
  fontaneBianche: { lat: 36.9667, lon: 15.2333, name: "Fontane Bianche Beach" },
  catania: { lat: 37.5079, lon: 15.083, name: "Catania" },
  catanieDuomo: { lat: 37.5022, lon: 15.0883, name: "Piazza del Duomo, Catania" },
  catanieBellini: { lat: 37.5072, lon: 15.0858, name: "Piazza Stesicoro, Catania" },
  collegiata: { lat: 37.504, lon: 15.0867, name: "Basilica della Collegiata, Catania" },
  catanieElefante: { lat: 37.5022, lon: 15.0867, name: "Fontana dell'Elefante, Catania" },
  villaBellini: { lat: 37.5111, lon: 15.0856, name: "Villa Bellini, Catania" },
  etna: { lat: 37.7028, lon: 14.9985, name: "Crateri Silvestri, Mount Etna" },
  etnaSummit: { lat: 37.751, lon: 14.9934, name: "Mount Etna" },
}

const p = (
  file: string,
  loc: { lat: number; lon: number; name: string },
  region: ItalyPhoto["region"],
  category: ItalyPhoto["category"],
  alt: string,
  orientation: ItalyPhoto["orientation"] = "portrait",
): ItalyPhoto => ({
  src: `/photos/italy/${file}`,
  alt,
  location: loc.name,
  region,
  lat: loc.lat,
  lon: loc.lon,
  category,
  orientation,
})

export const italyPhotos: ItalyPhoto[] = [
  // — Rome —
  p("trevi-fountain-rome-italy.jpg", LOC.trevi, "Rome", "landmark", "Trevi Fountain in Rome at golden hour"),

  // — Tuscany —
  p("tuscany-pomegranates-terracotta-amphora.jpg", LOC.capalbio, "Tuscany", "nature", "Pomegranates ripening over a terracotta amphora"),
  p("figline-valdarno-train-station-tuscany.jpg", LOC.figline, "Tuscany", "street", "Figline Valdarno train station at sunrise"),
  p("tuscany-romanesque-church-portico.jpg", LOC.figline, "Tuscany", "landmark", "Romanesque church portico in the Tuscan countryside"),
  p("tuscany-romanesque-church-nave.jpg", LOC.figline, "Tuscany", "landmark", "Candle-lit nave of an early Romanesque pieve"),
  p("tuscany-wayside-shrine-prickly-pear.jpg", LOC.capalbio, "Tuscany", "nature", "Wayside shrine framed by prickly pear cactus"),
  p("agriturismo-loasi-tuscany-sign.jpg", LOC.capalbio, "Tuscany", "street", "Hand-painted sign for Agriturismo L'Oasi"),
  p("tuscan-vineyard-green-grapes.jpg", LOC.tuscanyVilla, "Tuscany", "nature", "Green grapes ripening on the vine"),
  p("tuscan-vineyard-sangiovese-grapes.jpg", LOC.tuscanyVilla, "Tuscany", "nature", "Sangiovese grapes turning purple in late summer"),
  p("tuscan-hilltop-terrace-valley-view.jpg", LOC.tuscanyVilla, "Tuscany", "landmark", "Hilltop terrace overlooking the Tuscan valley"),
  p("tuscany-red-geraniums-terracotta-urn.jpg", LOC.tuscanyVilla, "Tuscany", "nature", "Red geraniums spilling from a terracotta urn"),
  p("tuscan-trattoria-tiramisu-dessert.jpg", LOC.tuscanyVilla, "Tuscany", "food", "Slice of homemade tiramisu at a Tuscan trattoria"),
  p("tuscan-borgo-yellow-alley.jpg", LOC.figline, "Tuscany", "street", "Sun-warmed yellow alley in a Tuscan borgo"),

  // — Sicily: Ortigia & Syracuse —
  p("ortigia-syracuse-yacht-baroque-skyline.jpg", LOC.ortigiaPort, "Sicily", "sea", "Yacht moored against the baroque skyline of Ortigia"),
  p("ortigia-limestone-side-street.jpg", LOC.ortigia, "Sicily", "street", "Limestone facade glowing on an Ortigia side street"),
  p("castello-maniace-ortigia-syracuse-dusk.jpg", LOC.castelloManiace, "Sicily", "landmark", "Castello Maniace at dusk on the tip of Ortigia"),
  p("plemmirio-syracuse-sea-stack-swimmers.jpg", LOC.plemmirio, "Sicily", "sea", "Swimmers below the limestone stack at Plemmirio"),
  p("fontane-bianche-sicily-beach-umbrellas.jpg", LOC.fontaneBianche, "Sicily", "sea", "Beach umbrellas at Fontane Bianche"),
  p("sicily-palm-ionian-sea-morning.jpg", LOC.fontaneBianche, "Sicily", "sea", "Palm and Ionian Sea on a Sicilian morning", "landscape"),
  p("plemmirio-cypress-turquoise-coast.jpg", LOC.fontaneBianche, "Sicily", "sea", "Cypress and turquoise water along the Plemmirio coast", "landscape"),
  p("ortigia-baroque-church-facade-oculus.jpg", LOC.ortigia, "Sicily", "landmark", "Baroque church facade with oculus windows in Ortigia"),
  p("fountain-of-diana-piazza-archimede-ortigia.jpg", LOC.ortigiaArchimede, "Sicily", "landmark", "Fountain of Diana in Piazza Archimede"),
  p("fountain-of-diana-detail-ortigia-sunset.jpg", LOC.ortigiaArchimede, "Sicily", "landmark", "Detail of the Diana fountain at sunset"),
  p("ortigia-vaulted-entryway-chandelier.jpg", LOC.ortigia, "Sicily", "street", "Vaulted entryway with chandelier in Ortigia"),
  p("syracuse-cathedral-san-marciano-statue.jpg", LOC.ortigiaDuomo, "Sicily", "landmark", "Statue of San Marciano on the Syracuse Cathedral facade"),
  p("syracuse-cathedral-baroque-facade-ortigia.jpg", LOC.ortigiaDuomo, "Sicily", "landmark", "Baroque facade of the Syracuse Cathedral"),
  p("ortigia-hand-painted-sicilian-ape-car.jpg", LOC.ortigia, "Sicily", "craft", "Hand-painted Sicilian Ape Car parked in Ortigia"),
  p("syracuse-porto-grande-sunset.jpg", LOC.ortigiaPort, "Sicily", "sea", "Sunset over the Porto Grande in Syracuse", "landscape"),
  p("ortigia-belle-epoque-grand-hotel.jpg", LOC.ortigia, "Sicily", "landmark", "Grand belle epoque hotel facade in Ortigia"),
  p("fonte-aretusa-ortigia-palm-tree.jpg", LOC.fonteAretusa, "Sicily", "landmark", "Palm crown above the Fonte Aretusa"),
  p("fonte-aretusa-papyrus-ortigia.jpg", LOC.fonteAretusa, "Sicily", "landmark", "Papyrus grove inside the Fonte Aretusa"),
  p("fonte-aretusa-papyrus-seawall-ortigia.jpg", LOC.fonteAretusa, "Sicily", "landmark", "Papyrus and seawall at Fonte Aretusa", "landscape"),
  p("ortigia-sailboat-sunset-syracuse.jpg", LOC.ortigiaPort, "Sicily", "sea", "Lone sailboat at sunset off Ortigia"),
  p("ortigia-porto-grande-sailboat-dusk.jpg", LOC.ortigiaPort, "Sicily", "sea", "Sailboat on the Porto Grande at last light", "landscape"),
  p("ortigia-baroque-palazzo-night-lights.jpg", LOC.ortigia, "Sicily", "landmark", "Baroque palazzo lit in honey gold after dark"),
  p("ortigia-tangerine-sunset-harbour.jpg", LOC.ortigiaPort, "Sicily", "sea", "Tangerine sunset over the harbour"),
  p("ortigia-orange-sicilian-sunset-boats.jpg", LOC.ortigiaPort, "Sicily", "sea", "Boats silhouetted against an orange Sicilian sky", "landscape"),
  p("castello-maniace-ortigia-night.jpg", LOC.castelloManiace, "Sicily", "landmark", "Castello Maniace lit at night above the sea"),
  p("ortigia-winged-statue-sunset-silhouette.jpg", LOC.ortigia, "Sicily", "landmark", "Winged statue silhouetted against the Sicilian dusk"),
  p("ortigia-palm-fronds-sunset.jpg", LOC.ortigia, "Sicily", "nature", "Palm fronds at sunset in Ortigia", "landscape"),
  p("mercato-di-ortigia-antipasti-display.jpg", LOC.ortigiaMarket, "Sicily", "food", "Antipasti display at the Mercato di Ortigia"),
  p("ortigia-alley-laundry-balconies.jpg", LOC.ortigia, "Sicily", "street", "Laundry strung above an Ortigia alleyway"),
  p("mercato-di-ortigia-fresh-tuna-fish-market.jpg", LOC.ortigiaMarket, "Sicily", "food", "Tuna at the Ortigia fish market"),
  p("ortigia-sicilian-breakfast-granita-brioche.jpg", LOC.ortigia, "Sicily", "people", "Sicilian breakfast: granita and brioche col tuppo"),
  p("plemmirio-sea-cave-crystal-water.jpg", LOC.plemmirio, "Sicily", "sea", "Crystal water inside a sea cave at Plemmirio"),
  p("plemmirio-sea-cave-emerald-light.jpg", LOC.plemmirio, "Sicily", "sea", "Emerald light inside a Plemmirio cave"),
  p("syracuse-fishing-boats-harbour.jpg", LOC.ortigiaPort, "Sicily", "sea", "Fishing fleet tied up in the Sicilian harbour"),
  p("sicilian-bakery-fresh-baguettes.jpg", LOC.ortigiaMarket, "Sicily", "food", "Fresh baguettes at a Sicilian bakery"),
  p("sicilian-street-food-sandwich-stand.jpg", LOC.ortigiaMarket, "Sicily", "food", "Crusty Sicilian sandwiches stacked at a market stand"),
  p("ortigia-night-market-stone-arch.jpg", LOC.ortigia, "Sicily", "street", "Night market through a stone arch in Ortigia"),
  p("ortigia-accordion-player-street-musician.jpg", LOC.ortigia, "Sicily", "people", "Accordion player serenading dinner guests in Ortigia"),
  p("ortigia-sicilian-printed-dress-boutique.jpg", LOC.ortigia, "Sicily", "craft", "Hand-printed Sicilian dress in a boutique window"),
  p("ortigia-fishermen-mending-nets-dock.jpg", LOC.ortigiaPort, "Sicily", "people", "Ortigia fishermen mending nets at the dock"),
  p("fontane-bianche-beach-hat-seller.jpg", LOC.fontaneBianche, "Sicily", "people", "Beach hat seller along the Sicilian shore"),
  p("fontane-bianche-yellow-umbrellas-lido.jpg", LOC.fontaneBianche, "Sicily", "sea", "Yellow umbrellas on a Sicilian lido"),
  p("catania-boulevard-golden-hour.jpg", LOC.catania, "Sicily", "street", "Catania boulevard at golden hour"),
  p("catania-wood-fired-pizza-oven.jpg", LOC.catania, "Sicily", "food", "Wood-fired pizza fresh from the oven"),
  p("catania-stone-lion-mascaron-baroque.jpg", LOC.catania, "Sicily", "landmark", "Stone lion mascaron on a Sicilian baroque facade"),
  p("piazza-del-duomo-ortigia-syracuse.jpg", LOC.ortigiaDuomo, "Sicily", "landmark", "Piazza del Duomo, Ortigia, with the Town Hall and Cathedral", "landscape"),
  p("ortigia-painted-street-shrine-madonna.jpg", LOC.ortigia, "Sicily", "landmark", "Painted street shrine to the Madonna in Ortigia"),
  p("ortigia-flower-seller-silk-roses.jpg", LOC.ortigia, "Sicily", "craft", "Faded silk roses at a flower seller's stall"),
  p("sicilian-bakery-sesame-bread-moors-head.jpg", LOC.ortigiaMarket, "Sicily", "food", "Sesame loaves and a Moor's head at a Sicilian bakery", "landscape"),
  p("sicily-cliffside-lido-ionian-ladders.jpg", LOC.fontaneBianche, "Sicily", "sea", "Cliffside lido with ladders into the Ionian"),
  p("ortigia-alley-sunset-view-sea.jpg", LOC.ortigia, "Sicily", "street", "Ortigia alley framing the sunset over the sea"),
  p("marina-di-siracusa-sunset-sicily.jpg", LOC.syracuseMarina, "Sicily", "sea", "Marina di Siracusa at sunset"),
  p("syracuse-marina-yachts-sailboats-dusk.jpg", LOC.syracuseMarina, "Sicily", "sea", "Yachts and sailboats in the Syracuse marina at dusk"),

  // — Sicily: Catania —
  p("catania-cathedral-dome-roman-ruins.jpg", LOC.catanieElefante, "Sicily", "landmark", "Catania Cathedral dome rising above the Roman ruins"),
  p("catania-cardinale-dusmet-monument.jpg", LOC.catanieDuomo, "Sicily", "landmark", "Cardinale Dusmet monument in Catania"),
  p("mount-etna-twin-peaks-from-catania.jpg", LOC.etnaSummit, "Sicily", "nature", "Mount Etna's twin peaks seen from Catania", "landscape"),
  p("catania-bell-tower-dawn-sicily.jpg", LOC.catania, "Sicily", "landmark", "Catania bell tower at dawn"),
  p("catania-stone-drinking-fountain-courtyard.jpg", LOC.catania, "Sicily", "street", "Stone drinking fountain in a Catania courtyard"),
  p("catania-granita-whipped-cream-cafe.jpg", LOC.catania, "Sicily", "food", "Granita with whipped cream at a Catania caffè"),
  p("catania-sicilian-granita-panna.jpg", LOC.catania, "Sicily", "food", "Sicilian granita topped with mountains of panna"),
  p("villa-bellini-catania-stone-pines.jpg", LOC.villaBellini, "Sicily", "nature", "Stone pines and statues in Villa Bellini, Catania"),
  p("catania-vintage-red-fiat-500.jpg", LOC.catania, "Sicily", "street", "Vintage red Fiat 500 parked outside a Catania café"),
  p("catania-candied-fruit-painted-stall.jpg", LOC.catania, "Sicily", "food", "Candied fruit and nuts at a painted Catania stall"),
  p("catania-moors-head-ceramic-etna-preserves.jpg", LOC.catania, "Sicily", "craft", "Moor's head ceramic and Etna preserves on display"),
  p("catania-san-biagio-roman-ruins-piazza-stesicoro.jpg", LOC.catania, "Sicily", "landmark", "Roman ruins beneath the church of San Biagio"),
  p("basilica-della-collegiata-catania-baroque.jpg", LOC.collegiata, "Sicily", "landmark", "Basilica della Collegiata in Catania"),
  p("catania-floating-umbrella-canopy-street.jpg", LOC.catania, "Sicily", "street", "Floating umbrella canopy over a Catania market street"),
  p("catania-fish-market-fresh-oysters.jpg", LOC.catania, "Sicily", "food", "Oysters on ice at the Catania fish market"),
  p("catania-grilled-octopus-sicilian-cuisine.jpg", LOC.catania, "Sicily", "food", "Grilled octopus over open coals"),
  p("catania-vincenzo-bellini-monument-piazza-stesicoro.jpg", LOC.catanieBellini, "Sicily", "landmark", "Monument to Vincenzo Bellini in Piazza Stesicoro"),
  p("sicily-fresh-lemons-limes-snake-plants.jpg", LOC.catania, "Sicily", "food", "Sicilian lemons and limes between snake plants"),
  p("catania-vintage-bicycle-decorated-lemons.jpg", LOC.catania, "Sicily", "craft", "Vintage bicycle decorated with lemons in Catania"),
  p("villa-bellini-catania-baroque-gate.jpg", LOC.villaBellini, "Sicily", "landmark", "Baroque gate to Villa Bellini, Catania"),
  p("catania-quiet-alley-green-shutters.jpg", LOC.catania, "Sicily", "street", "Quiet Catania alley framed by green shutters"),
  p("sicilian-painted-carretto-interior-detail.jpg", LOC.catania, "Sicily", "craft", "Inside a hand-painted Sicilian carretto"),
  p("catania-craftsman-painted-cart.jpg", LOC.catania, "Sicily", "people", "A Catanese craftsman with his decorated cart"),
  p("sicily-green-figs-tree.jpg", LOC.catania, "Sicily", "nature", "Green figs ripening on the tree"),

  // — Mount Etna —
  p("mount-etna-lava-fields-panorama.jpg", LOC.etna, "Sicily", "nature", "Panorama from Mount Etna's lava fields", "landscape"),
  p("mount-etna-goatherder-sicily.jpg", LOC.etna, "Sicily", "people", "Goatherder and his flock on the slopes of Mount Etna"),
  p("mount-etna-crateri-silvestri-trail-sign.jpg", LOC.etna, "Sicily", "landmark", "Sign for the Crateri Silvestri trail on Mount Etna", "landscape"),
  p("mount-etna-lava-buried-farmhouse.jpg", LOC.etna, "Sicily", "landmark", "Lava-buried farmhouse on the slopes of Etna"),

  // — Tuscany return —
  p("tuscany-rooftop-cypress-ridge-sunset.jpg", LOC.tuscanyVilla, "Tuscany", "landmark", "Cypress-lined Tuscan ridge from a flower-filled rooftop"),
  p("ortigia-bridge-skyline-blue-hour.jpg", LOC.ortigia, "Sicily", "street", "Ortigia bridge and skyline at blue hour", "landscape"),
  p("ortigia-rooftop-dining-festoon-lights.jpg", LOC.ortigia, "Sicily", "people", "Rooftop dining under festoon lights in Ortigia"),
  p("sicily-bronze-winged-statue-shoreline.jpg", LOC.catania, "Sicily", "landmark", "Bronze winged statue facing the Ionian at dusk"),
  p("sicily-bronze-winged-guardian-detail.jpg", LOC.catania, "Sicily", "landmark", "Detail of the bronze winged guardian of the shore"),
  p("ortigia-market-fresh-sweet-peppers.jpg", LOC.ortigiaMarket, "Sicily", "food", "Sweet peppers piled high at the Ortigia market"),
  p("heidie-friends-sicilian-carretto-catania.jpg", LOC.catania, "Sicily", "people", "Heidie and friends with a hand-painted Sicilian carretto"),
]

// Helpful pre-built filters
export const sicilyPhotos = italyPhotos.filter((p) => p.region === "Sicily")
export const tuscanyPhotos = italyPhotos.filter((p) => p.region === "Tuscany")
export const romePhotos = italyPhotos.filter((p) => p.region === "Rome")
export const landscapePhotos = italyPhotos.filter((p) => p.orientation === "landscape")
export const portraitPhotos = italyPhotos.filter((p) => p.orientation === "portrait")
export const heroLandmarks = italyPhotos.filter(
  (p) => p.category === "landmark" || p.category === "sea",
)
