"use client";

import { NavbarNanda } from "./components/index";
import { Jewelry } from "./sections";

//labrets
import ClusterGrafite from "./images/cluster_grafite.JPG";
import ClusterGreen from "./images/cluster_green.JPG";
import ClusterRainbow from "./images/cluster_rainbow.JPG";
import Heart from "./images/heart.JPG";
import Patinha from "./images/patinha.JPG";
import Perereca from "./images/perereca.JPG";
import Pineaple from "./images/pineaple.JPG";
import Dino from "./images/labret_dino.JPG";
import Cannabis from "./images/labret_cannabis.JPG";
import GotaAmetista from "./images/labret_gota_ametista.JPG";
import PontoLuz3mm from "./images/labret_ponto_luz_3mm.JPG";
import RamoRosa from "./images/labret_ramo_rosa_bb.JPG";
import FlorOpala from "./images/labret_flor_opala.JPG";
import TrinityRosaBB from "./images/labret_trinity_rosa_bb.JPG";
import Butterfly from "./images/labret_butterfly.JPG";
import Spider from "./images/labret_spider.JPG";
import Flor6zc1o from "./images/flor_6zc1o.JPG";
import FlorOpala10mm from "./images/labret_flor_opala_10p.JPG";

//mamilos
import ClusterBarbel from "./images/cluster_barbel.JPG";
import Barbel14mm from "./images/barbel_14mm.JPG";

//argolas
import ArgolaCravejadaDupla from "./images/argola_cravejada_dupla.JPG";
import ArgolaCravejadaFrontal from "./images/argola_cravejada_frontal.JPG";
import ArgolaCravejadaFrontalRaio from "./images/argola_cravejada_frontal_raios.JPG";
import ArgolaCravejadaFrontalNavete from "./images/argola_cravejada_frontal_navete.JPG";
import ArgolaCravejadaFrontalHeart from "./images/argola_cravejada_frontal_heart.JPG";
import ArgolaCravejadaLateral from "./images/argola_cravejada_lateral.JPG";
import ArgolaCravejadaLateralLosango from "./images/argola_cravejada_lateral_losango.JPG";
import ArgolaGota from "./images/argola_gota.JPG";
import ArgolaHalfMoon from "./images/argola_half_moon.JPG";
import ArgolaHeart from "./images/argola_heart.JPG";
import ArgolaPingenteLosango from "./images/argola_pingente_losango.JPG";
import ArgolaTorcida from "./images/argola_torcida.JPG";
import ArgolaZoro from "./images/argola_zoro.JPG";
import ArgolaRingPvd from "./images/g_ring_pvd.JPG";

//umbigos
import Umbigo3zc5e from "./images/umbigo_3zc5e.JPG";
import Umbigo4zc7eVerde from "./images/umbigo_4zc7e_verde.JPG";
import UmbigoAnodizadoGreen from "./images/umbigo_anodizado_green.JPG";
import UmbigoChampagne from "./images/umbigo_champagne.JPG";
import UmbigoPink from "./images/umbigo_pink.JPG";
import UmbigoSad from "./images/umbigo_sad.JPG";
import UmbigoTrad from "./images/umbigo_trad.JPG";



const labrets = [ClusterRainbow, ClusterGrafite, ClusterGreen, Heart, Patinha, Perereca, Pineaple, Cannabis, Butterfly, Dino, Flor6zc1o, FlorOpala, GotaAmetista, PontoLuz3mm, RamoRosa, Spider, TrinityRosaBB, FlorOpala10mm];
const argolas = [ArgolaCravejadaDupla, ArgolaCravejadaFrontal, ArgolaCravejadaLateral, ArgolaCravejadaFrontalHeart, ArgolaCravejadaFrontalNavete, ArgolaCravejadaFrontalRaio, ArgolaCravejadaLateralLosango, ArgolaGota, ArgolaHalfMoon, ArgolaHeart, ArgolaPingenteLosango, ArgolaRingPvd, ArgolaTorcida, ArgolaZoro];
const septos = [ArgolaCravejadaDupla];
const umbigos = [Umbigo3zc5e, Umbigo4zc7eVerde, UmbigoAnodizadoGreen, UmbigoChampagne, UmbigoPink, UmbigoSad, UmbigoTrad];
const mamilos = [ClusterBarbel, Barbel14mm];
const nostrils = [ArgolaCravejadaDupla];
const lobulos = [ArgolaCravejadaDupla];
const rooks = [ArgolaCravejadaDupla];

export default function Home() {
  return (
    <>
      <NavbarNanda />
      <Jewelry title="Labrets" images={labrets} />
      <Jewelry title="Argolas" images={argolas} />
      <Jewelry title="Septos/Daiths" images={septos} />
      <Jewelry title="Umbigos" images={umbigos} />
      <Jewelry title="Mamilos" images={mamilos} />
      <Jewelry title="Nostrils" images={nostrils} />
      <Jewelry title="Lóbulos" images={lobulos} />
      <Jewelry title="Rooks/Supercílios" images={rooks} />
    </>
  );
}
