// Lista com os links das SUAS fotos da internet
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
  "https://static.wixstatic.com/media/e72f7c_4419e226413f41b38935670b34087c48~mv2_d_1200_1600_s_2.png/v1/fill/w_250,h_333,al_c,q_95,enc_auto/e72f7c_4419e226413f41b38935670b34087c48~mv2_d_1200_1600_s_2.png"
 ];

function substituirImagens() {
  const imagens = document.getElementsByTagName("img");
  for (let img of imagens) {
    // Escolhe uma foto aleatória da sua lista
    const fotoAleatoria = minhasFotos[Math.floor(Math.random() * minhasFotos.length)];
    
    // Evita substituir se já for uma das suas fotos
    if (!minhasFotos.includes(img.src)) {
      img.src = fotoAleatoria;
      img.srcset = ""; // Limpa formatos alternativos de imagem
    }
  }
}

// Executa a função quando a página carregar e a cada 2 segundos (para sites dinâmicos)
substituirImagens();
setInterval(substituirImagens, 2000);
