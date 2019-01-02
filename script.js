var values = {
  A: {
    answer: 'singe',
    text: 'On ne m\'apprend pas à faire des grimaces',
  },
  B: {
    answer: 'tournesol',
    text: 'Je suis celui qui m\'éclaire',
  },
  C: {
    answer: 'lavande',
    text: 'Mon premier est une note de musique\n Mon second est une source d\'énergie\n Mon troisième est un chiffre\n Mon tout est une plante cousine de la menthe',
  },
  D: {
    answer: 'bambou',
    text: 'Je suis comestible, je suis plus dur que l\'acier et j\'ai aidé Thomas Edison à inventer la lampe à filament',
  },
  E: {
    answer: 'fraise',
    text: 'Je suis le premier fruit à sortir au printemps, parce que personne n\'a envie d\'attendre pour me déguster',
  },
  F: {
    answer: 'romarin',
    text: 'Mon origine latine veut dire rosée de la mer',
  },
  G: {
    answer: 'capucine',
    text: 'La forme de mes feuilles et de mes fleurs ressemble aux boucliers et aux casques des soldats de l\'Antiquité. Mon éperon nectarifère a la forme d\'une coiffe pointue portée par des moines',
  },
  H: {
    answer: 'edelweiss',
    text: 'On me surnomme pied-de-lion, Gnaphale à pied de lion, étoile d\'argent ou encore étoile des glaciers',
  },
};
var hash = window.location.hash.substring(1);
var value = values[hash] || {};

var fails = [
  'https://media.giphy.com/media/9DeFJdCCSryecYYts2/giphy.gif',
  'https://media.giphy.com/media/cS83sLRzgVOeY/giphy.gif',
  'https://media.giphy.com/media/RDuF5FVTSyzy8/giphy.gif',
  'https://media.giphy.com/media/3oxRmGNqKwCzJ0AwPC/giphy.gif',
  'https://media.giphy.com/media/EimNpKJpihLY4/giphy.gif',
  'https://media.giphy.com/media/24bc6h4Mo05pG4XqaU/giphy.gif',
  'https://media.giphy.com/media/l41lSh8C2E39fzuta/giphy.gif',
  'https://media.giphy.com/media/xTiTncVep2khPGhK1i/giphy.gif',
  'https://media.giphy.com/media/N35rW3vRNeaDC/giphy.gif',
  'https://media.giphy.com/media/3oGRFvUEbJdLWlawLu/giphy.gif',
  'https://media.giphy.com/media/lAZ6fhepvAUec/giphy.gif',
  'https://media.giphy.com/media/13m2KN5OWxBTqM/giphy.gif',
  'https://media.giphy.com/media/EizPK3InQbrNK/giphy.gif',
  'https://media.giphy.com/media/14pKVNqXY40EVi/giphy.gif',
  'https://media.giphy.com/media/li0dswKqIZNpm/giphy.gif',
  'https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif',
  'https://media.giphy.com/media/l4KhTSWTlozX3flvi/giphy.gif',
  'https://media.giphy.com/media/3oKIP8quIMUnLdfTAQ/giphy.gif',
  'https://media.giphy.com/media/11SJ52YouBaDFS/giphy.gif',
  'https://media.giphy.com/media/l4pLY0zySvluEvr0c/giphy.gif',
  'https://media.giphy.com/media/l1IY5J4Cfw8JLi40M/giphy.gif',
  'https://media.giphy.com/media/EouEzI5bBR8uk/giphy.gif',
  'https://media.giphy.com/media/8HqjtoyKrnfJC/giphy.gif',
  'https://media.giphy.com/media/Pmz14X92nAic/giphy.gif',
  'https://media.giphy.com/media/a4Lbjyr4HidH2/giphy.gif',
  'https://media.giphy.com/media/l2JhLaxhWba6OivE4/giphy.gif',
  'https://media.giphy.com/media/l0OXWXUHdp4K9nitq/giphy.gif',
  'https://media.giphy.com/media/fLyfhjZr9g47fTJMuk/giphy.gif',
  'https://media.giphy.com/media/3o6Mb43PiNTQS5WgLu/giphy.gif',
  'https://media.giphy.com/media/1xH5CTi3BBBM4/giphy.gif',
  'https://media.giphy.com/media/3ktKhFjx1RY30hdSDe/giphy.gif',
  'https://media.giphy.com/media/3ohs7KZJV9es5MIIKI/giphy.gif',
  'https://media.giphy.com/media/OqAeQrGmU7lS6tENnQ/giphy.gif',
  'https://media.giphy.com/media/xT4ApznCZTtuBjmHHa/giphy.gif',
  'https://media.giphy.com/media/ghdgOnpeQiWTm/giphy.gif',
  'https://media.giphy.com/media/7pV1DcmORi6Zy/giphy.gif',
  'https://media.giphy.com/media/2fC4V2UeJveb6/giphy.gif',
  'https://media.giphy.com/media/gnE4FFhtFoLKM/giphy.gif',
  'https://media.giphy.com/media/XQvhpuryrPGnK/giphy.gif',
  'https://media.giphy.com/media/cEYFeDKVPTmRgIG9fmo/giphy.gif',
  'https://media.giphy.com/media/cr9vIO7NsP5cY/giphy.gif',
  'https://media.giphy.com/media/xTiQyqTVSJfqp8Uvss/giphy.gif',
  'https://media.giphy.com/media/3oFzmko6SiknmpR2NO/giphy.gif',
  'https://media.giphy.com/media/EndO2bvE3adMc/giphy.gif',
  'https://media.giphy.com/media/l2Jeb9N7yBOlDyQik/giphy.gif',
  'https://media.giphy.com/media/3o84sv2u7KSHKbwPza/giphy.gif',
  'https://media.giphy.com/media/3Gm1b4jlbBDiNPlJMU/giphy.gif',
  'https://media.giphy.com/media/5UKCYVAaYUPcFreMPI/giphy.gif',
  'https://media.giphy.com/media/PijznUhLmW56mJqfe6/giphy.gif',
  'https://media.giphy.com/media/xUOxeWlnnN4ZpamMOk/giphy.gif',
];

const success = [
  'https://media.giphy.com/media/l2Sq9mzrjHG39i0i4/giphy.gif',
  'https://media.giphy.com/media/Yb3d5B1zwuhCo/giphy.gif',
  'https://media.giphy.com/media/4xpB3eE00FfBm/giphy.gif',
  'https://media.giphy.com/media/l3q2Z6S6n38zjPswo/giphy.gif',
  'https://media.giphy.com/media/2vA33ikUb0Qz6/giphy.gif',
  'https://media.giphy.com/media/zaqclXyLz3Uoo/giphy.gif',
  'https://media.giphy.com/media/111ebonMs90YLu/giphy.gif',
  'https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif',
  'https://media.giphy.com/media/KEVNWkmWm6dm8/giphy.gif',
  'https://media.giphy.com/media/11Feog5PTumNnq/giphy.gif',
  'https://media.giphy.com/media/vtVpHbnPi9TLa/giphy.gif',
  'https://media.giphy.com/media/3o7TKtsBMu4xzIV808/giphy.gif',
  'https://media.giphy.com/media/SHXEmoumrb23C/giphy.gif',
  'https://media.giphy.com/media/s2qXK8wAvkHTO/giphy.gif',
  'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
  'https://media.giphy.com/media/YTbZzCkRQCEJa/giphy.gif',
  'https://media.giphy.com/media/d86kftzaeizO8/giphy.gif',
  'https://media.giphy.com/media/aurUBBayxC55m/giphy.gif',
  'https://media.giphy.com/media/a0Lgc1JvbfS4o/giphy.gif',
  'https://media.giphy.com/media/l9Tllo1thElT5gvVOU/giphy.gif',
  'https://media.giphy.com/media/F9DzQnxx6ZZNm/giphy.gif',
  'https://media.giphy.com/media/G22vVm4jcPeco/giphy.gif',
  'https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif',
  'https://media.giphy.com/media/9w475hDWEPVlu/giphy.gif',
  'https://media.giphy.com/media/3o7qDSOvfaCO9b3MlO/giphy.gif',
  'https://media.giphy.com/media/K3RxMSrERT8iI/giphy.gif',
]


/* DOM Ready and events function */
$(document).ready(function() {
  console.log('ready', value);
  $('#text').html(value.text);
  
  $('#submit').click(function(e) {
    e.preventDefault();
    var answer = $('input').val();

    if(answer.toLowerCase() === value.answer) {
      var successNumber = Math.floor(Math.random() * success.length);
      $('#text').html('<img src="'+ success[successNumber] + '">');
      $('#input').css('border-color', '#1ac11a');
    } else {
      var failNumber = Math.floor(Math.random() * fails.length);
      $('#text').html('<img src="'+ fails[failNumber] + '">');
      $('#input').css('border-color', '#a70000');
    }
  });
});