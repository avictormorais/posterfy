let canvas
let ctx
let altura = 3508;
let largura = 2480;
let cores
let album

addEventListener("DOMContentLoaded", (event) => {
    if(!canvas){
        canvas = document.createElement('canvas')
        canvas.height = altura;
        canvas.width = largura;
        ctx = canvas.getContext('2d');
        ctx.fillStyle = '#1c202f'
        ctx.fillRect(0, 0, largura, altura)
        obterImagem()
    }

    const animation = lottie.loadAnimation({
      container: document.getElementById('animSearch'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'search.json'
    });

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

                const animation = lottie.loadAnimation({
                  container: document.getElementById('animCreating'),
                  renderer: 'svg',
                  loop: true,
                  autoplay: true,
                  path: 'paint.json'
                });
                document.getElementById('animCreating').style.display = 'flex'
                document.getElementById('criandoArte').style.display = 'flex'

                getAlbum(event.currentTarget.dataset.id)
                .then(album => {
                  console.log(album)
                })
                .catch(error => console.error('Erro:', error));
              });

            });
          })
          .catch(error => console.error('Erro:', error));
        }
    });
});


function atualizarCapa(url){
    let imagem = new Image();
        imagem.crossOrigin = "anonymous";
        imagem.src = url
        imagem.onload = function() {
            ctx.drawImage(imagem, 0, 0, largura, largura);
            const colorThief = new ColorThief();
            cores = colorThief.getPalette(imagem, 4, 2);
            criarDegrade(`rgba(${cores[0]}, 1)`)
        };
}

function criarDegrade(cor){
    let degradeLinearVertical = ctx.createLinearGradient(0, 0, 0, 3000);
    degradeLinearVertical.addColorStop(0.6, 'rgba(28, 32, 47, 0)');
    degradeLinearVertical.addColorStop(0.8, cor);
    ctx.fillStyle = degradeLinearVertical;
    ctx.fillRect(0, 0, canvas.width, 2500);
    ctx.fillStyle = cor
    ctx.fillRect(0, 2500, largura, altura)
    escreverCanvas(album.name, album.artists[0].name, '', album.release_date, album.total_tracks)
}

function escreverCanvas(titulo, artista, musicas, lançamento, runtime){
    ctx.font = `230px Montserrat bold`;
    ctx.fillStyle = 'white';
    ctx.fillText(titulo, 200, 2200);
    ctx.font = `110px Montserrat bold`;
    ctx.fillText(artista, 210, 2370);

    ctx.font = `80px Montserrat bold`;
    ctx.fillText('Release date', 200, 3250);
    ctx.fillText('Album lenght', 900, 3250);

    ctx.globalAlpha = '0.7';
    ctx.font = `70px Montserrat bold`;
    ctx.fillText(runtime, 900, 3350);
    ctx.fillText(lançamento, 200, 3350);
    ctx.globalAlpha = '1';

    ctx.fillStyle = `rgba(${cores[1]}, 1)`;
    ctx.fillRect(1900, 3310, 130, 50)
    ctx.fillStyle = `rgba(${cores[2]}, 1)`;
    ctx.fillRect(2040, 3310, 130, 50)
    ctx.fillStyle = `rgba(${cores[3]}, 1)`;
    ctx.fillRect(2180, 3310, 130, 50)
    obterImagem();
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
