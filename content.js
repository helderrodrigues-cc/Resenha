const minhasFotos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGIs1N59hFBo4NQgWW2k47_wns7BqTt3cJnhL59aGJg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEkA8RRWHpfryR-aRxUyr9qsfouEJ5kzx147W8Txstg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQ0eHUgnC4pqGVNKQGPnh4MwMIg6UlbCNSSXIHHdB-g&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCVq2xKdYBYbkyXG7CNA7MPgo2eXEG_3VdjkwdlR-gA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VlxOIzaQSNLUQtUdLa1a_SCXFRppOlEdNZau4WHVCg&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrP0cVgCASLLH3NiNqSqiZwRi0xCYbOUTZS1sRxM6_0g&s=10",
  "https://arquivos.ufcg.edu.br/arquivos/20250941947d8d22472571118ed767691/Edu_trabalho_IMG_7521-1_-_Copia.jpg",
  "https://arquivos.ufcg.edu.br/arquivos/202413210366b1208941147a400980eac/FotoJoseanaMFRA_2.jpg",
  "https://arquivos.ufcg.edu.br/arquivos/20260940199e4f244657275a1a4eba0f4/ChatGPT_Image_9_de_set._de_2026_09_04_58.png",
  "https://arquivos.ufcg.edu.br/arquivos/2026182109c1b823304595853cf22224d/rohit-sem-background.png",
  "https://arquivos.ufcg.edu.br/arquivos/202508401762832187785aab5621ea3cf/FCD.png",
  "https://www.dsc.ufcg.edu.br/~pet/jornal/agosto2009/images/materias/entrevista/dalton.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjJRClVz4N5fq-5racBPPCXTASwFryhvZhYb0llrByg&s=10",
  "https://mat.ufcg.edu.br/wp-content/uploads/2019/09/Thyago_Souza_perfil_UAMat.jpg",
  "https://mat.ufcg.edu.br/ppgmat/wp-content/uploads/sites/10/2016/03/MaxwelAires.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDl9IIidezINCBotrXscFmcWcAnivjEGpkgw7bYae8w&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyfXqAXnXeywA5mkn4BFPtxvsOF9fYvgHe3PDa3nw7Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFJdNWPvGIq6FlUotFES285P0YlCEWw3pBr-I6emQlA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIFH-QN3oGOtDCToMQeyAMpo6Dgtnr62_XptyDH4jaw&s=10",
  "https://instagram.frec10-1.fna.fbcdn.net/v/t51.82787-19/722995383_18445044142190374_4229476151964794717_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=OXMKIiKVpGEQ7kNvwEaNH-y&_nc_oc=AdpBoX8bIVP_sLDzKIqj-LYCF8hTk1LhbciML-46GjB7e9SrlW5J2Mfrrq5Ln8LQaKo&_nc_zt=24&_nc_ht=instagram.frec10-1.fna&_nc_gid=p48ZIHicFJdCM5_qTvFPTQ&_nc_ss=7b6a8&oh=00_AQP2l1Gjj5tDcUzM0ndeKFJFBtRLx9Sd4i5ruBQYqLdkMg&oe=6AC2D136",
  "https://pbs.twimg.com/profile_images/2146130100/eu_400x400.jpg",
  "https://s2-g1.glbimg.com/T2WHw26WyI-_MorFBMSQytO1uLo=/0x0:1600x1067/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/z/p/EBk75eRVWcwBKJBvFvjw/foto-materia-4-arroz-maria-isabel-divulgacao.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKjn82iI3wMidKeBbZm-QTB7oR9Y8jnEdl0HpY4D_0Q&s"
];

// Mapa para guardar os dados da imagem fora do elemento
const mapa = new WeakMap();

// Normalização para comparar URLs mesmo com codificações ou protocolos diferentes
function normalizarUrl(url) {
  if (!url) return "";
  try {
    let u = decodeURIComponent(url).trim().toLowerCase();
    u = u.replace(/^https?:\/\//i, "").replace(/\/+$/, "");
    return u;
  } catch (e) {
    return String(url).toLowerCase();
  }
}

const fotosSet = new Set(minhasFotos.map(normalizarUrl));

function isMinhaFoto(url) {
  if (!url) return false;
  const norm = normalizarUrl(url);
  if (fotosSet.has(norm)) return true;
  for (const foto of fotosSet) {
    if (norm.includes(foto) || foto.includes(norm)) return true;
  }
  return false;
}

function fotoAleatoria() {
  return minhasFotos[Math.floor(Math.random() * minhasFotos.length)];
}

// Função de hash determinístico (djb2) para garantir persistência entre renderizações e SPAs
function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Extrai um identificador consistente para a imagem mesmo que o DOM seja recriado
function extrairIdentificador(img) {
  if (img.alt && img.alt.trim().length > 3) {
    return "alt:" + img.alt.trim().toLowerCase();
  }

  const dataSrc =
    img.getAttribute("data-src") ||
    img.getAttribute("data-original") ||
    img.getAttribute("data-lazy-src") ||
    img.getAttribute("data-full") ||
    img.getAttribute("data-docid") ||
    img.getAttribute("data-iid");
  if (dataSrc) {
    return "data:" + normalizarUrl(dataSrc);
  }

  const parentLink = img.closest("a");
  if (parentLink && parentLink.href && !parentLink.href.startsWith("javascript:")) {
    return "link:" + normalizarUrl(parentLink.href);
  }

  const src = img.currentSrc || img.src;
  if (src && !isMinhaFoto(src)) {
    return "src:" + normalizarUrl(src);
  }

  return "";
}

// Rastreamento da última foto clicada pelo usuário para associar a modais e previews ampliados
let ultimoCliqueFoto = null;
let ultimoCliqueTimestamp = 0;

document.addEventListener(
  "click",
  (e) => {
    const target = e.target;
    if (!target) return;
    const img =
      target.closest("img") ||
      (target.querySelector && target.querySelector("img")) ||
      (target.closest("a, button, div, [role='button']") &&
        target.closest("a, button, div, [role='button']").querySelector("img"));

    if (img) {
      const dados = mapa.get(img);
      const foto = (dados && dados.foto) || img.dataset.resenhaFoto;
      if (foto) {
        ultimoCliqueFoto = foto;
        ultimoCliqueTimestamp = Date.now();
      }
    }
  },
  true
);

// Detecta se a imagem está dentro de um modal, lightbox ou visualizador em tela cheia
function isModalOuVisualizador(img) {
  if (
    img.closest(
      'dialog, [role="dialog"], [role="alertdialog"], .modal, .lightbox, .viewer, .preview, .overlay, .popup, [class*="modal"], [class*="lightbox"], [class*="viewer"], [class*="preview"], [class*="overlay"], [class*="popup"], [class*="zoom"], [class*="fullscreen"], [id*="modal"], [id*="lightbox"], [id*="viewer"]'
    )
  ) {
    return true;
  }
  const rect = img.getBoundingClientRect();
  return rect.width > 350 && rect.height > 350;
}

// Seleciona a foto com persistência máxima
function obterFotoParaImagem(img) {
  // 1. Se o elemento já possui foto definida no dataset, mantém
  if (img.dataset.resenhaFoto) {
    return img.dataset.resenhaFoto;
  }

  // 2. Se o usuário clicou recentemente e abriu modal/lightbox, usa a foto clicada
  const tempoDesdeClique = Date.now() - ultimoCliqueTimestamp;
  if (ultimoCliqueFoto && tempoDesdeClique < 4000 && isModalOuVisualizador(img)) {
    return ultimoCliqueFoto;
  }

  // 3. Mapeamento determinístico pelo identificador da imagem original
  const id = extrairIdentificador(img);
  if (id) {
    const idx = hashString(id) % minhasFotos.length;
    return minhasFotos[idx];
  }

  // Fallback: foto aleatória
  return fotoAleatoria();
}

// Sincroniza tags <picture> e <source> para garantir funcionamento correto no Chrome e Firefox
function sincronizarPicture(img, foto) {
  const picture = img.closest("picture");
  if (picture) {
    const sources = picture.querySelectorAll("source");
    sources.forEach((source) => {
      source.srcset = foto;
      source.removeAttribute("sizes");
    });
  }
}

// Injeta estilos globais garantindo responsividade e preenchimento
function injetarEstilosResponsivos() {
  if (document.getElementById("resenha-style")) return;
  const styleEl = document.createElement("style");
  styleEl.id = "resenha-style";
  styleEl.textContent = `
    img[data-resenha="true"] {
      max-width: 100% !important;
      object-fit: fill !important;
      object-position: center !important;
      box-sizing: border-box !important;
    }
  `;
  const alvo = document.head || document.documentElement;
  if (alvo) alvo.appendChild(styleEl);
}

function aplicarTamanho(img, largura, altura) {
  // Define aspect-ratio e dimensões base mantendo responsividade
  if (largura > 0 && altura > 0) {
    img.style.setProperty("aspect-ratio", `${largura} / ${altura}`);
    img.style.setProperty("width", `${largura}px`);
    img.style.setProperty("height", `${altura}px`);
  }

  // Garante responsividade: a imagem nunca estoura a tela ou container pai
  img.style.setProperty("max-width", "100%", "important");

  // A imagem inteira ocupa a área. Pode ficar esticada, conforme solicitado.
  img.style.setProperty("object-fit", "fill", "important");
  img.style.setProperty("object-position", "center", "important");
}

function substituir(img) {
  // Já processada
  if (mapa.has(img)) {
    const dados = mapa.get(img);

    // Se o site restaurou a imagem original, coloca nossa imagem novamente
    if (img.src !== dados.foto) {
      img.removeAttribute("srcset");
      img.removeAttribute("sizes");

      img.src = dados.foto;
      sincronizarPicture(img, dados.foto);
      aplicarTamanho(img, dados.largura, dados.altura);
    }
    return;
  }

  // Se a URL já for uma das fotos
  if (isMinhaFoto(img.src)) {
    mapa.set(img, {
      largura: img.width || 0,
      altura: img.height || 0,
      foto: img.src
    });
    img.dataset.resenhaFoto = img.src;
    img.dataset.resenha = "true";
    return;
  }

  // Mede o tamanho ANTES de trocar a imagem
  const rect = img.getBoundingClientRect();

  // Se a imagem ainda está carregando ou com tamanho 0, aguarda carregar para medir com precisão
  if (rect.width <= 0 || rect.height <= 0) {
    if (!img.dataset.resenhaAguardando) {
      img.dataset.resenhaAguardando = "true";
      img.addEventListener(
        "load",
        () => {
          substituir(img);
        },
        { once: true }
      );
    }
    // Se tem largura/altura em atributos HTML ou CSS computado, tenta aproveitá-los
    const attrLargura = parseFloat(img.getAttribute("width")) || parseFloat(window.getComputedStyle(img).width) || 0;
    const attrAltura = parseFloat(img.getAttribute("height")) || parseFloat(window.getComputedStyle(img).height) || 0;
    if (attrLargura <= 0 || attrAltura <= 0) {
      return;
    }
  }

  const largura = rect.width > 0 ? rect.width : (parseFloat(img.getAttribute("width")) || 0);
  const altura = rect.height > 0 ? rect.height : (parseFloat(img.getAttribute("height")) || 0);

  const foto = obterFotoParaImagem(img);

  // Guarda os dados fora do elemento (WeakMap) e no dataset para redundância
  mapa.set(img, {
    largura: largura,
    altura: altura,
    foto: foto
  });

  img.dataset.resenhaFoto = foto;
  img.dataset.resenha = "true";

  aplicarTamanho(img, largura, altura);

  // Remove srcset/sizes
  img.removeAttribute("srcset");
  img.removeAttribute("sizes");

  // Ajusta <picture> se existir
  sincronizarPicture(img, foto);

  // Troca a imagem
  img.src = foto;
}

// Processa as imagens existentes
function processarTudo() {
  injetarEstilosResponsivos();
  document.querySelectorAll("img").forEach((img) => {
    substituir(img);
  });
}

// Inicia estilos e processamento
injetarEstilosResponsivos();
processarTudo();

// Detecta imagens que o site adiciona depois (DOM dinâmico)
const observer = new MutationObserver((mutations) => {
  let deveProcessar = false;
  for (const m of mutations) {
    if (m.type === "childList" && m.addedNodes.length > 0) {
      deveProcessar = true;
      break;
    } else if (m.type === "attributes") {
      const target = m.target;
      if (target && target.tagName === "IMG") {
        const dados = mapa.get(target);
        if (dados && target.src !== dados.foto) {
          deveProcessar = true;
          break;
        }
      }
    }
  }
  if (deveProcessar) {
    processarTudo();
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["src", "srcset"]
});

// Verificação periódica para sites altamente dinâmicos
setInterval(() => {
  processarTudo();
}, 300);

// Ajuste responsivo ao redimensionar a janela
window.addEventListener("resize", () => {
  document.querySelectorAll('img[data-resenha="true"]').forEach((img) => {
    img.style.setProperty("max-width", "100%", "important");
  });
});
