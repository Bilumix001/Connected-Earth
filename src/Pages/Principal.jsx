import { useState, useEffect } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { Derecho } from "../Components/Derecho";
import { Izquierdo } from "../Components/Izquierdo";
import "../Styles/Principal.css";

function Principal() {
  const causas = [
    {
      title: "Seismic Activity",
      descripcion:
        "Earthquakes can cause fires in various ways, such as damage to power lines that generate sparks, gas leaks that cause explosions, friction in landslides that ignite dry vegetation, fires inside collapsed buildings due to ruptures in electrical or heating systems, and the rupture of fuel tanks in industrial areas, which releases flammable materials. These factors increase the risk of fires in urban and rural areas affected by earthquakes.",
      imagen: "/causa0.jpg",
    },
    {
      title: "Human Activities",
      descripcion:
        "90-95% of forest fires are caused by human action, either intentionally or through carelessness and imprudence, according to the Ministry of Agriculture, Food and Environment (Magrama), which seeks to raise awareness of the damage caused. While earthquakes, although the third most common disaster, cause the greatest number of deaths due to their unpredictability, volcanic eruptions allow for greater preparedness due to the natural warnings that precede the eruptions. Projects such as NASA's geodetic imaging project have revolutionized the understanding of earthquakes and volcanoes, providing key data for response and mitigation to these disasters.",
      imagen: "/causa1.jpg",
    },
    {
      title: "High Temperatures",
      descripcion:
        "High temperatures dry vegetation and soil, turning vegetation into highly flammable fuel, which facilitates the spread of fires. In addition, heat increases combustion, intensifying fires. Lightning without rain and high winds further contribute to fire spread. The summer of 2023 was warmer than average, driven by the El Niño phenomenon, which causes higher ocean temperatures. Together with global warming caused by greenhouse gases, this led to record global heat. In addition, aerosols in the atmosphere also influence temperatures, as they can reflect or absorb sunlight.",
      imagen: "/causa2.jpg",
    },
    {
      title: "Autocombustion",
      descripcion:
        "Organic decomposition in wooded areas, especially in accumulations of dry leaves, branches or wood, generates heat due to the activity of microorganisms such as bacteria and fungi. If the matter is sufficiently compact and dry, heat accumulates, and if not dissipated, it can reach the ignition point, causing self-combustion without the need for an external spark. This phenomenon is more likely in conditions of high temperatures, low humidity and poor ventilation. In coal mining, self-combustion is a constant risk that requires control measures to avoid catastrophic fires, as the costs and hazards associated with lack of control are significant for both health and safety and the environment.",
      imagen: "/causa3.jpg",
    },
    {
      title: "Chemical Causes",
      descripcion:
        "The combustion process requires several key elements. Oxygen (O₂) is the comburent that combines with the fuel to start the fire, requiring at least 16% in the air. Common fuels contain carbon (C) and hydrogen (H), which during combustion oxidize to form carbon dioxide (CO₂) and water (H₂O), releasing heat in the process. Hydrocarbons, such as gasoline and natural gas, also participate in these reactions. Nitrogen (N₂), although inert under normal conditions, can form pollutants such as nitrogen oxides (NOx) at high temperatures. Decomposition of organic matter can also generate heat and cause self-combustion under drought conditions. In addition, some chemicals such as phosphorus and oxidizers can trigger fires or accelerate combustion by releasing oxygen.",
      imagen: "/causa4.jpg",
    },
    {
      title: "Topographical Causes",
      descripcion:
        "The spread and behavior of forest fires are strongly influenced by topography and other geographic factors. On sloping terrain, fire rises faster because heat rises, warming the vegetation above. Mountains can also change wind patterns, accelerating or hindering the spread of fire. Proximity to bodies of water can act as a barrier, but in times of drought the risk increases. Dense, dry, hydrocarbon-rich vegetation, together with soils unable to retain water, increases susceptibility to fire. Factors such as high winds, local microclimates and landslides also contribute, while limited accessibility to steep areas makes fire control and evacuation difficult.",
      imagen: "/causa5.jpg",
    },
    {
      title: "Extreme Climates",
      descripcion:
        "Extreme drought is a key factor in the proliferation of forest fires, as it dries out the soil and vegetation, creating ideal conditions for fire. During these periods, dead and dry vegetation accumulates, acting as a highly flammable fuel. Dry thunderstorms, which generate lightning without sufficient rain to extinguish sparks, and high winds, which spread flames and provide oxygen, aggravate the risk. In addition, fire behavior becomes erratic in extreme conditions, causing more intense and destructive fires, sometimes accompanied by phenomena such as pyrocumulus, which can generate new fire outbreaks. Climate change, by increasing the frequency of droughts and extreme events, aggravates these risks and threatens global agriculture, as was seen with the loss of crops in Iowa in 2012.",
      imagen: "/causa6.jpg",
    },
    {
      title: "Thunderstorms",
      descripcion:
        "Heat waves and prolonged droughts are critical factors that increase the risk of wildfires by drying vegetation and reducing the relative humidity of the air, converting flora into highly flammable material. Dry thunderstorms represent a significant source of ignition, as lightning can ignite vegetation without the rainfall needed to extinguish the fire; this is particularly dangerous with cloud-to-ground and positive lightning strikes, which can impact several kilometers away. In addition, the high winds associated with these storms scatter embers and fan the flames, facilitating the spread of the fire. When lightning strikes a tree, it can cause the bark to explode and spread glowing embers, spreading the fire through roots or flammable material underground. In extreme conditions, storms can trigger chains of fires, linking several outbreaks into a single large fire, a phenomenon that has intensified with climate change, as evidenced by NASA's climate spiral showing the increase in global temperatures since 1880.",
      imagen: "/causa7.jpg",
    },
  ];

  const consecuencias = [
    {
      title: "Agriculture",
      descripcion:
        "Forest fires have serious impacts on agriculture. First, they destroy crops and reduce production, affecting farmers and markets. In addition, the soil loses nutrients, erodes and hardens, making future agriculture more difficult. Key infrastructure such as irrigation systems and machinery are also damaged, delaying production. Finally, ash and chemicals contaminate water and soil, affecting both crops and animals.",
      imagen: "/conse1.jpg",
    },
    {
      title: "Hydrological alteration",
      descripcion:
        "Forest fires reduce the soil's capacity to retain water, which increases surface runoff and the risk of flooding. They also cause soil erosion and contaminate water bodies with ash. They also alter river flows and increase the risk of landslides due to the loss of vegetation that stabilizes the ground.",
      imagen: "/conse2.jpg",
    },
    {
      title: "Air quality effect",
      descripcion:
        "Wildfires emit pollutants such as carbon monoxide and dioxide, nitrogen oxides, hazardous particulate matter (PM2.5, PM10), and volatile organic compounds, affecting health and contributing to climate change. The smoke generated reduces visibility and can combine with other pollutants to form smog. In the long term, fires degrade the ozone layer and increase global pollution. Fire control systems, personal protection measures and reforestation are used to mitigate damage.",
      imagen: "/conse3.jpg",
    },
    {
      title: "Economic Effects",
      descripcion:
        "Forest fires generate high costs for fire suppression, evacuation and reconstruction of destroyed infrastructure, such as housing and public services. They also affect the forestry and agricultural industries, destroying timber, crops, and fertile soils. Tourism suffers losses due to the destruction of natural sites, closure of facilities and fewer visitors. In addition, biodiversity and water resources are lost. Insurance companies increase their premiums or deny coverage, affecting the local economy and labor productivity, with prolonged impacts on economic recovery.",
      imagen: "/conse4.jpg",
    },
    {
      title: "Ecosystem Effect",
      descripcion:
        "Forest fires destroy habitats, displacing or killing animals and plants. They alter biodiversity by favoring fire-resistant species and the invasion of opportunistic species. They also impact nutrient cycles and erode soil, affecting regeneration. Food chains are disrupted, and the local microclimate changes by increasing temperature and reducing water infiltration. Ecosystem recovery varies; some regenerate rapidly, while others, after recurrent fires, suffer permanent damage, affecting the most vulnerable flora and fauna.",
      imagen: "/conse5.jpg",
    },
    {
      title: "Health Effect",
      descripcion:
        "Wildfires cause multiple adverse health effects, such as respiratory tract irritation, aggravation of asthma and reduced lung function. They also increase the risk of heart attacks and arrhythmias. In addition, they have a significant impact on mental health, including post-traumatic stress, anxiety and depression, and vulnerable populations, such as children and the elderly, suffer more severe complications. Other effects include eye irritation and skin problems. In extreme situations, increased mortality from respiratory and cardiovascular complications can occur. Burning materials release toxic pollutants, while ash can affect water sources and crops, posing additional health risks.",
      imagen: "/conse6.jpg",
    },
    {
      title: "Fauna and Flora",
      descripcion:
        "Forest fires devastate habitats, eliminating essential trees and plants, leaving wildlife vulnerable and affecting plant diversity. Extreme heat causes the direct death of animals and plants, altering food chains by eliminating prey and pollinators. Fires force animals to migrate, which generates competition for resources and hinders their adaptation. In addition, the soil suffers loss of nutrients and the formation of hydrophobic layers, making it difficult for vegetation to regenerate. Endangered species are especially vulnerable, and frequent fires can alter natural regeneration cycles and facilitate the invasion of non-native species.",
      imagen: "/conse7.jpg",
    },
    {
      title: "Greenhouse Gases",
      descripcion:
        "Greenhouse gases (GHGs), such as carbon dioxide, methane and nitrous oxide, are essential for maintaining the Earth's temperature by absorbing and re-radiating heat. Since the industrial revolution, human activities have increased their concentrations, causing global warming of approximately 1.18 °C. The IPCC's Sixth Assessment Report highlights that this rise is a direct consequence of human actions. Satellite data make it possible to estimate sources of emissions and assess their impact, complementing traditional emission inventory methods.",
      imagen: "/conse8.jpg",
    },
  ];

  /* Variables de interaccion */
  const [bgImage, setBgIgame] = useState("/main.jpg");
  const [indiceL, setIndiceL] = useState(0);
  const [indiceR, setIndiceR] = useState(0);
  const [clase, setClase] = useState("");
  const [visibilityLeft, setVisibilityLeft] = useState("hidden");
  const [visibilityRight, setVisibilityRight] = useState("hidden");
  const [texto, setTexto] = useState("");

  /* useEffect */
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.setProperty("--bg-image", `url(${bgImage})`);
  }, [bgImage]);

  /* Eventos click */
  function Fondo(image) {
    setBgIgame(image);
  }

  function eventoClickLeft(valor) {
    setClase(valor);
    setVisibilityLeft("visibilityLeft");
    setTexto("visible");
  }

  function eventoClickRight(valor) {
    setClase(valor);
    setVisibilityRight("visibilityRight");
    setTexto("visible");
  }

  function resetClick(e) {
    e.stopPropagation();
    setClase("");
    setTexto("");
    setVisibilityLeft("hiddenLeft");
    setVisibilityRight("hiddenRight");
    setBgIgame("/main.jpg");
  }

  function eventoIndiceL(valor) {
    setIndiceL(valor);
    setBgIgame("/main.jpg");
  }

  function eventoIndiceR(valor) {
    setIndiceR(valor);
    setBgIgame("/main.jpg");
  }

  let left = [];

  for (let k = 0; k < causas.length; k++) {
    left.push(
      <Izquierdo
        key={k}
        titulo={causas[k].title}
        imagen={causas[k].imagen}
        className={visibilityLeft}
        fondo={Fondo}
      >
        {causas[k].descripcion}
      </Izquierdo>
    );
  }

  let right = [];

  for (let k = 0; k < consecuencias.length; k++) {
    right.push(
      <Derecho
        key={k}
        titulo={consecuencias[k].title}
        imagen={consecuencias[k].imagen}
        className={visibilityRight}
        fondo={Fondo}
      >
        {consecuencias[k].descripcion}
      </Derecho>
    );
  }

  return (
    <>
      <Header></Header>
      <div className="contenedor">
        <h2 className={texto}>
          <Link className="link" to="/galeria">
            AMAZONAS 2019
          </Link>
        </h2>
        <div className={`circle ${clase}`}>
          <div className={`left`} onClick={() => eventoClickLeft("left")}>
            <IoIosArrowDroprightCircle
              className={`backRight ${clase === "left" ? "" : "hidden"}`}
              onClick={(e) => resetClick(e)}
            />
          </div>

          <div className={`right`} onClick={() => eventoClickRight("right")}>
            <IoIosArrowDropleftCircle
              className={`backLeft ${clase === "right" ? "" : "hidden"}`}
              onClick={(e) => resetClick(e)}
            />
          </div>

          <div className="arrowRight">
            <div className="trianguloR" onClick={() => eventoIndiceR(0)}></div>
            <div className="trianguloR" onClick={() => eventoIndiceR(1)}></div>
            <div className="trianguloR" onClick={() => eventoIndiceR(2)}></div>
            <div className="trianguloR" onClick={() => eventoIndiceR(3)}></div>
            <div className="trianguloR" onClick={() => eventoIndiceR(4)}></div>
            <div className="trianguloR" onClick={() => eventoIndiceR(5)}></div>
            <div className="trianguloR" onClick={() => eventoIndiceR(6)}></div>
            <div className="trianguloR" onClick={() => eventoIndiceR(7)}></div>
          </div>

          <div className="arrowLeft">
            <div className="trianguloL" onClick={() => eventoIndiceL(0)}></div>
            <div className="trianguloL" onClick={() => eventoIndiceL(1)}></div>
            <div className="trianguloL" onClick={() => eventoIndiceL(2)}></div>
            <div className="trianguloL" onClick={() => eventoIndiceL(3)}></div>
            <div className="trianguloL" onClick={() => eventoIndiceL(4)}></div>
            <div className="trianguloL" onClick={() => eventoIndiceL(5)}></div>
            <div className="trianguloL" onClick={() => eventoIndiceL(6)}></div>
            <div className="trianguloL" onClick={() => eventoIndiceL(7)}></div>
          </div>
        </div>
        <>{left[indiceL]}</>
        <>{right[indiceR]}</>
      </div>
    </>
  );
}

export default Principal;
