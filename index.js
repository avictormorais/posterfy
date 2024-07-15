let canvas
let ctx
let altura = 3508;
let largura = 2480;
let paddingLeft = 160
let cores
let albumAtual
let menu
let inputAtual
let idioma

addEventListener("DOMContentLoaded", (event) => {
    if(!canvas){
        canvas = document.createElement('canvas')
        canvas.height = altura;
        canvas.width = largura;
        ctx = canvas.getContext('2d');
        ctx.fillStyle = '#1c202f'
        ctx.fillRect(0, 0, largura, altura)
        let CG = document.getElementById('canvasContaGotas')
        CG.width = 200
        CG.height = 200
        obterImagem()
    }
    let lan = navigator.language || navigator.userLanguage;
    console.log(lan)
    setLanguage(lan)

    var colorRange = document.querySelector('.color-range')

    function hslToHex(h, s, l) {
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
      };
      let cor = `#${f(0)}${f(8)}${f(4)}`
      document.getElementById('inputTextColor').value = cor
      document.getElementById('showColor').style.backgroundColor = cor
    }

    colorRange.addEventListener('input', function(e) {
      var hue = ((this.value/100)*360).toFixed(0)
      var hsl = "hsl("+ hue + ", 100%, 50%)"
      colorRange.style.color = hsl
      hslToHex(hue, 100, 50)
    });
    var event = new Event('input');
    colorRange.dispatchEvent(event);

    const animation = lottie.loadAnimation({
      container: document.getElementById('animSearch'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'styles/search.json'
    });

    const animation2 = lottie.loadAnimation({
      container: document.getElementById('animCreating'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'styles/paint.json'
    });

    //// atualizar poster ao algum input ser alterado
    let timeoutId;
    document.querySelectorAll('input:not(#buscaAlbum)').forEach(input => {
      input.addEventListener('input', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        atualizarCapa(albumAtual.images[0].url, false);
      }, 500);
      });
    });

    document.getElementById('inputTamanhoTitulo').value = '200'
    document.getElementById('inputTamanhoArtista').value = '110'
    document.getElementById('inputTamanhoMusica').value = '50'
    document.getElementById('inputDegrade').checked = true
    document.getElementById('inputLista').checked = false

    document.getElementById('changeLanguage').addEventListener('click', (event) => {
      if(document.getElementById('divLinguas').style.display == 'flex'){
        document.getElementById('divLinguas').style.display = 'none'
      } else{
        document.getElementById('divLinguas').style.display = 'flex'
      }
    })

    document.getElementById('atualizar').addEventListener('click', (event) => {
      atualizarCapa(albumAtual.images[0].url, false)
    })

    menu = document.querySelector("#colorPicker")
    
    document.getElementById('dismissCP').addEventListener('click', (event) => {
      menu.style.display = "none";
    }); 

    document.getElementById('confirmarCor').addEventListener('click', (event) => {
      let cor = document.getElementById('inputTextColor').value
      inputAtual.querySelector('h2').innerHTML = cor
      document.getElementById(inputAtual.dataset.display).style.backgroundColor = cor
      menu.style.display = "none";
      atualizarCapa(albumAtual.images[0].url, false)
    });

    document.getElementById('baixar').addEventListener('click', (event) => {
      let link = document.createElement('a');
      link.href = canvas.toDataURL("image/png");
      link.download = `Posterfy - ${document.getElementById('inputNome').value}.png`;
      link.click();
    })

    document.querySelectorAll('.cor').forEach(element => {
      element.addEventListener('click', (event) => {
        function rgbToHex(r, g, b) {
          const toHex = (c) => {
              const hex = c.toString(16);
              return hex.length == 1 ? "0" + hex : hex;
          };
  
          return "#" + toHex(r) + toHex(g) + toHex(b);
        }
        let rgbValues = element.style.backgroundColor
            .replace('rgb', '')
            .replace('(', '')
            .replace(')', '')
            .split(',')
            .map(value => parseInt(value.trim(), 10));
    
        let cor = rgbToHex(rgbValues[0], rgbValues[1], rgbValues[2])
        inputAtual.querySelector('h2').innerHTML = cor
        document.getElementById(inputAtual.dataset.display).style.backgroundColor = cor
        menu.style.display = "none";
      });
    });    

    document.getElementById('btnCorTexto').addEventListener('click', (event) => {
      inputAtual =  document.getElementById('btnCorTexto');
      ativarColorPicker(event);
    });

    document.getElementById('btnCorFundo').addEventListener('click', (event) => {
      inputAtual =  document.getElementById('btnCorFundo');
      ativarColorPicker(event);
    });
    
    document.getElementById('btnCor1').addEventListener('click', (event) => {
      inputAtual =  document.getElementById('btnCor1');
      ativarColorPicker(event);
    });
    
    document.getElementById('btnCor2').addEventListener('click', (event) => {
      inputAtual =  document.getElementById('btnCor2');
      ativarColorPicker(event);
    });
    
    document.getElementById('btnCor3').addEventListener('click', (event) => {
      inputAtual =  document.getElementById('btnCor3');
      ativarColorPicker(event);
    });

    document.getElementById('voltar').addEventListener('click', (event) => {
      document.getElementById('animSearch').style.display = 'flex'
      document.getElementById('displayCorTexto').style.backgroundColor = "white"
      document.getElementById('textoCorTexto').textContent = '#ffffff'
      document.getElementById('animCreating').style.display = 'none'
      document.getElementById('criandoArte').style.display = 'none'
      document.getElementById('inicioCriacao').style.display = 'flex'
      document.getElementById('divCriacao').style.display = 'none'
    });

    document.getElementById('canvasContaGotas').addEventListener('click', function(event) {
      var canvas = document.getElementById('canvasContaGotas');
      var ctx = canvas.getContext('2d');
      var x = event.clientX - canvas.getBoundingClientRect().left;
      var y = event.clientY - canvas.getBoundingClientRect().top;
      var pixel = ctx.getImageData(x, y, 1, 1).data;
      var color = rgbToHex(pixel[0], pixel[1], pixel[2]);
      inputAtual.querySelector('h2').innerHTML = color
      document.getElementById(inputAtual.dataset.display).style.backgroundColor = color
      menu.style.display = "none";
      atualizarCapa(albumAtual.images[0].url, false)
    });

    function rgbToHex(r, g, b) {
        return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }
    
    function ativarColorPicker(event) {
      menu.style.display = "block";
      event.preventDefault();
      menu.style.left = event.clientX - 125 + "px";
      menu.style.top = event.clientY - 50 + "px";
    }    

    document.getElementById('buscaAlbum').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {            
          document.querySelectorAll('.album').forEach(element => {
            element.remove()
          });
          document.getElementById('animSearch').style.display = 'flex'
          pesquisar(event.target.value)
          .then(albums => {
            document.getElementById('animSearch').style.display = 'none'
            albums.forEach(album => {
              const albumDiv = document.createElement('div');
              albumDiv.classList.add('album');
              albumDiv.dataset.id = album.id;

              const img = document.createElement('img');
              img.src = album.images[0].url;
              img.alt = '';

              const textDiv = document.createElement('div');

              const h1 = document.createElement('h1');
              h1.classList.add('nomeAlbum')
              h1.textContent = album.name;

              const h2 = document.createElement('h2');
              h2.classList.add('artista');
              h2.textContent = album.artists[0].name;

              textDiv.appendChild(h1);
              textDiv.appendChild(h2);

              albumDiv.appendChild(img);
              albumDiv.appendChild(textDiv);

              document.getElementById('gridAlbuns').appendChild(albumDiv);
              albumDiv.addEventListener('click', (event) => {

                document.querySelectorAll('.album').forEach(element => {
                  element.remove()
                });

                document.getElementById('animCreating').style.display = 'flex'
                document.getElementById('criandoArte').style.display = 'flex'

                getAlbum(event.currentTarget.dataset.id)
                .then(album => {
                  albumAtual = album
                  const artistas = album.artists.map(artist => artist.name).join(', ');
                  document.getElementById('inputArtista').value = artistas ?? '';
                  document.getElementById('inputNome').value = album.name;
                  document.getElementById('inputData').value = album.release_date;

                  function msToTime(ms) {
                    let seconds = Math.floor((ms / 1000) % 60);
                    let minutes = Math.floor((ms / (1000 * 60)) % 60);
                    let hours = Math.floor(ms / (1000 * 60 * 60));
                  
                    let result = "";
                    
                    if (hours > 0) {
                      result += hours + "h ";
                    }
                  
                    if (minutes > 0 || hours > 0) {
                      result += minutes + "m ";
                    }
                  
                    result += seconds + "s";
                  
                    return result.trim();
                  }                  

                  let totalDurationMs = 0;
                  album.tracks.items.forEach((track) => {
                    totalDurationMs += track.duration_ms;
                  });
                  totalTime = msToTime(totalDurationMs);
                  document.getElementById('inputTempo').value = totalTime;
                  
                  atualizarCapa(album.images[0].url, true)
                })
                .catch(error => console.error('Erro:', error));
              });

            });
          })
          .catch(error => console.error('Erro:', error));
        }
    });
});


function atualizarCapa(url, atualizarCores){
    let imagem = new Image();
        imagem.crossOrigin = "anonymous";
        imagem.src = url
        imagem.onload = function() {
          let CG = document.getElementById('canvasContaGotas')
          let ctxCG = CG.getContext('2d')
          ctxCG.drawImage(imagem, 0, 0, 200, 200);
          ctx.drawImage(imagem, 0, 0, largura, largura);
          const colorThief = new ColorThief();
          if(!atualizarCores){
            criarDegrade(document.getElementById('displayCorFundo').style.backgroundColor)
          } else{
            cores = colorThief.getPalette(imagem, 4, 2).map(c => `#${(1 << 24 | c[0] << 16 | c[1] << 8 | c[2]).toString(16).slice(1)}`);
            document.getElementById('displayCorFundo').style.backgroundColor = cores[0]
            document.getElementById('textoCorFundo').innerHTML = cores[0]
            document.getElementById('displayCorTexto').style.backgroundColor = cores[1]
            document.getElementById('textoCorTexto').innerHTML = cores[1]
            document.getElementById('cor1').style.backgroundColor = cores[0]
            document.getElementById('displayCor1').style.backgroundColor = cores[1]
            document.getElementById('displayCor1').style.backgroundColor = cores[1]
            document.getElementById('textoCor1').innerHTML = cores[1]
            document.getElementById('cor2').style.backgroundColor = cores[1]
            document.getElementById('displayCor2').style.backgroundColor = cores[2]
            document.getElementById('textoCor2').innerHTML = cores[2]
            document.getElementById('cor3').style.backgroundColor = cores[2]
            document.getElementById('displayCor3').style.backgroundColor = cores[3]
            document.getElementById('textoCor3').innerHTML = cores[3]
            document.getElementById('cor4').style.backgroundColor = cores[3]  
            document.getElementById('corBranco').style.backgroundColor = '#ffffff'
            document.getElementById('corPreto').style.backgroundColor = '#000000' 
            criarDegrade(document.getElementById('displayCorFundo').style.backgroundColor)
          }
        };
}

function criarDegrade(cor){
  ctx.fillStyle = cor
  ctx.fillRect(0, 2450, largura, altura)
  if(document.getElementById('inputDegrade').checked){
    let degradeLinearVertical = ctx.createLinearGradient(0, 0, 0, 3000);
    degradeLinearVertical.addColorStop(0.6, 'rgba(28, 32, 47, 0)');
    degradeLinearVertical.addColorStop(0.8, cor);
    ctx.fillStyle = degradeLinearVertical;
    ctx.fillRect(0, 0, canvas.width, 2500);
  }
  escreverCanvas(document.getElementById('inputNome').value, document.getElementById('inputArtista').value, albumAtual.tracks.items, document.getElementById('inputData').value, document.getElementById('inputTempo').value)
}

function escreverCanvas(titulo, artista, musicas, lançamento, runtime){
  let marginTitle = 0
  if(document.getElementById('inputMarginTitle').value){
    marginTitle = parseInt(document.getElementById('inputMarginTitle').value)
  }
  if(document.getElementById('inputTamanhoTitulo').value == ''){
    ctx.font = 'bold 230px Montserrat';
  } else{
    ctx.font = `bold ${document.getElementById('inputTamanhoTitulo').value}px Montserrat`;
  }
  ctx.fillStyle = document.getElementById('textoCorTexto').innerHTML;
  if(document.getElementById('inputLista').checked){
    ctx.fillText(titulo, paddingLeft, 2500 + marginTitle);
  } else{
    ctx.fillText(titulo, paddingLeft, 2790 + marginTitle);
  }
  if(document.getElementById('inputTamanhoArtista').value == ''){
    ctx.font = `bold 110px Montserrat`;
  } else{
    ctx.font = `bold ${document.getElementById('inputTamanhoArtista').value}px Montserrat`;
  }
  if(document.getElementById('inputLista').checked){
    if(document.getElementById('inputTamanhoArtista').value){
      ctx.fillText(artista, paddingLeft+10, (2500 + marginTitle) + (document.getElementById('inputTamanhoArtista').value * 1.3));
    } else{
      ctx.fillText(artista, paddingLeft+10, (2500 + marginTitle) + (110 * 1.2));
    }
  } else{
    if(document.getElementById('inputTamanhoArtista').value){
      ctx.fillText(artista, paddingLeft+10, (2820 + marginTitle) + parseInt(document.getElementById('inputTamanhoArtista').value));
    } else{
      ctx.fillText(artista, paddingLeft+10, (2820 + marginTitle) + 110);
    }
  }

  if(document.getElementById('inputLista').checked){
    let alturaMusica = 150
    if(document.getElementById('inputTamanhoArtista').value){
      if(artista == ''){
        alturaMusica += (2500 + marginTitle);
      } else{
        alturaMusica += (2500 + marginTitle) + parseInt(document.getElementById('inputTamanhoArtista').value);
      }
    } else{
      alturaMusica += (2500 + marginTitle) + 110;
    }
    let paddingMusica = paddingLeft + 10
    let maiorLargura = 0
    let numMus = 0
    let paddingColuna = 0
    let tamanhoMusica
    if(!document.getElementById('inputTamanhoMusica').value){
      ctx.font = `bold 50px Montserrat`;
      tamanhoMusica = 50
    } else{
      ctx.font = `bold ${document.getElementById('inputTamanhoMusica').value}px Montserrat`;
      tamanhoMusica = document.getElementById('inputTamanhoMusica').value
    }
    musicas.forEach(musica => {
      musica.name = musica.name.split(' (')[0]
      numMus += 1
      if(alturaMusica >= 3200){
        numMus = 1
        alturaMusica = 150
        if(document.getElementById('inputTamanhoArtista').value){
          if(artista == ''){
            alturaMusica += (2500 + marginTitle);
          } else{
            alturaMusica += (2500 + marginTitle) + parseInt(document.getElementById('inputTamanhoArtista').value);
          }
        } else{
          alturaMusica += (2500 + marginTitle) + 110;
        }
        paddingMusica = maiorLargura + (tamanhoMusica * 2.5) + paddingColuna
        paddingColuna = paddingMusica - (tamanhoMusica * 2.5)
        maiorLargura = 0
      } else{
        let tam = ctx.measureText(musica.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')).width + paddingLeft
        if(tam > maiorLargura){
          maiorLargura = tam
        }
      }
      ctx.fillText(`${musica.track_number}. ${musica.name}`, paddingMusica, alturaMusica);
      alturaMusica += (tamanhoMusica * 1.3)
    });
  }

  ctx.font = `bold 70px Montserrat`;
  ctx.fillText(document.getElementById('placeDataLancamento').value, paddingLeft, 3310);
  let tamPlaceData = ctx.measureText(document.getElementById('placeDataLancamento').value).width
  ctx.fillText(document.getElementById('placeTempo').value, tamPlaceData + paddingLeft + 150, 3310);

  ctx.globalAlpha = '0.7';
  ctx.font = `bold 60px Montserrat`;
  ctx.fillText(runtime, tamPlaceData + paddingLeft + 150, 3390);
  ctx.fillText(lançamento, paddingLeft, 3390);
  ctx.globalAlpha = '1';

  ctx.fillStyle = document.getElementById('textoCor1').innerHTML;
  ctx.fillRect(2045 - paddingLeft, 3368, 145, 30)
  ctx.fillStyle = document.getElementById('textoCor2').innerHTML;
  ctx.fillRect(2190 - paddingLeft, 3368, 145, 30)
  ctx.fillStyle = document.getElementById('textoCor3').innerHTML;
  ctx.fillRect(2335 - paddingLeft, 3368, 145, 30)
  document.getElementById('divCriacao').style.display = 'flex' 
  document.getElementById('inicioCriacao').style.display = 'none'
  obterImagem();
  scannable()
}

function scannable(){
  let imagem = new Image();
      imagem.crossOrigin = "anonymous";
      if(document.getElementById('textoCorFundo').innerHTML == "#ffffff"){
        imagem.src = `https://scannables.scdn.co/uri/plain/jpeg/${document.getElementById('textoCorFundo').innerHTML.replace('#','')}/black/640/${albumAtual.uri}`
      } else{
        imagem.src = `https://scannables.scdn.co/uri/plain/jpeg/${document.getElementById('textoCorFundo').innerHTML.replace('#','')}/white/640/${albumAtual.uri}`
      }
      imagem.onload = function() {
          ctx.drawImage(imagem, 2020 - paddingLeft, 3235, 480, 120);
          obterImagem();
      };
}

function obterImagem() {
    const imagemDataURI = canvas.toDataURL('image/png');
    document.getElementById('imgPreview').src = imagemDataURI
}

async function pesquisar(busca) {
    const c = 'f4cecfcee6bb4476a132ecef4b321cde', s = 'eca60833bc674b718879e122402968fc';
  
    async function t() {
      const r = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + btoa(c + ':' + s)},
        body: 'grant_type=client_credentials',
      });
      return (await r.json()).access_token;
    }
  
    async function a(q, token) {
      const r = await fetch(`https://api.spotify.com/v1/search?q=${q}&type=album`, {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + token},
      });
      return (await r.json()).albums.items;
    }
  
    try {
      const token = await t();
      return await a(busca, token);
    } catch (e) {
      console.error('Erro:', e);
      throw e;
    }
}
  
async function getAlbum(albumId) {
  const clientId = 'f4cecfcee6bb4476a132ecef4b321cde';
  const clientSecret = 'eca60833bc674b718879e122402968fc';

  async function obterToken() {
      const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials',
      });
      return (await response.json()).access_token;
  }

  async function obterDetalhesAlbum(albumId, token) {
      const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer ' + token
          },
      });
      return await response.json();
  }

  try {
      const token = await obterToken();
      return await obterDetalhesAlbum(albumId, token);
  } catch (erro) {
      console.error('Erro:', erro);
      throw erro;
  }
}

function setLanguage(lan){
  fetch('strings.json')
  .then(response => response.json())
  .then(textos => {
      if (textos[lan]) {
        idioma = textos[lan]
      } else{
        idioma = textos['en']
      }
      document.getElementById('title').firstChild.textContent  = idioma['title']
      document.getElementById('instrucao').textContent  = idioma['tip']
      document.getElementById('criandoArte').firstChild.textContent  = idioma['creating']
      document.getElementById('Ajuste').textContent  = idioma['adjust']
      document.getElementById('titleAlbumName').textContent  = idioma['titleName']
      document.getElementById('titleArtistName').textContent  = idioma['titleArtist']
      document.getElementById('titleTitleSize').textContent  = idioma['titleSizeT']
      document.getElementById('TitleAS').textContent  = idioma['titleSizeA']
      document.getElementById('TitleBC').textContent  = idioma['titleColorBackground']
      document.getElementById('titleTC').textContent  = idioma['titleColorText']
      document.getElementById('titleCor1').textContent  = idioma['titleColor1']
      document.getElementById('titleCor2').textContent  = idioma['titleColor2']
      document.getElementById('titleCor3').textContent  = idioma['titleColor3']
      document.getElementById('titleDelete').textContent  = idioma['btnDelete']
      document.getElementById('titleApply').textContent  = idioma['TitleApply']
      document.getElementById('placeDataLancamento').value = idioma['titleDate']
      document.getElementById('placeTempo').value = idioma['titleTime']
      document.getElementById('inputTextColor').placeholder = idioma['colorSelector']
      document.getElementById('made').firstChild.textContent  = idioma['madeBy']
      document.getElementById('na').textContent = idioma['nA']
      document.getElementById('buscaAlbum').placeholder = idioma['input']
      document.getElementById('titleDegrade').textContent  = idioma['titleFade']
      document.getElementById('labelFade').textContent  = idioma['labelFade']
      document.getElementById('titleLista').textContent  = idioma['titleTacklist']
      document.getElementById('labelTracklist').textContent  = idioma['labelTracklist']
      document.getElementById('musicSize').textContent  = idioma['musicSize']
      document.getElementById('welcome').firstChild.textContent  = idioma['welcomeMsg']
      document.getElementById('welcomeSpan').textContent  = idioma['welcomeSpan']
      document.getElementById('titleMarginTop').textContent  = idioma['titleMarginTop']
      document.getElementById('sobreTitulo').textContent  = idioma['aboutTitle']
      document.getElementById('sobreP1').textContent  = idioma['aboutP1']
      document.getElementById('sobreP2').firstChild.textContent  = idioma['aboutP2']

      if(lan == "pt-BR"){
        document.getElementById('bandeira').setAttribute('src', "styles/br.svg");
        document.getElementById('nameLanguage').innerText = 'PT-BR'
      } if(lan == 'es'){
        document.getElementById('bandeira').setAttribute('src', "styles/es.svg");
        document.getElementById('nameLanguage').innerText = 'ES-ES'
      } if(lan == 'en'){
        document.getElementById('bandeira').setAttribute('src', "styles/us.svg");
        document.getElementById('nameLanguage').innerText = 'EN-US'
      }
      document.getElementById('divLinguas').style.display = 'none'
    })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
}

  document.querySelectorAll('.Lyrics__Container-sc-1ynbvzw-1.kUgSbL').forEach(e => {
    console.log( e.children[0])
  })