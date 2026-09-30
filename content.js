
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
  "http://mat.ufcg.edu.br/wp-content/uploads/2019/09/Thyago_Souza_perfil_UAMat.jpg",
  "https://mat.ufcg.edu.br/ppgmat/wp-content/uploads/sites/10/2016/03/MaxwelAires.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDl9IIidezINCBotrXscFmcWcAnivjEGpkgw7bYae8w&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyfXqAXnXeywA5mkn4BFPtxvsOF9fYvgHe3PDa3nw7Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFJdNWPvGIq6FlUotFES285P0YlCEWw3pBr-I6emQlA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIFH-QN3oGOtDCToMQeyAMpo6Dgtnr62_XptyDH4jaw&s=10",
  "https://instagram.frec10-1.fna.fbcdn.net/v/t51.82787-19/722995383_18445044142190374_4229476151964794717_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=OXMKIiKVpGEQ7kNvwEaNH-y&_nc_oc=AdpBoX8bIVP_sLDzKIqj-LYCF8hTk1LhbciML-46GjB7e9SrlW5J2Mfrrq5Ln8LQaKo&_nc_zt=24&_nc_ht=instagram.frec10-1.fna&_nc_gid=p48ZIHicFJdCM5_qTvFPTQ&_nc_ss=7b6a8&oh=00_AQP2l1Gjj5tDcUzM0ndeKFJFBtRLx9Sd4i5ruBQYqLdkMg&oe=6AC2D136",
  "https://pbs.twimg.com/profile_images/2146130100/eu_400x400.jpg",
  "https://s2-g1.glbimg.com/T2WHw26WyI-_MorFBMSQytO1uLo=/0x0:1600x1067/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/z/p/EBk75eRVWcwBKJBvFvjw/foto-materia-4-arroz-maria-isabel-divulgacao.jpg"
, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKjn82iI3wMidKeBbZm-QTB7oR9Y8jnEdl0HpY4D_0Q&s"

];

const mapa = new WeakMap();

function fotoAleatoria() {
  return minhasFotos[
    Math.floor(Math.random() * minhasFotos.length)
  ];
}

function substituir(img) {

  // Já processada
  if (mapa.has(img)) {
    const dados = mapa.get(img);

    // Se o site restaurou a imagem original,
    // coloca nossa imagem novamente.
    if (img.src !== dados.foto) {
      img.removeAttribute("srcset");
      img.removeAttribute("sizes");

      img.src = dados.foto;

      aplicarTamanho(img, dados.largura, dados.altura);
    }

    return;
  }

  // Mede o tamanho ANTES de trocar a imagem
  const rect = img.getBoundingClientRect();

  if (rect.width <= 0 || rect.height <= 0) {
    return;
  }

  const largura = rect.width;
  const altura = rect.height;

  const foto = fotoAleatoria();

  // Guarda os dados fora do elemento.
  // Assim, mesmo que o site altere atributos da imagem,
  // conseguimos restaurar.
  mapa.set(img, {
    largura: largura,
    altura: altura,
    foto: foto
  });

  aplicarTamanho(img, largura, altura);

  // Remove srcset/sizes
  img.removeAttribute("srcset");
  img.removeAttribute("sizes");

  // Troca a imagem
  img.src = foto;
}


function aplicarTamanho(img, largura, altura) {

  // Força exatamente o tamanho original
  img.style.setProperty(
    "width",
    `${largura}px`,
    "important"
  );

  img.style.setProperty(
    "height",
    `${altura}px`,
    "important"
  );

  // A imagem inteira ocupa a área.
  // Pode ficar esticada, conforme solicitado.
  img.style.setProperty(
    "object-fit",
    "fill",
    "important"
  );

  img.style.setProperty(
    "object-position",
    "center",
    "important"
  );

  // Impede algumas regras responsivas do site
  img.style.setProperty(
    "max-width",
    `${largura}px`,
    "important"
  );

  img.style.setProperty(
    "max-height",
    `${altura}px`,
    "important"
  );
}


// Processa as imagens existentes
function processarTudo() {
  document.querySelectorAll("img").forEach(img => {
    substituir(img);
  });
}

processarTudo();


// Detecta imagens que o site adiciona depois
const observer = new MutationObserver(() => {

  document.querySelectorAll("img").forEach(img => {
    substituir(img);
  });

});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});


// Verificação periódica.
// Alguns sites alteram src sem alterar o DOM.
setInterval(() => {

  document.querySelectorAll("img").forEach(img => {
    substituir(img);
  });

}, 300);

